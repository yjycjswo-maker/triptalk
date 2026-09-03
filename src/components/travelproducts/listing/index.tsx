"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useQuery } from "@apollo/client/react";
import type { DateRange } from "react-day-picker";
import DateRangePicker from "@/components/ui/date-range-picker";
import { FetchTravelproductsDocument } from "@/graphql/generated/graphql";
import { getStorageImageUrl } from "@/lib/storage-image";
import { requireLogin } from "@/lib/auth-client";
import styles from "./styles.module.css";

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

export default function StayListing() {
  const router = useRouter();
  const [tab, setTab] = useState<"available" | "closed">("available");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [keyword, setKeyword] = useState("");
  const [submittedKeyword, setSubmittedKeyword] = useState("");
  const [range, setRange] = useState<DateRange | undefined>();
  const { data, loading, error } = useQuery(FetchTravelproductsDocument, {
    variables: {
      page: 1,
      search: submittedKeyword,
      isSoldout: tab === "closed",
    },
    fetchPolicy: "cache-and-network",
  });

  const rooms = (data?.fetchTravelproducts ?? []).filter((room) => {
    if (activeFilters.length === 0) return true;
    const tags = room.tags ?? [];
    return activeFilters.some((filterId) => {
      const label = FILTERS.find((filter) => filter.id === filterId)?.label;
      return label ? tags.some((tag) => tag.includes(label)) : false;
    });
  });

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

            <button
              type="button"
              className={styles.searchButton}
              onClick={() => setSubmittedKeyword(keyword.trim())}
            >
              검색
            </button>
          </div>

          <button
            type="button"
            className={styles.sellButton}
            onClick={() => requireLogin(router, "/travelproducts/new")}
          >
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
                <span
                  className={styles.filterGlyph}
                  style={{
                    WebkitMaskImage: `url("${filter.icon}")`,
                    maskImage: `url("${filter.icon}")`,
                  }}
                  aria-hidden="true"
                />
              </span>
              <span className={styles.filterLabel}>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* 검색/필터가 바뀌어도 이 결과 영역 안에서만 내용을 교체합니다. */}
        <div className={styles.results}>
          {loading && rooms.length === 0 ? (
            <p className={styles.status}>숙박권을 불러오는 중입니다.</p>
          ) : error ? (
            <p className={styles.status}>숙박권을 불러오지 못했습니다.</p>
          ) : rooms.length === 0 ? (
            <p className={styles.status}>조건에 맞는 숙박권이 없습니다.</p>
          ) : (
            <ul className={styles.roomGrid}>
              {rooms.map((room) => {
            const roomImage =
              getStorageImageUrl(room.images?.find(Boolean)) ??
              "/img/Purchase/Purchase-1.png";
            const hostAvatar =
              getStorageImageUrl(room.seller?.picture) ??
              "/img/profile/avatar-1.png";

            return (
            <li key={room._id} className={styles.roomCard}>
              <Link
                href={`/travelproducts/${room._id}`}
                className={styles.roomCardLink}
              >
                <div className={styles.roomThumbnail}>
                  <Image
                    src={roomImage}
                    alt={room.name}
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
                    {room.pickedCount ?? 0}
                  </span>
                </div>

                <p className={styles.roomTitle}>{room.name}</p>
                <p className={styles.roomSubtitle}>{room.remarks}</p>
                <span className={styles.roomTag}>
                  {(room.tags ?? []).map((tag) => `#${tag}`).join(" ")}
                </span>

                <div className={styles.roomFooter}>
                  <div className={styles.roomHost}>
                    <Image
                      src={hostAvatar}
                      alt={room.seller?.name ?? "판매자"}
                      width={18}
                      height={18}
                      className={styles.hostAvatar}
                    />
                    <span>{room.seller?.name ?? "판매자"}</span>
                  </div>
                  <span className={styles.roomPrice}>
                    {(room.price ?? 0).toLocaleString("ko-KR")} 원
                  </span>
                </div>
              </Link>
            </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
