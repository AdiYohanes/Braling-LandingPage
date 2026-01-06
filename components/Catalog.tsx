'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const items = [
  {
    src: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1000,w_500,f_auto,q_auto/21589778/121359_163543.png',
    title: 'Automotive Flange',
    category: 'CNC Cutting / 10mm Steel'
  },
  {
    src: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1000,w_500,f_auto,q_auto/21589778/559424_162211.png',
    title: 'Decorative Screen',
    category: 'Laser Cut / Interior'
  },
  {
    src: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1000,w_500,f_auto,q_auto/21589778/291373_375558.png',
    title: 'Custom Bracket',
    category: 'Heavy Duty Fabrication'
  },
  {
    src: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1000,w_500,f_auto,q_auto/21589778/152297_336562.png',
    title: 'Industrial Mount',
    category: 'Bending & Welding'
  },
  {
    src: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1000,w_500,f_auto,q_100/21589778/194334_643109.png',
    title: 'Engine Mounting',
    category: 'Precision Parts'
  },
  {
    src: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1000,w_500,f_auto,q_100/21589778/284393_903147.png',
    title: 'Heavy Equipment Part',
    category: '20mm Steel Plate'
  }
];

export default function Catalog() {
  return (
    <section id="catalog" className="py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold uppercase tracking-tight">Galeri Produk</h2>
          <button className="px-6 py-3 border border-line text-sm font-bold uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors">
            Lihat Semua
          </button>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              className="relative group break-inside-avoid overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05 }}
            >
              <Image
                src={item.src}
                alt={item.title}
                width={500}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h3 className="text-white text-xl font-bold mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
