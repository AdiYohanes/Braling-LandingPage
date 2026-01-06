'use client';
import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'CNC Laser Cutting',
    description: 'Pemotongan plat besi, stainless, dan aluminium dengan akurasi tinggi menggunakan mesin fiber laser terbaru.',
  },
  {
    num: '02',
    title: 'Hydraulic Bending',
    description: 'Tekuk plat presisi dengan mesin bending hidrolik untuk membentuk komponen sesuai spesifikasi teknis.',
  },
  {
    num: '03',
    title: 'Custom Fabrication',
    description: 'Perakitan dan pengelasan untuk struktur kustom, dari part otomotif hingga konstruksi berat.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-surface">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 pb-8 border-b border-line">
          <div>
            <span className="inline-block px-3 py-1 bg-white border border-line text-xs font-bold uppercase tracking-wider mb-4">
              Layanan Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">
              Teknologi & Keahlian
            </h2>
          </div>
          <p className="text-muted max-w-sm mt-4 md:mt-0">
            Kami menyediakan layanan end-to-end mulai dari desain hingga finishing produk.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-line border border-line">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white p-12 hover:bg-gray-50 transition-colors group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="block text-sm font-mono text-muted mb-16 group-hover:text-accent transition-colors">
                {service.num}
              </span>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
