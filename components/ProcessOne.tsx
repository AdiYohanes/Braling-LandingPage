'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ProcessOne() {
  return (
    <section className="relative py-32 bg-fixed bg-cover bg-center overflow-hidden" 
      style={{ backgroundImage: "url('/cta-bg.png')" }}
    >
      {/* Dark Overlay with blur */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center text-white">
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 border border-accent text-accent font-bold text-xs rounded-full uppercase tracking-wider mb-8">
            Siap Memulai Proyek Anda?
          </span>
          
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
            Wujudkan Ide Menjadi <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Masterpiece Logam</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Jangan biarkan desain Anda hanya di atas kertas. Diskusikan dengan tim engineering kami dan dapatkan penawaran terbaik hari ini.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="https://wa.me/628112748787" 
              className="group relative px-8 py-4 bg-accent text-white font-bold text-sm uppercase tracking-widest overflow-hidden transition-all hover:bg-white hover:text-black"
            >
              <span className="relative z-10 flex items-center gap-3">
                Hubungi Kami Sekarang <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
              </span>
            </a>
            
            <a 
              href="#catalog" 
              className="px-8 py-4 border border-white/30 text-white font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              Lihat Portfolio
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
