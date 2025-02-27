import Banner from "@/pages/home/Banner";
import FeaturedBikes from "./FeaturedBikes";
import BlogSection from "./BlogSection";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedBikes />
      <BlogSection />
      <Testimonials />
    </div>
  );
};

export default Home;
