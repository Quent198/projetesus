import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SliderContainer from "../../components/homepage/SliderContainer";
import LastNews from "../../components/homepage/LastNews";
import Reviews from "../../components/homepage/Reviews";

export default function Homepage() {
  return (
    <div>
      <Header />
      <SliderContainer />
      <LastNews />
      <Reviews />
      <Footer />
    </div>
  );
}
