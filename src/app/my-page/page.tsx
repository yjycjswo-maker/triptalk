import Header from "@/components/commons/header";
import UserProfile from "@/components/mypage/user-profile";
import ProductList from "@/components/mypage/product-list";
import styles from "./page.module.css";

export default function MyPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.heading}>마이 페이지</h1>

          <div className={styles.body}>
            <UserProfile />
          </div>

          <ProductList />
        </div>
      </main>
    </>
  );
}
