"use client";

import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@apollo/client/react";
import { FetchTravelproductsOfTheBestDocument } from "@/graphql/generated/graphql";
import { getStorageImageUrl } from "@/lib/storage-image";
import styles from "./styles.module.css";

export default function FeaturedPicks() {
  const { data } = useQuery(FetchTravelproductsOfTheBestDocument);
  const featuredCards = (data?.fetchTravelproductsOfTheBest ?? []).slice(0, 2);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          2024 끝여름 낭만있게 마무리 하고 싶다면?
        </h2>

        <div className={styles.cardRow}>
          {featuredCards.map((card) => (
            <Link
              key={card._id}
              href={`/travelproducts/${card._id}`}
              className={styles.card}
              aria-label={`${card.name} 상세 페이지로 이동`}
            >
              <Image
                src={
                  getStorageImageUrl(card.images?.find(Boolean)) ??
                  "/img/Purchase/Purchase-1.png"
                }
                alt={card.name}
                fill
                className={styles.cardImage}
              />
              <div className={styles.cardOverlay} />

              <span className={styles.photoBadge}>
                <Image
                  src="/icon/shape/outline/bookmark.svg"
                  alt=""
                  width={16}
                  height={16}
                />
                {card.pickedCount ?? 0}
              </span>

              <div className={styles.cardContent}>
                <p className={styles.cardTitle}>{card.name}</p>
                <p className={styles.cardSubtitle}>{card.remarks}</p>
                <p className={styles.cardPrice}>
                  {(card.price ?? 0).toLocaleString("ko-KR")} 원
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* 프로모 배너 */}
        <div className={styles.promoBanner}>
          <Image
            src="/img/stay/promo-banner.png"
            alt="빌 페소 르꼬 전시회 근처 숙소 특가 예약"
            fill
            className={styles.promoImage}
          />
          <div className={styles.promoContent}>
            <div className={styles.promoTags}>
              <span className={styles.promoTag}>
                &apos;슬로트랄&apos; 특점 숙소
              </span>
              <span className={styles.promoTag}>9.24 얼리버드 오픈 예약</span>
            </div>
            <p className={styles.promoTitle}>
              천만 관객이 사랑한 빌 페소 르꼬 전시회 근처 숙소 특가 예약
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
