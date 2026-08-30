"use client";

import styles from "./styles.module.css";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <nav className={styles.pagination} aria-label="게시판 페이지">
      <button
        type="button"
        className={styles.pageArrow}
        disabled={page === 1}
        onClick={() => onPageChange(Math.max(1, page - 1))}
        aria-label="이전 페이지"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M15 6l-6 6 6 6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
        <button
          key={num}
          type="button"
          className={`${styles.pageNumber} ${num === page ? styles.pageNumberActive : ""}`}
          onClick={() => onPageChange(num)}
        >
          {num}
        </button>
      ))}

      <button
        type="button"
        className={styles.pageArrow}
        disabled={page === totalPages}
        onClick={() => onPageChange(Math.min(totalPages, page + 1))}
        aria-label="다음 페이지"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </nav>
  );
}
