'use client';

import { X, Search } from 'lucide-react';
import Image from 'next/image';

/**
 * FavoritesModal - Displays favorited products in a modal overlay
 */
export default function FavoritesModal({ isOpen, onClose, favorites = [], unreadCount = 0 }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop - Simple overlay without blur */}
      <div 
        className="fixed inset-0 bg-black/40 z-[9998] transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal - Consistent with NotificationModal positioning */}
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
              المفضلة <span className="text-[#999999] font-normal text-[15px]">({favorites.length} منتج)</span>
            </h2>
          </div>

          {/* Search Bar - only shown if there are favorites or as per mockup */}
          <div className="px-8 mb-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="ابحث هنا..." 
                className="w-full bg-[#f8f8f8] border border-gray-100 rounded-full py-2 px-10 text-[13px] text-right focus:outline-none focus:ring-1 focus:ring-[#8B8A6C] transition-all"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Favorites List - Force dir="ltr" wrapper to get scrollbar on right */}
          <div className="max-h-[70vh] overflow-y-auto px-4 pb-8 custom-scrollbar dir-ltr">
            <div className="dir-rtl w-full px-2">
              {favorites.length === 0 ? (
                <div className="py-20 px-8 text-center flex flex-col items-center">
                  <h3 className="text-[19px] font-bold text-[#b8b3a0] mb-2 mt-8">المفضلة فارغة</h3>
                  <p className="text-[14px] text-[#999999] leading-relaxed max-w-[280px]">
                    ابدأ بتصفح الفئات ومشاهدة المنتجات للحصول على نقاط
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {favorites.map((product, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-3 border border-gray-50 hover:shadow-md transition-all duration-200 cursor-pointer group relative"
                    >
                      {/* Remove Button (Small Red Circle with X) */}
                      <button className="absolute top-2 left-2 w-5 h-5 rounded-full border border-red-400 flex items-center justify-center bg-white group-hover:bg-red-50 transition-colors">
                        <X className="w-3 h-3 text-red-500 stroke-[3px]" />
                      </button>

                      <div className="flex gap-4">
                        {/* Product Info (Right Aligned in RTL) */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-[14px] font-bold text-[#333333] mb-1.5 leading-tight">
                            {product.name}
                          </h3>
                          <div className="space-y-0.5">
                            <div className="flex items-center gap-1 text-[11px] text-[#777777]">
                              <span>أقل سعر :</span>
                              <span className="font-bold text-[#8B8A6C]">{product.currentPrice}</span>
                            </div>
                            <div className="flex items-center gap-1 text-[11px] text-[#777777]">
                              <span>أعلى سعر :</span>
                              <span className="font-bold">{product.purchasePrice}</span>
                            </div>
                            <div className="flex items-center gap-1 text-[11px] text-[#777777]">
                              <span>عدد المشاهدين :</span>
                              <span>{product.views.split('/')[0]}</span>
                            </div>
                          </div>
                          
                          {/* Stores/Brands */}
                          <div className="mt-2 text-[10px] text-[#999999] truncate">
                            Shein , Trendyol , Zara , Noon , وغيرها
                          </div>
                        </div>

                        {/* Product Image (Left side visually, but we use flex row for RTL) */}
                        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-50 border border-gray-100">
                          <img 
                            src={product.image} 
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

        /* Custom Scrollbar - matching the subtle design */
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
