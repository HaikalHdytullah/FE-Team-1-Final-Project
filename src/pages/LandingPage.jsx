import Header from "../components/Header";
import Diskon from "../components/Diskon";
import Kartu from "../components/Kartu";
import Kategori from "../components/kategori";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex-warp mt-10 flex w-full items-center justify-center">
        <section className="h-100 gradient-form">
          <Slider />
        </section>
      </div>
      {/* <Diskon /> */}
      <Kategori />
      <Kartu />
    </>
  );
};

export default Home;
