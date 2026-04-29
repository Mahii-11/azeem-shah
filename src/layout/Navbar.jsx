import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";

const NAV_ITEMS = [
  { label: "About", section: "about" },
  { label: "Expertise", section: "expertise" },
  { label: "Companies", section: "companies" },
  { label: "Global Experience", section: "global" },
  { label: "Media", path: "/media" },
  { label: "Contact", path: "/contact" },
];

const BRAND = {
  name: "Azeem Shah",
  subtitle: "Hospitality Strategist",
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const closeMenu = () => setIsOpen(false);
  const isHomePage = location === "/";
  const brandHref = isHomePage ? "#" : "/";
  const getNavHref = (item) => {
    if (item.path) return item.path;
    return isHomePage ? `#${item.section}` : `/#${item.section}`;
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 py-5 px-4 sm:px-6 md:px-12 lg:px-16 flex items-center justify-between text-white bg-black/35 backdrop-blur-md border-b border-white/10">
        <a href={brandHref} className="group">
          <p className="text-lg sm:text-xl font-serif tracking-wide text-[#F2EAD3] group-hover:text-[#D4AF37] transition-colors">
            {BRAND.name}
          </p>
          <p className="text-[10px] sm:text-xs tracking-[0.28em] uppercase text-white/55">
            {BRAND.subtitle}
          </p>
        </a>

        <div className="hidden md:flex items-center gap-8 text-xs lg:text-sm tracking-wider uppercase font-light text-white/80">
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href={getNavHref(item)} className="hover:text-[#D4AF37] transition-colors">
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="md:hidden h-10 w-10 grid place-items-center border border-white/20 bg-black/35 hover:border-[#D4AF37]/70 transition-colors"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={20} className="text-[#F2EAD3]" />
        </button>
      </nav>

      <div
        className={`md:hidden fixed inset-0 z-[60] transition-all duration-300 ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-black/55 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
          aria-label="Close menu overlay"
        />

        <div
          className={`absolute left-0 top-0 h-full w-[84%] max-w-xs bg-[#121212] border-r border-[#2A2A2A] shadow-2xl shadow-black/60 px-5 py-6 transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-start justify-between mb-8">
            <div>
              <p className="text-lg font-serif text-[#F2EAD3]">{BRAND.name}</p>
              <p className="text-[10px] tracking-[0.28em] uppercase text-white/50 mt-1">
                {BRAND.subtitle}
              </p>
            </div>
            <button
              type="button"
              className="h-9 w-9 grid place-items-center border border-white/15 hover:border-[#D4AF37]/70 transition-colors"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X size={18} className="text-white/80" />
            </button>
          </div>

          <div className="flex flex-col gap-5 text-sm tracking-[0.14em] uppercase text-white/80">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={getNavHref(item)}
                className="hover:text-[#D4AF37] transition-colors"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
