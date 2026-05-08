import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import FilterSidebar from '@/components/FilterSidebar';
import Listings from '@/components/Listings';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <NavBar />
      <Hero />

      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-6 flex-grow">
        <FilterSidebar />
        <Listings />
      </div>
    </main>
  );
}
