'use client';

import { X, Search, ChevronLeft } from 'lucide-react';

/**
 * CategoriesModal - Displays all available categories in a modal overlay
 * Matches the design from the mockup precisely
 */
export default function CategoriesModal({ isOpen, onClose, categories = [] }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 z-[9998] transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed top-12 right-12 md:right-32 z-[9999] w-[90%] max-w-[480px] animate-slideDown overflow-visible">
        <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative overflow-hidden">
          
          {/* Custom Close Button (Red Circle with X) */}
          <button
            onClick={onClose}
            className="absolute top-6 right-8 w-7 h-7 rounded-full bg-white shadow-sm border-2 border-red-500 flex items-center justify-center group hover:bg-red-50 transition-all z-[10001]"
          >
            <X className="w-4 h-4 text-red-500 stroke-[3.5px]" />
          </button>

          {/* Header */}
          <div className="px-8 pt-10 pb-4 text-center">
            <h2 className="text-[17px] font-bold text-[#555555]">
              الفئات <span className="text-[#999999] font-normal text-[15px]">({categories.length} فئة)</span>
            </h2>
          </div>

          {/* Search Bar */}
          <div className="px-8 mb-6">
            <div className="relative">
              <input 
                type="text" 
                placeholder="ابحث هنا..." 
                className="w-full bg-[#f8f8f8] border border-gray-100 rounded-full py-2.5 px-10 text-[13px] text-right focus:outline-none focus:ring-1 focus:ring-[#8B8A6C] transition-all"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Subheader */}
          <div className="px-8 mb-4">
            <h3 className="text-sm font-bold text-[#07334B] text-right">
              {categories.length} من الفئات المتوفرة
            </h3>
          </div>

          {/* Categories List with Custom Scrollbar */}
          <div className="max-h-[60vh] overflow-y-auto px-4 pb-8 custom-scrollbar dir-ltr">
            <div className="dir-rtl w-full">
              <div className="space-y-1">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center justify-between p-3 hover:bg-gray-50 transition-colors group border-b border-gray-50 last:border-0"
                  >
                    <div className="flex items-center gap-4">
                      {/* Category Image/Icon */}
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-100">
                        <img 
                          src={category.icon || "/products/camera.jpg"} 
                          alt={category.name} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div className="text-right">
                        <span className="text-[14px] font-bold text-[#555555]">
                          الفئة : <span className="font-normal">{category.name}</span>
                        </span>
                      </div>
                    </div>
                    {/* Chevron Left - Direction corrected for intent in mockup */}
                    <ChevronLeft className="w-4 h-4 text-gray-400 group-hover:text-[#8B8A6C] transition-colors" />
                  </button>
                ))}
              </div>
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
      `}</style>
    </>
  );
}
