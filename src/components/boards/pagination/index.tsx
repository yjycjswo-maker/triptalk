"use client";

import styles from "./styles.module.css";

const PAGES_PER_GROUP = 10;

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
  const groupStart =
    Math.floor((page - 1) / PAGES_PER_GROUP) * PAGES_PER_GROUP + 1;
  const groupEnd = Math.min(groupStart + PAGES_PER_GROUP - 1, totalPages);
  const visiblePages = Array.from(
    { length: groupEnd - groupStart + 1 },
    (_, index) => groupStart + index,
  );

  return (
    <nav className={styles.pagination} aria-label="게시판 페이지">
      <button
        type="button"
        className={styles.pageArrow}
        disabled={groupStart === 1}
        onClick={() => onPageChange(groupStart - 1)}
        aria-label="이전 10페이지"
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

      {visiblePages.map((num) => (
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
        disabled={groupEnd === totalPages}
        onClick={() => onPageChange(groupEnd + 1)}
        aria-label="다음 10페이지"
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
