import { Card } from "../ui/card";
import { 
  Building, 
  Building2, 
  Utensils, 
  Leaf, 
  Hotel 
} from "lucide-react";
import { Button } from "../ui/button";

export default function Portfolio() {
  const companies = [
    {
      name: "LuxuryStay Hotels",
      icon: <Hotel className="w-8 h-8 text-[#D4AF37]" />,
      desc: "Premium accommodation solutions across major global destinations.",
    },
    {
      name: "Elite Resorts",
      icon: <Building2 className="w-8 h-8 text-[#D4AF37]" />,
      desc: "Exclusive resort management and development services.",
    },
    {
      name: "Zenith Hospitality",
      icon: <Building className="w-8 h-8 text-[#D4AF37]" />,
      desc: "Comprehensive hospitality consulting and strategic planning.",
    },
    {
      name: "Gourmet Catering",
      icon: <Utensils className="w-8 h-8 text-[#D4AF37]" />,
      desc: "High-end culinary experiences for luxury events and venues.",
    },
    {
      name: "Spa Essence",
      icon: <Leaf className="w-8 h-8 text-[#D4AF37]" />,
      desc: "Holistic wellness and luxury spa management.",
    },
  ];

  const sliderItems = [...companies, ...companies];

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
                {sliderItems.map((company, i) => (
                <Card
                  key={`${company.name}-${i}`}
                  className="w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px] shrink-0 rounded-sm p-8 text-center flex flex-col items-center gap-4 border border-[#2A2A2A] bg-[#171717] hover:bg-[#1F1F1F] hover:border-[#D4AF37]/40 hover:shadow-2xl hover:shadow-[#D4AF37]/10 transition-all duration-500 group"
                >
                <div className="p-4 rounded-full bg-[#202020] border border-[#2F2F2F] group-hover:scale-110 group-hover:border-[#D4AF37]/40 transition-all duration-500">
                  {company.icon}
                </div>
                <h3 className="text-[#F2EAD3] font-serif text-lg font-semibold">{company.name}</h3>
                <p className="text-xs text-[#C8C8C8]/80 font-light flex-1">{company.desc}</p>
                <Button variant="outline" className="w-full mt-4 rounded-none border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black text-xs tracking-widest uppercase">
                  Visit Website
                </Button>
              </Card>
            ))}
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
