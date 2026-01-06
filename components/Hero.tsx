'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const heroImages = [
  // Laser Machine - High Res (Width boosted to 2000px)
  "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_2500,f_auto,q_100/21589778/587342_126053.png",
  // Welding/Sparks - High Res
  "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_2500,f_auto,q_100/21589778/35440_13975.png",
  // Detailed Metal Work
  "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_2500,f_auto,q_100/21589778/620706_193839.png"
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentIndex]}
              alt="Background"
              fill
              className="object-cover"
              priority
              quality={100}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30 z-10" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-xs rounded-full uppercase tracking-wider mb-8">
            Industrial Manufacturing
          </span>
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.9] tracking-tighter uppercase mb-8">
            Precision<br />
            <span className="text-accent">Metal Works</span><br />
            Indonesia
          </h1>
          <p className="text-xl text-gray-300 font-light max-w-xl mb-10 leading-relaxed">
            Solusi manufaktur logam profesional sejak 2021. Kami menggabungkan teknologi CNC modern dengan keahlian fabrikasi untuk hasil presisi tinggi.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#catalog" className="px-8 py-4 bg-accent text-white font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Lihat Katalog
            </a>
            <a href="#contact" className="px-8 py-4 border border-white/30 text-white font-bold text-sm uppercase tracking-widest hover:border-white hover:bg-white/10 transition-colors">
              Konsultasi Project
            </a>
          </div>
        </motion.div>

        {/* Optional: Navigation Dots or similar could go here */}
        <div className="hidden lg:flex flex-col gap-4 items-end justify-center h-full pr-8">
           {/* Custom Slider Dots */}
           {heroImages.map((_, idx) => (
             <button
               key={idx}
               onClick={() => setCurrentIndex(idx)}
               className={`w-2 h-2 rounded-full transition-all duration-300 ${
                 idx === currentIndex ? 'bg-accent w-8' : 'bg-white/50 hover:bg-white'
               }`} 
               aria-label={`Go to slide ${idx + 1}`}
             />
           ))}
        </div>
      </div>
    </section>
  );
}
