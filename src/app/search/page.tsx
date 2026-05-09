import React from 'react';
import NavBar from '@/components/NavBar';
import SearchListingCard from '@/components/SearchListingCard';
import MapPlaceholder from '@/components/MapPlaceholder';
import { Property } from '@/types';
import { ArrowUpDown } from 'lucide-react';

const searchResults: Property[] = [
  {
    id: '1',
    title: 'Premium Residential Plot',
    location: 'Vijay Nagar, Indore',
    price: '₹50 Lac',
    pricePerSqft: '₹5,000 / sq.ft',
    area: '1000 sq.ft',
    verified: true,
    newLaunch: false,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600&auto=format&fit=crop',
    highlights: {
      facing: 'East',
      boundaryWall: true,
      cornerPlot: false
    }
  },
  {
    id: '2',
    title: 'Commercial Land Space',
    location: 'Super Corridor, Indore',
    price: '₹1.2 Cr',
    pricePerSqft: '₹6,000 / sq.ft',
    area: '2000 sq.ft',
    verified: true,
    newLaunch: true,
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600&auto=format&fit=crop',
    highlights: {
      facing: 'North',
      boundaryWall: false,
      cornerPlot: true
    }
  },
  {
    id: '3',
    title: 'Corner Plot for Villa',
    location: 'Bhawarkua, Indore',
    price: '₹75 Lac',
    pricePerSqft: '₹5,500 / sq.ft',
    area: '1500 sq.ft',
    verified: false,
    newLaunch: true,
    image: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?q=80&w=600&auto=format&fit=crop',
    highlights: {
      facing: 'North-East',
      boundaryWall: true,
      cornerPlot: true
    }
  }
];

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <NavBar />

      {/* Quick Sort Bar */}
      <div className="bg-white border-b sticky top-16 z-40">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <span className="text-gray-600 font-medium">{searchResults.length} properties found</span>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Sort by:</span>
            <select className="border border-gray-300 rounded-md p-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-900 bg-white">
              <option>Relevance</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
            <button className="p-2 hover:bg-gray-100 rounded-md lg:hidden">
              <ArrowUpDown className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 flex-grow flex flex-col lg:flex-row gap-6 py-6 h-[calc(100vh-120px)]">
        {/* Left Side: Scrollable List */}
        <div className="w-full lg:w-3/5 overflow-y-auto pr-2 pb-10 hide-scrollbar" style={{ maxHeight: '100%' }}>
          {searchResults.map((property) => (
            <SearchListingCard key={property.id} property={property} />
          ))}
        </div>

        {/* Right Side: Map */}
        <div className="hidden lg:block lg:w-2/5 h-full sticky top-32" style={{ height: 'calc(100vh - 150px)' }}>
          <MapPlaceholder />
        </div>
      </div>
    </div>
  );
}
