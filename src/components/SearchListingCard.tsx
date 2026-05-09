import React from 'react';
import { Property } from '@/types';
import { BadgeCheck, Zap, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  property: Property;
}

export default function SearchListingCard({ property }: Props) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col md:flex-row mb-4">
      <div className="relative h-48 md:h-auto md:w-1/3 flex-shrink-0">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 left-2 flex gap-2 flex-wrap">
          {property.verified && (
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded flex items-center gap-1 shadow-sm">
              <BadgeCheck className="h-3 w-3" /> Verified
            </span>
          )}
          {property.newLaunch && (
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded flex items-center gap-1 shadow-sm">
              <Zap className="h-3 w-3" /> New Launch
            </span>
          )}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{property.price}</h3>
            <p className="text-sm text-gray-500">{property.pricePerSqft}</p>
          </div>
          <button className="text-gray-400 hover:text-red-500 transition-colors">
            <Heart className="h-6 w-6" />
          </button>
        </div>

        <Link href={`/property/${property.id}`}>
          <h4 className="text-xl font-semibold text-gray-800 mt-2 hover:text-blue-900 transition-colors">{property.title}</h4>
        </Link>
        <p className="text-gray-600 text-sm mb-4">{property.location}</p>

        <div className="flex gap-4 text-sm text-gray-700 mb-4 bg-gray-50 p-3 rounded-md">
          <div><span className="font-semibold text-gray-900">Area:</span> {property.area}</div>
          {property.highlights?.facing && (
            <div><span className="font-semibold text-gray-900">Facing:</span> {property.highlights.facing}</div>
          )}
          {property.highlights?.boundaryWall && (
            <div className="flex items-center gap-1"><BadgeCheck className="h-4 w-4 text-green-600" /> Boundary Wall</div>
          )}
          {property.highlights?.cornerPlot && (
            <div className="flex items-center gap-1"><BadgeCheck className="h-4 w-4 text-green-600" /> Corner Plot</div>
          )}
        </div>

        <div className="mt-auto flex gap-2">
          <Link href={`/property/${property.id}`} className="inline-block px-4 py-2 border border-blue-900 text-blue-900 hover:bg-blue-50 rounded-md font-medium text-sm transition-colors">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
