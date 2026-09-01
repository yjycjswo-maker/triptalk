"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client/react";
import OpenStreetMap from "@/components/ui/open-street-map";
import {
  FETCH_TRAVELPRODUCT_QUESTIONS,
  FETCH_TRAVELPRODUCT_QUESTION_ANSWERS,
} from "@/graphql/queries";
import {
  CREATE_TRAVELPRODUCT_QUESTION,
  CREATE_TRAVELPRODUCT_QUESTION_ANSWER,
  DELETE_TRAVELPRODUCT_QUESTION,
  DELETE_TRAVELPRODUCT_QUESTION_ANSWER,
  UPDATE_TRAVELPRODUCT_QUESTION,
  UPDATE_TRAVELPRODUCT_QUESTION_ANSWER,
} from "@/graphql/mutations";
import styles from "./styles.module.css";

interface ApiUser {
  _id: string;
  name: string;
}

interface ApiQuestion {
  _id: string;
  contents: string;
  createdAt: string;
  user: ApiUser;
  answers?: ApiAnswer[];
}

type ApiAnswer = ApiQuestion;

interface StayDetailProps {
  travelproductId: string;
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

function formatDate(value: string) {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(value));
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

type AnswerListProps = {
  questionId: string;
  isTemporaryProduct: boolean;
  temporaryAnswers?: ApiAnswer[];
  editingAnswerId: string | null;
  editingText: string;
  onStartEdit: (answer: ApiAnswer) => void;
  onChangeEditText: (value: string) => void;
  onCancelEdit: () => void;
  onSubmitEdit: (event: React.FormEvent) => void;
  onDelete: (answerId: string) => void;
};

function AnswerList({
  questionId,
  isTemporaryProduct,
  temporaryAnswers = [],
  editingAnswerId,
  editingText,
  onStartEdit,
  onChangeEditText,
  onCancelEdit,
  onSubmitEdit,
  onDelete,
}: AnswerListProps) {
  const { data, loading, error } = useQuery<{
    fetchTravelproductQuestionAnswers: ApiAnswer[];
  }>(FETCH_TRAVELPRODUCT_QUESTION_ANSWERS, {
    variables: { travelproductQuestionId: questionId, page: 1 },
    skip: isTemporaryProduct,
  });
  const answers = isTemporaryProduct
    ? temporaryAnswers
    : data?.fetchTravelproductQuestionAnswers ?? [];

  if (!isTemporaryProduct && loading) return <p className={styles.emptyState}>답변을 불러오는 중입니다.</p>;
  if (!isTemporaryProduct && error) return <p className={styles.emptyState}>답변을 불러오지 못했습니다.</p>;

  return (
    <div className={styles.replyList}>
      {answers.map((answer) => (
          <div key={answer._id} className={styles.replyItem}>
            <span className={styles.replyArrow} aria-hidden>↳</span>
            <div>
              {editingAnswerId === answer._id ? (
                <ReplyEditor
                  label="수정 하기"
                  value={editingText}
                  onChange={onChangeEditText}
                  onCancel={onCancelEdit}
                  onSubmit={onSubmitEdit}
                />
              ) : (
                <>
                  <p className={styles.replyAuthor}>{answer.user.name}</p>
                  <p className={styles.replyContent}>{answer.contents}</p>
                  <span className={styles.inquiryItemDate}>{formatDate(answer.createdAt)}</span>
                  <div className={styles.replyActions}>
                    <button
                      type="button"
                      className={styles.inquiryEditButton}
                      onClick={() => onStartEdit(answer)}
                    >수정</button>
                    <button
                      type="button"
                      className={styles.inquiryDeleteButton}
                      onClick={() => onDelete(answer._id)}
                    >삭제</button>
                  </div>
                </>
              )}
            </div>
          </div>
      ))}
    </div>
  );
}

export default function StayDetail({
  travelproductId,
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
  const isTemporaryProduct = /^\d+$/.test(travelproductId);
  const localStorageKey = `triptalk:temporary-inquiries:${travelproductId}`;
  const [temporaryInquiries, setTemporaryInquiries] = useState<ApiQuestion[]>([]);
  const [isTemporaryDataReady, setIsTemporaryDataReady] = useState(false);
  const [inquiryText, setInquiryText] = useState("");
  const [editingInquiryId, setEditingInquiryId] = useState<string | null>(null);
  const [editingInquiryText, setEditingInquiryText] = useState("");
  const [replyingQuestionId, setReplyingQuestionId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");
  const [editingAnswerId, setEditingAnswerId] = useState<string | null>(null);
  const [editingReplyText, setEditingReplyText] = useState("");
  const [inquiryError, setInquiryError] = useState("");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0);

  const { data, loading: isLoadingInquiries, error: inquiryQueryError } = useQuery<{
    fetchTravelproductQuestions: ApiQuestion[];
  }>(FETCH_TRAVELPRODUCT_QUESTIONS, {
    variables: { travelproductId, page: 1 },
    skip: isTemporaryProduct,
  });
  const inquiries = isTemporaryProduct
    ? temporaryInquiries
    : data?.fetchTravelproductQuestions ?? [];

  useEffect(() => {
    if (!isTemporaryProduct) return;

    let isCancelled = false;
    queueMicrotask(() => {
      if (isCancelled) return;
      try {
        const saved = localStorage.getItem(localStorageKey);
        setTemporaryInquiries(saved ? JSON.parse(saved) : []);
      } catch {
        setTemporaryInquiries([]);
      } finally {
        setIsTemporaryDataReady(true);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [isTemporaryProduct, localStorageKey]);

  const updateTemporaryInquiries = (
    updater: (current: ApiQuestion[]) => ApiQuestion[],
  ) => {
    setTemporaryInquiries((current) => {
      const next = updater(current);
      localStorage.setItem(localStorageKey, JSON.stringify(next));
      return next;
    });
  };

  const [createQuestion, { loading: isSubmitting }] = useMutation(
    CREATE_TRAVELPRODUCT_QUESTION,
    { refetchQueries: ["FetchTravelproductQuestions"] },
  );
  const [updateQuestion] = useMutation(UPDATE_TRAVELPRODUCT_QUESTION, {
    refetchQueries: ["FetchTravelproductQuestions"],
  });
  const [deleteQuestion] = useMutation(DELETE_TRAVELPRODUCT_QUESTION, {
    refetchQueries: ["FetchTravelproductQuestions"],
  });
  const [createAnswer] = useMutation(CREATE_TRAVELPRODUCT_QUESTION_ANSWER, {
    refetchQueries: ["FetchTravelproductQuestionAnswers"],
  });
  const [updateAnswer] = useMutation(UPDATE_TRAVELPRODUCT_QUESTION_ANSWER, {
    refetchQueries: ["FetchTravelproductQuestionAnswers"],
  });
  const [deleteAnswer] = useMutation(DELETE_TRAVELPRODUCT_QUESTION_ANSWER, {
    refetchQueries: ["FetchTravelproductQuestionAnswers"],
  });

  const canSubmit =
    Boolean(inquiryText.trim()) && (isTemporaryProduct || !isSubmitting);

  const handleSubmitInquiry = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!canSubmit) return;

    if (isTemporaryProduct) {
      const now = new Date().toISOString();
      updateTemporaryInquiries((current) => [
        {
          _id: `temporary-question-${Date.now()}`,
          contents: inquiryText.trim(),
          createdAt: now,
          user: { _id: "temporary-user", name: "임시 사용자" },
          answers: [],
        },
        ...current,
      ]);
      setInquiryText("");
      return;
    }

    try {
      setInquiryError("");
      await createQuestion({
        variables: {
          travelproductId,
          input: { contents: inquiryText.trim() },
        },
      });
      setInquiryText("");
    } catch (error) {
      setInquiryError(error instanceof Error ? error.message : "문의 등록에 실패했습니다.");
    }
  };

  const handleDeleteInquiry = async (id: string) => {
    if (!window.confirm("문의를 삭제할까요?")) return;
    if (isTemporaryProduct) {
      updateTemporaryInquiries((current) =>
        current.filter((question) => question._id !== id),
      );
      return;
    }
    try {
      setInquiryError("");
      await deleteQuestion({ variables: { travelproductQuestionId: id } });
    } catch (error) {
      setInquiryError(error instanceof Error ? error.message : "문의 삭제에 실패했습니다.");
    }
  };

  const handleStartEditInquiry = (inquiry: ApiQuestion) => {
    setEditingInquiryId(inquiry._id);
    setEditingInquiryText(inquiry.contents);
  };

  const handleCancelEditInquiry = () => {
    setEditingInquiryId(null);
    setEditingInquiryText("");
  };

  const handleSaveEditInquiry = async (event: React.FormEvent, id: string) => {
    event.preventDefault();
    if (!editingInquiryText.trim()) return;
    if (isTemporaryProduct) {
      updateTemporaryInquiries((current) =>
        current.map((question) =>
          question._id === id
            ? { ...question, contents: editingInquiryText.trim() }
            : question,
        ),
      );
      handleCancelEditInquiry();
      return;
    }
    try {
      setInquiryError("");
      await updateQuestion({
        variables: {
          travelproductQuestionId: id,
          input: { contents: editingInquiryText.trim() },
        },
      });
      handleCancelEditInquiry();
    } catch (error) {
      setInquiryError(error instanceof Error ? error.message : "문의 수정에 실패했습니다.");
    }
  };

  const handleStartReply = (questionId: string) => {
    setReplyingQuestionId(questionId);
    setReplyText("");
  };

  const handleCancelReply = () => {
    setReplyingQuestionId(null);
    setReplyText("");
  };

  const handleSubmitReply = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!replyText.trim() || !replyingQuestionId) return;
    if (isTemporaryProduct) {
      const questionId = replyingQuestionId;
      updateTemporaryInquiries((current) =>
        current.map((question) =>
          question._id === questionId
            ? {
                ...question,
                answers: [
                  ...(question.answers ?? []),
                  {
                    _id: `temporary-answer-${Date.now()}`,
                    contents: replyText.trim(),
                    createdAt: new Date().toISOString(),
                    user: { _id: "temporary-user", name: "임시 사용자" },
                  },
                ],
              }
            : question,
        ),
      );
      handleCancelReply();
      return;
    }
    try {
      setInquiryError("");
      await createAnswer({
        variables: {
          travelproductQuestionId: replyingQuestionId,
          input: { contents: replyText.trim() },
        },
      });
      handleCancelReply();
    } catch (error) {
      setInquiryError(error instanceof Error ? error.message : "답변 등록에 실패했습니다.");
    }
  };

  const handleStartEditReply = (answer: ApiAnswer) => {
    setEditingAnswerId(answer._id);
    setEditingReplyText(answer.contents);
  };

  const handleCancelEditReply = () => {
    setEditingAnswerId(null);
    setEditingReplyText("");
  };

  const handleSaveEditReply = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!editingReplyText.trim() || !editingAnswerId) return;
    if (isTemporaryProduct) {
      updateTemporaryInquiries((current) =>
        current.map((question) => ({
          ...question,
          answers: (question.answers ?? []).map((answer) =>
            answer._id === editingAnswerId
              ? { ...answer, contents: editingReplyText.trim() }
              : answer,
          ),
        })),
      );
      handleCancelEditReply();
      return;
    }
    try {
      setInquiryError("");
      await updateAnswer({
        variables: {
          travelproductQuestionAnswerId: editingAnswerId,
          input: { contents: editingReplyText.trim() },
        },
      });
      handleCancelEditReply();
    } catch (error) {
      setInquiryError(error instanceof Error ? error.message : "답변 수정에 실패했습니다.");
    }
  };

  const handleDeleteReply = async (answerId: string) => {
    if (!window.confirm("답변을 삭제할까요?")) return;
    if (isTemporaryProduct) {
      updateTemporaryInquiries((current) =>
        current.map((question) => ({
          ...question,
          answers: (question.answers ?? []).filter(
            (answer) => answer._id !== answerId,
          ),
        })),
      );
      return;
    }
    try {
      setInquiryError("");
      await deleteAnswer({
        variables: { travelproductQuestionAnswerId: answerId },
      });
    } catch (error) {
      setInquiryError(error instanceof Error ? error.message : "답변 삭제에 실패했습니다.");
    }
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

          {inquiryError && (
            <p className={styles.emptyState}>{inquiryError}</p>
          )}
          {isTemporaryProduct && (
            <p className={styles.emptyState}>
              임시 문의는 현재 브라우저에만 저장됩니다.
            </p>
          )}

          <div className={styles.inquiryList}>
            {(isTemporaryProduct && !isTemporaryDataReady) ||
            (!isTemporaryProduct && isLoadingInquiries) ? (
              <p className={styles.emptyState}>문의사항을 불러오는 중입니다.</p>
            ) : !isTemporaryProduct && inquiryQueryError ? (
              <p className={styles.emptyState}>
                문의사항을 불러오지 못했습니다. 실제 여행상품 ID인지 확인해 주세요.
              </p>
            ) : inquiries.length === 0 ? (
              <p className={styles.emptyState}>등록된 문의사항이 없습니다.</p>
            ) : (
              inquiries.map((item) => (
                <div key={item._id} className={styles.inquiryItem}>
                  {editingInquiryId === item._id ? (
                    <form
                      className={styles.inquiryEditForm}
                      onSubmit={(event) => handleSaveEditInquiry(event, item._id)}
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
                        <div>
                          <p className={styles.replyAuthor}>{item.user.name}</p>
                          <span className={styles.inquiryItemDate}>
                            {formatDate(item.createdAt)}
                          </span>
                        </div>
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
                            onClick={() => handleDeleteInquiry(item._id)}
                          >
                            삭제
                          </button>
                        </div>
                      </div>
                      <p className={styles.inquiryItemContent}>{item.contents}</p>
                      <button
                        type="button"
                        className={styles.replyButton}
                        onClick={() => handleStartReply(item._id)}
                      >
                        <Image
                          src="/icon/shape/outline/reply.svg"
                          alt=""
                          width={18}
                          height={18}
                        />
                        답변 하기
                      </button>

                      <AnswerList
                        questionId={item._id}
                        isTemporaryProduct={isTemporaryProduct}
                        temporaryAnswers={item.answers}
                        editingAnswerId={editingAnswerId}
                        editingText={editingReplyText}
                        onStartEdit={handleStartEditReply}
                        onChangeEditText={setEditingReplyText}
                        onCancelEdit={handleCancelEditReply}
                        onSubmitEdit={handleSaveEditReply}
                        onDelete={handleDeleteReply}
                      />

                      {replyingQuestionId === item._id && (
                        <ReplyEditor
                          label="답변 하기"
                          value={replyText}
                          onChange={setReplyText}
                          onCancel={handleCancelReply}
                          onSubmit={handleSubmitReply}
                        />
                      )}
                    </>
                  )}
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </article>
  );
}
