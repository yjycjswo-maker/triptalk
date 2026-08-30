"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TRIP_TALK_POSTS } from "@/lib/trip-talk-data";
import BoardSearch from "../board-search";
import BoardTable from "../board-table";
import Pagination from "../pagination";
import styles from "./styles.module.css";

const TOTAL_PAGES = 5;

export default function Board() {
  const router = useRouter();
  const [page, setPage] = useState(1);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>트립토크 게시판</h2>

        <BoardSearch
          onSearch={({ keyword, range }) => {
            // TODO: keyword/range로 실제 검색 API 연동
            console.log(keyword, range);
          }}
          onWriteClick={() => router.push("/trip-talk/write")}
        />

        <div className={styles.tableCard}>
          <BoardTable
            posts={TRIP_TALK_POSTS}
            onDelete={(post) => {
              // TODO: 삭제 API 연동
              console.log("삭제 요청:", post.no);
            }}
          />

          <Pagination
            page={page}
            totalPages={TOTAL_PAGES}
            onPageChange={setPage}
          />
        </div>
      </div>
    </section>
  );
}
