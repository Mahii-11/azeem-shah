import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

const SOCIAL_ITEMS = [
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Email", href: "mailto:contact@azeemshah.com", icon: Mail },
];

export default function FloatingSocialSidebar() {
  return (
    <aside className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:block">
      <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/40 px-2 py-3">
        <div className="flex flex-col items-center gap-2">
          {SOCIAL_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="h-10 w-10 grid place-items-center rounded-xl border border-white/15 bg-black/25 text-white/80 hover:text-[#D4AF37] hover:border-[#D4AF37]/70 hover:bg-black/35 transition-colors"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
