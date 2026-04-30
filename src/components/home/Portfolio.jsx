import { Card } from "../ui/card";
import { 
  Building, 
  Building2, 
  Utensils, 
  Leaf, 
  Hotel 
} from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { getPortfolioData } from "../../services/api";
import PortfolioSkeleton from "../../loading/PortfolioSkeleton";

export default function Portfolio() {
  const [portfolioData, setPortfolioData] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const fetchPortfolioData = async () => {
    try {
      setLoading(true);
      const data = await getPortfolioData();
      console.log(data);
      setPortfolioData(data || []);
    } catch (error) {
      console.error("Error fetching portfolio data", error);
    } finally {
      setLoading(false);
    }
  };
  fetchPortfolioData();
}, []);

const companies = portfolioData;
const sliderItems = companies.length ? [...companies, ...companies] : [];
  



const iconMap = {
  Hotel: Hotel,
  Building2: Building2,
  Building: Building,
  Utensils: Utensils,
  Leaf: Leaf,
};



  if (loading) return <PortfolioSkeleton />;


 return (
     <section id="companies" className="py-24 bg-[#111] relative border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16 text-center">
          
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-linear-to-r from-transparent to-[#D4AF37]"></div>
            <h2 className="text-3xl md:text-4xl font-serif text-white">Business Portfolio & Sister Concerns</h2>
            <div className="h-px w-24 bg-linear-to-l from-transparent to-[#D4AF37]"></div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 md:w-24 bg-linear-to-r from-[#111] to-transparent z-20"></div>
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 md:w-24 bg-linear-to-l from-[#111] to-transparent z-20"></div>

            <div className="overflow-hidden">
              <div className="flex gap-5 w-max portfolio-marquee py-2">
                {sliderItems.map((company, i) => {
                  const Icon = iconMap[company.icon || "Building"];


                  return (
                    <Card
                    key={`${company.title}-${i}`}
                    className="w-65 sm:w-70 md:w-75 lg:w-[320px] shrink-0 rounded-sm p-8 text-center flex flex-col items-center gap-4 border border-[#2A2A2A] bg-[#171717] hover:bg-[#1F1F1F] hover:border-[#D4AF37]/40 hover:shadow-2xl hover:shadow-[#D4AF37]/10 transition-all duration-500 group"
                  >
                  <div className="p-4 rounded-full bg-[#202020] border border-[#2F2F2F] group-hover:scale-110 group-hover:border-[#D4AF37]/40 transition-all duration-500">
                  <Icon className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-[#F2EAD3] font-serif text-lg font-semibold">{company.title}</h3>
                  <p className="text-xs text-[#C8C8C8]/80 font-light flex-1">{company.short_description}</p>
                  <Button asChild variant="outline" className="w-full mt-4 rounded-none border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black text-xs tracking-widest uppercase">
                    <a href={company.websiteUrl || "#"} target="_blank" rel="noreferrer">
                      Visit Website
                    </a>
                  </Button>
                </Card>
                  )
               
})}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .portfolio-marquee {
            animation: portfolio-marquee 34s linear infinite;
          }
          .portfolio-marquee:hover {
            animation-play-state: paused;
          }
          @keyframes portfolio-marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(calc(-50% - 10px));
            }
          }
          @media (max-width: 768px) {
            .portfolio-marquee {
              animation-duration: 24s;
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .portfolio-marquee {
              animation: none;
            }
          }
        `}</style>
      </section>

  )
}
