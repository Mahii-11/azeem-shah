import { useEffect, useState } from "react";
import { Video, Image as ImageIcon, Newspaper, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Button } from "../components/ui/button";
import { getFeaturedVideos, getHighlightData, getMediaGallery } from "../services/api";

function getYouTubeVideoId(urlOrEmbed) {
  if (!urlOrEmbed) return null;
  const match = urlOrEmbed.match(/(?:embed\/|v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match?.[1] ?? null;
}

function YouTubeEmbed({ urlOrEmbed, title }) {
  const videoId = getYouTubeVideoId(urlOrEmbed);
  if (!videoId) {
    return <div className="flex h-full w-full items-center justify-center bg-black text-white/50 text-sm">Video unavailable</div>;
  }

  return (
    <iframe
      key={videoId}
      src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
      title={title}
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="h-full w-full border-0"
    />
  );
}

export default function MediaPage() {
  const [featuredVideos, setFeaturedVideos] = useState([]);
  const [activeVideo, setActiveVideo] = useState(0);
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const [gallery, setGallery] = useState([]);
  const [highlightData, setHighlightData] = useState([]);

  useEffect(() => {
    const loadMediaGallery = async () => {
      try {
        const data = await getMediaGallery();
        setGallery(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    loadMediaGallery();
  }, []);


  useEffect(() => {
    const loadHighlight = async () => {
      try {
        const data = await getHighlightData();
        setHighlightData(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    loadHighlight();
  }, []);



  useEffect(() => {
  const loadFeaturedVideos = async () => {
    try {
      const data = await getFeaturedVideos();
      setFeaturedVideos(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  loadFeaturedVideos();
}, []);

  useEffect(() => {
    if (isVideoHovered || featuredVideos.length <= 1) return undefined;

    const interval = window.setInterval(() => {
      setActiveVideo((prev) => (prev + 1) % featuredVideos.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isVideoHovered, featuredVideos.length]);

  const goToPreviousVideo = () => {
    setActiveVideo((prev) => (prev - 1 + featuredVideos.length) % featuredVideos.length);
  };

  const goToNextVideo = () => {
    setActiveVideo((prev) => (prev + 1) % featuredVideos.length);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black">
      <Navbar />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-10 border-b border-white/5 bg-linear-to-b from-[#0d0d0d] via-black to-black">
        <div className="max-w-6xl mx-auto text-center space-y-7">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#D4AF37]">
            <Video size={14} />
            Media Presence
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#F2EAD3] leading-tight">
            Stories, Interviews & Global Hospitality Moments
          </h1>
          <p className="max-w-3xl mx-auto text-white/70 text-base sm:text-lg leading-relaxed">
            A curated media portfolio featuring leadership interviews, keynote appearances, and brand-building moments across international hospitality platforms.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-14 bg-linear-to-r from-transparent to-[#D4AF37]"></div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#F2EAD3]">Featured Videos</h2>
            <div className="h-px w-14 bg-linear-to-l from-transparent to-[#D4AF37]"></div>
          </div>

          <div
            className="bg-[#151515] border border-[#2A2A2A] rounded-sm p-4 sm:p-5 space-y-5"
            onMouseEnter={() => setIsVideoHovered(true)}
            onMouseLeave={() => setIsVideoHovered(false)}
          >
            <div className="relative overflow-hidden rounded-sm">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${activeVideo * 100}%)` }}
              >
                {featuredVideos.map((video, index) => (
                   <article key={video.title} className="w-full shrink-0 space-y-4">
                   <div className="aspect-video w-full overflow-hidden rounded-sm border border-white/10 bg-black">
                     {index === activeVideo ? (
                       <YouTubeEmbed urlOrEmbed={video.url} title={video.title} />
                     ) : (
                       <div
                         className="h-full w-full bg-cover bg-center opacity-60"
                         style={{
                           backgroundImage: getYouTubeVideoId(video.url)
                             ? `url(https://img.youtube.com/vi/${getYouTubeVideoId(video.url)}/hqdefault.jpg)`
                             : undefined,
                         }}
                       />
                     )}
                   </div>

                  <div className="space-y-2">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37]">
                     {video.label}
                    </p>

                  <h3 className="text-xl font-serif text-[#F2EAD3]">
                 {video.title}
                    </h3>

                   <p className="text-white/70 text-sm leading-relaxed">
                    {video.description}
                  </p>
                 </div>
                 </article>
                ))}
              </div>

              <button
                type="button"
                onClick={goToPreviousVideo}
                aria-label="Previous video"
                className="absolute left-3 top-[calc(50%-4rem)] -translate-y-1/2 z-10 h-10 w-10 grid place-items-center bg-black/65 border border-white/20 hover:border-[#D4AF37]/70 text-white transition-colors pointer-events-auto"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={goToNextVideo}
                aria-label="Next video"
                className="absolute right-3 top-[calc(50%-4rem)] -translate-y-1/2 z-10 h-10 w-10 grid place-items-center bg-black/65 border border-white/20 hover:border-[#D4AF37]/70 text-white transition-colors pointer-events-auto"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="flex items-center justify-center gap-2">
              {featuredVideos.map((video, index) => (
                <button
                  key={video.title}
                  type="button"
                  aria-label={`Go to video ${index + 1}`}
                  onClick={() => setActiveVideo(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeVideo === index ? "w-8 bg-[#D4AF37]" : "w-2.5 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
            <div className="text-center text-[11px] uppercase tracking-[0.18em] text-white/45">
              Auto-sliding every 5 seconds - hover to pause
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-14 bg-linear-to-r from-transparent to-[#D4AF37]"></div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#F2EAD3]">Media Gallery</h2>
            <div className="h-px w-14 bg-linear-to-l from-transparent to-[#D4AF37]"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {gallery.map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-sm border border-[#2A2A2A] bg-[#111]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 sm:h-64 w-full object-cover opacity-80 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 space-y-1">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#D4AF37]">{item.category}</p>
                  <h3 className="text-lg font-serif text-[#F2EAD3]">{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-[#151515] border border-[#2A2A2A] rounded-sm p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2 text-[#D4AF37]">
              <Newspaper size={18} />
              <h2 className="text-2xl font-serif text-[#F2EAD3]">Press Highlights</h2>
            </div>
            <div className="space-y-4">
              {highlightData.map((item) => (
                <article key={item.headline} className="border border-white/10 rounded-sm p-4 bg-black/30">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#D4AF37]">{item.type}</p>
                  <h3 className="text-base sm:text-lg text-white/90 mt-1">{item.headline}</h3>
                  <p className="text-sm text-white/60 mt-1">{item.source}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#151515] border border-[#2A2A2A] rounded-sm p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="space-y-3">
              <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#D4AF37]">
                <ImageIcon size={14} />
                Media Kit
              </p>
              <h3 className="text-2xl font-serif text-[#F2EAD3] leading-snug">
                Need brand photos, profile assets, or press materials?
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Request the official media kit for publication features, event promotions, and interview coverage.
              </p>
            </div>
            <Button className="bg-[#D4AF37] hover:bg-[#b8952b] text-black rounded-none px-8 py-6 text-sm tracking-[0.16em] uppercase w-full">
              Request Media Kit
              <ArrowUpRight className="ml-2" size={16} />
            </Button>
            <div className="text-xs text-white/50 uppercase tracking-[0.16em]">
              For editorial inquiries: media@azeemshah.com
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
