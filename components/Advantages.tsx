'use client';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Settings, 
  Clock, 
  ShieldCheck, 
  MessageSquareHeart, 
  Award 
} from 'lucide-react';

const advantages = [
  {
    icon: <Zap className="w-8 h-8 text-accent" />,
    title: "Presisi & Teknologi Modern",
    description: "Didukung mesin Hydraulic & CNC berkapasitas maksimal. Hasil potongan dan tekukan dijamin presisi, rapi, dan minim cacat."
  },
  {
    icon: <Settings className="w-8 h-8 text-accent" />,
    title: "Bebas Custom 100%",
    description: "Satuan atau partai besar? Desain rumit atau simpel? Kami siap kerjakan. Bebas custom ukuran dan desain sesuai imajinasi Anda."
  },
  {
    icon: <Clock className="w-8 h-8 text-accent" />,
    title: "Cepat & Terjadwal",
    description: "Sistem kerja efisien didukung tim profesional. Pesanan Anda selesai tepat waktu tanpa mengorbankan kualitas sedikitpun."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-accent" />,
    title: "Hasil Kuat & Estetik",
    description: "Bukan sekedar jadi. Kami memastikan setiap produk kokoh, awet, dan memiliki nilai estetika tinggi (finishing halus)."
  },
  {
    icon: <MessageSquareHeart className="w-8 h-8 text-accent" />,
    title: "Konsultasi Ramah",
    description: "Bingung soal desain atau bahan? Tim kami siap diskusi dan memberikan solusi terbaik dari awal hingga akhir produksi."
  },
  {
    icon: <Award className="w-8 h-8 text-accent" />,
    title: "Terpercaya & Berpengalaman",
    description: "Telah dipercaya menangani ratusan proyek logam mulai dari kebutuhan UMKM, Instansi Pemerintah, hingga Perusahaan Besar."
  }
];

export default function Advantages() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-line/20 -skew-x-12 transform translate-x-32" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 bg-white border border-line text-xs font-bold uppercase tracking-wider mb-4 text-accent">
            Kenapa Memilih Kami?
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
            Standar Kualitas Tinggi Tanpa Kompromi
          </h2>
          <p className="text-muted text-lg">
            Kami mengubah ide logam Anda menjadi realitas dengan presisi mesin dan keahlian tangan profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl border border-line hover:border-accent hover:shadow-lg transition-all duration-300 group"
            >
              <div className="mb-6 p-4 bg-surface rounded-full w-fit group-hover:bg-accent/10 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
