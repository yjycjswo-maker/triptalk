"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./styles.module.css";

interface TripTalkDetailProps {
  title: string;
  author: string;
  avatar: string;
  date: string;
  address: string;
  mainImage: string;
  bodyParagraphs: string[];
  videoThumbnail: string;
  viewCount: number;
  likeCount: number;
}

interface Comment {
  id: number;
  author: string;
  rating: number;
  content: string;
  date: string;
}

function formatToday() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}.${m}.${d}`;
}

export default function TripTalkDetail({
  title,
  author,
  avatar,
  date,
  address,
  bodyParagraphs,
  viewCount,
  likeCount,
}: TripTalkDetailProps) {
  // 댓글 목록 - 실제로 등록/수정/삭제가 반영되는 state
  const [comments, setComments] = useState<Comment[]>([]);

  // 댓글 작성 폼
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [comment, setComment] = useState("");

  // 댓글 수정 상태
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editRating, setEditRating] = useState(0);
  const [editContent, setEditContent] = useState("");

  const canSubmit = Boolean(
    rating > 0 && name.trim() && password.trim() && comment.trim(),
  );

  // 댓글 등록
  const handleSubmitComment = (event: React.FormEvent) => {
    event.preventDefault();
    if (!canSubmit) return;

    const newComment: Comment = {
      id: Date.now(),
      author: name.trim(),
      rating,
      content: comment.trim(),
      date: formatToday(),
    };

    setComments((prev) => [newComment, ...prev]);

    setRating(0);
    setName("");
    setPassword("");
    setComment("");
  };

  // 댓글 삭제
  const handleDelete = (id: number) => {
    setComments((prev) => prev.filter((c) => c.id !== id));
    if (editingId === id) {
      setEditingId(null);
    }
  };

  // 댓글 수정
  const startEdit = (target: Comment) => {
    setEditingId(target.id);
    setEditRating(target.rating);
    setEditContent(target.content);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditRating(0);
    setEditContent("");
  };

  const saveEdit = (id: number) => {
    if (!editContent.trim() || editRating === 0) return;
    setComments((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, content: editContent.trim(), rating: editRating }
          : c,
      ),
    );
    cancelEdit();
  };

  return (
    <article className={styles.section}>
      <div className={styles.container}>
        {/* 제목 + 메타 정보 */}
        <header className={styles.headerBlock}>
          <h1 className={styles.title}>{title}</h1>

          <div className={styles.metaRow}>
            <div className={styles.authorInfo}>
              <Image
                src={avatar}
                alt={author}
                width={24}
                height={24}
                className={styles.avatar}
              />
              <span className={styles.authorName}>{author}</span>
            </div>
            <span className={styles.date}>{date}</span>
          </div>

          {/* 날짜 아래 회색 구분선 */}
          <hr className={styles.metaDivider} />

          {/* 댓글이 없으면 주소를 박스(텍스트)로, 댓글이 있으면 아이콘만 */}
          {comments.length === 0 ? (
            <div className={styles.addressBadgeText}>
              <Image
                src="/icon/shape/outline/location.svg"
                alt=""
                width={16}
                height={16}
              />
              <span>{address}</span>
            </div>
          ) : (
            <div className={styles.addressBadgeIcon}>
              <Image
                src="/icon/shape/outline/link.svg"
                alt="링크"
                width={16}
                height={16}
              />
              <Image
                src="/icon/shape/outline/location.svg"
                alt="위치"
                width={16}
                height={16}
              />
            </div>
          )}
        </header>

        {/* 본문 이미지 - 실제 존재하는 경로로 고정 */}
        <div className={styles.mainImageWrap}>
          <Image
            src="/img/hot-talk/detail-1.png"
            alt={title}
            width={400}
            height={531}
            className={styles.mainImage}
          />
        </div>

        {/* 본문 텍스트 */}
        <div className={styles.body}>
          {bodyParagraphs.map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* 영상/사진 블록 - 실제 존재하는 경로로 고정 */}
        <div className={styles.videoBlock}>
          <Image
            src="/img/hot-talk/detail-2.png"
            alt=""
            fill
            className={styles.videoThumbnail}
          />
          <button type="button" className={styles.playButton} aria-label="재생">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="white"
              aria-hidden
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>

        {/* 조회수/좋아요 + 목록/수정 버튼 */}
        <div className={styles.actionRow}>
          <div className={styles.countGroup}>
            <span className={styles.countItem}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"
                  stroke="#919191"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  stroke="#919191"
                  strokeWidth="1.6"
                />
              </svg>
              {viewCount}
            </span>
            <span className={styles.countItem}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#f66a6a"
                aria-hidden
              >
                <path d="M12 21s-6.7-4.35-9.3-8.2C1 10.2 1.6 6.9 4.3 5.3c2.2-1.3 4.9-.7 6.4 1.2l1.3 1.6 1.3-1.6c1.5-1.9 4.2-2.5 6.4-1.2 2.7 1.6 3.3 4.9 1.6 7.5C18.7 16.65 12 21 12 21z" />
              </svg>
              <span className={styles.likeCountText}>{likeCount}</span>
            </span>
          </div>

          <div className={styles.buttonGroup}>
            <Link href="/trip-talk" className={styles.listButton}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
              목록으로
            </Link>
            <button type="button" className={styles.editButton}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M4 20h4l10-10-4-4L4 16v4z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
              수정하기
            </button>
          </div>
        </div>

        <hr className={styles.divider} />

        {/* 댓글 섹션 */}
        <section className={styles.commentSection}>
          <div className={styles.commentHeader}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M4 4h16v12H8l-4 4V4z"
                stroke="#1c1c1c"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
            <span className={styles.commentTitle}>댓글</span>
          </div>

          <form className={styles.commentForm} onSubmit={handleSubmitComment}>
            <div className={styles.starRow}>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={styles.starButton}
                  aria-label={`${star}점`}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setRating(star)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill={
                      (hoverRating || rating) >= star ? "#ffb800" : "#e4e4e4"
                    }
                    aria-hidden
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                  </svg>
                </button>
              ))}
            </div>

            <div className={styles.formRow}>
              <label className={styles.formField}>
                <span className={styles.formLabel}>
                  작성자 <em className={styles.required}>*</em>
                </span>
                <input
                  type="text"
                  placeholder="작성자 명을 입력해 주세요."
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </label>

              <label className={styles.formField}>
                <span className={styles.formLabel}>
                  비밀번호 <em className={styles.required}>*</em>
                </span>
                <input
                  type="password"
                  placeholder="비밀번호를 입력해 주세요."
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </label>
            </div>

            <div className={styles.textareaWrap}>
              <textarea
                placeholder="댓글을 입력해 주세요."
                maxLength={100}
                value={comment}
                onChange={(event) => setComment(event.target.value)}
              />
              <span className={styles.charCount}>{comment.length}/100</span>
            </div>

            <div className={styles.submitRow}>
              <button
                type="submit"
                className={styles.submitButton}
                disabled={!canSubmit}
              >
                댓글 등록
              </button>
            </div>
          </form>

          <div className={styles.commentList}>
            {comments.length === 0 ? (
              <p className={styles.emptyState}>등록된 댓글이 없습니다.</p>
            ) : (
              comments.map((item) => {
                const isEditing = editingId === item.id;

                return (
                  <div key={item.id} className={styles.commentItem}>
                    {isEditing ? (
                      <div className={styles.commentEditWrap}>
                        <div className={styles.starRow}>
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              className={styles.starButton}
                              aria-label={`${star}점`}
                              onClick={() => setEditRating(star)}
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill={
                                  editRating >= star ? "#ffb800" : "#e4e4e4"
                                }
                                aria-hidden
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                              </svg>
                            </button>
                          ))}
                        </div>
                        <textarea
                          className={styles.commentEditTextarea}
                          value={editContent}
                          maxLength={100}
                          onChange={(event) =>
                            setEditContent(event.target.value)
                          }
                        />
                        <div className={styles.commentEditActions}>
                          <button
                            type="button"
                            className={styles.commentCancelButton}
                            onClick={cancelEdit}
                          >
                            취소
                          </button>
                          <button
                            type="button"
                            className={styles.commentSaveButton}
                            onClick={() => saveEdit(item.id)}
                          >
                            저장
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className={styles.commentItemHeader}>
                          <span className={styles.commentItemAuthor}>
                            {item.author}
                          </span>
                          <span className={styles.commentItemStars}>
                            {"★".repeat(item.rating)}
                            {"☆".repeat(5 - item.rating)}
                          </span>
                          <div className={styles.commentItemActions}>
                            <button
                              type="button"
                              className={styles.commentEditTrigger}
                              onClick={() => startEdit(item)}
                            >
                              수정
                            </button>
                            <button
                              type="button"
                              className={styles.commentDeleteTrigger}
                              onClick={() => handleDelete(item.id)}
                            >
                              삭제
                            </button>
                          </div>
                        </div>
                        <p className={styles.commentItemContent}>
                          {item.content}
                        </p>
                        <span className={styles.commentItemDate}>
                          {item.date}
                        </span>
                      </>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </section>
      </div>
    </article>
  );
}
