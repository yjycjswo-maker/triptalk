"use client";

import { useEffect, useRef, useState } from "react";
import { DayPicker, type DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
import styles from "./styles.module.css";

interface Post {
  no: number;
  title: string;
  author: string;
  date: string;
}

const POSTS: Post[] = [
  { no: 243, title: "제주 살이 1일차", author: "홍길동", date: "2024.12.16" },
  { no: 242, title: "강남 살이 100년차", author: "홍길동", date: "2024.12.16" },
  {
    no: 241,
    title: "길 걷고 있었는데 고양이한테 간택 받았어요",
    author: "홍길동",
    date: "2024.12.16",
  },
  {
    no: 240,
    title: "오늘 날씨 너무 좋아서 바다보러 왔어요~",
    author: "홍길동",
    date: "2024.12.16",
  },
  {
    no: 239,
    title: "누가 양양 핫하다고 했어 나밖에 없는데?",
    author: "홍길동",
    date: "2024.12.16",
  },
  {
    no: 238,
    title: "여름에 보드타고 싶은거 저밖에 없나요 🥲",
    author: "홍길동",
    date: "2024.12.16",
  },
  {
    no: 237,
    title:
      "사무실에서 과자 너무 많이 먹은거 같아요 다이어트하러 여행 가야겠어요",
    author: "홍길동",
    date: "2024.12.16",
  },
  {
    no: 236,
    title: "여기는 기승전 여행이네요 ㅋㅋㅋ",
    author: "홍길동",
    date: "2024.12.16",
  },
  {
    no: 235,
    title: "상여금 들어왔는데 이걸로 다낭갈까 사이판 갈까",
    author: "홍길동",
    date: "2024.12.16",
  },
  {
    no: 234,
    title: "강릉 여름바다 보기 좋네요",
    author: "홍길동",
    date: "2024.12.16",
  },
];

const TOTAL_PAGES = 5;

function formatDate(date?: Date) {
  if (!date) return "YYYY.MM.DD";
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}.${m}.${d}`;
}

export default function Board() {
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);

  const [range, setRange] = useState<DateRange | undefined>();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarWrapRef = useRef<HTMLDivElement>(null);

  // 팝업 바깥 클릭하면 닫기
  useEffect(() => {
    if (!isCalendarOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarWrapRef.current &&
        !calendarWrapRef.current.contains(event.target as Node)
      ) {
        setIsCalendarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isCalendarOpen]);

  const dateLabel = range?.from
    ? `${formatDate(range.from)} - ${formatDate(range.to)}`
    : "YYYY.MM.DD - YYYY.MM.DD";

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: 검색 API 연동
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>트립토크 게시판</h2>

        <form className={styles.actionRow} onSubmit={handleSearch}>
          <div className={styles.leftGroup}>
            <div className={styles.datepickerWrap} ref={calendarWrapRef}>
              <button
                type="button"
                className={styles.datepicker}
                onClick={() => setIsCalendarOpen((prev) => !prev)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="16"
                    rx="2"
                    stroke="#777777"
                    strokeWidth="1.6"
                  />
                  <path d="M3 9.5H21" stroke="#777777" strokeWidth="1.6" />
                  <path
                    d="M8 3V6.5"
                    stroke="#777777"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16 3V6.5"
                    stroke="#777777"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
                <span className={styles.datepickerText}>{dateLabel}</span>
              </button>

              {isCalendarOpen && (
                <div className={styles.calendarPopover}>
                  <DayPicker
                    mode="range"
                    selected={range}
                    onSelect={(selected) => {
                      setRange(selected);
                      if (selected?.from && selected?.to) {
                        setIsCalendarOpen(false); // 시작~끝 다 고르면 자동으로 닫기
                      }
                    }}
                    locale={undefined}
                    numberOfMonths={2}
                  />
                </div>
              )}
            </div>

            <label className={styles.searchField}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  stroke="#919191"
                  strokeWidth="1.6"
                />
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

          <button type="button" className={styles.writeButton}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
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

        <div className={styles.tableCard}>
          <div className={styles.tableInner}>
            <div className={styles.headerRow}>
              <span className={styles.colNo}>번호</span>
              <span className={styles.colTitle}>제목</span>
              <span className={styles.colAuthor}>작성자</span>
              <span className={styles.colDate}>날짜</span>
            </div>

            <div className={styles.rows}>
              {POSTS.map((post) => (
                <div key={post.no} className={styles.rowWrap}>
                  <a href={`/trip-talk/${post.no}`} className={styles.row}>
                    <span className={styles.colNo}>{post.no}</span>
                    <span className={styles.colTitle}>{post.title}</span>
                    <span className={styles.colAuthor}>{post.author}</span>
                    <span className={styles.colDate}>{post.date}</span>
                  </a>

                  <button
                    type="button"
                    className={styles.deleteButton}
                    aria-label={`${post.title} 삭제`}
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      // TODO: 삭제 API 연동
                    }}
                  >
                    <span className={styles.deleteIcon} aria-hidden />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <nav className={styles.pagination} aria-label="게시판 페이지">
            <button
              type="button"
              className={styles.pageArrow}
              disabled={page === 1}
              onClick={() => setPage((prev) => Math.max(1, prev - 1))}
              aria-label="이전 페이지"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M15 6l-6 6 6 6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                type="button"
                className={`${styles.pageNumber} ${num === page ? styles.pageNumberActive : ""}`}
                onClick={() => setPage(num)}
              >
                {num}
              </button>
            ))}

            <button
              type="button"
              className={styles.pageArrow}
              disabled={page === TOTAL_PAGES}
              onClick={() => setPage((prev) => Math.min(TOTAL_PAGES, prev + 1))}
              aria-label="다음 페이지"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
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
        </div>
      </div>
    </section>
  );
}
