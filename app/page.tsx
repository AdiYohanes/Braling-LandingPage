import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Advantages from '@/components/Advantages';
import Services from '@/components/Services';
import Catalog from '@/components/Catalog';
import FAQ from '@/components/FAQ';
import ProcessOne from '@/components/ProcessOne';
import Location from '@/components/Location';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Advantages />
      <Services />
      <Catalog />
      <FAQ />
      <ProcessOne />
      <Location />
      <Footer />
    </main>
  );
}
