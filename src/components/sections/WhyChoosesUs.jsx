import { ShieldCheck, Users, Wrench, Coins } from "lucide-react";

// 1. DATA CONFIGURATION (Hoisted di luar komponen agar tidak di-recreate setiap render)
const FEATURES_DATA = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Garansi Tertulis 30 Hari",
    desc: "Jaminan penuh untuk setiap pengerjaan. Jika kendala yang sama muncul kembali dalam masa garansi, tim kami meluncur perbaiki gratis tanpa debat.",
    iconClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    accentClass: "md:hover:border-emerald-500/30 md:hover:shadow-emerald-500/5",
  },
  {
    id: 2,
    icon: Users,
    title: "Teknisi Jujur & Ahli",
    desc: "Seluruh teknisi kami berpengalaman, ramah, dan bekerja transparan. Kami menginfokan kondisi riil di lapangan tanpa trik mengakali kerusakan.",
    iconClass: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    accentClass: "md:hover:border-indigo-500/30 md:hover:shadow-indigo-500/5",
  },
  {
    id: 3,
    icon: Wrench,
    title: "SOP & Alat Standar Industri",
    desc: "Wajib vakum unit untuk pasang baru, menggunakan jet pump bertekanan tinggi, serta manifold digital presisi agar hasil kerja aman jangka panjang.",
    iconClass: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    accentClass: "md:hover:border-cyan-500/30 md:hover:shadow-cyan-500/5",
  },
  {
    id: 4,
    icon: Coins,
    title: "Harga Transparan di Awal",
    desc: "Tidak ada biaya siluman (hidden fees). Semua estimasi biaya pengerjaan dan suku cadang diinfokan serta disetujui oleh Anda sebelum teknisi bekerja.",
    iconClass: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    accentClass: "md:hover:border-amber-500/30 md:hover:shadow-amber-500/5",
  },
];

// 2. MAIN COMPONENT
export default function WhyChooseUs() {
  return (
    // FIX: Membersihkan double className, mengoptimalkan rendering dengan will-change-transform
    <section id="keunggulan" className="relative bg-slate-950 pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-900/40 will-change-transform">
      {/* Glow Ambient Background (Diturunkan intensitas blur agar hemat performa GPU mobile) */}
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-indigo-400 border border-indigo-500/20 mb-3">Komitmen Layanan</div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight bg-linear-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Mengapa Memilih Kami?</h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">Kami mengutamakan integritas kerja dan kepuasan jangka panjang Anda lewat standar penanganan teknis yang profesional.</p>
        </div>

        {/* Features Responsive Grid - Menggunakan items-stretch agar tinggi flexbox merata */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 items-stretch content-visibility-auto">
          {FEATURES_DATA.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className={`group relative flex flex-col rounded-2xl border border-slate-900/80 bg-slate-900/40 p-5 shadow-xl transition-all duration-200 select-none md:hover:-translate-y-1 ${item.accentClass}`}>
                {/* Icon Box */}
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border mb-4 transition-transform duration-200 md:group-hover:scale-105 ${item.iconClass}`}>
                  <Icon className="h-5 w-5 shrink-0" />
                </div>

                {/* Text Content */}
                <div className="flex flex-col grow">
                  <h3 className="text-sm font-bold text-white mb-2 tracking-tight md:group-hover:text-indigo-400 transition-colors duration-200">{item.title}</h3>
                  {/* FIX: Menggunakan class grow standar Tailwind v4 untuk alokasi ruang kosong */}
                  <p className="text-xs text-slate-400 leading-relaxed grow">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
