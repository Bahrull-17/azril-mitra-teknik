import { ShieldCheck, Users, Wrench, Coins } from "lucide-react";

// 1. DATA CONFIGURATION
const FEATURES_DATA = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Garansi Tertulis 30 Hari",
    desc: "Jaminan penuh untuk setiap pengerjaan. Jika kendala yang sama muncul kembali dalam masa garansi, tim kami meluncur perbaiki gratis tanpa debat.",
    iconClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    accentClass: "hover:border-emerald-500/30 hover:shadow-emerald-500/5",
  },
  {
    id: 2,
    icon: Users,
    title: "Teknisi Jujur & Ahli",
    desc: "Seluruh teknisi kami berpengalaman, ramah, dan bekerja transparan. Kami menginfokan kondisi riil di lapangan tanpa trik mengakali kerusakan.",
    iconClass: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    accentClass: "hover:border-indigo-500/30 hover:shadow-indigo-500/5",
  },
  {
    id: 3,
    icon: Wrench,
    title: "SOP & Alat Standar Industri",
    desc: "Wajib vakum unit untuk pasang baru, menggunakan jet pump bertekanan tinggi, serta manifold digital presisi agar hasil kerja aman jangka panjang.",
    iconClass: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    accentClass: "hover:border-cyan-500/30 hover:shadow-cyan-500/5",
  },
  {
    id: 4,
    icon: Coins,
    title: "Harga Transparan di Awal",
    desc: "Tidak ada biaya siluman (hidden fees). Semua estimasi biaya pengerjaan dan suku cadang diinfokan serta disetujui oleh Anda sebelum teknisi bekerja.",
    iconClass: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    accentClass: "hover:border-amber-500/30 hover:shadow-amber-500/5",
  },
];
// 2. MAIN COMPONENT
export default function Features() {
  return (
    <section id="keunggulan" className="keunggulan" className="relative bg-slate-950 pt-6 pb-16 px-6 sm:pt-6 sm:pb-24 lg:pt-6 lg:px-8 overflow-hidden border-t border-solid lg:border-t-0 border-slate-800">
      {/* Glow Ambient Background */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-indigo-400 border border-indigo-500/20 mb-3">Komitmen Layanan</div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight bg-linear-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(99,102,241,0.2)]">
            Mengapa Memilih Kami?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">Kami mengutamakan integritas kerja dan kepuasan jangka panjang Anda lewat standar penanganan teknis yang profesional.</p>
        </div>

        {/* Features Responsive Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {FEATURES_DATA.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`group relative flex flex-col rounded-2xl border border-slate-900 bg-slate-900/20 p-5 backdrop-blur-md shadow-2xl transition-all duration-300 transform hover:-translate-y-1 select-none ${item.accentClass}`}
              >
                {/* Icon Box */}
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl border mb-4 transition-transform duration-300 group-hover:scale-105 ${item.iconClass}`}>
                  <Icon className="h-5 w-5" />
                </div>

                {/* Text Content */}
                <h3 className="text-base font-bold text-white mb-2 tracking-tight group-hover:text-indigo-400 transition-colors duration-300">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed lg:text-[11px]">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
