"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * SectionNavigator - Horizontal scroll navigation arrows
 * Matches the design from the home page mockup
 * In RTL mode, the chevrons are swapped to display correctly
 */
export default function SectionNavigator({ onPrev, onNext, showPrev = true, showNext = true }) {
  return (
    <div className="flex items-center gap-1.5">
      {/* Previous Arrow - In RTL, ChevronRight displays as left arrow */}
      <button
        onClick={onPrev}
        disabled={!showPrev}
        className={`
          w-5 h-5 rounded-md flex items-center justify-center
          transition-all duration-200
          ${showPrev 
            ? 'bg-white border border-[#D1D5DB] hover:border-[#9CA3AF] text-[#6B7280] hover:text-[#374151] cursor-pointer' 
            : 'bg-[#F3F4F6] border border-[#E5E7EB] text-[#D1D5DB] cursor-not-allowed'
          }
        `}
        aria-label="السابق"
      >
        <ChevronRight className="w-3.5 h-3.5" strokeWidth={2.5} />
      </button>

      {/* Next Arrow - In RTL, ChevronLeft displays as right arrow */}
      <button
        onClick={onNext}
        disabled={!showNext}
        className={`
          w-5 h-5 rounded-md flex items-center justify-center
          transition-all duration-200
          ${showNext 
            ? 'bg-white border border-[#D1D5DB] hover:border-[#9CA3AF] text-[#6B7280] hover:text-[#374151] cursor-pointer' 
            : 'bg-[#F3F4F6] border border-[#E5E7EB] text-[#D1D5DB] cursor-not-allowed'
          }
        `}
        aria-label="التالي"
      >
        <ChevronLeft className="w-3.5 h-3.5" strokeWidth={2.5} />
      </button>
    </div>
  );
}

