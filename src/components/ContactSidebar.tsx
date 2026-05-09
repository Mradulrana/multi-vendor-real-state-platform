import React from 'react';
import { Phone, Mail, User, Send, MessageCircle } from 'lucide-react';

export default function ContactSidebar() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 sticky top-24">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Contact Seller</h3>
      <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
          S
        </div>
        <div>
          <p className="font-semibold text-gray-800">Seller Name</p>
          <p className="text-sm text-gray-500">Individual</p>
        </div>
      </div>

      <form className="space-y-4">
        <div>
          <label className="sr-only" htmlFor="name">Name</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input type="text" id="name" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm" placeholder="Your Name" />
          </div>
        </div>
        <div>
          <label className="sr-only" htmlFor="email">Email</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input type="email" id="email" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm" placeholder="Your Email" />
          </div>
        </div>
        <div>
          <label className="sr-only" htmlFor="phone">Phone</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400" />
            </div>
            <input type="tel" id="phone" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm" placeholder="Your Phone Number" />
          </div>
        </div>
        <div>
          <label className="sr-only" htmlFor="message">Message</label>
          <textarea id="message" rows={3} className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm resize-none" placeholder="I am interested in this property..."></textarea>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 flex items-center justify-center gap-2">
          <Send className="w-4 h-4" />
          Send Message
        </button>
      </form>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <button className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition duration-200 flex items-center justify-center gap-2">
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </button>
      </div>
    </div>
  );
}
