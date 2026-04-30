import { 
  Building, 
  TrendingUp, 
  Gem, 
  Settings, 
} from "lucide-react";
import { useEffect, useState } from "react";
import { getExpertiseData } from "../../services/api";
import ExpertiseSkeleton from "../../loading/ExpertiseSkeleton";

export default function Expertise() {
  const [expertiseData, setExpertiseData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchExpertiseData = async () => {
      try {
        setLoading(true);
        const data = await getExpertiseData()
        setExpertiseData(data || []);
      } catch (error) {
        console.error("Error fetching expertise data", error);
      } finally {
        setLoading(false);
      }
    }
    fetchExpertiseData();
  }, [])

  const iconMap = {
    Building: Building,
    TrendingUp: TrendingUp,
    Gem: Gem,
    Settings: Settings,

  }

  if (loading) return <ExpertiseSkeleton />



  return (
       <section id="expertise" className="py-24 bg-black relative">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-16">
          <div className="flex items-center justify-center gap-4">
            <h2 className="text-3xl md:text-4xl font-serif text-white">My Expertise</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 border-t border-b border-white/10 py-12">
            { expertiseData.map((item, i) => {
              const Icon = iconMap[item.icon || "Building"]


              return (
                <div 
                key={`${item.title}-${i}`}
                className="flex flex-col items-center gap-6 group px-4">
                <div className="p-4 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/20 transition-colors">
                  <Icon className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="text-sm uppercase tracking-widest text-white/80">{item.title}</h3>
              </div>
              )})}
          </div>
        </div>
      </section>
  )
}
