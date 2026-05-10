"use client";

import React from 'react';
import Link from 'next/link';
import { PlusCircle, Copy, Users, TrendingUp, Map, Star, AlertTriangle, ChevronRight } from 'lucide-react';

const mockProperties = [
  {
    id: '1',
    title: 'Prime Corner Plot near Metro Station',
    location: 'Super Corridor, Indore',
    price: '₹75 Lac',
    views: 1240,
    leads: 12,
    newLeads: 5,
    status: 'Active',
    highIntentLeads: 3,
    benchmark: 'Priced 5% lower than similar listings. Excellent visibility.'
  },
  {
    id: '2',
    title: '5 Acres Agricultural Land',
    location: 'Sanwer Road, Indore',
    price: '₹1.5 Cr',
    views: 890,
    leads: 4,
    newLeads: 1,
    status: 'Active',
    highIntentLeads: 1,
    benchmark: 'Priced 10% higher than similar listings in this area.'
  }
];

export default function SellerDashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, Jane!</h1>
          <p className="text-gray-600 mt-1">Overview of your property portfolio and performance.</p>
        </div>
        <Link
          href="/seller/add-property"
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          <PlusCircle className="w-5 h-5 mr-2" />
          Add Property
        </Link>
      </div>

      {/* Performance Analytics UI */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
          Performance Analytics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Heatmaps Mock */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">Audience Heatmap</h3>
              <Map className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Mumbai</span>
                <span className="font-semibold text-blue-600">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
              <div className="flex justify-between items-center text-sm pt-2">
                <span className="text-gray-600">Delhi NCR</span>
                <span className="font-semibold text-blue-500">30%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '30%' }}></div>
              </div>
            </div>
          </div>

          {/* Lead Quality Score */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">Lead Quality Score</h3>
              <Star className="w-5 h-5 text-yellow-500" />
            </div>
            <div className="flex items-center justify-center h-24">
              <div className="text-center">
                <span className="text-4xl font-bold text-gray-900">8.4</span>
                <span className="text-gray-500">/10</span>
                <p className="text-sm text-green-600 font-medium mt-1">↑ 12% vs last month</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 text-center mt-2">
              Based on AI analysis of buyer intent and multiple property views.
            </p>
          </div>

          {/* Comparison Benchmarking */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
             <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">Market Benchmark</h3>
              <AlertTriangle className="w-5 h-5 text-orange-500" />
            </div>
            <div className="bg-orange-50 rounded-md p-4 border border-orange-100">
              <p className="text-sm text-orange-800 font-medium">
                Your agricultural plot is priced <span className="font-bold">10% higher</span> than similar listings in Sanwer Road.
              </p>
            </div>
            <button className="mt-4 w-full text-sm text-blue-600 font-medium hover:text-blue-800">
              Adjust Pricing Strategy →
            </button>
          </div>
        </div>
      </section>

      {/* Smart Inventory Management */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Building2 className="w-5 h-5 mr-2 text-blue-600" />
          Smart Inventory Management
        </h2>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {mockProperties.map((property) => (
              <li key={property.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col lg:flex-row gap-6 justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{property.title}</h3>
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        {property.status}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm mb-3">{property.location} • {property.price}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span><strong className="text-gray-900">{property.views}</strong> Views</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span className="flex items-center text-orange-600 font-medium">
                        <Star className="w-4 h-4 mr-1" /> {property.highIntentLeads} High Intent Leads
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 lg:border-l lg:pl-6 border-gray-200">
                    {/* Leads Sidebar mock */}
                    <div className="text-center lg:text-right cursor-pointer group">
                      <div className="inline-flex items-center justify-center relative">
                        <Users className="w-8 h-8 text-gray-400 group-hover:text-blue-600 transition-colors" />
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                          {property.newLeads}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-gray-500 mt-1 group-hover:text-blue-600">View Leads</p>
                    </div>

                    <div className="h-10 w-px bg-gray-200 mx-2 hidden sm:block"></div>

                    {/* Actions */}
                    <div className="flex flex-col gap-2">
                      <button className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 border border-gray-300 rounded-md px-3 py-1.5 hover:bg-gray-50">
                        <Copy className="w-4 h-4 mr-2" /> Clone Listing
                      </button>
                      <button className="flex items-center justify-center text-sm font-medium text-blue-600 hover:text-blue-800 py-1.5">
                        Manage <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </div>
  );
}

// Ensure Building2 is imported if missing above
import { Building2 } from 'lucide-react';
