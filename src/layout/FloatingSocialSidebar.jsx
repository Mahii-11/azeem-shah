import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { getSocialIcon } from "../services/api";

const iconMap = {
  LinkedIn: Linkedin,
  Instagram: Instagram,
  Facebook: Facebook,
  Mail: Mail,
};

export default function FloatingSocialSidebar() {
  const [social, setSocial] = useState([]);

  useEffect(() => {
   const loadSocial = async () => {
    try {

      const data = await getSocialIcon();
      setSocial(data);
    } catch (error) {
      console.error("fetching data error", error)
    }
   }
   loadSocial();
  }, [])





  return (
    <aside className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:block">
      <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/40 px-2 py-3">
        <div className="flex flex-col items-center gap-2">
          {social.map((item) => {
            const Icon = iconMap[item.platform];

            const href = item.platform === "Mail"
            ? `mailto:${item.link}`
            : item.link;



            return (
              <a
                key={item.id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
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
