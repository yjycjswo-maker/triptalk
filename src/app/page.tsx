import Header from "@/components/commons/header";
import HeroBanner from "@/components/hero/banner";
import FeaturedPicks from "@/components/travelproducts/featured-picks";
import StayListing from "@/components/travelproducts/listing";

export default function StayPage() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <FeaturedPicks />
        <StayListing />
      </main>
    </>
  );
}
