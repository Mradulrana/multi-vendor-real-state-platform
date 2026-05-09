import React from 'react';
import { MapPin, CheckCircle, Info, Map, Train, ShoppingBag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ContactSidebar from '@/components/ContactSidebar';

// Mock data fetching based on ID
const getPropertyData = (id: string) => {
  return {
    id,
    title: 'Premium Residential Plot in Indore',
    location: 'Super Corridor, Indore',
    price: '₹50 Lac',
    pricePerSqft: '₹2,500 / sqft',
    area: '2000 sqft',
    type: 'Residential Plot',
    ownership: 'Freehold',
    facing: 'East',
    status: 'New Launch',
    verified: true,
    description: `A fantastic opportunity to build your dream home on this premium residential plot located in the rapidly developing area of Super Corridor, Indore. This plot offers excellent connectivity to the airport and major IT hubs. The area is well-planned with wide roads, lush green surroundings, and basic amenities already in place.

    The plot is East-facing, ensuring abundant natural light and positive energy. It is a freehold property, ensuring a smooth and hassle-free transaction. Don't miss out on this excellent investment opportunity in one of the most sought-after locations in the city.`,
    highlights: [
      'Gated Community with 24x7 Security',
      'Underground Electrification',
      'Water Supply and Drainage System',
      'Parks and Open Spaces',
      'Clubhouse with Gymnasium'
    ],
    locality: [
      { type: 'Transport', items: ['Devi Ahilya Bai Holkar Airport - 10 km', 'Indore Railway Station - 12 km'] },
      { type: 'Essentials', items: ['TCS Square - 2 km', 'Infosys Campus - 2.5 km', 'Symbiosis University - 3 km'] },
      { type: 'Shopping', items: ['C21 Mall - 15 km', 'Phoenix Citadel - 18 km'] }
    ],
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1524813686514-a57563d77965?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    ]
  };
};

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = getPropertyData(params.id);

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb / Back Navigation */}
        <div className="mb-4">
          <Link href="/search" className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Search Results
          </Link>
        </div>

        {/* Header Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-2xl font-bold text-gray-900">{property.title}</h1>
              {property.verified && (
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center">
                  <CheckCircle className="w-3 h-3 mr-1" /> Verified
                </span>
              )}
            </div>
            <p className="text-gray-500 flex items-center text-sm">
              <MapPin className="w-4 h-4 mr-1" /> {property.location}
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-left md:text-right">
            <p className="text-3xl font-bold text-gray-900">{property.price}</p>
            <p className="text-sm text-gray-500">@{property.pricePerSqft}</p>
          </div>
        </div>

        {/* Image Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-8 h-[400px]">
          <div className="md:col-span-2 md:row-span-2 relative rounded-l-lg overflow-hidden group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={property.images[0]} alt="Main Property" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          </div>
          <div className="hidden md:block relative overflow-hidden group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={property.images[1]} alt="Property View" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          </div>
          <div className="hidden md:block relative rounded-tr-lg overflow-hidden group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={property.images[2]} alt="Property View" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          </div>
          <div className="hidden md:block relative overflow-hidden group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={property.images[3]} alt="Property View" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          </div>
          <div className="hidden md:block relative rounded-br-lg overflow-hidden group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={property.images[4]} alt="Property View" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer hover:bg-black/50 transition-colors">
              <span className="text-white font-semibold flex items-center">
                + View All Photos
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <div className="flex-1 space-y-8">

            {/* Key Features Quick Look */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Area</p>
                  <p className="font-semibold text-gray-900">{property.area}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Type</p>
                  <p className="font-semibold text-gray-900">{property.type}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Ownership</p>
                  <p className="font-semibold text-gray-900">{property.ownership}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Facing</p>
                  <p className="font-semibold text-gray-900">{property.facing}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">About Property</h2>
              <div className="text-gray-600 text-sm leading-relaxed space-y-4 whitespace-pre-line">
                {property.description}
              </div>
            </div>

            {/* Key Highlights */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                <Info className="w-5 h-5 mr-2 text-blue-600" /> Key Highlights
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locality & Nearby */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                <Map className="w-5 h-5 mr-2 text-blue-600" /> Locality & Nearby
              </h2>
              <div className="space-y-6">
                {property.locality.map((cat, index) => (
                  <div key={index}>
                    <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center border-b pb-2">
                      {cat.type === 'Transport' && <Train className="w-4 h-4 mr-2 text-gray-500" />}
                      {cat.type === 'Essentials' && <MapPin className="w-4 h-4 mr-2 text-gray-500" />}
                      {cat.type === 'Shopping' && <ShoppingBag className="w-4 h-4 mr-2 text-gray-500" />}
                      {cat.type}
                    </h3>
                    <ul className="space-y-2 pl-6">
                      {cat.items.map((item, i) => (
                        <li key={i} className="text-sm text-gray-600 list-disc">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sticky Sidebar */}
          <div className="lg:w-1/3">
            <ContactSidebar />
          </div>
        </div>

      </div>
    </div>
  );
}
