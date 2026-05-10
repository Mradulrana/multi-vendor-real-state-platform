"use client";

import React, { useState } from 'react';
import { Save, Image as ImageIcon } from 'lucide-react';

export default function AddPropertyPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock save delay
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Property details saved successfully!');
    }, 1000);
  };

  return (
    <div>
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Add New Property</h1>
          <p className="text-gray-600 mt-1">Fill in the details below to list your property.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-8">

          {/* Basic Details Section */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 border-b pb-2 mb-4">Basic Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-2">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Property Title *</label>
                <input type="text" id="title" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. Premium Residential Plot in City Center" />
              </div>

              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Property Type *</label>
                <select id="type" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white">
                  <option value="">Select Type</option>
                  <option value="plot">Residential Plot</option>
                  <option value="land">Commercial Land</option>
                  <option value="agricultural">Agricultural Land</option>
                </select>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location / Address *</label>
                <input type="text" id="location" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. Super Corridor, Indore" />
              </div>

              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Price (₹) *</label>
                <input type="text" id="price" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. 5000000" />
              </div>

              <div>
                <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">Area / Size *</label>
                <input type="text" id="area" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. 2000 sq.ft" />
              </div>
            </div>
          </section>

          {/* Media Section */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 border-b pb-2 mb-4 flex items-center">
              <ImageIcon className="w-5 h-5 mr-2 text-gray-500" /> Media
            </h2>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">Primary Image URL</label>
                <input type="url" id="imageUrl" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="https://example.com/image.jpg" />
                <p className="mt-1 text-xs text-gray-500">Provide a direct link to an image. We recommend using high quality photos.</p>
              </div>
            </div>
          </section>

          {/* Form Actions */}
          <div className="pt-4 border-t border-gray-200 flex justify-end gap-4">
            <button type="button" className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors">
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors disabled:opacity-70"
            >
              <Save className="w-4 h-4 mr-2" />
              {isSubmitting ? 'Saving...' : 'Save Property'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
