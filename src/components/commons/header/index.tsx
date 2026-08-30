"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";

const NAV_ITEMS = [
  { label: "트립토크", href: "/trip-talk" },
  { label: "숙박권 구매", href: "/travelproducts" },
  { label: "마이 페이지", href: "/my-page" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.leftGroup}>
          <Link href="/trip-talk" className={styles.logo}>
            <Image
              src="/icon/logo/black_size_m.svg"
              alt="TRIP TRIP"
              width={52}
              height={32}
              priority
            />
          </Link>

          <nav className={styles.nav}>
            {NAV_ITEMS.map((item) => {
              const isActive = pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.navItem} ${isActive ? styles.navItemActive : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <Link href="/login" className={styles.loginButton}>
          로그인
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
            className={styles.loginIcon}
          >
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </header>
  );
}
