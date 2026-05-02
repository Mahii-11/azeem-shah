export default function AboutSectionSkeleton() {
  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-10 bg-[#0a0a0a] relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-14 animate-pulse">

        {/* Image Skeleton */}
        <div className="w-full lg:col-span-4 relative max-w-sm sm:max-w-md mx-auto lg:max-w-none">
          <div className="absolute -inset-2 bg-[#D4AF37]/10 rounded-sm blur-xl"></div>
          <div className="absolute inset-0 border border-[#D4AF37]/30 translate-x-3 translate-y-3 rounded-sm"></div>

          <div className="relative z-10 w-full aspect-[3/4] bg-[#171717] border border-[#2A2A2A] rounded-sm"></div>
        </div>

        {/* Content Skeleton */}
        <div className="w-full lg:col-span-8 space-y-7 text-center lg:text-left">

          {/* Title */}
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <div className="h-px w-12 sm:w-16 bg-white/10"></div>
            <div className="h-8 w-64 bg-white/10 rounded"></div>
            <div className="h-px w-12 sm:w-16 bg-white/10"></div>
          </div>

          {/* Description */}
          <div className="space-y-3 max-w-3xl mx-auto lg:mx-0">
            <div className="h-4 w-full bg-white/10 rounded"></div>
            <div className="h-4 w-11/12 bg-white/10 rounded"></div>
            <div className="h-4 w-10/12 bg-white/10 rounded"></div>
          </div>

          {/* Stats Skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 py-7">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="bg-[#171717] border border-[#2A2A2A] rounded-sm p-5 sm:p-6 space-y-3"
              >
                <div className="h-6 w-16 bg-[#D4AF37]/20 rounded"></div>
                <div className="h-3 w-24 bg-white/10 rounded"></div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="h-12 w-48 bg-[#D4AF37]/20 rounded mx-auto lg:mx-0"></div>

        </div>
      </div>
    </section>
  );
}