export default function ExpertiseSkeleton() {
    return (
      <section id="expertise" className="py-24 bg-black relative">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-16 animate-pulse">
  
          {/* Title Skeleton */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-8 w-64 bg-white/10 rounded"></div>
          </div>
  
          {/* Grid Skeleton */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-b border-white/10 py-12">
  
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-6 px-4"
              >
                {/* Icon Skeleton */}
                <div className="p-4 rounded-full border border-white/10 bg-white/5">
                  <div className="w-8 h-8 bg-white/10 rounded-full"></div>
                </div>
  
                {/* Title Skeleton */}
                <div className="h-3 w-28 bg-white/10 rounded"></div>
              </div>
            ))}
  
          </div>
        </div>
      </section>
    );
  }