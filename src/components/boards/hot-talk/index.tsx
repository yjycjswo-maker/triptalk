import Image from "next/image";
import styles from "./styles.module.css";

interface HotTalkItem {
  id: number;
  title: string;
  author: string;
  avatar: string;
  image: string;
  likes: number;
  date: string;
}

const HOT_TALKS: HotTalkItem[] = [
  {
    id: 1,
    title: "제주 살이 1일차 청산별곡이 생각나네요",
    author: "홍길동",
    avatar: "/img/profile/avatar-1.png",
    image: "/img/hot-talk/hot-1.png",
    likes: 24,
    date: "2024.11.11",
  },
  {
    id: 2,
    title: "길 걷고 있었는데 고양이한테 간택 받았어요",
    author: "홍길동",
    avatar: "/img/profile/avatar-2.png",
    image: "/img/hot-talk/hot-2.png",
    likes: 24,
    date: "2024.11.11",
  },
  {
    id: 3,
    title: "강릉 여름바다 보기 좋네요 서핑하고 싶어요!",
    author: "홍길동",
    avatar: "/img/profile/avatar-3.png",
    image: "/img/hot-talk/hot-3.png",
    likes: 24,
    date: "2024.11.11",
  },
  {
    id: 4,
    title: "누가 양양 핫하다고 했어 나밖에 없는데?",
    author: "홍길동",
    avatar: "/img/profile/avatar-4.png",
    image: "/img/hot-talk/hot-4.png",
    likes: 24,
    date: "2024.11.11",
  },
];

export default function HotTalk() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>오늘 핫한 트립토크</h2>

        <ul className={styles.cardArea}>
          {HOT_TALKS.map((item) => (
            <li key={item.id} className={styles.card}>
              <div className={styles.thumbnail}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="112px"
                  className={styles.thumbnailImg}
                />
              </div>

              <div className={styles.content}>
                <div className={styles.top}>
                  <p className={styles.title}>{item.title}</p>

                  <div className={styles.profile}>
                    <Image
                      src={item.avatar}
                      alt={item.author}
                      width={24}
                      height={24}
                      className={styles.avatar}
                    />
                    <span className={styles.author}>{item.author}</span>
                  </div>
                </div>

                <div className={styles.bottom}>
                  <span className={styles.likes}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M12 21s-6.7-4.35-9.3-8.2C1 10.2 1.6 6.9 4.3 5.3c2.2-1.3 4.9-.7 6.4 1.2l1.3 1.6 1.3-1.6c1.5-1.9 4.2-2.5 6.4-1.2 2.7 1.6 3.3 4.9 1.6 7.5C18.7 16.65 12 21 12 21z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item.likes}
                  </span>
                  <span className={styles.date}>{item.date}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
