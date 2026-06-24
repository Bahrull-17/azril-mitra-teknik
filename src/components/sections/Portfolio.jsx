import { useState } from "react";
import { Briefcase, Building2, Home, Store, Factory, ArrowUpRight, X, CheckCircle2 } from "lucide-react";

// Alamat Foto
import gambar1 from "../../assets/images/gambar1.png";
import gambar2 from "../../assets/images/gambar2.png";
import gambar3 from "../../assets/images/gambar3.png";
import gambar4 from "../../assets/images/gambar4.png";
import gambar5 from "../../assets/images/gambar5.png";
import gambar6 from "../../assets/images/gambar6.jpg";

// 1. DATA CONFIGURATION WITH REAL IMAGE URLS
const CATEGORIES = [
  { id: "all", label: "Semua Projek", icon: Briefcase },
  { id: "residensial", label: "Rumah / Apartemen", icon: Home },
  { id: "komersial", label: "Kantor / Instansi", icon: Building2 },
  { id: "retail", label: "Ruko / Cafe", icon: Store },
  { id: "industri", label: "Pabrik / Gudang", icon: Factory },
];

const PORTFOLIO_DATA = [
  {
    id: 1,
    title: "Instalasi Multi-Split AC",
    category: "residensial",
    location: "Cilincing, Jakarta Utara",
    desc: "Pemasangan unit baru dengan sistem hidden pipe (pipa tertanam) agar estetika interior rumah tetap mewah dan rapi.",
    image: gambar1,
    details: {
      problem: "Pemilik rumah ingin memasang AC di 3 kamar berbeda namun terkendala space area outdoor yang sangat terbatas di balkon.",
      solution: "Menggunakan sistem AC Multi-Split (1 Outdoor untuk 3 Indoor). Jalur pipa ditanam rapi di dalam dinding (hidden piping) sebelum tahap finishing cat.",
      specs: ["Unit: Daikin Multi-S 3-Connection", "Kapasitas: 2x 0.5 PK + 1x 1 PK", "Panjang Pipa: Total 28 Meter", "Durasi Kerja: 2 Hari Kelar"],
    },
  },
  {
    id: 2,
    title: "Maintenance AC Central VRV",
    category: "komersial",
    location: "Gedung Perkantoran Jakarta",
    desc: "Pengecekan berkala, cuci besar, dan optimalisasi tekanan freon untuk 12 unit outdoor guna menjaga efisiensi energi kantor.",
    image: gambar2,
    details: {
      problem: "Suhu ruangan kantor di lantai 3 mulai tidak stabil dan tagihan listrik bulanan melonjak akibat performa kompresor outdoor yang berat.",
      solution: "Melakukan chemical cleaning pada seluruh condensor outdoor, kalibrasi sistem inverter VRV, serta balancing volume Freon R410a.",
      specs: ["Sistem: AC Central VRV Inverter", "Jumlah Unit: 12 Outdoor & 48 Indoor", "Metode: Chemical Jet Wash", "Efisiensi: Konsumsi daya turun hingga 15%"],
    },
  },
  {
    id: 3,
    title: "Overhaul Kompresor & Perbaikan",
    category: "retail",
    location: "Coffee Shop, Bekasi",
    desc: "Solusi cepat penanganan AC bocor dan mati total saat jam operasional cafe. Berhasil diselesaikan dalam waktu kurang dari 2 jam.",
    image: gambar3,
    details: {
      problem: "AC area kasir bocor air parah dan tiba-tiba mati total (korsleting) tepat saat jam sibuk makan siang coffee shop.",
      solution: "Emergency response menuju lokasi dalam 20 menit. Dilakukan flushing total pada jalur drainase yang tersumbat lendir dan penggantian overload motor kompresor yang terbakar.",
      specs: ["Unit: AC Cassette 3 PK", "Kerusakan: Blokir Drainase & Overload Burn", "Sparepart: Ganti Overload Relay Original", "Garansi: 1 Bulan Penuh"],
    },
  },
  {
    id: 4,
    title: "Cuci Rutin & Sterilisasi",
    category: "residensial",
    location: "Palmerah, Jakarta Barat",
    desc: "Perawatan cuci AC premium mencakup pembersihan evaporator menggunakan cairan antiseptik untuk membunuh bakteri dan jamur.",
    image: gambar4,
    details: {
      problem: "Penghuni rumah mengeluhkan bau kurang sedap saat AC baru dinyalakan dan anak kecil di rumah mulai sering bersin.",
      solution: "Pembersihan total unit indoor-outdoor, dilanjutkan dengan penyemprotan cairan disinfektan khusus evaporator dan fogging anti-bakteri.",
      specs: ["Unit: AC Split Wall 1 PK", "Cairan: Pro-Disinfectant AC Safe", "Treatment: Evaporator Sterilization", "Hasil: Udara segar, bebas bau bau apek"],
    },
  },
  {
    id: 5,
    title: "Repair Sistem Refrigerasi Freezer Box",
    category: "industri",
    location: "Gudang Pembekuan, Jakarta",
    desc: "Penanganan unit Freezer Box yang mengalami buntu sirkulasi freon. Dilakukan flashing total, penggantian filter dryer, dan pengisian freon baru.",
    image: gambar5,
    details: {
      problem: "Suhu freezer drop hingga di atas 0°C, mengancam stok bahan baku beku senilai puluhan juta rusak.",
      solution: "Mendeteksi kebocoran mikro, melakukan flushing oli kompresor yang terkontaminasi kotoran, menggantian suku cadang filter, dan isi ulang Freon R404a.",
      specs: ["Unit: Freezer Box Industri 1000L", "Tekanan: Vakum hingga 30 InHg", "Sparepart: Filter Dryer Danfoss", "Suhu Akhir: Stabil di -22°C"],
    },
  },
  {
    id: 6,
    title: "Overhaul & Ganti Modul Mesin Cuci",
    category: "residensial",
    location: "Kebon Jeruk, Jakarta Barat",
    desc: "Perbaikan mesin cuci Front Loading digital yang mati total akibat korsleting modul. Penggantian modul control unit original dan kalibrasi dinamo.",
    image: gambar6,
    details: {
      problem: "Mesin cuci mati total di tengah siklus pencucian dengan pintu terkunci otomatis, membuat pakaian terjebak di dalam air.",
      solution: "Pelepasan kunci pintu manual (emergency drain), pembongkaran mainboard, dan penggantian modul digital utama yang terkena lonjakan tegangan listrik.",
      specs: ["Unit: Front Loading 8.5 Kg", "Modul: Main PCB Assembly Original", "Kalibrasi: Speed Sensor & Motor Check", "Status: Normal Operasional"],
    },
  },
];

// 2. MAIN COMPONENT
export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "all" ? PORTFOLIO_DATA : PORTFOLIO_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative bg-slate-950 pt-8 pb-8 px-6 sm:pt-10 sm:pb-6 lg:pt-6 lg:pb-2 lg:px-8">
      <div className="absolute top-1/2 left-10 w-75 h-75 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-indigo-400 border border-indigo-500/20 mb-3">Dokumentasi Kerja</div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight bg-linear-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(99,102,241,0.2)]">
            Projek Yang Telah Selesai
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">Bukti nyata dedikasi teknisi kami dalam memberikan hasil pengerjaan yang rapi, presisi, dan aman di berbagai sektor bangunan.</p>
        </div>

        <div className="flex w-full items-center gap-2 overflow-x-auto px-4 pb-3 mb-8 snap-x snap-mandatory scroll-smooth scrollbar-none sm:flex-wrap sm:justify-center sm:px-0 sm:pb-0">
          {CATEGORIES.map((cat) => {
            const CatIcon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`cursor-pointer inline-flex shrink-0 snap-center flex-col items-center justify-center gap-1 px-1 py-2.5 rounded-xl text-[10px] font-bold tracking-tight border transition-all duration-300
                  w-[calc((100%-1rem)/3)] sm:w-auto sm:flex-row sm:gap-2 sm:px-4 sm:py-2.5 sm:text-xs sm:font-semibold
                  ${isActive ? "bg-indigo-500 border-indigo-400 text-white shadow-lg shadow-indigo-500/20" : "bg-slate-900/40 border-slate-900 text-slate-400 hover:border-slate-800 hover:text-slate-200"}`}
              >
                <CatIcon className="h-4 w-4 shrink-0" />
                <span className="truncate max-w-full text-center">{cat.label.split(" / ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative flex flex-col rounded-2xl border border-slate-900 bg-slate-900/20 overflow-hidden transition-all duration-300 hover:border-slate-800 hover:bg-slate-900/40">
              {/* Image Section */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-slate-900">
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent z-10 opacity-60" />
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" loading="lazy" />
              </div>

              <div className="p-4 flex flex-col justify-between flex-1">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-medium text-indigo-400 uppercase tracking-wider">
                    <span>{project.category}</span>
                    <span className="text-slate-500 font-normal normal-case truncate max-w-[60%]">{project.location}</span>
                  </div>

                  <h3 className="text-sm font-bold text-white tracking-tight group-hover:text-indigo-400 transition-colors duration-300">{project.title}</h3>

                  <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2 h-9 overflow-hidden">{project.desc}</p>
                </div>

                {/* Card Footer Tag */}
                <div onClick={() => setSelectedProject(project)} className="mt-3 pt-2.5 border-t border-slate-900/60 flex items-center justify-between text-[11px] text-slate-500 font-medium cursor-pointer group/btn">
                  <span>Selesai 100%</span>
                  <span className="inline-flex items-center gap-1 text-slate-400 group-hover:text-indigo-400 transition-colors duration-300">
                    Detail <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL OVERLAY DETAIL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md transition-all duration-300 animate-fade-in">
          <div className="relative w-full max-w-xl rounded-2xl border border-slate-850 bg-slate-900 p-5 shadow-2xl overflow-y-auto max-h-[90vh] sm:p-6 scrollbar-none">
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white p-1.5 rounded-xl bg-slate-950/50 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer">
              <X className="h-4 w-4" />
            </button>
            <div className="mb-4">
              <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
                {selectedProject.category} • {selectedProject.location}
              </span>
              <h3 className="text-xl font-black text-white mt-1 pr-8 leading-tight sm:text-2xl">{selectedProject.title}</h3>
            </div>
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-950 border border-slate-800 mb-4 lg:max-h-60">
              <img src={selectedProject.image} alt={selectedProject.title} className="h-full w-full object-cover" />
            </div>
            <div className="space-y-3.5">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-1">Masalah di Lapangan (Problem)</h4>
                <p className="text-xs text-slate-300 leading-relaxed sm:text-sm">{selectedProject.details.problem}</p>
              </div>
              <div className="border-t border-slate-800/60 pt-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">Langkah Penanganan (Solution)</h4>
                <p className="text-xs text-slate-300 leading-relaxed sm:text-sm">{selectedProject.details.solution}</p>
              </div>
              <div className="border-t border-slate-800/60 pt-3">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-indigo-400 mb-2">Spesifikasi & Hasil Teknis</h4>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {selectedProject.details.specs.map((spec, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/40 border border-slate-950 px-3 py-2 rounded-lg font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                      <span className="truncate">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/60 flex justify-end">
              <button onClick={() => setSelectedProject(null)} className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-bold rounded-xl shadow-lg shadow-indigo-500/20 transition-all cursor-pointer">
                Selesai Membaca
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
