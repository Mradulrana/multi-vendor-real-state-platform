import React from 'react';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Home className="h-6 w-6 text-blue-900" />
          <span className="text-xl font-bold text-blue-900">RealEstate</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/search" className="text-gray-600 hover:text-blue-900 font-medium">Buy</Link>
          <Link href="#" className="text-gray-600 hover:text-blue-900 font-medium">Sell</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/auth" className="text-gray-600 hover:text-blue-900 font-medium hidden sm:block">Login / Register</Link>
          <Link href="/profile" className="text-gray-600 hover:text-blue-900 font-medium hidden sm:block">Profile</Link>
          <button className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-md font-medium transition-colors">
            Post Property
          </button>
        </div>
      </div>
    </header>
  );
}
