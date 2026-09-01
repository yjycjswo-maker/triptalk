"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client/react";
import { UPDATE_USER_PICTURE } from "@/graphql/mutations";
import { FETCH_USER_LOGGED_IN } from "@/graphql/queries";
import styles from "./styles.module.css";

const NAV_ITEMS = [
  { label: "트립토크", href: "/trip-talk" },
  { label: "숙박권 구매", href: "/travelproducts" },
  { label: "마이 페이지", href: "/my-page" },
];

const DEFAULT_AVATAR = "/img/profile/img-5.png";
const AVATARS = [
  DEFAULT_AVATAR,
  "/img/profile/img.png",
  "/img/profile/img-1.png",
  "/img/profile/img-2.png",
  "/img/profile/img-3.png",
  "/img/profile/img-4.png",
  "/img/profile/img-6.png",
  "/img/profile/img-7.png",
  "/img/profile/img-8.png",
];

type LoggedInUserData = {
  fetchUserLoggedIn: {
    name: string;
    picture: string | null;
  };
};

type UpdateUserPictureVariables = {
  updateUserInput: {
    picture: string;
  };
};

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const isLoggedIn =
    !isLoggedOut &&
    typeof window !== "undefined" &&
    Boolean(localStorage.getItem("accessToken"));
  const { data, refetch } = useQuery<LoggedInUserData>(FETCH_USER_LOGGED_IN, {
    skip: !isLoggedIn,
  });
  const [updateUserPicture, { loading: isSavingPicture }] = useMutation<
    unknown,
    UpdateUserPictureVariables
  >(UPDATE_USER_PICTURE);

  const selectedAvatar = AVATARS.includes(data?.fetchUserLoggedIn.picture ?? "")
    ? data?.fetchUserLoggedIn.picture ?? DEFAULT_AVATAR
    : DEFAULT_AVATAR;

  const handleAvatarSelect = async (picture: string) => {
    try {
      await updateUserPicture({
        variables: { updateUserInput: { picture } },
      });
      await refetch();
      setIsMenuOpen(false);
    } catch {
      // 프로필 저장에 실패해도 현재 메뉴를 유지해 다시 선택할 수 있도록 합니다.
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedOut(true);
    setIsMenuOpen(false);
    router.replace("/trip-talk");
  };

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

        {isLoggedIn && data ? (
          <div className={styles.profileMenu}>
            <button
              type="button"
              className={styles.profileTrigger}
              onClick={() => setIsMenuOpen((current) => !current)}
              aria-expanded={isMenuOpen}
              aria-haspopup="menu"
            >
              <Image
                src={selectedAvatar}
                alt={`${data.fetchUserLoggedIn.name} 프로필`}
                width={32}
                height={32}
                className={styles.profileAvatar}
              />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {isMenuOpen && (
              <div className={styles.profileDropdown} role="menu">
                <p className={styles.profileMenuTitle}>프로필 이미지</p>
                <div className={styles.avatarGrid}>
                  {AVATARS.map((avatar) => (
                    <button
                      key={avatar}
                      type="button"
                      className={`${styles.avatarOption} ${selectedAvatar === avatar ? styles.avatarOptionActive : ""}`}
                      onClick={() => handleAvatarSelect(avatar)}
                      disabled={isSavingPicture}
                      aria-label="프로필 이미지 선택"
                    >
                      <Image src={avatar} alt="" width={36} height={36} />
                    </button>
                  ))}
                </div>
                <Link href="/my-page" className={styles.profileLink} onClick={() => setIsMenuOpen(false)}>
                  마이페이지
                </Link>
                <button type="button" className={styles.logoutButton} onClick={handleLogout}>
                  로그아웃
                </button>
              </div>
            )}
          </div>
        ) : (
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
        )}
      </div>
    </header>
  );
}
