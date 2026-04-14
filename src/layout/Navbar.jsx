
export default function Navbar() {
  return (
     <nav className="absolute top-0 left-0 right-0 py-6 px-8 md:px-16 flex justify-end items-center text-sm uppercase tracking-wider font-light text-white/80">
        <div className="hidden md:flex gap-x-8">
            <a href="#about" className="hover:text-[#D4AF37] transition-colors">About</a>
            <a href="#expertise"  className="hover:text-[#D4AF37] transition-colors">Expertise</a>
            <a href="#companies" className="hover:text-[#D4AF37] transition-colors">Companies</a>
            <a href="#global" className="hover:text-[#D4AF37] transition-colors">Global Experience</a>
            <a href="#media" className="hover:text-[#D4AF37] transition-colors">Media</a>
            <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
        </div>
     </nav>
  )
}
