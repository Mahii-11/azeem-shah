export default function AwardsAchievementsSkeleton() {
    return (
      <section className="py-12 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12 animate-pulse">
  
          {/* Header Skeleton */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-white/10"></div>
  
            <div className="w-2 h-2 rounded-full bg-white/10"></div>
  
            <div className="h-6 w-56 bg-white/10 rounded"></div>
  
            <div className="w-2 h-2 rounded-full bg-white/10"></div>
  
            <div className="h-px w-12 bg-white/10"></div>
          </div>
  
          {/* Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-3">
                
                {/* Year */}
                <div className="h-6 w-16 bg-[#D4AF37]/20 rounded mx-auto"></div>
  
                {/* Title */}
                <div className="h-3 w-40 bg-white/10 rounded mx-auto"></div>
  
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }