export default function TestimonialsSkeleton() {
    return (
      <section className="py-28 md:py-32 px-4 sm:px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto space-y-10">
  
          {/* Title Skeleton */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-16 bg-gray-700"></div>
            <div className="h-6 w-32 bg-gray-700 animate-pulse"></div>
            <div className="h-px w-16 bg-gray-700"></div>
          </div>
  
          {/* Cards Skeleton */}
          <div className="overflow-hidden">
            <div className="flex gap-5">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] shrink-0 border border-[#2A2A2A] bg-[#151515]/90 rounded-sm p-6 sm:p-8"
                >
                  {/* Quote Icon Placeholder */}
                  <div className="w-8 h-8 bg-gray-700 rounded mb-5 animate-pulse"></div>
  
                  {/* Text lines */}
                  <div className="space-y-3">
                    <div className="h-4 w-full bg-gray-700 animate-pulse"></div>
                    <div className="h-4 w-5/6 bg-gray-700 animate-pulse"></div>
                    <div className="h-4 w-4/6 bg-gray-700 animate-pulse"></div>
                  </div>
  
                  {/* Name + Role */}
                  <div className="pt-6 space-y-2">
                    <div className="h-4 w-24 bg-gray-700 animate-pulse"></div>
                    <div className="h-3 w-32 bg-gray-800 animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* Button Skeleton */}
          <div className="flex justify-center pt-6">
            <div className="h-12 w-64 bg-gray-700 animate-pulse"></div>
          </div>
        </div>
      </section>
    );
  }