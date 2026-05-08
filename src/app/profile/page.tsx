"use client";

import React, { useState } from 'react';
import { User, Heart, MessageSquare, Settings, MapPin, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Property } from '@/types';

// Mock Data
const savedProperties: Property[] = [
  {
    id: '1',
    title: 'Premium Residential Plot',
    location: 'Super Corridor, Indore',
    price: '₹50 Lac',
    pricePerSqft: '₹2,500 / sqft',
    area: '2000 sqft',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    verified: true,
    newLaunch: true,
  },
  {
    id: '2',
    title: 'Commercial Land near IT Park',
    location: 'Bhawrasla, Indore',
    price: '₹1.2 Cr',
    pricePerSqft: '₹4,000 / sqft',
    area: '3000 sqft',
    image: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    verified: true,
    newLaunch: false,
  }
];

const contactedProperties: Property[] = [
  {
    id: '3',
    title: 'Corner Plot in Gated Society',
    location: 'Nipania, Indore',
    price: '₹85 Lac',
    pricePerSqft: '₹3,400 / sqft',
    area: '2500 sqft',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    verified: false,
    newLaunch: true,
  }
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'saved' | 'contacted' | 'settings'>('saved');

  const renderPropertyCard = (property: Property) => (
    <div key={property.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm flex flex-col md:flex-row gap-4 p-4 mb-4 hover:shadow-md transition-shadow">
      <div className="md:w-48 h-32 flex-shrink-0 relative rounded-md overflow-hidden bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
        {property.newLaunch && (
          <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
            New Launch
          </span>
        )}
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              <Link href={`/property/${property.id}`}>{property.title}</Link>
            </h3>
            <div className="text-right">
              <p className="text-lg font-bold text-gray-900">{property.price}</p>
              <p className="text-xs text-gray-500">{property.pricePerSqft}</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm flex items-center mb-2">
            <MapPin className="w-3.5 h-3.5 mr-1" /> {property.location}
          </p>
          <div className="flex gap-4 text-sm text-gray-600 mb-2">
            <span className="bg-gray-100 px-2 py-1 rounded">{property.area}</span>
            {property.highlights?.facing && <span className="bg-gray-100 px-2 py-1 rounded">{property.highlights.facing}</span>}
          </div>
        </div>
        <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-100">
          <div className="flex gap-2">
            {property.verified && (
              <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-md flex items-center border border-green-200">
                <CheckCircle className="w-3 h-3 mr-1" /> Verified
              </span>
            )}
          </div>
          <Link href={`/property/${property.id}`} className="text-blue-600 text-sm font-medium hover:underline">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Account</h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 text-center border-b border-gray-100">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  <User className="w-10 h-10" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">John Doe</h2>
                <p className="text-sm text-gray-500">Buyer</p>
              </div>
              <nav className="p-2 space-y-1">
                <button
                  onClick={() => setActiveTab('saved')}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    activeTab === 'saved' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Heart className={`w-5 h-5 mr-3 ${activeTab === 'saved' ? 'text-blue-600' : 'text-gray-400'}`} />
                  Saved Properties
                </button>
                <button
                  onClick={() => setActiveTab('contacted')}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    activeTab === 'contacted' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <MessageSquare className={`w-5 h-5 mr-3 ${activeTab === 'contacted' ? 'text-blue-600' : 'text-gray-400'}`} />
                  Contacted Listings
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    activeTab === 'settings' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Settings className={`w-5 h-5 mr-3 ${activeTab === 'settings' ? 'text-blue-600' : 'text-gray-400'}`} />
                  Profile Settings
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 min-h-[500px]">

              {activeTab === 'saved' && (
                <div>
                  <h2 className="text-xl font-semibold mb-6 text-gray-800 flex items-center border-b pb-4">
                    <Heart className="w-5 h-5 mr-2 text-red-500" /> Saved Properties
                  </h2>
                  {savedProperties.length > 0 ? (
                    <div className="space-y-4">
                      {savedProperties.map(renderPropertyCard)}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-10">You have no saved properties.</p>
                  )}
                </div>
              )}

              {activeTab === 'contacted' && (
                <div>
                  <h2 className="text-xl font-semibold mb-6 text-gray-800 flex items-center border-b pb-4">
                    <MessageSquare className="w-5 h-5 mr-2 text-blue-500" /> Contacted Listings
                  </h2>
                  {contactedProperties.length > 0 ? (
                    <div className="space-y-4">
                      {contactedProperties.map(renderPropertyCard)}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-10">You have not contacted any sellers yet.</p>
                  )}
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-xl font-semibold mb-6 text-gray-800 flex items-center border-b pb-4">
                    <Settings className="w-5 h-5 mr-2 text-gray-500" /> Profile Settings
                  </h2>
                  <form className="max-w-md space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input type="text" defaultValue="John Doe" className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input type="email" defaultValue="john.doe@example.com" className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input type="tel" defaultValue="+91 9876543210" className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                      Save Changes
                    </button>
                  </form>
                </div>
              )}

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
