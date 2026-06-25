import { useState, useEffect, useCallback } from "react";
import logo from "../../assets/images/fixlogo.png";

// Array menu
const MENUS = [
  { name: "Beranda", id: "home" },
  { name: "Layanan", id: "services" },
  { name: "Portofolio", id: "portfolio" },
  { name: "Tentang Kami", id: "whychoosesus" },
  { name: "Kontak", id: "contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // 1. OPTIMALISASI HIGH-PERFORMANCE
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 140;

          for (const menu of MENUS) {
            const element = document.getElementById(menu.id);
            if (element) {
              const top = element.offsetTop;
              const height = element.offsetHeight;
              if (scrollPosition >= top && scrollPosition < top + height) {
                setActiveSection(menu.id);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback((e, id) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const header = document.querySelector("header");
        const navbarHeight = header ? header.offsetHeight : 80;

        const isMobile = window.innerWidth < 768;
        const extraOffset = isMobile ? 16 : 0;

        const offsetTop = element.offsetTop - navbarHeight - extraOffset;

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }, 150);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800/60 shadow-lg shadow-slate-950/20 will-change-transform">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* SHORTCUT MOBILE (❄️ Kiri) */}
        <a
          href="#services"
          onClick={(e) => handleNavClick(e, "services")}
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-lg transition-colors hover:bg-blue-500/20 active:scale-95"
          aria-label="Shortcut Layanan"
        >
          ❄️
        </a>

        {/* LOGO  */}
        <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 cursor-pointer transition-transform active:scale-95">
          <img src={logo} alt="Azril Mitra Teknik" className="h-14 sm:h-16 w-auto object-contain drop-shadow-[0_0_12px_rgba(34,211,238,0.2)]" />
        </a>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {MENUS.map((menu) => (
            <a
              key={menu.id}
              href={`#${menu.id}`}
              onClick={(e) => handleNavClick(e, menu.id)}
              className={`font-medium text-sm tracking-wide transition-colors duration-200 relative py-1.5 ${activeSection === menu.id ? "text-cyan-400 font-semibold" : "text-slate-300 hover:text-white"}`}
            >
              {menu.name}
              {activeSection === menu.id && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full" />}
            </a>
          ))}
        </nav>

        {/* BUTTON DESKTOP */}
        <a
          href="https://wa.me/6282125223321"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center rounded-full bg-linear-to-r from-emerald-600 to-green-600 px-5 py-2.5 text-xs lg:text-sm font-semibold text-white shadow-md shadow-emerald-900/30 transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0"
        >
          Hubungi Kami
        </a>

        {/* HAMBURGER BUTTON */}
        <button onClick={() => setIsOpen(!isOpen)} className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden focus:outline-none rounded-xl hover:bg-slate-800/40 transition-colors" aria-label="Toggle Menu">
          <span className={`h-0.5 w-5 rounded-full bg-slate-200 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`h-0.5 w-5 rounded-full bg-slate-200 transition-all duration-200 ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`h-0.5 w-5 rounded-full bg-slate-200 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* MOBILE MENU PANEL */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-105 opacity-100" : "max-h-0 opacity-0"} bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/50 will-change-transform`}>
        <nav className="flex flex-col items-center text-center px-4 py-4 gap-1">
          {MENUS.map((menu) => (
            <a
              key={menu.id}
              href={`#${menu.id}`}
              onClick={(e) => handleNavClick(e, menu.id)}
              className={`w-full py-3 font-medium text-sm tracking-wide transition-all duration-200 rounded-xl ${
                activeSection === menu.id ? "text-cyan-400 bg-slate-900/60 font-semibold" : "text-slate-400 hover:text-slate-200 active:bg-slate-900/30"
              }`}
            >
              {menu.name}
            </a>
          ))}

          <a
            href="https://wa.me/6282125223321"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full rounded-xl bg-linear-to-r from-emerald-600 to-green-600 py-3 text-center text-white text-sm font-semibold shadow-md shadow-emerald-950/20 active:scale-[0.98] transition-all duration-200"
          >
            Hubungi Kami
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
