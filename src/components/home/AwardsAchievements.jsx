export default function AwardsAchievements() {
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
            <div className="space-y-2">
              <div className="text-2xl font-serif text-[#D4AF37]">2018</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">Luxury Hotel Award</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-serif text-[#D4AF37]">2019</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">Hospitality Leadership Award</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-serif text-[#D4AF37]">2021</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">Featured in Travel Magazine</div>
            </div>
          </div>
        </div>
      </section>
  )
}
