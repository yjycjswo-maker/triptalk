"use client";

import { useEffect, useRef, useState } from "react";
import { DayPicker, type DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
import styles from "./styles.module.css";

interface DateRangePickerProps {
  value?: DateRange;
  onChange: (range: DateRange | undefined) => void;
  numberOfMonths?: number;
}

function formatDate(date?: Date) {
  if (!date) return "YYYY.MM.DD";
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}.${m}.${d}`;
}

export default function DateRangePicker({
  value,
  onChange,
  numberOfMonths = 2,
}: DateRangePickerProps) {
  // draftRange: 팝업 안에서 선택 중인 임시값 (확인 누르기 전까지는 여기에만 반영)
  const [draftRange, setDraftRange] = useState<DateRange | undefined>(value);
  const [isOpen, setIsOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const openCalendar = () => {
    setDraftRange(value); // 열 때 현재 확정값으로 초기화
    setIsOpen(true);
  };

  const closeCalendar = () => setIsOpen(false);

  const handleConfirm = () => {
    onChange(draftRange); // 확인 눌러야 실제 값에 반영
    closeCalendar();
  };

  const handleCancel = () => {
    setDraftRange(value); // 임시 선택 버리고 원래 값으로 되돌림
    closeCalendar();
  };

  // 팝업 바깥 클릭하면 선택 취소하고 닫기
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(event.target as Node)) {
        handleCancel();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, value]);

  const dateLabel = value?.from
    ? `${formatDate(value.from)} - ${formatDate(value.to)}`
    : "YYYY.MM.DD - YYYY.MM.DD";

  return (
    <div className={styles.wrap} ref={wrapRef}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => (isOpen ? closeCalendar() : openCalendar())}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect
            x="3"
            y="5"
            width="18"
            height="16"
            rx="2"
            stroke="#777777"
            strokeWidth="1.6"
          />
          <path d="M3 9.5H21" stroke="#777777" strokeWidth="1.6" />
          <path
            d="M8 3V6.5"
            stroke="#777777"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M16 3V6.5"
            stroke="#777777"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
        <span className={styles.triggerText}>{dateLabel}</span>
      </button>

      {isOpen && (
        <div className={styles.popover}>
          <DayPicker
            mode="range"
            selected={draftRange}
            onSelect={setDraftRange}
            numberOfMonths={numberOfMonths}
          />

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={handleCancel}
            >
              취소
            </button>
            <button
              type="button"
              className={styles.confirmButton}
              onClick={handleConfirm}
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
