"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./styles.module.css";

const IMAGE_SLOTS = [0, 1, 2];

export default function TripTalkWrite() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [imagePreviews, setImagePreviews] = useState<(string | null)[]>([null, null, null]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canSubmit = Boolean(title.trim() && author.trim() && password.trim() && content.trim());

  const handleImageChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setImagePreviews((current) => {
      const next = [...current];
      if (next[index]) URL.revokeObjectURL(next[index]);
      next[index] = URL.createObjectURL(file);
      return next;
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!canSubmit || isSubmitting) return;
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 400));
      router.push("/trip-talk");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.heading}>게시물 등록</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={`${styles.formGroup} ${styles.authorGroup}`}>
            <div className={styles.fieldRow}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="author">작성자 <em className={styles.required}>*</em></label>
                <input id="author" type="text" placeholder="작성자 명을 입력해 주세요." className={styles.input} value={author} onChange={(event) => setAuthor(event.target.value)} />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="password">비밀번호 <em className={styles.required}>*</em></label>
                <input id="password" type="password" placeholder="비밀번호를 입력해 주세요." className={styles.input} value={password} onChange={(event) => setPassword(event.target.value)} />
              </div>
            </div>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="title">제목 <em className={styles.required}>*</em></label>
              <input id="title" type="text" placeholder="제목을 입력해 주세요." className={styles.input} value={title} onChange={(event) => setTitle(event.target.value)} maxLength={60} />
            </div>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="content">내용 <em className={styles.required}>*</em></label>
              <textarea id="content" placeholder="내용을 입력해 주세요." className={styles.textarea} value={content} onChange={(event) => setContent(event.target.value)} />
            </div>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.field}>
              <span className={styles.label}>주소</span>
              <div className={styles.zipcodeRow}>
                <input aria-label="우편번호" inputMode="numeric" placeholder="01234" className={`${styles.input} ${styles.zipcodeInput}`} value={zipcode} onChange={(event) => setZipcode(event.target.value)} maxLength={5} />
                <button type="button" className={styles.postcodeButton}>우편번호 검색</button>
              </div>
              <input aria-label="주소" type="text" placeholder="주소를 입력해 주세요." className={styles.input} value={address} onChange={(event) => setAddress(event.target.value)} />
              <input aria-label="상세주소" type="text" placeholder="상세주소" className={styles.input} value={addressDetail} onChange={(event) => setAddressDetail(event.target.value)} />
            </div>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="youtubeUrl">유튜브 링크</label>
              <input id="youtubeUrl" type="url" placeholder="링크를 입력해 주세요." className={styles.input} value={youtubeUrl} onChange={(event) => setYoutubeUrl(event.target.value)} />
            </div>
          </div>

          <div className={styles.photoSection}>
            <span className={styles.label}>사진 첨부</span>
            <div className={styles.uploadList}>
              {IMAGE_SLOTS.map((index) => (
                <label className={styles.uploadButton} key={index}>
                  <input type="file" accept="image/*" className={styles.hiddenFileInput} onChange={(event) => handleImageChange(index, event)} />
                  {imagePreviews[index] ? (
                    <Image src={imagePreviews[index]} alt={`첨부 이미지 ${index + 1}`} fill className={styles.imagePreview} />
                  ) : (
                    <><span className={styles.plus} aria-hidden>+</span><span>클릭해서 사진 업로드</span></>
                  )}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.actions}>
            <button type="button" className={styles.cancelButton} onClick={() => router.push("/trip-talk")}>취소</button>
            <button type="submit" className={styles.submitButton} disabled={!canSubmit || isSubmitting}>{isSubmitting ? "등록 중..." : "등록하기"}</button>
          </div>
        </form>
      </div>
    </section>
  );
}
