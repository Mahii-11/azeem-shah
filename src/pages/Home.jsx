import AboutSection from "../components/home/AboutSection";
import HeroSection from "../components/home/HeroSection";
import Navbar from "../layout/Navbar";


export default function Home() {
  return (
    <div className="min-h-screen bg-red-600 text-white selection:bg-[#D4AF37] selection:text-black">
      <Navbar />
      <HeroSection />
      <AboutSection />
    </div>
  )
}
