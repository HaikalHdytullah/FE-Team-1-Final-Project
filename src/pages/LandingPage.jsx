import Header from "../components/Header";
import BannerSection from "../components/HomepageCarousel";
import Kartu from "../components/Kartu";
import Kategori from "../components/kategori";
// import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <Header />
      <BannerSection />
      {/* <Diskon /> */}
      <Kategori />
      <Kartu />
    </>
  );
};

export default Home;
