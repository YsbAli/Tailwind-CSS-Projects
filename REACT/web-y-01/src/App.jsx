import Card from "./Components/Card";
import DetailsFood from "./Components/DetailsFood";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <Card title="Sun's Out BOGO'S Out" text="Through B/26" />
        <DetailsFood />
      </div>
    </>
  );
};

export default App;
