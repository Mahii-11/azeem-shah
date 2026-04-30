import { useEffect, useState } from "react"
import { getAwardsAchievements } from "../../services/api";
import  AwardsAchievementsSkeleton  from "../../loading/AwardsAchievementsSkeleton"

export default function AwardsAchievements() {
  const [awards, setAwards] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchAwardsAchievements = async () => {
      try {
        setLoading(true);
        const data = await getAwardsAchievements();
        setAwards(data || []);
      } catch (error) {
        console.error("Error fetching Award and Achievements data", error);
      } finally {
        setLoading(false)
      }
    };
    fetchAwardsAchievements();
  }, [])

  if (loading) return <AwardsAchievementsSkeleton />






  return (
    <section className="py-12 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-[#D4AF37]"></div>
            <div className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]"></div>
            <h2 className="text-2xl font-serif text-white">Awards & Achievements</h2>
            <div className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]"></div>
            <div className="h-px w-12 bg-linear-to-l from-transparent to-[#D4AF37]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((item, i) => (
            <div 
            key={`${item.title}-${i}`}
            className="space-y-2">
               <div className="text-2xl font-serif text-[#D4AF37]">{item.year}</div>
               <div className="text-sm text-white/60 uppercase tracking-wider">{item.title}</div>
            </div>
            ))}
          </div>
        </div>
      </section>
  )
}
