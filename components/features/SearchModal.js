'use client';

import { useState } from 'react';
import { X, Search, SlidersHorizontal } from 'lucide-react';
import SearchFilterModal from './SearchFilterModal';

/**
 * SearchModal - Displays search results in a modal overlay
 * Matches the design from the mockup precisely
 */
export default function SearchModal({ isOpen, onClose, results = [] }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 z-[9998] transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="fixed top-12 right-12 md:right-32 z-[9999] w-[90%] max-w-[540px] animate-slideDown overflow-visible">
        <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative overflow-visible">
          
          {/* Filter Popover */}
          <div className="absolute top-[80px] right-8 w-full z-[10005] pointer-events-none">
            <div className="pointer-events-auto">
                <SearchFilterModal isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
            </div>
          </div>

          {/* Custom Close Button (Red Circle with X) */}
          <button
            onClick={onClose}
            className="absolute top-6 right-8 w-7 h-7 rounded-full bg-white shadow-sm border-2 border-red-500 flex items-center justify-center group hover:bg-red-50 transition-all z-[10001]"
          >
            <X className="w-4 h-4 text-red-500 stroke-[3.5px]" />
          </button>

          {/* Header */}
          <div className="px-8 pt-10 pb-4 text-center">
            <h2 className="text-[20px] font-bold text-[#555555]">البحث</h2>
          </div>

          {/* Search Controls */}
          <div className="px-8 mb-6 flex gap-3">
             {/* Search Input */}
             <div className="relative flex-1">
              <input 
                type="text" 
                placeholder="ابحث هنا..." 
                className="w-full bg-white border border-gray-200 rounded-2xl py-3 px-12 text-[14px] text-right focus:outline-none focus:border-[#8B8A6C] transition-all"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>

            {/* Filter Button */}
            <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all flex-shrink-0 ${isFilterOpen ? 'bg-[#07334B] text-white' : 'bg-[#8B8A6C] text-white hover:bg-[#7A795C]'}`}
            >
                <SlidersHorizontal className="w-6 h-6" />
            </button>
          </div>

          {/* Search Content */}
          <div className="max-h-[70vh] overflow-y-auto px-4 pb-12 custom-scrollbar dir-ltr">
            <div className="dir-rtl w-full px-2">
              {results.length === 0 ? (
                /* Empty State (Image 0) */
                <div className="py-16 px-8 text-center flex flex-col items-center animate-in fade-in duration-500">
                  <div className="relative w-48 h-48 mb-8 scale-110">
                    <div className="absolute inset-0 bg-gray-50 rounded-full opacity-50" />
                    <svg viewBox="0 0 200 200" className="w-full h-full text-gray-200">
                      {/* Abstract Background Shapes */}
                      <rect x="120" y="80" width="40" height="8" rx="4" fill="currentColor" />
                      <rect x="40" y="90" width="30" height="8" rx="4" fill="currentColor" />
                      <circle cx="160" cy="90" r="4" fill="currentColor" />
                      {/* Magnifying Glass Illustration matching mockup */}
                      <g className="text-[#8B8A6C]" transform="translate(65, 65)">
                        <circle cx="35" cy="35" r="30" fill="white" stroke="currentColor" strokeWidth="3" />
                        <line x1="55" y1="55" x2="85" y2="85" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                        <circle cx="25" cy="25" r="10" fill="currentColor" opacity="0.1" />
                      </g>
                    </svg>
                  </div>
                  <h3 className="text-[20px] font-bold text-[#666666] mb-3">لا يوجد نتيجة لما تم البحث عنه</h3>
                  <p className="text-[15px] text-[#999999] leading-relaxed max-w-[320px]">
                    ابدأ بتصفح الفئات ومشاهدة المنتجات للحصول على نقاط
                  </p>
                </div>
              ) : (
                /* Results List */
                <div className="space-y-4">
                  <div className="mb-2 text-right">
                    <h3 className="text-[14px] font-bold text-[#07334B]">
                        {results.length} نتيجة لما تم البحث عنه
                    </h3>
                  </div>
                  {results.map((product, index) => (
                    <div
                      key={index}
                      className="bg-[#F9F9F9] rounded-2xl p-4 border border-gray-50 hover:shadow-md transition-all duration-200 cursor-pointer group relative"
                    >
                      <button className="absolute top-4 left-4 w-5 h-5 rounded-full border border-red-400 flex items-center justify-center bg-white group-hover:bg-red-50 transition-colors">
                        <X className="w-3 h-3 text-red-500 stroke-[3px]" />
                      </button>

                      <div className="flex gap-6">
                        <div className="flex-1 min-w-0 text-right space-y-2">
                          <h3 className="text-[15px] font-bold text-[#333333] leading-tight">
                            {product.name}
                          </h3>
                          <div className="space-y-1">
                            <div className="flex items-center justify-end gap-1 text-[12px] text-[#777777]">
                              <span className="font-bold text-[#8B8A6C]">{product.minPrice}</span>
                              <span>أقل سعر :</span>
                            </div>
                            <div className="flex items-center justify-end gap-1 text-[12px] text-[#777777]">
                              <span className="font-bold">{product.maxPrice}</span>
                              <span>أعلى سعر :</span>
                            </div>
                            <div className="flex items-center justify-end gap-1 text-[12px] text-[#777777]">
                              <span>{product.views}</span>
                              <span>عدد المشاهدين :</span>
                            </div>
                          </div>
                          <div className="text-[11px] text-[#999999]">
                            المتاجر : Shein , Trendyol , Zara , Noon
                          </div>
                        </div>

                        <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 bg-white border border-gray-100">
                          <img 
                            src={product.image || "/products/camera.jpg"} 
                            alt={product.name} 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .dir-ltr { direction: ltr; }
        .dir-rtl { direction: rtl; }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #8B8A6C;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #7A795C;
        }
      `}</style>
    </>
  );
}
