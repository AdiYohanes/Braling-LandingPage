'use client';
import { MapPin } from 'lucide-react';

export default function Location() {
  return (
    <section className="py-24 bg-white border-t border-line">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-accent font-bold tracking-widest text-sm uppercase mb-4">
            <MapPin className="w-4 h-4" /> Lokasi Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Kunjungi Workshop
          </h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            Kami mengundang Anda untuk melihat langsung proses produksi dan mendiskusikan kebutuhan proyek Anda secara langsung.
          </p>
        </div>

        <div className="w-full h-[450px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg border border-line relative group">
           {/* Google Maps Embed */}
           <iframe 
            width="100%" 
            height="100%" 
            id="gmap_canvas" 
            src="https://maps.google.com/maps?q=PT%20Braling%20Inti%20Logam%20Toyareja%20Purbalingga&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight={0} 
            marginWidth={0}
            className="grayscale group-hover:grayscale-0 transition-all duration-700"
            title="Lokasi PT Braling Inti Logam"
            loading="lazy"
           ></iframe>
           
           {/* Overlay Prompt (disappears on interaction/hover) */}
           <div className="absolute inset-0 bg-black/5 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-medium text-muted">
          <div className="px-6 py-3 bg-surface rounded-full border border-line flex items-center gap-3">
             <MapPin className="w-4 h-4 text-accent" />
             Dusun II, Toyareja, Kec. Purbalingga, Kabupaten Purbalingga, Jawa Tengah
          </div>
        </div>
      </div>
    </section>
  );
}
