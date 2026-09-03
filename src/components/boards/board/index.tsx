"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@apollo/client/react";
import { format } from "date-fns";
import { FetchBoardsDocument } from "@/graphql/generated/graphql";
import { requireLogin } from "@/lib/auth-client";
import BoardSearch from "../board-search";
import BoardTable, { type BoardListItem } from "../board-table";
import Pagination from "../pagination";
import styles from "./styles.module.css";

const POSTS_PER_PAGE = 10;

export default function Board() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialPage = Math.max(Number(searchParams.get("page")) || 1, 1);
  const initialSearch = searchParams.get("search") ?? "";
  const initialStartDate = searchParams.get("startDate") ?? undefined;
  const initialEndDate = searchParams.get("endDate") ?? undefined;
  const [page, setPage] = useState(initialPage);
  const [search, setSearch] = useState(initialSearch);
  const [startDate, setStartDate] = useState<string | undefined>(initialStartDate);
  const [endDate, setEndDate] = useState<string | undefined>(initialEndDate);
  const [searchResetKey, setSearchResetKey] = useState(0);
  const { data, loading, error, refetch } = useQuery(FetchBoardsDocument, {
    variables: { page, search, startDate, endDate },
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    const resetBoard = () => {
      setPage(1);
      setSearch("");
      setStartDate(undefined);
      setEndDate(undefined);
      setSearchResetKey((current) => current + 1);
      void refetch({
        page: 1,
        search: "",
        startDate: undefined,
        endDate: undefined,
      });
    };

    window.addEventListener("trip-talk:reset", resetBoard);

    const navigation = performance.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming | undefined;

    // 뒤로 가기는 URL의 검색 상태를 복원하고, 실제 새로고침은 초기 목록으로 돌아갑니다.
    if (navigation?.type === "reload" && searchParams.size > 0) {
      resetBoard();
      router.replace("/trip-talk", { scroll: false });
    }

    return () => window.removeEventListener("trip-talk:reset", resetBoard);
  }, [refetch, router, searchParams]);

  const totalCount = data?.fetchBoardsCount ?? 0;
  const totalPages = Math.max(1, Math.ceil(totalCount / POSTS_PER_PAGE));
  const posts: BoardListItem[] = (data?.fetchBoards ?? []).map(
    (post, index) => ({
      id: post._id,
      no: Math.max(totalCount - (page - 1) * POSTS_PER_PAGE - index, 1),
      title: post.title,
      author: post.writer ?? "익명",
      date: format(new Date(String(post.createdAt)), "yyyy.MM.dd"),
    }),
  );

  const updateBoardUrl = (
    nextPage: number,
    nextSearch: string,
    nextStartDate?: string,
    nextEndDate?: string,
  ) => {
    const params = new URLSearchParams();
    if (nextPage > 1) params.set("page", String(nextPage));
    if (nextSearch) params.set("search", nextSearch);
    if (nextStartDate) params.set("startDate", nextStartDate);
    if (nextEndDate) params.set("endDate", nextEndDate);
    const query = params.toString();
    router.replace(query ? `/trip-talk?${query}` : "/trip-talk", {
      scroll: false,
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>트립토크 게시판</h2>

        <BoardSearch
          key={searchResetKey}
          initialKeyword={search}
          initialRange={
            startDate
              ? {
                  from: new Date(startDate),
                  to: endDate ? new Date(endDate) : undefined,
                }
              : undefined
          }
          onSearch={({ keyword, range }) => {
            const nextSearch = keyword.trim();
            const nextStartDate = range?.from?.toISOString();
            const nextEndDate = range?.to?.toISOString();
            setSearch(nextSearch);
            setStartDate(nextStartDate);
            setEndDate(nextEndDate);
            setPage(1);
            updateBoardUrl(1, nextSearch, nextStartDate, nextEndDate);
          }}
          onWriteClick={() => requireLogin(router, "/trip-talk/write")}
        />

        <div className={styles.tableCard}>
          {loading ? (
            <p className={styles.status}>게시글을 불러오는 중입니다.</p>
          ) : error ? (
            <p className={styles.status}>게시글을 불러오지 못했습니다.</p>
          ) : posts.length === 0 ? (
            <p className={styles.status}>등록된 게시글이 없습니다.</p>
          ) : (
            <BoardTable posts={posts} />
          )}

          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={(nextPage) => {
              setPage(nextPage);
              updateBoardUrl(nextPage, search, startDate, endDate);
            }}
          />
        </div>
      </div>
    </section>
  );
}
