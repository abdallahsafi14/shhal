'use client';

import { X, Search, ChevronDown } from 'lucide-react';

/**
 * SearchFilterModal - Small overlay for search filters
 * Matches the design from the mockup precisely
 */
export default function SearchFilterModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 z-[10002]" 
        onClick={onClose}
      />
      <div className="absolute top-0 right-0 z-[10003] w-full max-w-[340px] animate-in fade-in zoom-in-95 duration-200 origin-top-right">
        <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden">
          <div className="p-6 space-y-6">
            
            {/* Category Filter */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <button className="text-[13px] font-bold text-[#8B8A6C] hover:underline">تهيئة</button>
                <label className="text-[13px] font-bold text-[#555555]">تصنيف حسب الفئة</label>
              </div>
              <div className="relative group">
                <div className="w-full bg-[#F9F9F9] border border-gray-100 rounded-xl p-3 flex items-center justify-between cursor-pointer hover:border-[#8B8A6C] transition-all">
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] text-[#999999]">اختر نوع الفئة التي تريدها</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8B8A6C]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Price Filter */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <button className="text-[13px] font-bold text-[#8B8A6C] hover:underline">تهيئة</button>
                <label className="text-[13px] font-bold text-[#555555]">تصنيف حسب السعر</label>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="أعلى سعر" 
                    className="w-full bg-[#F9F9F9] border border-gray-100 rounded-xl p-3 text-[12px] text-right focus:outline-none focus:border-[#8B8A6C] transition-all"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="أقل سعر" 
                    className="w-full bg-[#F9F9F9] border border-gray-100 rounded-xl p-3 text-[12px] text-right focus:outline-none focus:border-[#8B8A6C] transition-all"
                  />
                  {/* Subtle check icon as seen in mockup */}
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4L3.5 6.5L9 1" stroke="#8B8A6C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Store Filter */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <button className="text-[13px] font-bold text-[#8B8A6C] hover:underline">تهيئة</button>
                <label className="text-[13px] font-bold text-[#555555]">تصنيف حسب المتجر</label>
              </div>
              <div className="relative">
                <div className="w-full bg-[#F9F9F9] border border-gray-100 rounded-xl p-3 flex items-center justify-between cursor-pointer hover:border-[#8B8A6C] transition-all">
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] text-[#999999]">اختر المتجر التي تريده</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8B8A6C]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
                <button className="flex-1 bg-[#EBECF0] text-[#555555] font-bold py-3.5 rounded-xl hover:bg-gray-200 transition-all text-[14px]">
                    تهيئة المعلومات
                </button>
                <button className="flex-1 bg-[#07334B] text-white font-bold py-3.5 rounded-xl hover:bg-[#0a4566] transition-all text-[14px]">
                    فلترة (2)
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
