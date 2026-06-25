import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, ArrowUpRight, Sparkles } from "lucide-react";

export default function Contact() {
  // 1. STATE MANAGEMENT FORM
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    service: "Cuci AC & Perawatan Berkala",
    description: "",
  });

  // Handler dinamis untuk mencatat input user
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 2. HANDLER SUBMIT OTOMATIS KE WHATSAPP
  const handleSubmit = (e) => {
    e.preventDefault();

    const adminPhoneNumber = "6282125223321";

    // Template pesan reservasi terstruktur
    const message = `*APLIKASI RESERVASI - AZRIL MITRA TEKNIK*
--------------------------------------------
*Nama Lengkap:* ${formData.name}
*No. WhatsApp:* ${formData.whatsapp}
*Jenis Layanan:* ${formData.service}
*Detail Masalah / Kebutuhan:*
${formData.description}
--------------------------------------------
_Pesan dikirim otomatis via Landing Page_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${adminPhoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setFormData({
      name: "",
      whatsapp: "",
      service: "Cuci AC & Perawatan Berkala",
      description: "",
    });
  };

  return (
    // FIX LAYOUT: Menyelaraskan margin minus responsif agar sambungan dengan CTA rapat sempurna tanpa celah putih
    <section id="contact" className="relative bg-slate-950 pt-12 pb-16 px-4 sm:pb-24 lg:px-8 -mt-12 sm:-mt-14 lg:-mt-16 overflow-hidden border-t border-slate-900/40 z-10 will-change-transform">
      {/* Top Border Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-linear-to-r from-transparent via-slate-900/60 to-transparent" />

      {/* Background Ambient Lights Premium (FIX: Mengubah nilai w-87.5 non-standar menjadi w-80 bawaan inti) */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Container Utama */}
      <div className="mx-auto max-w-5xl lg:max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-slate-800/80 px-3.5 py-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-indigo-400 mb-4 shadow-inner">
            <Sparkles className="h-3 w-3 text-indigo-400" />
            <span className="bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Pintu Komunikasi</span>
          </div>

          <h2 className="bg-linear-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-2xl font-black tracking-tight text-transparent sm:text-4xl lg:text-4xl leading-snug sm:leading-tight">Mulai Konsultasi Anda Hari Ini</h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">Punya pertanyaan atau ingin langsung memesan teknisi? Tim kami siap merespons kebutuhan Anda dengan cepat dan transparan.</p>
        </div>

        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-6 items-stretch">
          {/* SISI KIRI: INFO & LOKASI */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 w-full">
            {/* Bento Item 1: Kontak Cepat - Dioptimalkan dari heavy backdrop-blur di mobile */}
            <div className="flex-1 rounded-3xl border border-slate-900/80 bg-linear-to-b from-slate-900/30 to-slate-950/40 p-5 lg:p-6 md:backdrop-blur-xl shadow-xl shadow-indigo-950/5">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Hubungi Langsung</h3>
              <div className="space-y-4">
                {/* Link WhatsApp Langsung */}
                <a
                  href="https://wa.me/6282125223321?text=Halo%20Azril%20Mitra%20Teknik,%20saya%20ingin%20bertanya%20mengenai%20layanan%20AC."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group p-2.5 -m-2.5 rounded-2xl hover:bg-slate-900/40 transition-all border border-transparent hover:border-slate-900/60 cursor-pointer"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500/20 transition-all">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">WhatsApp Hotline</p>
                    <p className="text-xs font-semibold text-slate-300 group-hover:text-cyan-400 transition-colors truncate">+62 821-2522-3321</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-slate-600 ml-auto opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Email Resmi */}
                <div className="flex items-center gap-4 p-2.5 -m-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Mail className="h-4 w-4" />
                  </div>
                  <a href="mailto:vladimirasep18@gmail.com?subject=Tanya%20Layanan%20Azril%20Mitra%20Teknik" className="flex flex-col group cursor-pointer transition-all">
                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest group-hover:text-slate-400 transition-colors duration-300">Surel Resmi</p>
                    <p className="text-xs font-semibold text-slate-300 group-hover:text-cyan-400 group-hover:underline transition-colors duration-300 truncate">vladimirasep18@gmail.com</p>
                  </a>
                </div>
              </div>
            </div>

            {/* Bento Item 2: Operasional & Kantor */}
            <div className="flex-1 rounded-3xl border border-slate-900/80 bg-linear-to-b from-slate-900/30 to-slate-950/40 p-5 lg:p-6 md:backdrop-blur-xl shadow-xl shadow-indigo-950/5">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 border border-slate-800/80 text-slate-400 shrink-0">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest">Jam Operasional</h4>
                    <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                      Senin – Sabtu: 08.00 – 17.00 WIB
                      <br />
                      <span className="text-indigo-400 font-medium">Minggu / Hari Libur: Siaga Darurat</span>
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-900/80 pt-4 flex items-start gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 border border-slate-800/80 text-slate-400 shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest">Workshop Utama</h4>
                    <a
                      href="https://maps.google.com/?q=Jl.+Kalibaru+Barat,+RT009/06+No.29+Kalibaru+Cilincing+Jakarta+Utara"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-xs text-slate-400 hover:text-cyan-400 hover:underline leading-relaxed transition-colors duration-300 cursor-pointer"
                    >
                      Jl. Kalibaru Barat, RT009/06 No.29 Kelurahan Kalibaru Kecamatan Cilincing, Jakarta Utara, Jakarta 14110
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SISI KANAN: FORMULIR RESERVASI */}
          <div className="lg:col-span-7 w-full flex">
            <div className="w-full rounded-3xl border border-slate-900/80 bg-linear-to-b from-slate-900/30 to-slate-950/40 p-5 sm:p-6 lg:p-8 md:backdrop-blur-xl shadow-2xl shadow-indigo-950/10 flex flex-col justify-center">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Formulir Reservasi</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">Nama Lengkap</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ahmad Solehudin"
                      className="w-full rounded-xl border border-slate-900 bg-slate-950/60 px-4 py-2.5 text-xs text-white placeholder-slate-700 focus:border-indigo-500/50 focus:bg-slate-950 focus:outline-hidden transition-all shadow-inner"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">Nomor WhatsApp</label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="0812345678xx"
                      className="w-full rounded-xl border border-slate-900 bg-slate-950/60 px-4 py-2.5 text-xs text-white placeholder-slate-700 focus:border-indigo-500/50 focus:bg-slate-950 focus:outline-hidden transition-all shadow-inner"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">Jenis Layanan Premium</label>
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-900 bg-slate-950/60 px-4 py-2.5 text-xs text-slate-300 focus:border-indigo-500/50 focus:bg-slate-950 focus:outline-hidden transition-all shadow-inner cursor-pointer appearance-none"
                    >
                      <option value="Cuci AC & Perawatan Berkala" className="bg-slate-950">
                        Cuci AC & Perawatan Berkala
                      </option>
                      <option value="Perbaikan Akut & Troubleshooting Freon" className="bg-slate-950">
                        Perbaikan Akut & Troubleshooting Freon
                      </option>
                      <option value="Instalasi / Bongkar Pasang Sistem AC" className="bg-slate-950">
                        Instalasi / Bongkar Pasang Sistem AC
                      </option>
                      <option value="Sewa AC Standing & Heavy Duty Cooling" className="bg-slate-950">
                        Sewa AC Standing & Heavy Duty Cooling
                      </option>
                    </select>
                    {/* Kustom arrow indikator agar tidak cacat render antar OS */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">Deskripsi Kebutuhan / Detail Masalah</label>
                  <textarea
                    rows="3"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Tuliskan kendala AC Anda atau detail unit yang ingin dipesan secara ringkas..."
                    className="w-full rounded-xl border border-slate-900 bg-slate-950/60 px-4 py-2.5 text-xs text-white placeholder-slate-700 focus:border-indigo-500/50 focus:bg-slate-950 focus:outline-hidden transition-all shadow-inner resize-none leading-relaxed"
                    required
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="relative w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/40 active:translate-y-0 cursor-pointer text-center tracking-wider uppercase border border-indigo-400/30 overflow-hidden group"
                  >
                    <div className="absolute inset-0 w-1/2 h-full bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:animate-shimmer" />
                    <Send className="h-3.5 w-3.5" />
                    <span>Kirim Aplikasi Booking</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
