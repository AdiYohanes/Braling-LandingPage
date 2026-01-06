export default function Stats() {
  const stats = [
    { num: '500+', label: 'Proyek Selesai' },
    { num: '0.01mm', label: 'Toleransi Presisi' },
    { num: '100%', label: 'Garansi Kualitas' },
    { num: '24/7', label: 'Siap Produksi' },
  ];

  return (
    <div className="border-b border-line bg-white">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`p-8 md:p-12 text-left border-b md:border-b-0 border-line ${
              index !== stats.length - 1 ? 'md:border-r' : ''
            } ${index % 2 === 1 ? 'border-l md:border-l-0' : ''}`}
          >
            <span className="block text-4xl md:text-5xl font-extrabold text-accent mb-2 tracking-tight">
              {stat.num}
            </span>
            <span className="text-sm font-semibold uppercase tracking-wider text-muted">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
