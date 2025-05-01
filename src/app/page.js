import DepositWithdraw from "./Components/DepositWithdraw";
import Games from "./Components/Games";
import HeroSection from "./Components/HeroSection";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";

export default async function Home() {

  return (
    <div className="container mx-auto">
      <Navbar/>
      <HeroSection />
      <DepositWithdraw/>
      <Games/>
      <Footer/>
    </div>
  );
}
