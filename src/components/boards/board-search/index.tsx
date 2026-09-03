"use client";

import { useState } from "react";
import type { DateRange } from "react-day-picker";
import DateRangePicker from "@/components/ui/date-range-picker";
import styles from "./styles.module.css";

interface BoardSearchProps {
  initialKeyword?: string;
  initialRange?: DateRange;
  onSearch: (params: { keyword: string; range?: DateRange }) => void;
  onWriteClick?: () => void;
}

export default function BoardSearch({
  initialKeyword = "",
  initialRange,
  onSearch,
  onWriteClick,
}: BoardSearchProps) {
  const [keyword, setKeyword] = useState(initialKeyword);
  const [range, setRange] = useState<DateRange | undefined>(initialRange);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch({ keyword, range });
  };

  return (
    <form className={styles.actionRow} onSubmit={handleSubmit}>
      <div className={styles.leftGroup}>
        <DateRangePicker value={range} onChange={setRange} />

        <label className={styles.searchField}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <circle cx="11" cy="11" r="7" stroke="#919191" strokeWidth="1.6" />
            <path
              d="M21 21L16.5 16.5"
              stroke="#919191"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
          <input
            type="text"
            placeholder="제목을 검색해 주세요."
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
          />
        </label>

        <button type="submit" className={styles.searchButton}>
          검색
        </button>
      </div>

      <button
        type="button"
        className={styles.writeButton}
        onClick={onWriteClick}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 20h4l10-10-4-4L4 16v4z"
            stroke="#ffffff"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
        트립토크 등록
      </button>
    </form>
  );
}
