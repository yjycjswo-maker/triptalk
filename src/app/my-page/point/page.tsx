import Header from "@/components/commons/header";
import ProfileCard from "@/components/mypage/profile-card";
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
            <ProfileCard
              name="김상훈"
              avatar="/img/profile/avatar-1.png"
              point={23000}
              activeMenu="point"
            />
          </div>

          <PointHistory />
        </div>
      </main>
    </>
  );
}
