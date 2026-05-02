import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { getAboutData } from "../../services/api";
import AboutSectionSkeleton from '../../loading/AboutSectionSkeleton';
export default function AboutSection() {
  const [aboutData, setAboutData] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchAboutData = async () => {
    try {
      setLoading(true);
      const data = await getAboutData();

      console.log("About Data:", data);
      setAboutData(data?.[0]?.about || {});

    } catch (error) {
      console.error("Error fetching about data", error);
    } finally {
      setLoading(false);
    }
  };

  fetchAboutData();
}, []);


if (loading) return <AboutSectionSkeleton />


  return (


      <section id="about" className="py-20 md:py-24 px-4 sm:px-6 lg:px-10 bg-[#0a0a0a] relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-14">
          <div className="w-full lg:col-span-4 relative max-w-sm sm:max-w-md mx-auto lg:max-w-none">
            <div className="absolute -inset-2 bg-[#D4AF37]/10 rounded-sm blur-xl"></div>
            <div className="absolute inset-0 border border-[#D4AF37]/30 translate-x-3 translate-y-3 rounded-sm"></div>
            <img 
              src={aboutData.image} 
              alt={aboutData.name} 
              className="relative z-10 w-full rounded-sm shadow-2xl shadow-black/50 object-cover aspect-3/4 border border-[#2A2A2A]"
            />
          </div>
          <div className="w-full lg:col-span-8 space-y-7 text-center lg:text-left">
            <div className="inline-flex lg:flex items-center gap-4">
              <div className="h-px w-12 sm:w-16 bg-linear-to-r from-transparent to-[#D4AF37]"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F2EAD3]">{aboutData.title}</h2>
              <div className="h-px w-12 sm:w-16 bg-linear-to-l from-transparent to-[#D4AF37]"></div>
            </div>
            <p className="text-white/75 font-light leading-relaxed text-base sm:text-lg max-w-3xl mx-auto lg:mx-0">
             {aboutData.description}
            </p>
           
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 py-7">
                 {aboutData?.stats?.map((item, i) => (
               <div 
                key={`${item.title}-${i}`}
               className="bg-[#171717] border border-[#2A2A2A] rounded-sm p-5 sm:p-6">
                 <div className="text-3xl sm:text-4xl font-serif text-[#D4AF37]">{item.value}</div>
                 <div className="text-[11px] sm:text-xs text-white/60 uppercase tracking-[0.2em] mt-2">{item.label}</div>
               </div>
                ))}
             </div>

           

            <Button className="bg-[#D4AF37] hover:bg-[#b8952b] text-black rounded-none px-7 sm:px-8 py-5 sm:py-6 text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 w-full sm:w-auto">
              Download Full Profile &gt;
            </Button>
          </div>
        </div>
      </section>
   
  )
}
