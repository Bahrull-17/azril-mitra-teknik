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
    <section id="cta" className="relative bg-slate-950 pt-6 pb-12 px-4 sm:pt-6 sm:pb-20 lg:px-8 -mt-12 sm:-mt-12 lg:-mt-16 overflow-hidden border-t border-t-solid border-t-slate-700 lg:border-t-0 border-b border-b-slate-900/50">
      {/* Top Border Glow Line */}
      <div className="absolute -top-6 left-0 sm:left-1/2 sm:-translate-x-1/2 w-full sm:max-w-7xl h-px bg-slate-800/60 sm:bg-linear-to-r sm:from-transparent sm:via-indigo-500/30 sm:to-transparent z-20 pointer-events-none" />

      {/* Radial Glow Intensifier khusus area Brand */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-44 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      <div className="mx-auto max-w-5xl lg:max-w-6xl relative z-10">
        {/* Main Bento Container */}
        <div className="relative rounded-3xl border border-slate-900/80 bg-linear-to-b from-slate-900/30 to-slate-950/40 p-6 sm:p-12 backdrop-blur-xl overflow-hidden shadow-2xl shadow-indigo-950/20">
          {/* Geometric Tech Grid Pattern */}
          <div className="absolute inset-0 bg-size-[4rem_4rem] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] mask-[radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            {/* Badge Status Aktif */}
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-slate-800/80 px-3.5 py-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-cyan-400 mb-6 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Tim Teknisi Siaga Lapangan</span>
            </div>

            <h2 className="text-xl sm:text-3xl font-black tracking-tight leading-relaxed max-w-2xl mx-auto bg-linear-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Menerapkan Prosedur Kerja SOP Ketat & Higienis Untuk Memastikan Keamanan Unit Anda.
            </h2>

            <div className="mt-10 h-px w-16 bg-slate-800 mx-auto" />

            <p className="mt-6 text-[10px] font-bold uppercase tracking-widest bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-8">Kompatibilitas Sistem Multi-Merek</p>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 sm:grid-cols-3 lg:grid-cols-4 max-w-4xl mx-auto">
              {brands.map((brand) => (
                <div
                  key={brand.name}
                  className="relative flex flex-col items-center justify-center gap-2 p-3 sm:px-4 sm:py-6 rounded-xl sm:rounded-2xl border border-slate-900 bg-slate-950/40 transition-all duration-300 group cursor-default shadow-md hover:shadow-emerald-500/10 hover:border-emerald-500/30 backdrop-blur-md overflow-hidden"
                >
                  {/* Background Radial Glow Hijau Subtle */}
                  <div className="absolute inset-0 bg-radial from-emerald-500/5 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Micro Tech Dot Pojok Kiri Atas */}
                  <div className="absolute top-1.5 left-1.5 w-1 h-1 rounded-full bg-emerald-500 group-hover:bg-emerald-400 transition-colors duration-300" />
                  <div className="h-10 sm:h-16 w-full max-w-37.5 bg-white rounded-lg sm:rounded-2xl flex items-center justify-center p-1.5 sm:p-2 shadow-inner overflow-hidden transition-transform duration-300 group-hover:scale-105">
                    <img src={brand.img} alt={`${brand.name} Logo`} className="max-h-full max-w-full object-contain select-none" loading="lazy" />
                  </div>
                  <span className="text-[9px] sm:text-[11px] font-black tracking-wider sm:tracking-widest text-emerald-400 transition-all duration-300 relative z-10 group-hover:scale-105 group-hover:text-emerald-300 group-hover:tracking-[0.14em] sm:group-hover:tracking-[0.18em]">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
