"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./styles.module.css";

interface Inquiry {
  id: number;
  content: string;
  date: string;
}

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
  mapImage: string;
}

function formatToday() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}.${m}.${d}`;
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
  mapImage,
}: StayDetailProps) {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [inquiryText, setInquiryText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canSubmit = Boolean(inquiryText.trim()) && !isSubmitting;

  const handleSubmitInquiry = (event: React.FormEvent) => {
    event.preventDefault();
    if (!canSubmit) return;

    setIsSubmitting(true);
    const newInquiry: Inquiry = {
      id: Date.now(),
      content: inquiryText.trim(),
      date: formatToday(),
    };
    setInquiries((prev) => [newInquiry, ...prev]);
    setInquiryText("");
    setIsSubmitting(false);
  };

  const handleDeleteInquiry = (id: number) => {
    setInquiries((prev) => prev.filter((i) => i.id !== id));
  };

  const [mainImage, ...thumbnails] = images;

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
            <div className={styles.thumbGrid}>
              {thumbnails.slice(0, 3).map((thumb, index) => (
                <div key={index} className={styles.thumbWrap}>
                  <Image
                    src={thumb}
                    alt={`${title} 이미지 ${index + 2}`}
                    fill
                    className={styles.thumbImage}
                  />
                </div>
              ))}
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
            <Image
              src={mapImage}
              alt={address}
              fill
              className={styles.mapImage}
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
                  <div className={styles.inquiryItemHeader}>
                    <span className={styles.inquiryItemDate}>{item.date}</span>
                    <button
                      type="button"
                      className={styles.inquiryDeleteButton}
                      onClick={() => handleDeleteInquiry(item.id)}
                    >
                      삭제
                    </button>
                  </div>
                  <p className={styles.inquiryItemContent}>{item.content}</p>
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
