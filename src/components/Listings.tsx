import React from 'react';
import { BadgeCheck, Zap, Phone, Info } from 'lucide-react';
import Image from 'next/image';

const listings = [
  {
    id: 1,
    title: 'Premium Residential Plot',
    location: 'Vijay Nagar, Indore',
    price: '₹50 Lac',
    pricePerSqft: '₹5,000 / sq.ft',
    area: '1000 sq.ft',
    verified: true,
    newLaunch: false,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Commercial Land Space',
    location: 'Super Corridor, Indore',
    price: '₹1.2 Cr',
    pricePerSqft: '₹6,000 / sq.ft',
    area: '2000 sq.ft',
    verified: true,
    newLaunch: true,
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Corner Plot for Villa',
    location: 'Bhawarkua, Indore',
    price: '₹75 Lac',
    pricePerSqft: '₹5,500 / sq.ft',
    area: '1500 sq.ft',
    verified: false,
    newLaunch: true,
    image: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'East Facing Plot',
    location: 'Nipania, Indore',
    price: '₹60 Lac',
    pricePerSqft: '₹4,500 / sq.ft',
    area: '1200 sq.ft',
    verified: true,
    newLaunch: false,
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Agricultural Land',
    location: 'Sanwer Road, Indore',
    price: '₹2.5 Cr',
    pricePerSqft: '₹500 / sq.ft',
    area: '1 Acre',
    verified: true,
    newLaunch: false,
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Gated Society Plot',
    location: 'AB Road, Indore',
    price: '₹45 Lac',
    pricePerSqft: '₹4,000 / sq.ft',
    area: '1100 sq.ft',
    verified: false,
    newLaunch: true,
    image: 'https://images.unsplash.com/photo-1422405626280-9285741b63e8?q=80&w=600&auto=format&fit=crop'
  }
];

export default function Listings() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Featured Properties</h2>
          <p className="text-gray-600">Top plots and lands matching your criteria</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <div key={listing.id} className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full">
            <div className="relative h-48 w-full">
              <Image
                src={listing.image}
                alt={listing.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 left-2 flex gap-2">
                {listing.verified && (
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded flex items-center gap-1 shadow-sm">
                    <BadgeCheck className="h-3 w-3" /> Verified
                  </span>
                )}
                {listing.newLaunch && (
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded flex items-center gap-1 shadow-sm">
                    <Zap className="h-3 w-3" /> New Launch
                  </span>
                )}
              </div>
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{listing.price}</h3>
                  <p className="text-sm text-gray-500">{listing.pricePerSqft}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                    {listing.area}
                  </span>
                </div>
              </div>

              <h4 className="text-lg font-semibold text-gray-800 mt-2 line-clamp-1">{listing.title}</h4>
              <p className="text-gray-600 text-sm mb-4 line-clamp-1">{listing.location}</p>

              <div className="mt-auto flex gap-2 pt-4 border-t border-gray-100">
                <button className="flex-1 bg-white border border-blue-900 text-blue-900 hover:bg-blue-50 py-2 rounded-md font-medium text-sm flex items-center justify-center gap-1 transition-colors">
                  <Info className="h-4 w-4" /> View Details
                </button>
                <button className="flex-1 bg-blue-900 hover:bg-blue-800 text-white py-2 rounded-md font-medium text-sm flex items-center justify-center gap-1 transition-colors">
                  <Phone className="h-4 w-4" /> Contact Seller
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
