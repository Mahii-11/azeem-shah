import AboutSection from "../components/home/AboutSection";
import HeroSection from "../components/home/HeroSection";
import Navbar from "../layout/Navbar"
import GlobalExperience from "../components/home/GlobalExperience";
import Portfolio from "../components/home/Portfolio";
import Expertise from "../components/home/Expertise";
import AwardsAchievements from "../components/home/AwardsAchievements";
import Testimonials from "../components/home/Testimonials";
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#D4AF37] selection:text-black">
      <Navbar />
      <HeroSection/>
      <AboutSection />
      <GlobalExperience />
      <Portfolio />
      <Expertise />
      <AwardsAchievements />
      <Testimonials />
    </div>
  );
}
