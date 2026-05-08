import React from 'react';
import { Search, MapPin, Building, IndianRupee } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-blue-50 py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Find Your Perfect Property
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Discover plots, land, and commercial properties in top locations.
        </p>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">

            <div className="flex flex-col text-left">
              <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <Building className="h-4 w-4" /> Property Type
              </label>
              <select className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-900 focus:border-blue-900 outline-none text-black">
                <option value="all">All Properties</option>
                <option value="plots">Plots</option>
                <option value="land">Land</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>

            <div className="flex flex-col text-left">
              <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <MapPin className="h-4 w-4" /> Location
              </label>
              <input
                type="text"
                placeholder="Enter city, locality..."
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-900 focus:border-blue-900 outline-none text-black"
              />
            </div>

            <div className="flex flex-col text-left">
              <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <IndianRupee className="h-4 w-4" /> Budget
              </label>
              <input
                type="range"
                min="0"
                max="100000000"
                step="1000000"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-900 mt-2"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹0</span>
                <span>₹10Cr+</span>
              </div>
            </div>

            <button className="w-full bg-blue-900 hover:bg-blue-800 text-white rounded-md py-2 px-4 flex items-center justify-center gap-2 font-medium transition-colors h-[42px]">
              <Search className="h-5 w-5" /> Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
