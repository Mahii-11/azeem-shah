import { Facebook, Instagram, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const QUICK_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Global Experience", href: "/#global" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Facebook", href: "#", icon: Facebook },
];

export default function Footer() {
  return (
    <footer className="relative px-4 sm:px-6 lg:px-10 pt-16 pb-8 border-t border-white/10 bg-linear-to-b from-[#090909] via-black to-black overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          <div className="md:col-span-5 space-y-4">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#D4AF37]">Azeem Shah</p>
            <h3 className="text-2xl lg:text-3xl font-serif text-[#F2EAD3] leading-tight">
              Transforming hospitality into premium guest experiences.
            </h3>
            <p className="text-sm text-white/65 leading-relaxed max-w-md">
              Strategic consulting for luxury brands, global operations, and sustainable growth in modern hospitality.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#F2EAD3] hover:text-[#D4AF37] transition-colors"
            >
              Start a conversation
              <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-white/55 mb-4">Quick Links</p>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/75 hover:text-[#D4AF37] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-white/55">Connect</p>
            <a
              href="mailto:contact@azeemshah.com"
              className="inline-flex items-center gap-2 text-sm text-white/75 hover:text-[#D4AF37] transition-colors"
            >
              <Mail size={15} />
              contact@azeemshah.com
            </a>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="h-10 w-10 grid place-items-center border border-white/20 bg-[#101010] text-white/80 hover:text-[#D4AF37] hover:border-[#D4AF37]/60 transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] uppercase tracking-[0.16em] text-white/45">
          <p>© {new Date().getFullYear()} Azeem Shah. All rights reserved.</p>
          <p>Crafted for modern luxury hospitality presence.</p>
        </div>
      </div>
    </footer>
  );
}
