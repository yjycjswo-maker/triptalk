import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

interface FeaturedCard {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  price: string;
  photoCount: number;
}

const FEATURED_CARDS: FeaturedCard[] = [
  {
    id: 1,
    image: "/img/Purchase/Purchase-1.png",
    title: "포항 : 당장 가고 싶은 숙소",
    subtitle:
      "살어리 살어리랏다 청산(靑山)에 살어리랏다멀위랑 두래랑 먹고 청산(靑山)애 살어리랏다",
    price: "32,900 원",
    photoCount: 24,
  },
  {
    id: 2,
    image: "/img/Purchase/Purchase-3.png",
    title: "강릉 : 마음까지 깨끗해지는 하얀 숙소",
    subtitle: "살어리 살어리랏다 강릉에 평생 살어리랏다",
    price: "32,900 원",
    photoCount: 24,
  },
];

export default function FeaturedPicks() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          2024 끝여름 낭만있게 마무리 하고 싶다면?
        </h2>

        <div className={styles.cardRow}>
          {FEATURED_CARDS.map((card) => (
            <Link
              key={card.id}
              href={`/travelproducts/${card.id}`}
              className={styles.card}
              aria-label={`${card.title} 상세 페이지로 이동`}
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className={styles.cardImage}
              />
              <div className={styles.cardOverlay} />

              <span className={styles.photoBadge}>
                <svg
                  width="14"
                  height="14"
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
                    stroke="white"
                    strokeWidth="1.6"
                  />
                  <circle
                    cx="12"
                    cy="13"
                    r="3.5"
                    stroke="white"
                    strokeWidth="1.6"
                  />
                </svg>
                {card.photoCount}
              </span>

              <div className={styles.cardContent}>
                <p className={styles.cardTitle}>{card.title}</p>
                <p className={styles.cardSubtitle}>{card.subtitle}</p>
                <p className={styles.cardPrice}>{card.price}</p>
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
