import heroBg from '../../assets/images/hero-bg.png';
import { Button } from "../../components/ui/button";
export default function HeroSection() {
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
                 AZEEM SHAH
               </h1>
               <p className="text-lg md:text-xl text-white/90 font-light tracking-wide">
                 Global Hospitality Strategist & 5-Star Hotel Management Expert
               </p>
               <p className="text-sm md:text-base text-white/60 font-light max-w-2xl mx-auto">
                 Transforming Luxury Hospitality Brands Across Continents
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
