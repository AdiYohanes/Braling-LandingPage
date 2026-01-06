'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 border-b transition-colors duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-line text-foreground shadow-sm' 
          : 'bg-transparent border-transparent text-white'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 font-bold text-xl tracking-tighter"
        >
          {/* Logo Filter logic: Invert white logo to black on scroll, or swap images if available. For now using CSS filter */}
          <div className={`relative w-8 h-8 transition-all ${isScrolled ? '' : 'brightness-0 invert'}`}> 
             <Image 
              src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_300,w_300,f_auto,q_auto/21589778/389683_947693.png" 
              alt="Logo" 
              fill
              className="object-contain"
            />
          </div>
          <span>BRALING INTI LOGAM</span>
        </a>
        
        <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
          {[
            { name: 'About', href: '#about' },
            { name: 'Services', href: '#services' },
            { name: 'Catalog', href: '#catalog' },
            { name: 'Contact', href: '#contact' }
          ].map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector(item.href);
                if (element) {
                  const headerOffset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                  });
                }
              }}
              className={`cursor-pointer transition-colors ${isScrolled ? 'text-muted hover:text-foreground' : 'text-white/80 hover:text-white'}`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <a 
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            const element = document.querySelector('#contact');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className={`px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all transform hover:-translate-y-1 cursor-pointer ${
            isScrolled 
              ? 'bg-foreground text-background hover:bg-accent hover:text-white' 
              : 'bg-white text-foreground hover:bg-accent hover:text-white'
          }`}
        >
          Hubungi Kami
        </a>
      </div>
    </motion.header>
  );
}
