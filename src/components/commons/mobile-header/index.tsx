"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import styles from "./styles.module.css";

interface MobileHeaderProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  rightSlot1?: ReactNode;
  rightSlot2?: ReactNode;
  loginLabel?: string;
  onLoginClick?: () => void;
}

/**
 * 모바일 서브페이지 상단 앱바.
 * 피그마 Header(device=mobile, type=white) 배리언트 대응.
 * 홈 화면의 데스크탑 전체 nav(Header)와는 별개 컴포넌트입니다.
 */
export default function MobileHeader({
  title,
  showBack = true,
  onBack,
  rightSlot1,
  rightSlot2,
  loginLabel,
  onLoginClick,
}: MobileHeaderProps) {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) {
      onBack();
      return;
    }
    router.back();
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.leftGroup}>
          {showBack && (
            <button
              type="button"
              className={styles.backButton}
              onClick={handleBack}
              aria-label="뒤로가기"
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
          <p className={styles.title}>{title}</p>
        </div>

        <div className={styles.rightGroup}>
          {rightSlot1}
          {rightSlot2}
          {loginLabel && (
            <button
              type="button"
              className={styles.loginText}
              onClick={onLoginClick}
            >
              {loginLabel}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
