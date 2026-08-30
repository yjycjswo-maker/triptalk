export interface TripTalkPost {
  no: number;
  title: string;
  author: string;
  date: string;
}

export const TRIP_TALK_POSTS: TripTalkPost[] = [
  { no: 243, title: "제주 살이 1일차", author: "홍길동", date: "2024.12.16" },
  { no: 242, title: "강남 살이 100년차", author: "홍길동", date: "2024.12.16" },
  {
    no: 241,
    title: "길 걷고 있었는데 고양이한테 간택 받았어요",
    author: "홍길동",
    date: "2024.12.16",
  },
  {
    no: 240,
    title: "오늘 날씨 너무 좋아서 바다보러 왔어요~",
    author: "홍길동",
    date: "2024.12.16",
  },
  {
    no: 239,
    title: "누가 양양 핫하다고 했어 나밖에 없는데?",
    author: "홍길동",
    date: "2024.12.16",
  },
  {
    no: 238,
    title: "여름에 보드타고 싶은거 저밖에 없나요 🥲",
    author: "홍길동",
    date: "2024.12.16",
  },
  {
    no: 237,
    title:
      "사무실에서 과자 너무 많이 먹은거 같아요 다이어트하러 여행 가야겠어요",
    author: "홍길동",
    date: "2024.12.16",
  },
  {
    no: 236,
    title: "여기는 기승전 여행이네요 ㅋㅋㅋ",
    author: "홍길동",
    date: "2024.12.16",
  },
  {
    no: 235,
    title: "상여금 들어왔는데 이걸로 다낭갈까 사이판 갈까",
    author: "홍길동",
    date: "2024.12.16",
  },
  {
    no: 234,
    title: "강릉 여름바다 보기 좋네요",
    author: "홍길동",
    date: "2024.12.16",
  },
];

export function getTripTalkPost(no: number): TripTalkPost | undefined {
  return TRIP_TALK_POSTS.find((post) => post.no === no);
}
