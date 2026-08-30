"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import DateRangePicker from "@/components/ui/date-range-picker";
import styles from "./styles.module.css";

interface StayRoom {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  tag: string;
  host: string;
  hostAvatar: string;
  price: string;
  bookmarkCount: number;
}

// 각 필터 항목에 해당하는 아이콘 이미지 경로(icon) 추가
const FILTERS = [
  {
    id: "single",
    label: "1인 전용",
    icon: "/icon/shape/outline/Single person accommodation.svg",
  },
  {
    id: "apartment",
    label: "아파트",
    icon: "/icon/shape/outline/apartment.svg",
  },
  { id: "hotel", label: "호텔", icon: "/icon/shape/outline/hotel.svg" },
  { id: "camping", label: "캠핑", icon: "/icon/shape/outline/camp.svg" },
  {
    id: "room-service",
    label: "룸 서비스 가능",
    icon: "/icon/shape/outline/room service.svg",
  },
  { id: "fire", label: "불멍", icon: "/icon/shape/outline/fire.svg" },
  { id: "spa", label: "반신욕스파", icon: "/icon/shape/outline/spa.svg" },
  {
    id: "ocean",
    label: "바다 위 숙소",
    icon: "/icon/shape/outline/house on the sea.svg",
  },
  {
    id: "planterior",
    label: "플랜테리어",
    icon: "/icon/shape/outline/planterior.svg",
  },
];

const ROOMS: StayRoom[] = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  image: `/img/Purchase/Purchase-${(i % 4) + 1}.png`,
  title: "살어리 살어리랏다 청산(靑山)에 살어리랏다...",
  subtitle: "살어리 살어리랏다 청산(靑山)애 살어리랏디멀위랑...",
  tag: "#할인 이벤트 진행중",
  host: "인빈트리",
  hostAvatar: "/img/profile/avatar-1.png",
  price: "32,900 원",
  bookmarkCount: 24,
}));

export default function StayListing() {
  const [tab, setTab] = useState<"available" | "closed">("available");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [keyword, setKeyword] = useState("");
  const [range, setRange] = useState<DateRange | undefined>();

  const toggleFilter = (id: string) => {
    setActiveFilters((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id],
    );
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>여기에서만 예약할 수 있는 숙소</h2>

        {/* 탭 */}
        <div className={styles.tabs}>
          <button
            type="button"
            className={`${styles.tab} ${tab === "available" ? styles.tabActive : ""}`}
            onClick={() => setTab("available")}
          >
            예약 가능 숙소
          </button>
          <button
            type="button"
            className={`${styles.tab} ${tab === "closed" ? styles.tabActive : ""}`}
            onClick={() => setTab("closed")}
          >
            예약 마감 숙소
          </button>
        </div>

        {/* 검색바 */}
        <div className={styles.searchRow}>
          <div className={styles.leftGroup}>
            <DateRangePicker value={range} onChange={setRange} />

            <label className={styles.searchField}>
              <svg
                width="20"
                height="20"
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

            <button type="button" className={styles.searchButton}>
              검색
            </button>
          </div>

          <button type="button" className={styles.sellButton}>
            <svg
              width="16"
              height="16"
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
            숙박권 판매하기
          </button>
        </div>

        {/* 필터 아이콘 */}
        <div className={styles.filterRow}>
          {FILTERS.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className={`${styles.filterItem} ${activeFilters.includes(filter.id) ? styles.filterItemActive : ""}`}
              onClick={() => toggleFilter(filter.id)}
            >
              <span className={styles.filterIcon}>
                <Image
                  src={filter.icon}
                  alt={filter.label}
                  width={28}
                  height={28}
                />
              </span>
              <span className={styles.filterLabel}>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* 숙소 카드 그리드 */}
        <ul className={styles.roomGrid}>
          {ROOMS.map((room) => (
            <li key={room.id} className={styles.roomCard}>
              <Link
                href={`/travelproducts/${room.id}`}
                className={styles.roomCardLink}
              >
                <div className={styles.roomThumbnail}>
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className={styles.roomImage}
                  />
                  <span className={styles.roomBookmarkBadge}>
                    <Image
                      src="/icon/shape/outline/bookmark.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                    {room.bookmarkCount}
                  </span>
                </div>

                <p className={styles.roomTitle}>{room.title}</p>
                <p className={styles.roomSubtitle}>{room.subtitle}</p>
                <span className={styles.roomTag}>{room.tag}</span>

                <div className={styles.roomFooter}>
                  <div className={styles.roomHost}>
                    <Image
                      src={room.hostAvatar}
                      alt={room.host}
                      width={18}
                      height={18}
                      className={styles.hostAvatar}
                    />
                    <span>{room.host}</span>
                  </div>
                  <span className={styles.roomPrice}>{room.price}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
