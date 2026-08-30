"use client";

import { useState } from "react";
import Pagination from "@/components/boards/pagination";
import styles from "./styles.module.css";

type TabId = "all" | "charge" | "purchase" | "sale";

/* 전체 탭용 데이터 */
interface AllTx {
  date: string;
  type: "충전" | "구매" | "판매";
  amount: number;
  balance: number;
}

/* 충전내역 탭용 데이터 */
interface ChargeTx {
  date: string;
  paymentId: string;
  amount: number; // 항상 +
  balance: number;
}

/* 구매내역 탭용 데이터 */
interface PurchaseTx {
  date: string;
  productName: string;
  amount: number; // 항상 -
  balance: number;
  seller: string;
}

/* 판매내역 탭용 데이터 */
interface SaleTx {
  date: string;
  productName: string;
  amount: number; // 항상 +
  balance: number;
}

const ALL_TX: AllTx[] = [
  { date: "2024.12.16", type: "충전", amount: 1000000, balance: 1222000 },
  { date: "2024.12.16", type: "구매", amount: -50000, balance: 1222000 },
  { date: "2024.12.16", type: "판매", amount: 1000000, balance: 1222000 },
  { date: "2024.12.16", type: "충전", amount: 1000000, balance: 1222000 },
  { date: "2024.12.16", type: "충전", amount: 1000000, balance: 1222000 },
  { date: "2024.12.16", type: "구매", amount: -50000, balance: 1222000 },
  { date: "2024.12.16", type: "구매", amount: -50000, balance: 1222000 },
  { date: "2024.12.16", type: "판매", amount: 1000000, balance: 1222000 },
  { date: "2024.12.16", type: "판매", amount: 1000000, balance: 1222000 },
  { date: "2024.12.16", type: "구매", amount: -50000, balance: 1222000 },
];

const CHARGE_TX: ChargeTx[] = Array.from({ length: 10 }, () => ({
  date: "2024.12.16",
  paymentId: "abcd1243",
  amount: 1000000,
  balance: 1222000,
}));

const PURCHASE_TX: PurchaseTx[] = Array.from({ length: 10 }, () => ({
  date: "2024.12.16",
  productName: "파르나스 호텔 제주",
  amount: -1000000,
  balance: 1222000,
  seller: "홍길동",
}));

const SALE_TX: SaleTx[] = Array.from({ length: 10 }, () => ({
  date: "2024.12.16",
  productName: "파르나스 호텔 제주",
  amount: 1000000,
  balance: 1222000,
}));

const TABS: { id: TabId; label: string }[] = [
  { id: "all", label: "전체" },
  { id: "charge", label: "충전내역" },
  { id: "purchase", label: "구매내역" },
  { id: "sale", label: "판매내역" },
];

const TOTAL_PAGES = 5;

function formatAmount(amount: number) {
  const sign = amount > 0 ? "+" : "-";
  return `${sign}${Math.abs(amount).toLocaleString()}`;
}

export default function PointHistory() {
  const [tab, setTab] = useState<TabId>("all");
  const [page, setPage] = useState(1);

  return (
    <div className={styles.wrap}>
      <div className={styles.tabs}>
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`${styles.tab} ${tab === t.id ? styles.tabActive : ""}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className={styles.tableCard}>
        {tab === "all" && (
          <>
            <div className={styles.headerRow}>
              <span className={styles.colDate}>날짜</span>
              <span className={styles.colType}>내용</span>
              <span className={styles.colAmountFlex}>거래 및 충전 내역</span>
              <span className={styles.colBalance}>잔액</span>
            </div>
            <div className={styles.rows}>
              {ALL_TX.map((tx, i) => (
                <div key={i} className={styles.row}>
                  <span className={styles.colDate}>{tx.date}</span>
                  <span className={styles.colType}>{tx.type}</span>
                  <span
                    className={`${styles.colAmountFlex} ${tx.amount > 0 ? styles.amountPlus : styles.amountMinus}`}
                  >
                    {formatAmount(tx.amount)}
                  </span>
                  <span className={styles.colBalance}>
                    {tx.balance.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}

        {tab === "charge" && (
          <>
            <div className={styles.headerRow}>
              <span className={styles.colDate}>충전일</span>
              <span className={styles.colPaymentId}>결제 ID</span>
              <span className={styles.colAmountFlex}>충전내역</span>
              <span className={styles.colBalance}>거래 후 잔액</span>
            </div>
            <div className={styles.rows}>
              {CHARGE_TX.map((tx, i) => (
                <div key={i} className={styles.row}>
                  <span className={styles.colDate}>{tx.date}</span>
                  <span className={styles.colPaymentId}>{tx.paymentId}</span>
                  <span
                    className={`${styles.colAmountFlex} ${styles.amountPlus}`}
                  >
                    {formatAmount(tx.amount)}
                  </span>
                  <span className={styles.colBalance}>
                    {tx.balance.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}

        {tab === "purchase" && (
          <>
            <div className={styles.headerRow}>
              <span className={styles.colDate}>거래일</span>
              <span className={styles.colProduct}>상품 명</span>
              <span className={styles.colAmountFlex}>거래내역</span>
              <span className={styles.colBalance}>거래 후 잔액</span>
              <span className={styles.colSeller}>판매자</span>
            </div>
            <div className={styles.rows}>
              {PURCHASE_TX.map((tx, i) => (
                <div key={i} className={styles.row}>
                  <span className={styles.colDate}>{tx.date}</span>
                  <span className={styles.colProduct}>{tx.productName}</span>
                  <span
                    className={`${styles.colAmountFlex} ${styles.amountMinus}`}
                  >
                    {formatAmount(tx.amount)}
                  </span>
                  <span className={styles.colBalance}>
                    {tx.balance.toLocaleString()}
                  </span>
                  <a href={`/users/${tx.seller}`} className={styles.colSeller}>
                    {tx.seller}
                  </a>
                </div>
              ))}
            </div>
          </>
        )}

        {tab === "sale" && (
          <>
            <div className={styles.headerRow}>
              <span className={styles.colDate}>거래일</span>
              <span className={styles.colProduct}>상품 명</span>
              <span className={styles.colAmountFlex}>거래내역</span>
              <span className={styles.colBalance}>거래 후 잔액</span>
            </div>
            <div className={styles.rows}>
              {SALE_TX.map((tx, i) => (
                <div key={i} className={styles.row}>
                  <span className={styles.colDate}>{tx.date}</span>
                  <span className={styles.colProduct}>{tx.productName}</span>
                  <span
                    className={`${styles.colAmountFlex} ${styles.amountPlus}`}
                  >
                    {formatAmount(tx.amount)}
                  </span>
                  <span className={styles.colBalance}>
                    {tx.balance.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}

        <Pagination
          page={page}
          totalPages={TOTAL_PAGES}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
