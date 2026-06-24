import { useState } from "react";
import { ShieldCheck, Calendar, ArrowRight, Wrench, Sparkles, CheckCircle2 } from "lucide-react";

// Data untuk simulasi interaktif
const SERVICE_OPTIONS = [
  { id: "cuci", label: "Cuci AC", price: "Rp 75rb~", time: "30-45 Menit" },
  { id: "perbaikan", label: "Perbaikan", price: "Pengecekan dulu", time: "Sesuai Kerusakan" },
  { id: "pasang", label: "Bongkar Pasang", price: "Rp 250rb~", time: "1-2 Jam" },
];

const STATS = [
  { value: "500+", label: "Pelanggan Puas", desc: "Kepercayaan penuh dari pemilik rumah, kantor dan pelaku usaha di wilayah jabodetabek." },
  { value: "5+", label: "Tahun Pengalaman", desc: "Konsisten memberikan layanan pendingin ruangan terbaik dengan standar teknisi profesional." },
  { value: "1,000+", label: "Unit Ditangani", desc: "Ahli dalam menangani berbagai tipe, keerusakan, dan merk AC dengan hasil yang optimal." },
];

export default function Hero() {
  const [selectedService, setSelectedService] = useState("cuci");
  const activeService = SERVICE_OPTIONS.find((s) => s.id === selectedService);

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 pt-10 pb-8 lg:pt-16 lg:pb-12">
      {/* Premium Ambient Light / Blur Effect */}
      <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-blue-400 uppercase">
              <ShieldCheck className="h-4 w-4" />
              Teknisi AC Profesional & Bergaransi
            </div>

            {/*Gradient Title */}
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl lg:leading-[1.1]">
              Service AC Profesional untuk <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Rumah, Kantor & Usaha</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">Melayani cuci AC, isi freon, bongkar pasang, dan perbaikan AC dengan teknisi berpengalaman, respon cepat, dan garansi pekerjaan.</p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
              <a
                href="https://wa.me/6282125223321"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:bg-emerald-500 hover:shadow-emerald-500/30 hover:-translate-y-0.5"
              >
                Hubungi Kami
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#layanan"
                className="inline-flex items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/5 px-6 py-3 font-semibold text-blue-400 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-300"
              >
                Lihat Layanan
              </a>
            </div>

            {/* Stats Section */}
            <div className="mt-6 grid grid-cols-1 gap-5 border-t border-slate-900 pt-4 sm:grid-cols-3 lg:gap-6">
              {STATS.map((stat, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md transform transition-all duration-300 ease-out select-none cursor-pointer active:scale-98 active:border-blue-500/50 active:bg-blue-500/5 hover:-translate-y-2 hover:scale-102 hover:border-blue-500/40 hover:bg-white/10 hover:shadow-xl hover:shadow-blue-500/5 md:p-7"
                >
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-blue-500/0 via-blue-500/0 to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-active:opacity-100" />
                  <div className="relative z-10 flex flex-col items-center w-full">
                    <p className="bg-linear-to-b from-white via-slate-100 to-slate-300 bg-clip-text text-3xl font-black tracking-tight text-transparent transition-transform duration-300 group-hover:scale-105 md:text-4xl">{stat.value}</p>
                    <p className="mt-2 text-xs font-bold tracking-wider text-blue-400 uppercase">{stat.label}</p>
                    <p className="mt-3 text-xs leading-relaxed text-slate-300 md:text-[13px]">{stat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="relative w-full -mt-6 lg:mt-0 lg:col-span-5 lg:-translate-y-8">
            {/* Soft background glow for the card */}
            <div className="absolute inset-0 bg-linear-to-tr from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl" />

            {/* Main Interactive Showcase Card */}
            <div className="relative flex h-auto flex-col justify-between rounded-3xl border border-slate-800 bg-linear-to-b from-slate-900/90 to-slate-950/90 p-6 backdrop-blur-xl shadow-2xl md:p-8">
              {/* Header Kartu */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                    <Wrench className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Azril Mitra Teknik</h3>
                    <p className="text-xs text-slate-500">Pilih Layanan & Cek Estimasi</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium tracking-wide text-emerald-400 border border-emerald-500/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Teknisi Ready
                </div>
              </div>

              {/* Body Kartu: Selector Layanan */}
              <div className="my-6">
                <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-3">Jenis Layanan AC:</p>
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                  {SERVICE_OPTIONS.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`cursor-pointer rounded-xl border p-3 text-left transition-all duration-300 ${
                        selectedService === service.id ? "border-blue-500 bg-blue-500/10 text-white shadow-md shadow-blue-500/5" : "border-slate-800/80 bg-slate-900/40 text-slate-400 hover:border-slate-700 hover:bg-slate-900/80"
                      }`}
                    >
                      <p className="text-xs font-semibold">{service.label}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Tampilan Output Estimasi */}
              <div className="rounded-xl bg-slate-950/60 border border-slate-800/50 p-4 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">Estimasi Biaya</p>
                    <p className="text-base font-bold text-cyan-400 mt-1">{activeService?.price}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">Durasi Pengerjaan</p>
                    <p className="text-base font-medium text-slate-200 mt-1">{activeService?.time}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2 border-t border-slate-900 pt-3 text-xs text-slate-400">
                  <CheckCircle2 className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                  <span>Garansi pekerjaan berlaku selama 30 hari.</span>
                </div>
              </div>

              {/* Dynamic CTA Button */}
              <a
                href={`https://wa.me/6282125223321?text=Halo%20Azril%20Mitra%20Teknik,%20saya%20ingin%20pesan%20layanan%20${encodeURIComponent(activeService?.label || "")}`}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-slate-100 hover:scale-[1.01]"
              >
                <Sparkles className="h-4 w-4 text-blue-600" />
                Pesan Layanan Ini Sekarang
              </a>
            </div>

            {/* Floating Glassmorphism Card */}
            <div className="relative mt-4 mx-auto flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/80 p-5 shadow-2xl backdrop-blur-md transition-all duration-300 lg:absolute lg:mt-0 lg:-bottom-25 lg:left-1/2 lg:w-[calc(100%-3rem)] lg:-translate-x-1/2 hover:scale-[1.01] z-10">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Respon Cepat</p>
                <h4 className="mt-0.5 text-sm font-medium text-slate-200">Siap Melayani Setiap Hari</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
