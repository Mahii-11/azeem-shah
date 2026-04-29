import Navbar from "../layout/Navbar";
import { Button } from "../components/ui/button";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black">
      <Navbar />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-10 border-b border-white/5 bg-linear-to-b from-[#0d0d0d] via-black to-black">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#D4AF37]">Contact Us</p>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#F2EAD3] leading-tight">
            Schedule a Consultation
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
            Share your goals and we will get back with a tailored hospitality strategy discussion.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl mx-auto border border-[#2A2A2A] bg-[#151515] rounded-sm shadow-2xl shadow-black/70">
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
              <Button asChild variant="outline" className="rounded-none border-white/25 text-white hover:bg-white hover:text-black px-8 py-6 text-sm tracking-[0.16em] uppercase sm:flex-1">
                <a href="/">Back to Home</a>
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
