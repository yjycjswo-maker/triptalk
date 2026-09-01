"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/commons/header";
import UserProfile from "@/components/mypage/user-profile";
import styles from "./styles.module.css";

type MyPageShellProps = {
  children: React.ReactNode;
};

export default function MyPageShell({ children }: MyPageShellProps) {
  const pathname = usePathname();
  const activeMenu = pathname.startsWith("/my-page/point")
    ? "point"
    : pathname.startsWith("/my-page/password")
      ? "password"
      : pathname.startsWith("/my-page/history") ||
          pathname.startsWith("/my-page/bookmarks")
        ? "history"
        : undefined;

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.heading}>마이 페이지</h1>
          <div className={styles.profileArea}>
            <UserProfile activeMenu={activeMenu} />
          </div>
          {children}
        </div>
      </main>
    </>
  );
}
