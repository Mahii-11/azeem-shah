export default function HeroSkeleton() {
    return (
      <div className="space-y-6 animate-pulse">
        {/* Title */}
        <div className="h-12 md:h-16 lg:h-20 w-3/4 mx-auto bg-white/10 rounded-md"></div>
  
        {/* Subtitle */}
        <div className="h-6 w-2/3 mx-auto bg-white/10 rounded-md"></div>
  
        {/* Description */}
        <div className="space-y-2 max-w-2xl mx-auto">
          <div className="h-4 bg-white/10 rounded"></div>
          <div className="h-4 bg-white/10 rounded w-5/6 mx-auto"></div>
        </div>
  
        {/* Buttons */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="h-12 w-48 bg-white/10"></div>
          <div className="h-12 w-48 bg-white/10"></div>
        </div>
      </div>
    );
  }