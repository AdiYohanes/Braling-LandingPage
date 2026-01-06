export default function Footer() {
  return (
    <footer id="contact" className="bg-[#111] text-white pt-24 pb-8">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-12 pb-16 border-b border-white/10">
          <div>
            <h2 className="text-2xl font-extrabold mb-6 tracking-tight">BRALING INTI LOGAM</h2>
            <p className="text-white/60 max-w-sm leading-relaxed">
              Partner manufaktur terpercaya untuk kebutuhan industri dan perorangan. Kualitas dan presisi adalah prioritas kami.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase text-white/40 mb-6 tracking-widest">Kontak</h4>
            <div className="space-y-4 text-white/90">
              <p>Dusun II, Toyareja, Purbalingga</p>
              <p>Jawa Tengah, Indonesia</p>
              <div className="flex flex-col gap-3">
                {/* Email Card */}
                <a 
                  href="mailto:bralingintilogam@gmail.com" 
                  className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-white/40">Email</span>
                    <span className="text-sm font-medium text-white group-hover:text-accent">bralingintilogam@gmail.com</span>
                  </div>
                </a>

                {/* WhatsApp Dwita */}
                <a 
                  href="https://wa.me/628112748787" 
                  target="_blank"
                  className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-[#25D366]/20 hover:border-[#25D366]/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-[#25D366]">WhatsApp 1</span>
                    <span className="text-sm font-medium text-white group-hover:text-[#25D366]">+62 811-2748-787 (Dwita)</span>
                  </div>
                </a>

                {/* WhatsApp Farida */}
                <a 
                  href="https://wa.me/628112528787" 
                  target="_blank"
                  className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-[#25D366]/20 hover:border-[#25D366]/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-[#25D366]">WhatsApp 2</span>
                    <span className="text-sm font-medium text-white group-hover:text-[#25D366]">+62 811-2528-787 (Farida)</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase text-white/40 mb-6 tracking-widest">Jam Operasional</h4>
            <div className="space-y-2 text-white/90 mb-8">
              <p>Senin - Sabtu</p>
              <p>08:00 - 17:00 WIB</p>
              <p className="text-white/30 pt-4">Minggu Libur</p>
            </div>

            <h4 className="text-sm font-bold uppercase text-white/40 mb-6 tracking-widest">Ikuti Kami</h4>
            <div className="flex flex-col gap-3">
              {/* TikTok */}
              <a 
                href="https://www.tiktok.com/@braling.inti.logam" 
                target="_blank"
                className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-black hover:border-[#00f2ea]/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#00f2ea] group-hover:text-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                </div>
                <span className="text-sm font-medium text-white group-hover:text-[#00f2ea]">TikTok</span>
              </a>

              {/* YouTube */}
              <a 
                href="https://www.youtube.com/@Bralingintilogam" 
                target="_blank"
                className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-red-600/20 hover:border-red-600/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </div>
                <span className="text-sm font-medium text-white group-hover:text-red-500">YouTube</span>
              </a>

              {/* Shopee */}
              <a 
                href="https://shopee.co.id/bralingintilogam427?mmp_pid=an_11372320651&share_channel_code=1&uls_trackid=54k3iv9f00l6&utm_campaign=-&utm_content=-&utm_medium=affiliates&utm_source=an_11372320651&utm_term=e8t5o8dntazj" 
                target="_blank"
                className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-[#EE4D2D]/20 hover:border-[#EE4D2D]/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#EE4D2D] group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                </div>
                <span className="text-sm font-medium text-white group-hover:text-[#EE4D2D]">Shopee</span>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between text-white/40 text-sm">
          <p>&copy; 2026 PT Braling Inti Logam.</p>
          <p>Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
}
