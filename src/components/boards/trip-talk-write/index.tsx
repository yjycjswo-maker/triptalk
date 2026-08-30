"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import styles from "./styles.module.css";

export default function TripTalkWrite() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [content, setContent] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canSubmit = Boolean(
    title.trim() && author.trim() && password.trim() && content.trim(),
  );

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImagePreview(url);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!canSubmit || isSubmitting) return;

    setIsSubmitting(true);
    try {
      // TODO: 실제로는 여기서 서버 API 호출해서 게시글 생성
      // 지금은 mock 상태라 등록 성공을 흉내만 내고 목록으로 이동
      await new Promise((resolve) => setTimeout(resolve, 400));
      router.push("/trip-talk");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    router.push("/trip-talk");
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.heading}>트립토크 등록</h1>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="title">
              제목 <em className={styles.required}>*</em>
            </label>
            <input
              id="title"
              type="text"
              placeholder="제목을 입력해 주세요."
              className={styles.input}
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              maxLength={60}
            />
          </div>

          <div className={styles.fieldRow}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="author">
                작성자 <em className={styles.required}>*</em>
              </label>
              <input
                id="author"
                type="text"
                placeholder="작성자 명을 입력해 주세요."
                className={styles.input}
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="password">
                비밀번호 <em className={styles.required}>*</em>
              </label>
              <input
                id="password"
                type="password"
                placeholder="수정/삭제 시 필요한 비밀번호를 입력해 주세요."
                className={styles.input}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="address">
              위치 (선택)
            </label>
            <input
              id="address"
              type="text"
              placeholder="예: 서울 특별시 강남구 신논현로 111-6"
              className={styles.input}
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>

          <div className={styles.field}>
            <span className={styles.label}>대표 이미지 (선택)</span>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className={styles.hiddenFileInput}
              onChange={handleImageChange}
            />

            {imagePreview ? (
              <div className={styles.imagePreviewWrap}>
                <Image
                  src={imagePreview}
                  alt="업로드한 이미지 미리보기"
                  fill
                  className={styles.imagePreview}
                />
                <button
                  type="button"
                  className={styles.imageRemoveButton}
                  onClick={() => setImagePreview(null)}
                >
                  삭제
                </button>
              </div>
            ) : (
              <button
                type="button"
                className={styles.uploadButton}
                onClick={() => fileInputRef.current?.click()}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M12 5v14M5 12h14"
                    stroke="#919191"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
                <span>이미지 업로드</span>
              </button>
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="content">
              내용 <em className={styles.required}>*</em>
            </label>
            <textarea
              id="content"
              placeholder="여행 이야기를 자유롭게 남겨주세요."
              className={styles.textarea}
              value={content}
              onChange={(event) => setContent(event.target.value)}
            />
          </div>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={handleCancel}
            >
              취소
            </button>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={!canSubmit || isSubmitting}
            >
              {isSubmitting ? "등록 중..." : "등록하기"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
