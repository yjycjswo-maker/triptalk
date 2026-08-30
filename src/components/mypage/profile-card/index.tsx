import Image from "next/image";
import styles from "./styles.module.css";

interface ProfileCardProps {
  name: string;
  avatar: string;
  point: number;
  activeMenu?: "history" | "point" | "password";
}

const MENU_ITEMS = [
  { id: "history", label: "거래내역&북마크", href: "/my-page/history" },
  { id: "point", label: "포인트 사용 내역", href: "/my-page/point" },
  { id: "password", label: "비밀번호 변경", href: "/my-page/password" },
] as const;

export default function ProfileCard({
  name,
  avatar,
  point,
  activeMenu,
}: ProfileCardProps) {
  return (
    <div className={styles.card}>
      <p className={styles.title}>내 정보</p>

      <div className={styles.profileRow}>
        <Image
          src={avatar}
          alt={name}
          width={32}
          height={32}
          className={styles.avatar}
        />
        <span className={styles.name}>{name}</span>
      </div>

      <div className={styles.pointRow}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect
            x="2"
            y="6"
            width="20"
            height="14"
            rx="2"
            stroke="#1c1c1c"
            strokeWidth="1.6"
          />
          <path d="M2 10h20" stroke="#1c1c1c" strokeWidth="1.6" />
        </svg>
        <span className={styles.pointText}>{point.toLocaleString()} P</span>
      </div>

      <nav className={styles.menuList}>
        {MENU_ITEMS.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`${styles.menuItem} ${activeMenu === item.id ? styles.menuItemActive : ""}`}
          >
            <span>{item.label}</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M9 6l6 6-6 6"
                stroke="#919191"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        ))}
      </nav>
    </div>
  );
}
