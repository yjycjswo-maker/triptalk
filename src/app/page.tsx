import Header from "@/components/commons/header";
import HeroBanner from "@/components/hero/banner";
import HotTalk from "@/components/boards/hot-talk";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <HotTalk />
        {/* Board(게시판 검색바+테이블+페이지네이션)는 만드는 대로 여기에 추가 */}
      </main>
    </>
  );
}
