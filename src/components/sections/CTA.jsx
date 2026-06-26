import daikin from "../../assets/images/daikin.png";
import panasonic from "../../assets/images/panasonic.png";
import mitsubisi from "../../assets/images/mitsubisi.png";
import sharp from "../../assets/images/sharp.png";
import gree from "../../assets/images/gree.png";
import lg from "../../assets/images/lg.png";
import toshiba from "../../assets/images/toshiba.png";
import samsung from "../../assets/images/samsung.png";
import acaux from "../../assets/images/acaux.png";
import changhong from "../../assets/images/changhong.png";
import midea from "../../assets/images/midea.png";
import aqua from "../../assets/images/aqua.png";

export default function CTA() {
  const brands = [
    { name: "DAIKIN", img: daikin },
    { name: "PANASONIC", img: panasonic },
    { name: "MITSUBISHI", img: mitsubisi },
    { name: "SHARP", img: sharp },
    { name: "GREE", img: gree },
    { name: "LG", img: lg },
    { name: "TOSHIBA", img: toshiba },
    { name: "SAMSUNG", img: samsung },
    { name: "AUX", img: acaux },
    { name: "CHANGHONG", img: changhong },
    { name: "MIDEA", img: midea },
    { name: "AQUA", img: aqua },
  ];

  return (
    <section id="cta" className="relative bg-slate-950 pt-12 pb-16 px-4 sm:pb-24 lg:px-8 overflow-hidden border-t border-slate-900/40 -mt-12 sm:-mt-14 lg:-mt-16 z-10 will-change-transform">
      {/* Radial Glow Intensifier Area Brand */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-44 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-5xl lg:max-w-6xl relative z-10">
        {/* Main Bento Container */}
        <div className="relative rounded-3xl border border-slate-900/80 bg-slate-900/20 p-5 sm:p-12 overflow-hidden shadow-xl shadow-indigo-950/10">
          {/* Geometric Tech Grid Pattern */}
          <div className="absolute inset-0 bg-size-[4rem_4rem] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] mask-[radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-15 pointer-events-none" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            {/* Badge Status Aktif */}
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-950/80 border border-slate-900 px-3.5 py-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-cyan-400 mb-6 shadow-inner">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
              </span>
              <span>Tim Teknisi Siaga Lapangan</span>
            </div>

            <h2 className="text-xl sm:text-3xl font-black tracking-tight leading-snug max-w-2xl mx-auto bg-linear-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Menerapkan Prosedur Kerja SOP Ketat & Higienis Untuk Memastikan Keamanan Unit Anda.
            </h2>

            <div className="mt-8 h-px w-16 bg-slate-900 mx-auto" />

            <p className="mt-6 text-[10px] font-bold uppercase tracking-widest bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-8">Kompatibilitas Sistem Multi-Merek</p>

            {/* Brands Responsive Grid Layout */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:grid-cols-4 max-w-4xl mx-auto content-visibility-auto">
              {brands.map((brand) => (
                <div
                  key={brand.name}
                  className="relative flex flex-col items-center justify-center gap-2 p-2 sm:px-4 sm:py-4 rounded-xl sm:rounded-2xl border border-slate-900 bg-slate-950/40 transition-all duration-200 group cursor-default shadow-sm md:hover:border-emerald-500/20 overflow-hidden will-change-transform"
                >
                  <div className="absolute inset-0 bg-radial from-emerald-500/5 via-transparent to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />

                  {/* Container Logo */}
                  <div className="h-12 sm:h-14 w-full max-w-36 bg-white rounded-lg sm:rounded-xl flex items-center justify-center p-2 shadow-md overflow-hidden transition-transform duration-200 md:group-hover:scale-103">
                    <img src={brand.img} alt={`${brand.name} Logo`} className="max-h-full max-w-full object-contain select-none" loading="lazy" />
                  </div>

                  <span className="text-[9px] sm:text-[10px] font-black tracking-wider text-slate-400 transition-all duration-200 relative z-10 md:group-hover:text-emerald-400">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
