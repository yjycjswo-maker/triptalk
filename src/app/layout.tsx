import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TRIP TRIP",
  description: "트립토크 - 여행 이야기를 나누는 공간",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
