import MyPageShell from "@/components/mypage/my-page-shell";

export default function MyPageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <MyPageShell>{children}</MyPageShell>;
}
