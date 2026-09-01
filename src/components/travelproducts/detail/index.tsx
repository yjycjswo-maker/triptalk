"use client";

import Image from "next/image";
import { useState } from "react";
import OpenStreetMap from "@/components/ui/open-street-map";
import styles from "./styles.module.css";

interface Reply {
  id: number;
  content: string;
  date: string;
  replies: Reply[];
}

interface Inquiry {
  id: number;
  content: string;
  date: string;
  replies: Reply[];
}

type ReplyTarget = {
  inquiryId: number;
  replyPath: number[];
  parentReplyId?: number;
};

type ReplyEditTarget = {
  inquiryId: number;
  replyPath: number[];
  replyId?: number;
  nestedReplyId?: number;
};

interface StayDetailProps {
  title: string;
  subtitle: string;
  tags: string[];
  photoCount: number;
  images: string[];
  price: string;
  purchaseNotes: string[];
  seller: { name: string; avatar: string };
  description: string[];
  address: string;
  coordinates: { latitude: number; longitude: number };
}

function formatToday() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}.${m}.${d}`;
}

function addReplyAtPath(replies: Reply[], path: number[], newReply: Reply): Reply[] {
  const [replyId, ...remainingPath] = path;

  return replies.map((reply) =>
    reply.id !== replyId
      ? reply
      : remainingPath.length === 0
        ? { ...reply, replies: [...reply.replies, newReply] }
        : {
            ...reply,
            replies: addReplyAtPath(reply.replies, remainingPath, newReply),
          },
  );
}

function updateReplyAtPath(replies: Reply[], path: number[], content: string): Reply[] {
  const [replyId, ...remainingPath] = path;

  return replies.map((reply) =>
    reply.id !== replyId
      ? reply
      : remainingPath.length === 0
        ? { ...reply, content }
        : {
            ...reply,
            replies: updateReplyAtPath(reply.replies, remainingPath, content),
          },
  );
}

function deleteReplyAtPath(replies: Reply[], path: number[]): Reply[] {
  const [replyId, ...remainingPath] = path;

  if (remainingPath.length === 0) {
    return replies.filter((reply) => reply.id !== replyId);
  }

  return replies.map((reply) =>
    reply.id === replyId
      ? {
          ...reply,
          replies: deleteReplyAtPath(reply.replies, remainingPath),
        }
      : reply,
  );
}

type ReplyEditorProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onCancel: () => void;
  onSubmit: (event: React.FormEvent) => void;
};

function ReplyEditor({ label, value, onChange, onCancel, onSubmit }: ReplyEditorProps) {
  return (
    <form className={styles.replyForm} onSubmit={onSubmit}>
      <div className={styles.textareaWrap}>
        <textarea
          aria-label={label}
          placeholder="답변할 내용을 입력해 주세요."
          maxLength={100}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
        <span className={styles.charCount}>{value.length}/100</span>
      </div>
      <div className={styles.editActionRow}>
        <button type="button" className={styles.cancelButton} onClick={onCancel}>
          취소
        </button>
        <button type="submit" className={styles.submitButton} disabled={!value.trim()}>
          {label}
        </button>
      </div>
    </form>
  );
}

type ReplyListProps = {
  replies: Reply[];
  inquiryId: number;
  parentPath?: number[];
  nested?: boolean;
  replyingTarget: ReplyTarget | null;
  replyText: string;
  editingTarget: ReplyEditTarget | null;
  editingText: string;
  onStartReply: (inquiryId: number, path: number[]) => void;
  onChangeReplyText: (value: string) => void;
  onCancelReply: () => void;
  onSubmitReply: (event: React.FormEvent) => void;
  onStartEdit: (inquiryId: number, path: number[], content: string) => void;
  onChangeEditText: (value: string) => void;
  onCancelEdit: () => void;
  onSubmitEdit: (event: React.FormEvent) => void;
  onDelete: (inquiryId: number, path: number[]) => void;
};

function ReplyList({
  replies,
  inquiryId,
  parentPath = [],
  nested = false,
  replyingTarget,
  replyText,
  editingTarget,
  editingText,
  onStartReply,
  onChangeReplyText,
  onCancelReply,
  onSubmitReply,
  onStartEdit,
  onChangeEditText,
  onCancelEdit,
  onSubmitEdit,
  onDelete,
}: ReplyListProps) {
  return (
    <div className={nested ? styles.nestedReplyList : styles.replyList}>
      {replies.map((reply) => {
        const replyPath = [...parentPath, reply.id];
        const isEditing =
          editingTarget?.inquiryId === inquiryId &&
          editingTarget.replyPath.join(",") === replyPath.join(",");
        const isReplying =
          replyingTarget?.inquiryId === inquiryId &&
          replyingTarget.replyPath.join(",") === replyPath.join(",");

        return (
          <div key={reply.id} className={styles.replyItem}>
            <span className={styles.replyArrow} aria-hidden>↳</span>
            <div>
              {isEditing ? (
                <ReplyEditor
                  label="수정 하기"
                  value={editingText}
                  onChange={onChangeEditText}
                  onCancel={onCancelEdit}
                  onSubmit={onSubmitEdit}
                />
              ) : (
                <>
                  <p className={styles.replyAuthor}>답변</p>
                  <p className={styles.replyContent}>{reply.content}</p>
                  <span className={styles.inquiryItemDate}>{reply.date}</span>
                  <div className={styles.replyActions}>
                    <button
                      type="button"
                      className={styles.inquiryEditButton}
                      onClick={() => onStartEdit(inquiryId, replyPath, reply.content)}
                    >수정</button>
                    <button
                      type="button"
                      className={styles.inquiryDeleteButton}
                      onClick={() => onDelete(inquiryId, replyPath)}
                    >삭제</button>
                  </div>
                  <button
                    type="button"
                    className={styles.replyButton}
                    onClick={() => onStartReply(inquiryId, replyPath)}
                  >
                    <Image src="/icon/shape/outline/reply.svg" alt="" width={18} height={18} />
                    답변 하기
                  </button>
                </>
              )}

              {reply.replies.length > 0 && (
                <ReplyList
                  {...{
                    replies: reply.replies,
                    inquiryId,
                    parentPath: replyPath,
                    nested: true,
                    replyingTarget,
                    replyText,
                    editingTarget,
                    editingText,
                    onStartReply,
                    onChangeReplyText,
                    onCancelReply,
                    onSubmitReply,
                    onStartEdit,
                    onChangeEditText,
                    onCancelEdit,
                    onSubmitEdit,
                    onDelete,
                  }}
                />
              )}

              {isReplying && (
                <ReplyEditor
                  label="답변 하기"
                  value={replyText}
                  onChange={onChangeReplyText}
                  onCancel={onCancelReply}
                  onSubmit={onSubmitReply}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function StayDetail({
  title,
  subtitle,
  tags,
  photoCount,
  images,
  price,
  purchaseNotes,
  seller,
  description,
  address,
  coordinates,
}: StayDetailProps) {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [inquiryText, setInquiryText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingInquiryId, setEditingInquiryId] = useState<number | null>(null);
  const [editingInquiryText, setEditingInquiryText] = useState("");
  const [replyingTarget, setReplyingTarget] = useState<ReplyTarget | null>(null);
  const [replyText, setReplyText] = useState("");
  const [editingReplyTarget, setEditingReplyTarget] =
    useState<ReplyEditTarget | null>(null);
  const [editingReplyText, setEditingReplyText] = useState("");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0);

  const canSubmit = Boolean(inquiryText.trim()) && !isSubmitting;

  const handleSubmitInquiry = (event: React.FormEvent) => {
    event.preventDefault();
    if (!canSubmit) return;

    setIsSubmitting(true);
    const newInquiry: Inquiry = {
      id: Date.now(),
      content: inquiryText.trim(),
      date: formatToday(),
      replies: [],
    };
    setInquiries((prev) => [newInquiry, ...prev]);
    setInquiryText("");
    setIsSubmitting(false);
  };

  const handleDeleteInquiry = (id: number) => {
    setInquiries((prev) => prev.filter((i) => i.id !== id));
  };

  const handleStartEditInquiry = (inquiry: Inquiry) => {
    setEditingInquiryId(inquiry.id);
    setEditingInquiryText(inquiry.content);
  };

  const handleCancelEditInquiry = () => {
    setEditingInquiryId(null);
    setEditingInquiryText("");
  };

  const handleSaveEditInquiry = (event: React.FormEvent, id: number) => {
    event.preventDefault();
    const content = editingInquiryText.trim();

    if (!content) return;

    setInquiries((prev) =>
      prev.map((inquiry) =>
        inquiry.id === id ? { ...inquiry, content } : inquiry,
      ),
    );
    handleCancelEditInquiry();
  };

  const handleStartReply = (inquiryId: number, replyPath: number[] | number = []) => {
    setReplyingTarget({
      inquiryId,
      replyPath: Array.isArray(replyPath) ? replyPath : [replyPath],
    });
    setReplyText("");
  };

  const handleCancelReply = () => {
    setReplyingTarget(null);
    setReplyText("");
  };

  const handleSubmitReply = (event: React.FormEvent) => {
    event.preventDefault();
    const content = replyText.trim();

    if (!content || !replyingTarget) return;

    const reply: Reply = {
      id: Date.now(),
      content,
      date: formatToday(),
      replies: [],
    };

    setInquiries((prev) =>
      prev.map((inquiry) =>
        inquiry.id !== replyingTarget.inquiryId
          ? inquiry
          : replyingTarget.replyPath.length === 0
            ? { ...inquiry, replies: [...inquiry.replies, reply] }
            : {
                ...inquiry,
                replies: addReplyAtPath(
                  inquiry.replies,
                  replyingTarget.replyPath,
                  reply,
                ),
              },
      ),
    );
    handleCancelReply();
  };

  const handleStartEditReply = (
    inquiryId: number,
    replyPath: number[] | number,
    content: string,
    nestedReplyId?: number,
  ) => {
    const normalizedPath = Array.isArray(replyPath)
      ? replyPath
      : nestedReplyId === undefined
        ? [replyPath]
        : [replyPath, nestedReplyId];
    setEditingReplyTarget({ inquiryId, replyPath: normalizedPath });
    setEditingReplyText(content);
  };

  const handleCancelEditReply = () => {
    setEditingReplyTarget(null);
    setEditingReplyText("");
  };

  const handleSaveEditReply = (event: React.FormEvent) => {
    event.preventDefault();
    const content = editingReplyText.trim();

    if (!content || !editingReplyTarget) return;

    setInquiries((prev) =>
      prev.map((inquiry) => {
        if (inquiry.id !== editingReplyTarget.inquiryId) return inquiry;

        return {
          ...inquiry,
          replies: updateReplyAtPath(
            inquiry.replies,
            editingReplyTarget.replyPath,
            content,
          ),
        };
      }),
    );
    handleCancelEditReply();
  };

  const handleDeleteReply = (
    inquiryId: number,
    replyPath: number[] | number,
    nestedReplyId?: number,
  ) => {
    const normalizedPath = Array.isArray(replyPath)
      ? replyPath
      : nestedReplyId === undefined
        ? [replyPath]
        : [replyPath, nestedReplyId];
    setInquiries((prev) =>
      prev.map((inquiry) => {
        if (inquiry.id !== inquiryId) return inquiry;

        return {
          ...inquiry,
          replies: deleteReplyAtPath(inquiry.replies, normalizedPath),
        };
      }),
    );
  };

  const mainImage = images[selectedImageIndex];
  const thumbnails = Array.from(
    { length: images.length + 1 },
    (_, index) => images[(thumbnailStartIndex + index) % images.length],
  );

  const handleThumbnailWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();

    if (event.deltaY === 0) return;

    setThumbnailStartIndex((currentIndex) => {
      const direction = event.deltaY > 0 ? 1 : -1;
      return (currentIndex + direction + images.length) % images.length;
    });
  };

  return (
    <article className={styles.section}>
      <div className={styles.container}>
        {/* 제목 + 태그 + 우측 아이콘 */}
        <header className={styles.titleBlock}>
          <div className={styles.titleRow}>
            <div>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.subtitle}>{subtitle}</p>
              <p className={styles.tags}>
                {tags.map((tag) => `#${tag}`).join(" ")}
              </p>
            </div>

            <div className={styles.titleIcons}>
              <button
                type="button"
                className={styles.iconButton}
                aria-label="삭제"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m2 0-1 12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 7"
                    stroke="#919191"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                className={styles.iconButton}
                aria-label="링크 공유"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M9 12h6M8 17H6a5 5 0 0 1 0-10h2m8 0h2a5 5 0 0 1 0 10h-2"
                    stroke="#919191"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                className={styles.iconButton}
                aria-label="위치"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M12 21s-6.7-4.35-6.7-10A6.7 6.7 0 0 1 12 4a6.7 6.7 0 0 1 6.7 7c0 5.65-6.7 10-6.7 10z"
                    stroke="#919191"
                    strokeWidth="1.6"
                  />
                  <circle
                    cx="12"
                    cy="11"
                    r="2.4"
                    stroke="#919191"
                    strokeWidth="1.6"
                  />
                </svg>
              </button>
              <span className={styles.photoBadge}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <rect
                    x="3"
                    y="6"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="#777777"
                    strokeWidth="1.6"
                  />
                  <circle
                    cx="12"
                    cy="13"
                    r="3.2"
                    stroke="#777777"
                    strokeWidth="1.6"
                  />
                </svg>
                {photoCount}
              </span>
            </div>
          </div>
        </header>

        {/* 이미지 갤러리 + 구매/판매자 카드 */}
        <div className={styles.topRow}>
          <div className={styles.gallery}>
            <div className={styles.mainImageWrap}>
              <Image
                src={mainImage}
                alt={title}
                fill
                className={styles.mainImage}
              />
            </div>
            <div
              className={styles.thumbGrid}
              onWheel={handleThumbnailWheel}
              aria-label="숙소 사진 목록"
            >
              {thumbnails.map((thumb, visibleIndex) => {
                const imageIndex = images.indexOf(thumb);

                return (
                <button
                  key={`${thumb}-${visibleIndex}`}
                  type="button"
                  className={`${styles.thumbWrap} ${selectedImageIndex === imageIndex ? styles.thumbWrapActive : ""}`}
                  onClick={() => setSelectedImageIndex(imageIndex)}
                  aria-label={`${title} 이미지 ${imageIndex + 1} 크게 보기`}
                >
                  <Image
                    src={thumb}
                    alt={`${title} 이미지 ${imageIndex + 1}`}
                    fill
                    className={styles.thumbImage}
                  />
                </button>
                );
              })}
            </div>
          </div>

          <div className={styles.sideColumn}>
            <div className={styles.priceCard}>
              <p className={styles.price}>{price}</p>
              <ul className={styles.purchaseNotes}>
                {purchaseNotes.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
              <button type="button" className={styles.purchaseButton}>
                구매하기
              </button>
            </div>

            <div className={styles.sellerCard}>
              <span className={styles.sellerLabel}>판매자</span>
              <div className={styles.sellerInfo}>
                <Image
                  src={seller.avatar}
                  alt={seller.name}
                  width={24}
                  height={24}
                  className={styles.sellerAvatar}
                />
                <span className={styles.sellerName}>{seller.name}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 상세 설명 */}
        <section className={styles.contentColumn}>
          <h2 className={styles.sectionHeading}>상세 설명</h2>
          <div className={styles.description}>
            {description.map((paragraph, index) => (
              <p key={index} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* 상세 위치 */}
        <section className={styles.contentColumn}>
          <h2 className={styles.sectionHeading}>상세 위치</h2>
          <div className={styles.mapWrap}>
            <OpenStreetMap
              latitude={coordinates.latitude}
              longitude={coordinates.longitude}
              title={title}
              address={address}
            />
          </div>
        </section>

        {/* 문의하기 */}
        <section className={styles.inquirySection}>
          <div className={styles.inquiryHeader}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
                stroke="#1c1c1c"
                strokeWidth="1.6"
              />
              <path
                d="M8 10h8M8 14h5"
                stroke="#1c1c1c"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
            <span className={styles.inquiryTitle}>문의하기</span>
          </div>

          <form className={styles.inquiryForm} onSubmit={handleSubmitInquiry}>
            <div className={styles.textareaWrap}>
              <textarea
                placeholder="문의사항을 입력해 주세요."
                maxLength={100}
                value={inquiryText}
                onChange={(event) => setInquiryText(event.target.value)}
              />
              <span className={styles.charCount}>{inquiryText.length}/100</span>
            </div>

            <div className={styles.submitRow}>
              <button
                type="submit"
                className={styles.submitButton}
                disabled={!canSubmit}
              >
                문의 하기
              </button>
            </div>
          </form>

          <div className={styles.inquiryList}>
            {inquiries.length === 0 ? (
              <p className={styles.emptyState}>등록된 문의사항이 없습니다.</p>
            ) : (
              inquiries.map((item) => (
                <div key={item.id} className={styles.inquiryItem}>
                  {editingInquiryId === item.id ? (
                    <form
                      className={styles.inquiryEditForm}
                      onSubmit={(event) => handleSaveEditInquiry(event, item.id)}
                    >
                      <div className={styles.textareaWrap}>
                        <textarea
                          aria-label="문의 내용 수정"
                          maxLength={100}
                          value={editingInquiryText}
                          onChange={(event) => setEditingInquiryText(event.target.value)}
                        />
                        <span className={styles.charCount}>
                          {editingInquiryText.length}/100
                        </span>
                      </div>
                      <div className={styles.editActionRow}>
                        <button
                          type="button"
                          className={styles.cancelButton}
                          onClick={handleCancelEditInquiry}
                        >
                          취소
                        </button>
                        <button
                          type="submit"
                          className={styles.submitButton}
                          disabled={!editingInquiryText.trim()}
                        >
                          수정 하기
                        </button>
                      </div>
                    </form>
                  ) : (
                    <>
                      <div className={styles.inquiryItemHeader}>
                        <span className={styles.inquiryItemDate}>{item.date}</span>
                        <div className={styles.inquiryActions}>
                          <button
                            type="button"
                            className={styles.inquiryEditButton}
                            onClick={() => handleStartEditInquiry(item)}
                          >
                            수정
                          </button>
                          <button
                            type="button"
                            className={styles.inquiryDeleteButton}
                            onClick={() => handleDeleteInquiry(item.id)}
                          >
                            삭제
                          </button>
                        </div>
                      </div>
                      <p className={styles.inquiryItemContent}>{item.content}</p>
                      <button
                        type="button"
                        className={styles.replyButton}
                        onClick={() => handleStartReply(item.id)}
                      >
                        <Image
                          src="/icon/shape/outline/reply.svg"
                          alt=""
                          width={18}
                          height={18}
                        />
                        답변 하기
                      </button>

                      {item.replies.length > 0 && (
                        <ReplyList
                          replies={item.replies}
                          inquiryId={item.id}
                          replyingTarget={replyingTarget}
                          replyText={replyText}
                          editingTarget={editingReplyTarget}
                          editingText={editingReplyText}
                          onStartReply={handleStartReply}
                          onChangeReplyText={setReplyText}
                          onCancelReply={handleCancelReply}
                          onSubmitReply={handleSubmitReply}
                          onStartEdit={handleStartEditReply}
                          onChangeEditText={setEditingReplyText}
                          onCancelEdit={handleCancelEditReply}
                          onSubmitEdit={handleSaveEditReply}
                          onDelete={handleDeleteReply}
                        />
                      )}

                      {replyingTarget?.inquiryId === item.id &&
                        replyingTarget.replyPath.length === 0 && (
                          <ReplyEditor
                            label="답변 하기"
                            value={replyText}
                            onChange={setReplyText}
                            onCancel={handleCancelReply}
                            onSubmit={handleSubmitReply}
                          />
                        )}

                      <div className={styles.legacyReplies}>
                      {item.replies.length > 0 && (
                        <div className={styles.replyList}>
                          {item.replies.map((reply) => (
                            <div key={reply.id} className={styles.replyItem}>
                              <span className={styles.replyArrow} aria-hidden>
                                ↳
                              </span>
                              <div>
                                {editingReplyTarget?.inquiryId === item.id &&
                                editingReplyTarget.replyId === reply.id &&
                                editingReplyTarget.nestedReplyId === undefined ? (
                                  <form
                                    className={styles.replyEditForm}
                                    onSubmit={handleSaveEditReply}
                                  >
                                    <div className={styles.textareaWrap}>
                                      <textarea
                                        aria-label="답변 내용 수정"
                                        maxLength={100}
                                        value={editingReplyText}
                                        onChange={(event) =>
                                          setEditingReplyText(event.target.value)
                                        }
                                      />
                                      <span className={styles.charCount}>
                                        {editingReplyText.length}/100
                                      </span>
                                    </div>
                                    <div className={styles.editActionRow}>
                                      <button
                                        type="button"
                                        className={styles.cancelButton}
                                        onClick={handleCancelEditReply}
                                      >
                                        취소
                                      </button>
                                      <button
                                        type="submit"
                                        className={styles.submitButton}
                                        disabled={!editingReplyText.trim()}
                                      >
                                        수정 하기
                                      </button>
                                    </div>
                                  </form>
                                ) : (
                                  <>
                                    <p className={styles.replyAuthor}>답변</p>
                                    <p className={styles.replyContent}>{reply.content}</p>
                                    <span className={styles.inquiryItemDate}>
                                      {reply.date}
                                    </span>
                                    <div className={styles.replyActions}>
                                      <button
                                        type="button"
                                        className={styles.inquiryEditButton}
                                        onClick={() =>
                                          handleStartEditReply(
                                            item.id,
                                            reply.id,
                                            reply.content,
                                          )
                                        }
                                      >
                                        수정
                                      </button>
                                      <button
                                        type="button"
                                        className={styles.inquiryDeleteButton}
                                        onClick={() =>
                                          handleDeleteReply(item.id, reply.id)
                                        }
                                      >
                                        삭제
                                      </button>
                                    </div>
                                    <button
                                      type="button"
                                      className={styles.replyButton}
                                      onClick={() => handleStartReply(item.id, reply.id)}
                                    >
                                      <Image
                                        src="/icon/shape/outline/reply.svg"
                                        alt=""
                                        width={18}
                                        height={18}
                                      />
                                      답변 하기
                                    </button>
                                  </>
                                )}

                                {reply.replies.length > 0 && (
                                  <div className={styles.nestedReplyList}>
                                    {reply.replies.map((nestedReply) => (
                                      <div
                                        key={nestedReply.id}
                                        className={styles.replyItem}
                                      >
                                        <span className={styles.replyArrow} aria-hidden>
                                          ↳
                                        </span>
                                        <div>
                                          {editingReplyTarget?.inquiryId === item.id &&
                                          editingReplyTarget.replyId === reply.id &&
                                          editingReplyTarget.nestedReplyId ===
                                            nestedReply.id ? (
                                            <form
                                              className={styles.replyEditForm}
                                              onSubmit={handleSaveEditReply}
                                            >
                                              <div className={styles.textareaWrap}>
                                                <textarea
                                                  aria-label="답변 내용 수정"
                                                  maxLength={100}
                                                  value={editingReplyText}
                                                  onChange={(event) =>
                                                    setEditingReplyText(event.target.value)
                                                  }
                                                />
                                                <span className={styles.charCount}>
                                                  {editingReplyText.length}/100
                                                </span>
                                              </div>
                                              <div className={styles.editActionRow}>
                                                <button
                                                  type="button"
                                                  className={styles.cancelButton}
                                                  onClick={handleCancelEditReply}
                                                >
                                                  취소
                                                </button>
                                                <button
                                                  type="submit"
                                                  className={styles.submitButton}
                                                  disabled={!editingReplyText.trim()}
                                                >
                                                  수정 하기
                                                </button>
                                              </div>
                                            </form>
                                          ) : (
                                            <>
                                              <p className={styles.replyAuthor}>답변</p>
                                              <p className={styles.replyContent}>
                                                {nestedReply.content}
                                              </p>
                                              <span className={styles.inquiryItemDate}>
                                                {nestedReply.date}
                                              </span>
                                              <div className={styles.replyActions}>
                                                <button
                                                  type="button"
                                                  className={styles.inquiryEditButton}
                                                  onClick={() =>
                                                    handleStartEditReply(
                                                      item.id,
                                                      reply.id,
                                                      nestedReply.content,
                                                      nestedReply.id,
                                                    )
                                                  }
                                                >
                                                  수정
                                                </button>
                                                <button
                                                  type="button"
                                                  className={styles.inquiryDeleteButton}
                                                  onClick={() =>
                                                    handleDeleteReply(
                                                      item.id,
                                                      reply.id,
                                                      nestedReply.id,
                                                    )
                                                  }
                                                >
                                                  삭제
                                                </button>
                                              </div>
                                            </>
                                          )}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}

                                {replyingTarget?.inquiryId === item.id &&
                                  replyingTarget.parentReplyId === reply.id && (
                                    <form
                                      className={styles.replyForm}
                                      onSubmit={handleSubmitReply}
                                    >
                                      <div className={styles.textareaWrap}>
                                        <textarea
                                          aria-label="답변에 대한 답변 입력"
                                          placeholder="답변할 내용을 입력해 주세요."
                                          maxLength={100}
                                          value={replyText}
                                          onChange={(event) =>
                                            setReplyText(event.target.value)
                                          }
                                        />
                                        <span className={styles.charCount}>
                                          {replyText.length}/100
                                        </span>
                                      </div>
                                      <div className={styles.editActionRow}>
                                        <button
                                          type="button"
                                          className={styles.cancelButton}
                                          onClick={handleCancelReply}
                                        >
                                          취소
                                        </button>
                                        <button
                                          type="submit"
                                          className={styles.submitButton}
                                          disabled={!replyText.trim()}
                                        >
                                          답변 하기
                                        </button>
                                      </div>
                                    </form>
                                  )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {replyingTarget?.inquiryId === item.id &&
                        replyingTarget.parentReplyId === undefined && (
                        <form
                          className={styles.replyForm}
                          onSubmit={handleSubmitReply}
                        >
                          <div className={styles.textareaWrap}>
                            <textarea
                              aria-label="답변 내용 입력"
                              placeholder="답변할 내용을 입력해 주세요."
                              maxLength={100}
                              value={replyText}
                              onChange={(event) => setReplyText(event.target.value)}
                            />
                            <span className={styles.charCount}>{replyText.length}/100</span>
                          </div>
                          <div className={styles.editActionRow}>
                            <button
                              type="button"
                              className={styles.cancelButton}
                              onClick={handleCancelReply}
                            >
                              취소
                            </button>
                            <button
                              type="submit"
                              className={styles.submitButton}
                              disabled={!replyText.trim()}
                            >
                              답변 하기
                            </button>
                          </div>
                        </form>
                      )}
                      </div>
                    </>
                  )}
                  {/* 판매자 답글은 상품 판매자 계정에서만 작성 가능 (추후 권한 분기 필요) */}
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </article>
  );
}
