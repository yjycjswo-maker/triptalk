"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

const SLIDES = [
  { id: 1, image: "/img/banner/banner-1.png", alt: "트립토크 배너 1" },
  { id: 2, image: "/img/banner/banner-2.png", alt: "트립토크 배너 2" },
  { id: 3, image: "/img/banner/banner-3.png", alt: "트립토크 배너 3" },
];

const AUTO_PLAY_INTERVAL = 3000; // 3초마다 자동 전환

export default function HeroBanner() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const startTimer = useCallback(() => {
    clearTimer();
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, AUTO_PLAY_INTERVAL);
  }, []);

  useEffect(() => {
    startTimer();
    return clearTimer; // 언마운트 시 인터벌 정리
  }, [startTimer]);

  const handleDotClick = (index: number) => {
    setActive(index);
    startTimer(); // 수동 클릭 시 자동 전환 타이머 리셋
  };

  const handleMouseEnter = () => clearTimer();
  const handleMouseLeave = () => startTimer();

  return (
    <section
      className={styles.hero}
      role="region"
      aria-roledescription="carousel"
      aria-label="트립토크 메인 배너"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${index === active ? styles.slideActive : ""}`}
          aria-hidden={index !== active}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className={styles.slideImage}
          />
        </div>
      ))}

      <div className={styles.dots}>
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`${index + 1}번째 배너 보기`}
            aria-current={index === active}
            className={`${styles.dot} ${index === active ? styles.dotActive : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </section>
  );
}
