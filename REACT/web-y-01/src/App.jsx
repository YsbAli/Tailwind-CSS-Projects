import Card from "./Components/Card";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <Card title="Sun's Out BOGO'S Out" text="Through B/26" />
      </div>
    </>
  );
};

export default App;
