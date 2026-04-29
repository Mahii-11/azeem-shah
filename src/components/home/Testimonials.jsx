import { useEffect, useState } from "react";
import { Quote, X } from "lucide-react";
import { Button } from "../ui/button";
import starsBg from '../../assets/images/stars-bg.png';

export default function Testimonials() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const reviews = [
    {
      quote: "Azeem's leadership took our hotel to new heights of success.",
      name: "James Williams",
      role: "General Manager, London",
    },
    {
      quote: "From operations to brand positioning, his strategy delivered measurable growth.",
      name: "Sophia Carter",
      role: "Regional Director, Dubai",
    },
    {
      quote: "He transformed our guest experience standards with precision and consistency.",
      name: "Daniel Brown",
      role: "Hotel Owner, Singapore",
    },
    {
      quote: "A rare hospitality leader who balances luxury vision with practical execution.",
      name: "Aisha Rahman",
      role: "Hospitality Consultant, Doha",
    },
  ];

  const sliderReviews = [...reviews, ...reviews];
  useEffect(() => {
    if (!isContactOpen) return undefined;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isContactOpen]);

  return (
    <>
      <section 
        className="py-28 md:py-32 px-4 sm:px-6 relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(${starsBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-6xl mx-auto space-y-10 relative z-10 w-full">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-16 bg-linear-to-r from-transparent to-[#D4AF37]"></div>
            <h2 className="text-2xl font-serif text-white">Testimonials</h2>
            <div className="h-px w-16 bg-linear-to-l from-transparent to-[#D4AF37]"></div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-12 md:w-24 bg-linear-to-r from-black/80 to-transparent z-10"></div>
            <div className="pointer-events-none absolute right-0 top-0 h-full w-12 md:w-24 bg-linear-to-l from-black/80 to-transparent z-10"></div>

            <div className="overflow-hidden">
              <div className="flex gap-5 w-max testimonial-marquee py-2">
                {sliderReviews.map((review, i) => (
                  <article
                    key={`${review.name}-${i}`}
                    className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] shrink-0 border border-[#2A2A2A] bg-[#151515]/90 backdrop-blur-sm rounded-sm p-6 sm:p-8 text-left"
                  >
                    <Quote className="w-8 h-8 text-[#D4AF37] opacity-60 mb-5" />
                    <h3 className="text-base sm:text-lg md:text-xl font-serif italic text-white/90 leading-relaxed">
                      "{review.quote}"
                    </h3>
                    <div className="pt-6 space-y-1">
                      <p className="text-[#D4AF37] font-semibold tracking-wide">- {review.name}</p>
                      <p className="text-[11px] text-white/50 uppercase tracking-[0.16em]">{review.role}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 md:pt-8">
            <Button
              onClick={() => setIsContactOpen(true)}
              className="bg-[#D4AF37] hover:bg-[#b8952b] text-black rounded-none px-10 py-6 text-sm tracking-widest uppercase transition-all duration-300"
            >
              Schedule a Consultation &gt;
            </Button>
          </div>
        </div>

        <style>{`
          .testimonial-marquee {
            animation: testimonial-marquee 32s linear infinite;
          }
          .testimonial-marquee:hover {
            animation-play-state: paused;
          }
          @keyframes testimonial-marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(calc(-50% - 10px));
            }
          }
          @media (max-width: 768px) {
            .testimonial-marquee {
              animation-duration: 24s;
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .testimonial-marquee {
              animation: none;
            }
          }
        `}</style>
      </section>

      <div
        className={`fixed inset-0 z-[70] transition-all duration-300 ${
          isContactOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={() => setIsContactOpen(false)}
          aria-label="Close contact popup"
          className={`absolute inset-0 bg-black/65 backdrop-blur-sm transition-opacity duration-300 ${
            isContactOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="absolute inset-0 grid place-items-center p-4 sm:p-6">
          <div
            className={`w-full max-w-2xl border border-[#2A2A2A] bg-[#151515] text-left rounded-sm shadow-2xl shadow-black/70 transition-all duration-300 ${
              isContactOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-5 scale-95"
            }`}
          >
            <div className="flex items-start justify-between gap-4 p-5 sm:p-6 border-b border-white/10">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#D4AF37]">Contact Us</p>
                <h3 className="text-2xl font-serif text-[#F2EAD3] mt-2">Schedule a Consultation</h3>
                <p className="text-sm text-white/65 mt-2">
                  Share your goals and we will get back with a tailored hospitality strategy discussion.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsContactOpen(false)}
                aria-label="Close popup"
                className="h-9 w-9 grid place-items-center border border-white/15 hover:border-[#D4AF37]/70 transition-colors"
              >
                <X size={18} className="text-white/75" />
              </button>
            </div>

            <form className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="space-y-2">
                <span className="text-xs uppercase tracking-[0.16em] text-white/60">Full Name</span>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full bg-[#0F0F0F] border border-[#2A2A2A] rounded-none px-4 py-3 text-sm text-white outline-none focus:border-[#D4AF37]/70"
                />
              </label>
              <label className="space-y-2">
                <span className="text-xs uppercase tracking-[0.16em] text-white/60">Email</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-[#0F0F0F] border border-[#2A2A2A] rounded-none px-4 py-3 text-sm text-white outline-none focus:border-[#D4AF37]/70"
                />
              </label>
              <label className="space-y-2">
                <span className="text-xs uppercase tracking-[0.16em] text-white/60">Phone</span>
                <input
                  type="tel"
                  placeholder="+880..."
                  className="w-full bg-[#0F0F0F] border border-[#2A2A2A] rounded-none px-4 py-3 text-sm text-white outline-none focus:border-[#D4AF37]/70"
                />
              </label>
              <label className="space-y-2">
                <span className="text-xs uppercase tracking-[0.16em] text-white/60">Company</span>
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full bg-[#0F0F0F] border border-[#2A2A2A] rounded-none px-4 py-3 text-sm text-white outline-none focus:border-[#D4AF37]/70"
                />
              </label>
              <label className="space-y-2 sm:col-span-2">
                <span className="text-xs uppercase tracking-[0.16em] text-white/60">Message</span>
                <textarea
                  rows={4}
                  placeholder="Tell us about your hospitality project or business goals..."
                  className="w-full resize-none bg-[#0F0F0F] border border-[#2A2A2A] rounded-none px-4 py-3 text-sm text-white outline-none focus:border-[#D4AF37]/70"
                />
              </label>

              <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 pt-1">
                <Button className="bg-[#D4AF37] hover:bg-[#b8952b] text-black rounded-none px-8 py-6 text-sm tracking-[0.16em] uppercase sm:flex-1">
                  Send Request
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsContactOpen(false)}
                  className="rounded-none border-white/25 text-white hover:bg-white hover:text-black px-8 py-6 text-sm tracking-[0.16em] uppercase sm:flex-1"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
