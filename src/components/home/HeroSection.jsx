import { useEffect, useState } from 'react';
import heroBg from '../../assets/images/hero-bg.png';
import { Button } from "../../components/ui/button";
import { getHomeData } from '../../services/api';
import HeroSkeleton from '../../loading/HeroSkeleton';

export default function HeroSection() {
  const [homeData, setHomeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        setLoading(true);
        const data = await getHomeData();
        setHomeData(data?.[0] || null);
      } catch (error) {
        console.error("Error fetching home data", error);
      } finally {
        setLoading(false);
      }
    }
    fetchHomeData();
  }, [])


  if (loading) return <HeroSkeleton />



  return (
      <section 
             className="relative h-screen flex flex-col items-center justify-center text-center px-4"
             style={{
               backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%), url(${heroBg})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundAttachment: 'fixed'
             }}
           >
             <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in zoom-in duration-1000">
               <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-wide uppercase">
                 {homeData?.title}
               </h1>
               <p className="text-lg md:text-xl text-white/90 font-light tracking-wide">
                 {homeData?.sub_title}
               </p>
               <p className="text-sm md:text-base text-white/60 font-light max-w-2xl mx-auto">
                 {homeData?.description}
               </p>
               <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                 <Button variant="outline" className="bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black rounded-none px-8 py-6 text-sm tracking-widest uppercase transition-all duration-300">
                   Explore My Journey
                 </Button>
                 <Button variant="outline" className="text-white border-white/30 hover:bg-white hover:text-black rounded-none px-8 py-6 text-sm tracking-widest uppercase transition-all duration-300">
                   View My Companies
                 </Button>
               </div>
             </div>
           </section>
  )
}
