export default function PortfolioSkeleton() {
    return (
        <section className="py-24 bg-[#111] relative border-y border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none"></div>
    
          <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16 text-center animate-pulse">
    
            {/* Title Skeleton */}
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-24 bg-white/10"></div>
    
              <div className="h-8 w-72 bg-white/10 rounded-md"></div>
    
              <div className="h-px w-24 bg-white/10"></div>
            </div>
    
            {/* Marquee Skeleton */}
            <div className="relative">
              <div className="absolute left-0 top-0 h-full w-16 md:w-24 bg-gradient-to-r from-[#111] to-transparent z-20"></div>
              <div className="absolute right-0 top-0 h-full w-16 md:w-24 bg-gradient-to-l from-[#111] to-transparent z-20"></div>
    
              <div className="overflow-hidden">
                <div className="flex gap-5 w-max py-2">
    
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-64 sm:w-70 md:w-75 lg:w-[320px] shrink-0 rounded-sm p-8 flex flex-col items-center gap-4 border border-[#2A2A2A] bg-[#171717]"
                    >
                      {/* Icon skeleton */}
                      <div className="p-4 rounded-full bg-white/5 border border-white/10">
                        <div className="w-8 h-8 bg-white/10 rounded-full"></div>
                      </div>
    
                      {/* Title */}
                      <div className="h-4 w-40 bg-white/10 rounded"></div>
    
                      {/* Description */}
                      <div className="h-3 w-52 bg-white/5 rounded"></div>
                      <div className="h-3 w-44 bg-white/5 rounded"></div>
    
                      {/* Button */}
                      <div className="mt-4 w-full h-9 bg-white/10 border border-white/10 rounded"></div>
                    </div>
                  ))}
    
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}