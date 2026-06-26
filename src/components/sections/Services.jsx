import { Wind, Wrench, RefreshCw, Gauge, ShieldCheck, ArrowRight, Box, WashingMachine } from "lucide-react";

// 1. DATA CONFIGURATION (Hoisted di luar komponen, bersih & menghemat alokasi memori RAM)
const SERVICES_DATA = [
  {
    id: "cuci",
    icon: Wind,
    title: "Cuci AC Premium",
    price: "Rp 75.000 ~",
    desc: "Pembersihan unit indoor & outdoor secara menyeluruh menggunakan jet pump bertekanan tinggi untuk mengembalikan kesegaran udara.",
    features: ["Pembersihan Filter & Cover", "Penyemprotan Evaporator", "Cek Tekanan Freon", "Pembersihan Drainase Air"],
    accentClass: "md:hover:border-cyan-500/30 md:hover:shadow-cyan-500/5",
    iconClass: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    badge: "Terpopuler",
  },
  {
    id: "perbaikan",
    icon: Wrench,
    title: "Perbaikan & Trouble",
    price: "Cek Estimasi",
    desc: "Solusi cepat untuk AC tidak dingin, bocor air, mengeluarkan suara berisik, hingga masalah kelistrikan pada kompresor.",
    features: ["Analisis Kerusakan Akurat", "Penggantian Sparepart Original", "Pengecekan Kebocoran", "Uji Coba Fungsi Total"],
    accentClass: "md:hover:border-blue-500/30 md:hover:shadow-blue-500/5",
    iconClass: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    badge: null,
  },
  {
    id: "pasang",
    icon: RefreshCw,
    title: "Bongkar Pasang AC",
    price: "Rp 250.000 ~",
    desc: "Layanan relokasi atau pemasangan unit baru dengan perhitungan sirkulasi udara yang presisi agar AC bekerja maksimal dan awet.",
    features: ["Vakum Unit (Wajib)", "Bobok Tembok Rapi", "Instalasi Pipa & Kabel", "Garansi Kebocoran"],
    accentClass: "md:hover:border-indigo-500/30 md:hover:shadow-indigo-500/5",
    iconClass: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    badge: null,
  },
  {
    id: "freon",
    icon: Gauge,
    title: "Isi & Tambah Freon",
    price: "Rp 150.000 ~",
    desc: "Pengisian ulang atau penambahan tekanan Freon jenis R32/R410a/R22 untuk menjaga suhu dingin AC tetap stabil dan efisien.",
    features: ["Cek Tekanan Manifold", "Deteksi Kebocoran Pipa", "Isi Freon Berkualitas", "Pengoptimalan Kompresor"],
    accentClass: "md:hover:border-emerald-500/30 md:hover:shadow-emerald-500/5",
    iconClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    badge: "Rekomendasi",
  },
  {
    id: "freezer",
    icon: Box,
    title: "Service Freezer & Kulkas",
    price: "Cek Estimasi",
    desc: "Perbaikan khusus untuk Freezer Box, Showcase, hingga Kulkas rumah tangga yang tidak dingin, mati total, atau buntu sistem.",
    features: ["Ganti Kompresor Baru", "Flushing & Isi Freon Baru", "Perbaikan Thermostat", "Perbaikan Kebocoran Evap"],
    accentClass: "md:hover:border-amber-500/30 md:hover:shadow-amber-500/5",
    iconClass: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    badge: "Layanan Baru",
  },
  {
    id: "mesincuci",
    icon: WashingMachine,
    title: "Service Mesin Cuci",
    price: "Cek Estimasi",
    desc: "Layanan reparasi mesin cuci 1 tabung (Top/Front Loading) maupun 2 tabung untuk kendala air tersumbat, tidak berputar, atau error modul.",
    features: ["Perbaikan Dinamo Putar", "Ganti Modul Digital", "Ganti V-Belt & Gearbox", "Pembersihan Tabung Total"],
    accentClass: "md:hover:border-rose-500/30 md:hover:shadow-rose-500/5",
    iconClass: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    badge: "Layanan Baru",
  },
];

// 2. SUB-COMPONENT: SERVICE CARD
function ServiceCard({ service }) {
  const Icon = service.icon;
  const whatsappUrl = `https://wa.me/6282125223321?text=Halo%20Azril%20Mitra%20Teknik%2C%20saya%20ingin%20memesan%20layanan%20*${encodeURIComponent(service.title)}*.`;

  return (
    // MEMPERTAHANKAN WARNA PRESTIGE AWAL: bg-slate-900/50 & md:backdrop-blur-md tetap aktif tanpa merusak layar
    <div
      className={`group relative flex flex-col justify-between rounded-2xl border border-slate-900/60 bg-slate-900/50 p-5 shadow-xl select-none transition-all duration-300 overflow-y-visible transform-gpu backface-hidden md:backdrop-blur-md md:p-6 md:hover:-translate-y-1.5 ${service.accentClass}`}
    >
      {/* Subtle Inner Glow */}
      <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-white/0 to-white/5 opacity-0 transition-opacity duration-300 md:group-hover:opacity-100 pointer-events-none" />

      <div className="overflow-y-visible">
        {/* Header Unit (Icon & Badge) */}
        <div className="flex items-center justify-between mb-4">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-transform duration-300 md:group-hover:scale-105 ${service.iconClass}`}>
            <Icon className="h-5 w-5 shrink-0" />
          </div>
          {service.badge && <span className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-blue-400 border border-blue-500/20">{service.badge}</span>}
        </div>

        {/* Content Unit */}
        <h3 className="text-base font-bold text-white mb-1 tracking-tight transition-colors duration-300 md:group-hover:text-blue-400 sm:text-lg">{service.title}</h3>

        <div className="mb-3">
          <span className="text-sm font-extrabold text-cyan-400 sm:text-base">{service.price}</span>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed mb-4 border-b border-slate-800/50 pb-4 line-clamp-3 md:text-[13px]">{service.desc}</p>

        {/* Features Checklist */}
        <ul className="space-y-2">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-xs text-slate-300 font-medium md:text-[13px]">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Button */}
      <div className="mt-6">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-300 px-4 py-2.5 text-xs font-semibold tracking-wide transition-all duration-200 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-white active:scale-98"
        >
          Pesan Layanan
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 md:group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}

// 3. MAIN COMPONENT
function Services() {
  return (
    <section id="services" className="relative bg-slate-950 pt-12 pb-10 px-4 sm:px-6 lg:px-8 overflow-x-hidden overflow-y-visible border-b border-slate-900/60 transition-all z-10">
      {/* 
        FIX UTAMA ARSITEKTUR:
        - Menghapus total properti maut 'will-change-filter' yang menghancurkan rendering GPU mobile.
        - Membatasi blur-3xl bawaan css dengan nilai konkrit agar pendaran warna tetap mewah secara natural tanpa lag.
      */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 sm:w-125 sm:h-125 bg-blue-500/5 rounded-full blur-[100px] transform-gpu pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-48 h-48 sm:w-75 sm:h-75 bg-cyan-500/5 rounded-full blur-[80px] transform-gpu pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10 overflow-y-visible">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 gap-2.5 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.05)]">
            Detail Cakupan Kerja
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight bg-linear-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Apa Saja yang Kami Kerjakan?</h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed font-medium tracking-wide">
            Berikut transparansi Standar Operasional Prosedur (SOP) pengerjaan tim teknisi kami di lapangan untuk memastikan alat pendingin Anda kembali berfungsi optimal.
          </p>
        </div>

        {/* Responsive Services Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 transform-gpu overflow-y-visible">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
