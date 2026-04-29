import mapBg from '../../assets/images/map-bg.png';
import { MapPin, } from "lucide-react";


export default function GlobalExperience() {
  return (
    
       <section id="global" className="py-24 bg-[#111] text-white relative border-y border-white/5">
        <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-6 text-center space-y-12">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-linear-to-r from-transparent to-[#D4AF37]"></div>
            <h2 className="text-4xl font-serif font-semibold text-[#F2EAD3]">Global Experience</h2>
            <div className="h-px w-16 bg-linear-to-l from-transparent to-[#D4AF37]"></div>
          </div>
          
          <div className="relative max-w-3xl mx-auto py-8 px-4 md:px-8 rounded-sm border border-[#2A2A2A] bg-[#171717] shadow-2xl shadow-black/30 overflow-hidden">
            <div className="absolute inset-0 bg-radial-[circle_at_50%_50%] from-[#D4AF37]/18 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute -left-1/4 top-0 h-full w-1/2 bg-linear-to-r from-transparent via-[#D4AF37]/20 to-transparent rotate-12 map-shine pointer-events-none"></div>
            <img src={mapBg} alt="World Map" className="w-full max-w-2xl mx-auto opacity-45 grayscale contrast-125 brightness-75" />
            
            {/* Map Pins */}
            <div className="absolute top-[33%] left-[28%] text-[#D4AF37] animate-pulse">
              <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]/60 pin-ring"></span>
              <MapPin size={24} fill="#D4AF37" className="text-[#F2EAD3]" />
            </div>
            <div className="absolute top-[43%] right-[41%] text-[#D4AF37] animate-pulse">
              <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]/60 pin-ring"></span>
              <MapPin size={24} fill="#D4AF37" className="text-[#F2EAD3]" />
            </div>
            <div className="absolute top-[48%] right-[31%] text-[#D4AF37] animate-pulse">
              <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]/60 pin-ring"></span>
              <MapPin size={24} fill="#D4AF37" className="text-[#F2EAD3]" />
            </div>
            <div className="absolute top-[57%] right-[22%] text-[#D4AF37] animate-pulse">
              <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]/60 pin-ring"></span>
              <MapPin size={24} fill="#D4AF37" className="text-[#F2EAD3]" />
            </div>
          </div>
          
          <p className="text-sm font-light uppercase tracking-widest text-[#C8C8C8]/80">
            Delivering Hospitality Leadership Worldwide
          </p>
        </div>
        <style>{`
          .map-shine {
            animation: map-shine 4.5s ease-in-out infinite;
          }
          .pin-ring {
            animation: pin-ring 1.8s ease-out infinite;
          }
          @keyframes map-shine {
            0% {
              transform: translateX(-130%) rotate(12deg);
              opacity: 0;
            }
            35% {
              opacity: 0.7;
            }
            100% {
              transform: translateX(320%) rotate(12deg);
              opacity: 0;
            }
          }
          @keyframes pin-ring {
            0% {
              transform: translate(-50%, -50%) scale(0.7);
              opacity: 0.9;
            }
            100% {
              transform: translate(-50%, -50%) scale(1.8);
              opacity: 0;
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .map-shine,
            .pin-ring {
              animation: none;
            }
          }
        `}</style>
      </section>
    
  )
}
