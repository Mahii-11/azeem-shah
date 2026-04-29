import { 
  Building, 
  TrendingUp, 
  Gem, 
  Settings, 
} from "lucide-react";

export default function Expertise() {
  return (
       <section id="expertise" className="py-24 bg-black relative">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-16">
          <div className="flex items-center justify-center gap-4">
            <h2 className="text-3xl md:text-4xl font-serif text-white">My Expertise</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 border-t border-b border-white/10 py-12">
            <div className="flex flex-col items-center gap-6 group px-4">
              <div className="p-4 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/20 transition-colors">
                <Building className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-sm uppercase tracking-widest text-white/80">Hotel Pre-Opening</h3>
            </div>
            <div className="flex flex-col items-center gap-6 group px-4">
              <div className="p-4 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/20 transition-colors">
                <TrendingUp className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-sm uppercase tracking-widest text-white/80">Revenue Management</h3>
            </div>
            <div className="flex flex-col items-center gap-6 group px-4">
              <div className="p-4 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/20 transition-colors">
                <Gem className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-sm uppercase tracking-widest text-white/80">Luxury Brand Development</h3>
            </div>
            <div className="flex flex-col items-center gap-6 group px-4">
              <div className="p-4 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/20 transition-colors">
                <Settings className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-sm uppercase tracking-widest text-white/80">Operational Excellence</h3>
            </div>
          </div>
        </div>
      </section>
  )
}
