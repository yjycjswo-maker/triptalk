import Link from "next/link";
import styles from "./styles.module.css";

export interface BoardListItem {
  id: string;
  no: number;
  title: string;
  author: string;
  date: string;
}

interface BoardTableProps {
  posts: BoardListItem[];
  onDelete?: (post: BoardListItem) => void;
}

export default function BoardTable({ posts, onDelete }: BoardTableProps) {
  return (
    <div className={styles.tableInner}>
      <div className={styles.headerRow}>
        <span className={styles.colNo}>번호</span>
        <span className={styles.colTitle}>제목</span>
        <span className={styles.colAuthor}>작성자</span>
        <span className={styles.colDate}>날짜</span>
      </div>

      <div className={styles.rows}>
        {posts.map((post) => (
          <div key={post.no} className={styles.rowWrap}>
            <Link href={`/trip-talk/${post.id}`} className={styles.row}>
              <span className={styles.colNo}>{post.no}</span>
              <span className={styles.colTitle}>{post.title}</span>
              <span className={styles.colAuthor}>{post.author}</span>
              <span className={styles.colDate}>{post.date}</span>
            </Link>

            <button
              type="button"
              className={styles.deleteButton}
              aria-label={`${post.title} 삭제`}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                onDelete?.(post);
              }}
            >
              <span className={styles.deleteIcon} aria-hidden />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
