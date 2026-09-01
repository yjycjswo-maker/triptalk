"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.css";

interface Product {
  no: number;
  name: string;
  sold: boolean;
  price: string;
  date: string;
  seller: string;
}

const PRODUCTS: Product[] = [
  {
    no: 243,
    name: "파르나스 호텔 제주",
    sold: true,
    price: "326,000원",
    date: "2024.12.16",
    seller: "홍길동",
  },
  {
    no: 243,
    name: "파르나스 호텔 제주",
    sold: false,
    price: "326,000원",
    date: "2024.12.16",
    seller: "홍길동",
  },
  {
    no: 243,
    name: "파르나스 호텔 제주",
    sold: true,
    price: "326,000원",
    date: "2024.12.16",
    seller: "홍길동",
  },
  {
    no: 243,
    name: "파르나스 호텔 제주",
    sold: true,
    price: "326,000원",
    date: "2024.12.16",
    seller: "홍길동",
  },
  {
    no: 243,
    name: "파르나스 호텔 제주",
    sold: false,
    price: "326,000원",
    date: "2024.12.16",
    seller: "홍길동",
  },
  {
    no: 243,
    name: "파르나스 호텔 제주",
    sold: false,
    price: "326,000원",
    date: "2024.12.16",
    seller: "홍길동",
  },
  {
    no: 243,
    name: "파르나스 호텔 제주",
    sold: false,
    price: "326,000원",
    date: "2024.12.16",
    seller: "홍길동",
  },
  {
    no: 243,
    name: "파르나스 호텔 제주",
    sold: false,
    price: "326,000원",
    date: "2024.12.16",
    seller: "홍길동",
  },
  {
    no: 243,
    name: "파르나스 호텔 제주",
    sold: false,
    price: "326,000원",
    date: "2024.12.16",
    seller: "홍길동",
  },
];

type ProductListProps = {
  mode?: "products" | "bookmarks";
};

export default function ProductList({ mode = "products" }: ProductListProps) {
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState(PRODUCTS);
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(keyword.trim().toLowerCase()),
  );

  return (
    <div className={styles.wrap}>
      {/* 탭 */}
      <div className={styles.tabs}>
        <Link
          href="/my-page/history"
          className={`${styles.tab} ${mode === "products" ? styles.tabActive : ""}`}
        >
          나의 상품
        </Link>
        <Link
          href="/my-page/bookmarks"
          className={`${styles.tab} ${mode === "bookmarks" ? styles.tabActive : ""}`}
        >
          북마크
        </Link>
      </div>

      {/* 검색바 - 게시판과 달리 날짜 필터 없이 검색창만 */}
      <form
        className={styles.searchRow}
        onSubmit={(event) => {
          event.preventDefault();
          // TODO: keyword로 실제 검색 API 연동
        }}
      >
        <label className={styles.searchField}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <circle cx="11" cy="11" r="7" stroke="#919191" strokeWidth="1.6" />
            <path
              d="M21 21L16.5 16.5"
              stroke="#919191"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
          <input
            type="text"
            placeholder="필요한 내용을 검색해 주세요."
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
          />
        </label>
        <button type="submit" className={styles.searchButton}>
          검색
        </button>
      </form>

      {/* 상품 테이블 - 게시판(BoardTable)과 동일한 구조, 컬럼만 다름 */}
      <div className={styles.tableInner}>
        <div className={styles.headerRow}>
          <span className={styles.colNo}>번호</span>
          <span className={styles.colName}>상품 명</span>
          <span className={styles.colPrice}>판매가격</span>
          {mode === "bookmarks" && (
            <span className={styles.colSeller}>판매자</span>
          )}
          <span className={styles.colDate}>날짜</span>
        </div>

        <div className={styles.rows}>
          {filteredProducts.map((product, index) => (
            <div key={index} className={styles.rowWrap}>
              <a
                href={`/my-page/products/${product.no}-${index}`}
                className={styles.row}
              >
                <span className={styles.colNo}>{product.no}</span>
                <span className={styles.colName}>
                  {product.name}
                  {product.sold && (
                    <span className={styles.soldBadge}>판매 완료</span>
                  )}
                </span>
                <span className={styles.colPrice}>{product.price}</span>
                {mode === "bookmarks" && (
                  <span className={styles.colSeller}>{product.seller}</span>
                )}
                <span className={styles.colDate}>{product.date}</span>
              </a>

              <button
                type="button"
                className={styles.deleteButton}
                aria-label={`${product.name} 삭제`}
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  setProducts((current) =>
                    current.filter((item) => item !== product),
                  );
                }}
              >
                <span className={styles.deleteIcon} aria-hidden />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
