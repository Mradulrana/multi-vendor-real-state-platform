import React from 'react';
import Link from 'next/link';
import { PlusCircle, Building2 } from 'lucide-react';

export default function SellerDashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, Jane!</h1>
        <p className="text-gray-600 mt-1">Here is what is happening with your properties today.</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-12 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
          <Building2 className="w-8 h-8 text-blue-500" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">No properties listed yet</h3>
        <p className="text-gray-500 max-w-sm mx-auto mb-6">
          You haven&apos;t added any properties to your portfolio. Start listing properties to reach thousands of potential buyers.
        </p>
        <Link
          href="/seller/add-property"
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          <PlusCircle className="w-5 h-5 mr-2" />
          Add Your First Property
        </Link>
      </div>
    </div>
  );
}
