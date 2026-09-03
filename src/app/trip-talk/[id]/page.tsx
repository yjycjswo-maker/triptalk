"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@apollo/client/react";
import { format } from "date-fns";
import Header from "@/components/commons/header";
import TripTalkDetail from "@/components/boards/trip-talk-detail";
import { FetchBoardDocument } from "@/graphql/generated/graphql";

export default function TripTalkDetailPage() {
  const params = useParams<{ id: string }>();
  const { data, loading, error } = useQuery(FetchBoardDocument, {
    variables: { boardId: params.id },
    skip: !params.id,
  });
  const board = data?.fetchBoard;
  const storedImage = board?.images?.find(Boolean) ?? "";
  const mainImage = storedImage.startsWith("http")
    ? storedImage
    : storedImage
      ? `https://storage.googleapis.com/${storedImage}`
      : "";
  const address = [
    board?.boardAddress?.address,
    board?.boardAddress?.addressDetail,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <Header />
      <main>
        {loading && <p>게시글을 불러오는 중입니다.</p>}
        {error && <p>게시글을 불러오지 못했습니다.</p>}
        {board && (
          <TripTalkDetail
            title={board.title}
            author={board.writer ?? "익명"}
            avatar="/img/profile/avatar-1.png"
            date={format(new Date(String(board.createdAt)), "yyyy.MM.dd")}
            address={address}
            mainImage={mainImage}
            bodyParagraphs={[board.contents]}
            videoThumbnail=""
            viewCount={0}
            likeCount={board.likeCount}
          />
        )}
      </main>
    </>
  );
}
