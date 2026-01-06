'use client';
import { motion } from 'framer-motion';
import { CheckCircle2, Target, Trophy } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white border-b border-line">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Main Introduction */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-accent font-bold tracking-widest text-sm uppercase mb-4">
              Tentang Perusahaan
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
              Solusi Manufaktur Logam Profesional Sejak 2021
            </h2>
            <div className="h-1 w-20 bg-foreground mb-8"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted text-lg leading-relaxed space-y-6"
          >
            <p>
              <strong className="text-foreground">PT Braling Inti Logam</strong> hadir sebagai solusi profesional dalam bidang pengolahan dan manufaktur produk logam di Indonesia. Berlokasi di Dusun II, Toyareja, Kec. Purbalingga, Jawa Tengah, kami mengusung semangat lokal yang berdaya saing nasional, bahkan siap bersaing secara global.
            </p>
            <p>
              Dengan komitmen pada ketepatan, kualitas, dan kepuasan pelanggan, kami melayani berbagai kebutuhan pemotongan laser, bending plat, pembuatan bracket, rangka, ornamen, dan kebutuhan logam lainnya baik untuk skala industri maupun konsumen ritel.
            </p>
          </motion.div>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Vision Card */}
          <motion.div 
            className="bg-surface p-10 border border-line relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Target size={120} />
            </div>
            <div className="relative z-10">
              <span className="flex items-center gap-3 text-accent font-bold uppercase tracking-wider mb-4">
                <Target size={20} /> Visi Kami
              </span>
              <h3 className="text-2xl font-bold leading-snug">
                "Menjadi produsen produk logam dalam negeri yang unggul, terpercaya, dan berstandar kualitas terbaik."
              </h3>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div 
            className="bg-foreground text-background p-10 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
             <div className="absolute top-0 right-0 p-8 opacity-10">
              <Trophy size={120} />
            </div>
            <div className="relative z-10">
              <span className="flex items-center gap-3 text-accent font-bold uppercase tracking-wider mb-6">
                <CheckCircle2 size={20} /> Misi Kami
              </span>
              <ul className="space-y-4">
                {[
                  "Menjalin kemitraan strategis dengan pemasok berkualitas tinggi.",
                  "Menawarkan produk dengan harga kompetitif dengan mutu terbaik.",
                  "Memperkuat kerja sama jangka panjang yang saling menguntungkan.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-white/90 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>

        {/* Closing Statement */}
        <motion.div 
          className="mt-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-xl font-medium italic text-muted">
            "Kami percaya bahwa kepercayaan dibangun melalui kualitas, dan keberlanjutan dicapai lewat kolaborasi. PT Braling Inti Logam terus berinovasi untuk menjawab kebutuhan logam yang presisi, efisien, dan berdaya guna tinggi."
          </p>
        </motion.div>

      </div>
    </section>
  );
}
