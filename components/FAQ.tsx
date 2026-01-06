'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Berapa biaya jasa laser cutting di Braling Inti Logam?",
    answer: "Biaya dihitung berdasarkan jenis bahan, ketebalan, dan panjang lintasan potong (menit/jarak). Kami menawarkan harga sangat kompetitif mulai dari Rp X.XXX per menit. Silakan kirim desain Anda via WhatsApp untuk estimasi gratis."
  },
  {
    question: "Apakah bisa pesan satuan atau harus partai besar?",
    answer: "Kami melayani keduanya! Baik Anda butuh 1 unit untuk prototipe/kebutuhan pribadi, maupun produksi massal ribuan unit untuk industri, kami siap kerjakan dengan standar kualitas yang sama."
  },
  {
    question: "Bahan apa saja yang bisa dikerjakan?",
    answer: "Mesin kami mampu memotong Mild Steel (Plat Besi) hingga 20mm, Stainless Steel hingga 10mm, Aluminium, Kuningan, dan Tembaga. Kami juga melayani bending dan welding untuk material tersebut."
  },
  {
    question: "Berapa lama proses pengerjaannya?",
    answer: "Untuk pesanan standar, pengerjaan memakan waktu 2-3 hari kerja. Untuk proyek urgent, kami memiliki layanan prioritas. Waktu pastinya akan kami infokan saat penawaran."
  },
  {
    question: "Apakah melayani pengiriman ke luar kota?",
    answer: "Ya, kami melayani pengiriman ke seluruh Indonesia. Kami bekerja sama dengan berbagai ekspedisi cargo terpercaya untuk memastikan barang sampai dengan aman dan ongkir terjangkau."
  },
  {
    question: "Apakah bisa bantu desainkan jika saya belum punya gambar?",
    answer: "Tentu! Tim engineering kami siap membantu membuatkan desain teknis (CAD) dari sketsa atau ide kasar Anda. Layanan konsultasi desain ini GRATIS untuk klien kami."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-surface/50 border-t border-line">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-white border border-line text-xs font-bold uppercase tracking-wider mb-4 text-accent">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Pertanyaan Umum
          </h2>
          <p className="text-muted mt-4">
            Hal yang sering ditanyakan pelanggan sebelum memulai proyek.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white border border-line rounded-lg overflow-hidden transition-all duration-300 hover:border-accent/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-accent' : 'text-foreground'}`}>
                  {faq.question}
                </span>
                <span className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-accent text-white' : 'bg-surface text-muted'}`}>
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-muted leading-relaxed border-t border-line/50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
