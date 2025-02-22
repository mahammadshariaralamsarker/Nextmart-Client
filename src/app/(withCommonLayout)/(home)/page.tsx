

import FlashSale from "@/components/modules/FlashSale";
import Category from "@/components/modules/home/Category";
import FeaturedProducts from "@/components/modules/home/FeatureProducts";
import HeroSection from "@/components/modules/home/heroSection"; 

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Category/>
      <FeaturedProducts/>
      <FlashSale/>
    </div>
  );
};

export default HomePage;
