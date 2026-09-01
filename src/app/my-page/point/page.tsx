import Header from "@/components/commons/header";
import UserProfile from "@/components/mypage/user-profile";
import PointHistory from "@/components/mypage/point-history";
import styles from "../page.module.css";

export default function PointHistoryPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.heading}>마이 페이지</h1>

          <div className={styles.body}>
            <UserProfile activeMenu="point" />
          </div>

          <PointHistory />
        </div>
      </main>
    </>
  );
}
