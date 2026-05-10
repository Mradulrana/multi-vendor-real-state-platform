"use client";

import React, { useState, useEffect } from 'react';
import { Save, ChevronRight, ChevronLeft, MapPin, UploadCloud, Video, FileText, CheckCircle2, ShieldCheck, Map } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AddPropertyWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '', category: '', location: '', city: '', state: '', pincode: '', area: '', areaUnit: 'Sq.Ft',
    coverPhoto: '', videoLink: '', digitalVisitLink: '',
    landTitleFile: '', reraNumber: '', requestVerification: false, boundaryWall: false,
    pricingStrategy: 'Fixed', price: '', visibility: 'Publish'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-Save Drafts
  useEffect(() => {
    const savedDraft = localStorage.getItem('propertyDraft');
    if (savedDraft) {
      try { setFormData(JSON.parse(savedDraft)); } catch (e) {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('propertyDraft', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleNext = () => setStep(prev => Math.min(prev + 1, 4));
  const handlePrev = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      localStorage.removeItem('propertyDraft');
      alert('Property published successfully!');
    }, 1500);
  };

  // Derived calculations
  const pricePerSqFt = (formData.price && formData.area)
    ? (Number(formData.price) / Number(formData.area)).toFixed(2)
    : '0.00';

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Add New Property</h1>
        <p className="text-gray-600 mt-1">Complete the 4 steps to list your property professionally.</p>
      </div>

      {/* Progress Wizard */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col items-center relative z-10">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                step >= i ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-500'
              }`}>
                {step > i ? <CheckCircle2 className="w-6 h-6" /> : i}
              </div>
              <span className={`text-xs font-medium mt-2 hidden sm:block ${step >= i ? 'text-blue-600' : 'text-gray-500'}`}>
                {i === 1 && 'Basic Info'}
                {i === 2 && 'Media'}
                {i === 3 && 'Legal'}
                {i === 4 && 'Pricing'}
              </span>
            </div>
          ))}
          {/* Progress Line */}
          <div className="absolute top-5 left-0 w-full h-1 bg-gray-200 -z-0 hidden sm:block" style={{ top: '22px' }}>
            <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${((step - 1) / 3) * 100}%` }}></div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <form onSubmit={handleSubmit} className="p-6 md:p-8">

          <AnimatePresence mode="wait">
            {/* STEP 1: Basic Info & Localization */}
            {step === 1 && (
              <motion.section key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-lg font-semibold text-gray-900 border-b pb-2 mb-6">Basic Info & Localization</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Property Title *</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. Prime Corner Plot near Metro Station" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Land Category *</label>
                    <select name="category" value={formData.category} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white">
                      <option value="">Select Category</option>
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Agricultural">Agricultural</option>
                      <option value="Industrial">Industrial</option>
                    </select>
                  </div>
                  <div className="col-span-2 flex items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 cursor-pointer transition">
                    <div className="text-center">
                      <MapPin className="mx-auto h-8 w-8 text-blue-500 mb-2" />
                      <span className="text-sm font-medium text-blue-600">Drop a Google Maps Pin for exact coordinates</span>
                    </div>
                  </div>
                  <div className="col-span-2 grid grid-cols-3 gap-4">
                     <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                      <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                      <input type="text" name="state" value={formData.state} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Pin Code</label>
                      <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500" />
                    </div>
                  </div>
                  <div className="col-span-2 flex gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Total Area</label>
                      <input type="number" name="area" value={formData.area} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500" placeholder="e.g. 2000" />
                    </div>
                    <div className="w-32">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Unit</label>
                      <select name="areaUnit" value={formData.areaUnit} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 bg-white">
                        <option value="Sq.Ft">Sq.Ft</option>
                        <option value="Acres">Acres</option>
                        <option value="Marla">Marla</option>
                      </select>
                    </div>
                  </div>
                </div>
              </motion.section>
            )}

            {/* STEP 2: Visual Media */}
            {step === 2 && (
              <motion.section key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-lg font-semibold text-gray-900 border-b pb-2 mb-6">Visual Media (Photos & Videos)</h2>
                <div className="space-y-6">

                  {/* Watermarking Notice */}
                  <div className="bg-blue-50 border border-blue-200 text-blue-800 p-3 rounded-md text-sm flex items-start">
                    <ShieldCheck className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <p>Images will be automatically compressed and watermarked to prevent theft.</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">The &quot;Cover Photo&quot; (Hero Image)</label>
                    <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 relative overflow-hidden group">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <UploadCloud className="w-10 h-10 mb-3 text-gray-400 group-hover:text-blue-500 transition-colors" />
                                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500">SVG, PNG, JPG (MAX. 10MB)</p>
                            </div>
                            <input type="file" className="hidden" />
                        </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Video Walkthrough (Optional)</label>
                    <div className="flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        <Video className="w-4 h-4" />
                      </span>
                      <input type="url" name="videoLink" value={formData.videoLink} onChange={handleChange} className="flex-1 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Paste YouTube/Vimeo link" />
                    </div>
                  </div>

                  {/* KILLER FEATURE: Digital Site Visit */}
                  <div className="pt-4 border-t border-gray-100">
                    <label className="block text-sm font-bold text-indigo-700 mb-2 flex items-center">
                      <Map className="w-5 h-5 mr-2" /> Digital Site Visit (Killer Feature 🚀)
                    </label>
                    <p className="text-xs text-gray-500 mb-3">Upload a Google Earth KML file or drone map link so buyers can see surroundings from the air.</p>
                    <input type="url" name="digitalVisitLink" value={formData.digitalVisitLink} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="e.g. Drone map URL or KML link" />
                  </div>

                </div>
              </motion.section>
            )}

            {/* STEP 3: Legal Documentation & Trust */}
            {step === 3 && (
              <motion.section key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                 <h2 className="text-lg font-semibold text-gray-900 border-b pb-2 mb-6">Legal Documentation & Trust</h2>
                 <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Land Title / Deed (Proof of Ownership)</label>
                      <input type="file" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">RERA / Survey Number</label>
                      <input type="text" name="reraNumber" value={formData.reraNumber} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500" placeholder="Government registration number" />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 flex items-center">
                          <ShieldCheck className="w-4 h-4 mr-1 text-green-600" /> Request Physical Verification
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">Get a &apos;Verified&apos; badge to build trust. (Charges apply)</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" name="requestVerification" checked={formData.requestVerification} onChange={handleChange} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center p-4 border border-gray-200 rounded-lg">
                      <input id="boundary" type="checkbox" name="boundaryWall" checked={formData.boundaryWall} onChange={handleChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                      <label htmlFor="boundary" className="ml-2 text-sm font-medium text-gray-900">
                        Property has a Boundary Wall
                      </label>
                    </div>
                 </div>
              </motion.section>
            )}

            {/* STEP 4: Pricing & Visibility */}
            {step === 4 && (
              <motion.section key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                 <h2 className="text-lg font-semibold text-gray-900 border-b pb-2 mb-6">Pricing & Visibility</h2>
                 <div className="space-y-6">

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Pricing Strategy</label>
                        <select name="pricingStrategy" value={formData.pricingStrategy} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 bg-white">
                          <option value="Fixed">Fixed Price</option>
                          <option value="Negotiable">Negotiable</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Total Price (₹) *</label>
                        <input type="number" name="price" value={formData.price} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500" placeholder="e.g. 7500000" />
                      </div>
                    </div>

                    {/* Breakdown Calculation */}
                    <div className="bg-green-50 border border-green-200 p-4 rounded-md">
                      <p className="text-sm text-green-800 font-medium">Auto-calculated Breakdown:</p>
                      <p className="text-2xl font-bold text-green-900 mt-1">₹{pricePerSqFt} <span className="text-sm font-normal">/ {formData.areaUnit || 'Unit'}</span></p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Visibility Settings</label>
                        <div className="flex gap-4">
                          <label className={`flex-1 border rounded-lg p-4 cursor-pointer transition-colors ${formData.visibility === 'Draft' ? 'border-gray-900 bg-gray-50' : 'border-gray-200 hover:border-gray-300'}`}>
                            <div className="flex items-center">
                              <input type="radio" name="visibility" value="Draft" checked={formData.visibility === 'Draft'} onChange={handleChange} className="w-4 h-4 text-blue-600" />
                              <span className="ml-2 font-semibold text-gray-900">Post as Private (Draft)</span>
                            </div>
                          </label>
                          <label className={`flex-1 border rounded-lg p-4 cursor-pointer transition-colors ${formData.visibility === 'Publish' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                            <div className="flex items-center">
                              <input type="radio" name="visibility" value="Publish" checked={formData.visibility === 'Publish'} onChange={handleChange} className="w-4 h-4 text-blue-600" />
                              <span className="ml-2 font-semibold text-blue-900">Publish Now</span>
                            </div>
                          </label>
                        </div>
                    </div>

                 </div>
              </motion.section>
            )}
          </AnimatePresence>

          {/* Wizard Navigation */}
          <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center relative z-10">
            <button
              type="button"
              onClick={handlePrev}
              disabled={step === 1 || isSubmitting}
              className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 disabled:opacity-50 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 mr-1" /> Back
            </button>

            {step < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center px-6 py-2 bg-gray-900 text-white rounded-md font-medium hover:bg-black transition-colors"
              >
                Next <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center px-8 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors disabled:opacity-70 shadow-sm"
              >
                <Save className="w-4 h-4 mr-2" />
                {isSubmitting ? 'Saving...' : formData.visibility === 'Draft' ? 'Save Draft' : 'Launch Property'}
              </button>
            )}
          </div>

        </form>
      </div>
    </div>
  );
}
