import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'PT Braling Inti Logam | Jasa Laser Cutting & Fabrikasi Purbalingga',
  description: 'Spesialis Laser Cutting CNC, Bending Plat, dan Fabrikasi Logam terbaik di Purbalingga & Jawa Tengah. Melayani kebutuhan industri & konstruksi dengan presisi tinggi. Hubungi 0811-2748-787.',
  keywords: [
    'Laser Cutting Purbalingga', 
    'Jasa Bending Plat', 
    'Fabrikasi Logam Jawa Tengah', 
    'Laser Cutting Plat Besi',
    'Jasa Potong Plat',
    'Pembuatan Pagar Laser',
    'Sparepart Mesin Industri',
    'Bengkel Bubut Purbalingga',
    'PT Braling Inti Logam',
    'Braling Inti Logam',
    'Jasa Konstruksi Besi'
  ],
  authors: [{ name: 'PT Braling Inti Logam' }],
  creator: 'PT Braling Inti Logam',
  publisher: 'PT Braling Inti Logam',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'PT Braling Inti Logam | Precision Metal Works Indonesia',
    description: 'Solusi manufaktur logam profesional: CNC Laser Cutting, Bending, dan Custom Fabrication. Presisi tinggi, harga kompetitif.',
    url: 'https://bralingintilogam.com',
    siteName: 'PT Braling Inti Logam',
    images: [
      {
        url: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_100/21589778/587342_126053.png',
        width: 1200,
        height: 630,
        alt: 'Braling Inti Logam Workshop',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://bralingintilogam.com',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'PT Braling Inti Logam',
  'image': 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_300,w_300,f_auto,q_auto/21589778/389683_947693.png',
  '@id': 'https://bralingintilogam.com',
  'url': 'https://bralingintilogam.com',
  'telephone': '+628112748787',
  'priceRange': '$$',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Dusun II, Toyareja, Kec. Purbalingga',
    'addressLocality': 'Kabupaten Purbalingga',
    'addressRegion': 'Jawa Tengah',
    'postalCode': '53311',
    'addressCountry': 'ID'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': -7.3934, 
    'longitude': 109.3633 
  },
  'openingHoursSpecification': {
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ],
    'opens': '08:00',
    'closes': '17:00'
  }
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [

    {
      '@type': 'Question',
      'name': 'Apakah bisa pesan satuan atau harus partai besar?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Kami melayani keduanya! Baik Anda butuh 1 unit untuk prototipe/kebutuhan pribadi, maupun produksi massal ribuan unit untuk industri, kami siap kerjakan.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Bahan apa saja yang bisa dikerjakan?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Mesin kami mampu memotong Mild Steel (Plat Besi) hingga 20mm, Stainless Steel hingga 10mm, Aluminium, Kuningan, dan Tembaga.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Berapa lama proses pengerjaannya?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Untuk pesanan standar, pengerjaan memakan waktu 2-3 hari kerja. Untuk proyek urgent, kami memiliki layanan prioritas.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Apakah melayani pengiriman ke luar kota?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Ya, kami melayani pengiriman ke seluruh Indonesia menggunakan ekspedisi cargo terpercaya.'
      }
    },
     {
      '@type': 'Question',
      'name': 'Apakah bisa bantu desainkan jika saya belum punya gambar?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Tentu! Tim engineering kami siap membantu membuatkan desain teknis (CAD) dari sketsa atau ide kasar Anda secara GRATIS untuk klien.'
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${manrope.variable} font-sans antialiased`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
