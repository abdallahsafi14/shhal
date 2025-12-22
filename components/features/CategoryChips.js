"use client";

import { useRef, useState, useEffect } from "react";
import SectionNavigator from "@/components/shared/SectionNavigator";
import Image from "next/image";

/**
 * CategoryChips - Horizontal scrollable category chips with navigation
 */
export default function CategoryChips({ categories }) {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      
      // In RTL, scrollLeft can be negative or positive depending on browser
      // We need to check if we can scroll in either direction
      const scrollableWidth = scrollWidth - clientWidth;
      
      // For RTL: scrollLeft starts at 0 (or max) and goes negative (or to 0) as you scroll right
      // Can scroll left if we're not at the leftmost position
      const atLeftEdge = Math.abs(scrollLeft) < 10;
      // Can scroll right if we haven't scrolled the full width
      const atRightEdge = Math.abs(scrollLeft) >= scrollableWidth - 10;
      
      setCanScrollLeft(!atLeftEdge);
      setCanScrollRight(!atRightEdge);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, [categories]);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      // In RTL: negative scrollLeft means scrolled to the right
      // Scrolling left = increase scrollLeft (less negative or more positive)
      // Scrolling right = decrease scrollLeft (more negative or less positive)
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScrollLeft = currentScroll + (direction === "left" ? scrollAmount : -scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
      setTimeout(checkScrollability, 300);
    }
  };

  return (
    <div className="flex items-center gap-3">
      {/* Navigation Arrows */}
      <SectionNavigator
        onPrev={() => scroll("left")}  // Left arrow scrolls left
        onNext={() => scroll("right")} // Right arrow scrolls right
        showPrev={canScrollLeft}
        showNext={canScrollRight}
      />

      {/* Scrollable Categories */}
      <div
        ref={scrollContainerRef}
        onScroll={checkScrollability}
        className="flex gap-3 overflow-x-auto scrollbar-hide flex-1"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {categories.map((category, index) => (
          <button
            key={index}
            className="
              flex-shrink-0 px-5 py-2.5 rounded-xl
              bg-[#E8E8D0] hover:bg-[#DDD8C0]
              transition-all duration-200
              flex items-center gap-2.5
              border border-transparent hover:border-[#8B8A6C]/10
            "
          >
            {/* Category Icon */}
            {category.icon && (
              <div className="w-7 h-7 relative flex-shrink-0">
                <Image
                  src={category.icon}
                  alt={category.name}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            
            {/* Category Name */}
            <span className="text-sm font-medium text-gray-800 whitespace-nowrap">
              {category.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
