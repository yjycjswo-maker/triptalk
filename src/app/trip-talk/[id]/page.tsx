import { notFound } from "next/navigation";
import Header from "@/components/commons/header";
import TripTalkDetail from "@/components/boards/trip-talk-detail";
import { getTripTalkPost } from "@/lib/trip-talk-data";

interface PageProps {
  params: Promise<{ id: string }>; // Next.js 15+ 부터 params가 Promise로 바뀜
}

// TODO: 실제로는 params.id로 API 조회 (지금은 게시판 목데이터에서 찾아옴)
export default async function TripTalkDetailPage({ params }: PageProps) {
  const { id } = await params; // Promise이므로 await 필요
  const post = getTripTalkPost(Number(id));

  if (!post) {
    notFound(); // 목데이터에 없는 번호면 404 처리
  }

  return (
    <>
      <Header />
      <main>
        <TripTalkDetail
          title={post.title}
          author={post.author}
          avatar="/img/profile/avatar-1.png"
          date={post.date}
          address="서울 특별시 강남구 신논현로 111-6"
          mainImage="/img/triptalk/img-1.png"
          bodyParagraphs={[
            "살겠노라 살겠노라, 청산에 살겠노라.\n머루랑 다래를 먹고 청산에 살겠노라.",
            "우는구나 우는구나 새여, 자고 일어나 우는구나 새여.\n너보다 시름 많은 나도 자고 일어나 우노라.",
          ]}
          videoThumbnail="/img/triptalk/video-thumb-1.png"
          viewCount={24}
          likeCount={12}
        />
      </main>
    </>
  );
}
