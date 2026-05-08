import React from 'react';
import { MapPin } from 'lucide-react';

export default function MapPlaceholder() {
  return (
    <div className="bg-gray-200 h-full w-full rounded-lg flex items-center justify-center border border-gray-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
      <div className="flex flex-col items-center text-gray-500 z-10 p-6 bg-white/80 rounded-lg backdrop-blur-sm">
        <MapPin className="h-12 w-12 mb-2 text-blue-900" />
        <span className="font-medium text-gray-800 text-lg">Google Maps Integration</span>
        <span className="text-sm text-center max-w-[200px] mt-1">Map view is placeholder in this demo.</span>
      </div>
    </div>
  );
}
