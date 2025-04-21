import Navbar from "./components/navbar";
import HeroSection from "./components/hero";
import FeaturesCards from "./components/featuresCards";
import Highlights from "./components/highlights";
import Integration from "./components/integration";
import Banner from "./components/banner";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <HeroSection />
      <FeaturesCards />
      <Highlights />
      <Integration />
      <Banner />
      <Footer />
    </div>
  );
}
