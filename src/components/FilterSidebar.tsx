'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const FilterSection = ({ title, children, defaultOpen = true }: FilterSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between font-medium text-gray-900"
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp className="h-4 w-4 text-gray-500" /> : <ChevronDown className="h-4 w-4 text-gray-500" />}
      </button>
      {isOpen && (
        <div className="mt-4 flex flex-col gap-2">
          {children}
        </div>
      )}
    </div>
  );
};

export default function FilterSidebar() {
  return (
    <div className="w-full md:w-64 flex-shrink-0">
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 sticky top-24">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Filters</h2>

        <FilterSection title="Ownership Type">
          <label className="flex items-center gap-2 cursor-pointer text-gray-700">
            <input type="checkbox" className="rounded text-blue-900 focus:ring-blue-900" />
            <span>Freehold</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-gray-700">
            <input type="checkbox" className="rounded text-blue-900 focus:ring-blue-900" />
            <span>Leasehold</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-gray-700">
            <input type="checkbox" className="rounded text-blue-900 focus:ring-blue-900" />
            <span>Co-operative Society</span>
          </label>
        </FilterSection>

        <FilterSection title="Plot Area (sq.ft)">
          <label className="flex items-center gap-2 cursor-pointer text-gray-700">
            <input type="checkbox" className="rounded text-blue-900 focus:ring-blue-900" />
            <span>Up to 1000</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-gray-700">
            <input type="checkbox" className="rounded text-blue-900 focus:ring-blue-900" />
            <span>1000 - 2000</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-gray-700">
            <input type="checkbox" className="rounded text-blue-900 focus:ring-blue-900" />
            <span>2000 - 3000</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-gray-700">
            <input type="checkbox" className="rounded text-blue-900 focus:ring-blue-900" />
            <span>3000+</span>
          </label>
        </FilterSection>

        <FilterSection title="Facing">
          <label className="flex items-center gap-2 cursor-pointer text-gray-700">
            <input type="checkbox" className="rounded text-blue-900 focus:ring-blue-900" />
            <span>East</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-gray-700">
            <input type="checkbox" className="rounded text-blue-900 focus:ring-blue-900" />
            <span>North</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-gray-700">
            <input type="checkbox" className="rounded text-blue-900 focus:ring-blue-900" />
            <span>West</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-gray-700">
            <input type="checkbox" className="rounded text-blue-900 focus:ring-blue-900" />
            <span>South</span>
          </label>
        </FilterSection>
      </div>
    </div>
  );
}
