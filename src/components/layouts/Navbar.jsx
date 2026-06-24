import { useState, useEffect } from "react";
import logo from "../../assets/images/fixlogo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menus = [
    { name: "Beranda", id: "home" },
    { name: "Layanan", id: "services" },
    { name: "Portofolio", id: "portfolio" },
    { name: "Tentang Kami", id: "whychoosesus" },
    { name: "Kontak", id: "contact" },
  ];

  useEffect(() => {
    const scrollMenus = [
      { name: "Beranda", id: "home" },
      { name: "Layanan", id: "services" },
      { name: "Portofolio", id: "portfolio" },
      { name: "Tentang Kami", id: "whychoosesus" },
      { name: "Kontak", id: "contact" },
    ];

    const handleScroll = () => {
      const scrollposition = window.scrollY + 120;

      for (const menu of scrollMenus) {
        const element = document.getElementById(menu.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollposition >= top && scrollposition < top + height) {
            setActiveSection(menu.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);

    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/85 backdrop-blur-md border-b border-slate-800/80 shadow-md shadow-slate-950/50">
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* SHORTCUT MOBILE (❄️ Kiri) */}
        <a href="#services" onClick={(e) => handleNavClick(e, "services")} className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-xl transition hover:bg-blue-500/20">
          ❄️
        </a>

        {/* LOGO */}
        <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 cursor-pointer">
          <img src={logo} alt="Azril Mitra Teknik" className="h-16 md:h-16 lg:h-18 w-auto object-contain drop-shadow-[0_0_10px_rgba(59,130,246,0.35)]" />
        </a>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8">
          {menus.map((menu) => (
            <a
              key={menu.id}
              href={`#${menu.id}`}
              onClick={(e) => handleNavClick(e, menu.id)}
              className={`font-medium text-sm tracking-wide transition-all duration-200 relative py-1.5 ${activeSection === menu.id ? "text-cyan-400 font-semibold" : "text-white/80 hover:text-white"}`}
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
          rel="noreferrer"
          className="hidden md:inline-flex items-center rounded-full bg-linear-to-r from-emerald-600 to-green-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:opacity-95 hover:-translate-y-0.5"
        >
          Hubungi Kami
        </a>

        {/* HAMBURGER BUTTON (Animasi Dinamis) */}
        <button onClick={() => setIsOpen(!isOpen)} className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden focus:outline-none" aria-label="Toggle Menu">
          <span className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`h-0.5 w-6 rounded-full bg-white transition-all duration-200 ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* MOBILE MENU PANEL */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} bg-slate-950/90 backdrop-blur-2xl border-t border-white/5`}>
        <div className="absolute inset-0 bg-linear-to-tr from-blue-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
        <nav className="relative z-10 flex flex-col items-center text-center px-6 py-6 gap-1">
          {menus.map((menu) => (
            <a
              key={menu.id}
              href={`#${menu.id}`}
              onClick={(e) => handleNavClick(e, menu.id)}
              className={`w-full py-3 font-medium text-sm tracking-wide border-b border-white/5 transition-all duration-300 rounded-xl ${activeSection === menu.id ? "text-cyan-400 bg-white/5" : "text-slate-300 hover:text-blue-400"}`}
            >
              {menu.name}
            </a>
          ))}

          <a
            href="https://wa.me/6282125223321"
            target="_blank"
            rel="noreferrer"
            className="mt-5 w-full rounded-xl bg-linear-to-r from-emerald-600 to-green-600 py-3.5 text-center text-white text-sm font-semibold shadow-lg shadow-emerald-600/20 active:scale-98 transition-all duration-300"
          >
            Hubungi Kami
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
