export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 pt-20 pb-8 px-6 sm:px-10 lg:px-16 relative overflow-hidden">
      {/* Top Border Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-linear-to-r from-transparent via-indigo-500/40 to-transparent" />

      {/* Aurora Ambient Light Glow - FIX: Mengubah w-125 h-62.5 non-standar menjadi utilitas inti yang aman */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-linear-to-tr from-indigo-500/5 to-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Utama */}
      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-12 lg:gap-8 text-center sm:text-left mb-16">
        {/* KOLOM 1: BRAND IDENTITY */}
        <div className="lg:col-span-4 flex flex-col items-center sm:items-start gap-5">
          <div className="flex items-center gap-2.5">
            <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] animate-pulse" />
            <span className="text-sm sm:text-base font-black tracking-[0.25em] bg-linear-to-r from-slate-200 via-white to-slate-400 bg-clip-text text-transparent uppercase drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]">
              AZRIL MITRA TEKNIK
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-medium tracking-wide">
            Penyedia layanan instalasi, perbaikan, dan perawatan sistem pendingin udara (AC) premium untuk skala residensial maupun korporat. Mengutamakan SOP ketat dan transparansi penuh.
          </p>
        </div>

        {/* GRUP CONTAINER: NAVIGASI & LAYANAN BERDAMPINGAN DI HP */}
        <div className="sm:col-span-2 lg:col-span-5 grid grid-cols-2 gap-4 w-full max-w-xs sm:max-w-none mx-auto sm:mx-0">
          {/* KOLOM 2: QUICK LINKS */}
          <div className="flex flex-col items-start">
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-5 text-left w-full">Navigasi</h4>
            <ul className="space-y-3.5 text-xs text-left w-full">
              <li>
                <a href="#home" className="text-slate-400 hover:text-white hover:tracking-wide transition-all duration-200 block">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-white hover:tracking-wide transition-all duration-200 block">
                  Layanan
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-slate-400 hover:text-white hover:tracking-wide transition-all duration-200 block">
                  Portofolio
                </a>
              </li>
              <li>
                <a href="#whychoosesus" className="text-slate-400 hover:text-white hover:tracking-wide transition-all duration-200 block">
                  Keunggulan
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white hover:tracking-wide transition-all duration-200 block">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* KOLOM 3: SERVICES */}
          <div className="flex flex-col items-start">
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-5 text-left w-full">Layanan Utama</h4>
            <ul className="space-y-3.5 text-xs text-slate-400 text-left w-full">
              <li>
                <a href="#contact" className="hover:text-slate-200 transition-colors block">
                  Cuci & Perawatan
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-slate-200 transition-colors block">
                  Perbaikan & Freon
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-slate-200 transition-colors block">
                  Bongkar Pasang
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-slate-200 transition-colors block">
                  Sewa AC Standing
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* KOLOM 4: KONTAK RESMI */}
        <div className="lg:col-span-3 flex flex-col items-center sm:items-start gap-4">
          <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-1 text-center sm:text-left">Kontak Resmi</h4>

          <div className="space-y-4 w-full flex flex-col items-center sm:items-start max-w-xs sm:max-w-none mx-auto sm:mx-0">
            {/* 1. WHATSAPP */}
            <a
              href="https://wa.me/6282125223321?text=Halo%20Azril%20Mitra%20Teknik,%20saya%20ingin%20berkonsultasi."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group w-full justify-start cursor-pointer transition-all"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all duration-300 shadow-sm">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <span className="text-xs text-slate-400 group-hover:text-cyan-400 group-hover:underline transition-colors duration-300 font-medium break-all sm:truncate">+62 821-2522-3321</span>
            </a>

            {/* 2. EMAIL AUTOMATIC */}
            <a href="mailto:vladimirasep18@gmail.com?subject=Tanya%20Layanan%20Azril%20Mitra%20Teknik" className="flex items-center gap-3 group w-full justify-start cursor-pointer transition-all">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all duration-300 shadow-sm">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <span className="text-xs text-slate-400 group-hover:text-cyan-400 group-hover:underline transition-colors duration-300 font-medium break-all sm:truncate">vladimirasep18@gmail.com</span>
            </a>

            {/* 3. ALAMAT WORKSHOP MAPS */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Jl.+Kalibaru+Barat,+RT009/06+No.29+Kelurahan+Kalibaru+Kecamatan+Cilincing,+Jakarta+Utara,+Jakarta+14110"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 group w-full justify-start cursor-pointer transition-all"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all duration-300 shadow-sm">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span className="text-xs text-slate-400 group-hover:text-cyan-400 group-hover:underline font-medium leading-relaxed transition-colors duration-300 text-left">
                Jl. Kalibaru Barat, RT009/06 No.29 Kelurahan Kalibaru Kecamatan Cilincing, Jakarta Utara, Jakarta 14110
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* SEKAT FOOTER BOTTOM */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-slate-800 to-transparent mb-6" />
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-center relative z-10">
        <div className="text-[9px] sm:text-[10px] text-slate-400 font-bold tracking-[0.15em] uppercase flex items-center gap-2.5 bg-slate-900/30 border border-slate-900/80 rounded-full px-4 py-2 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
          <span className="text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.3)]">Sistem Pendingin Maksimal</span>
          <span className="text-slate-800">•</span>
          <span className="text-indigo-400">SOP Industri</span>
        </div>
        <div className="flex items-center justify-center sm:justify-start gap-2 text-[11px] text-slate-500 font-medium tracking-wide">
          <svg className="h-3.5 w-3.5 text-slate-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M14.83 14.83a4 4 0 1 1 0-5.66"></path>
          </svg>
          <span>{currentYear} AZRIL MITRA TEKNIK. Hak Cipta Dilindungi.</span>
        </div>
      </div>
    </footer>
  );
}
