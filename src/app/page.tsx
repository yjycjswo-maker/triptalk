import Header from "@/components/commons/header";
import HeroBanner from "@/components/hero/banner";
import HotTalk from "@/components/boards/hot-talk";
import Board from "@/components/boards/board";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <HotTalk />
        <Board />
      </main>
    </>
  );
}
