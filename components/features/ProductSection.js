"use client";

import { useRef, useState, useEffect } from "react";
import SectionNavigator from "@/components/shared/SectionNavigator";
import ProductCard from "./ProductCard";
import { Grid3x3 } from "lucide-react";

/**
 * ProductSection - Horizontal scrollable product section with navigation
 */
export default function ProductSection({ title, icon, products }) {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      
      // In RTL, scrollLeft can be negative or positive depending on browser
      const scrollableWidth = scrollWidth - clientWidth;
      
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
  }, [products]);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      // In RTL: scrolling left increases scrollLeft, scrolling right decreases it
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
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        {/* Title with Icon */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 text-[#8B8A6C]">
            {icon || <Grid3x3 className="w-full h-full" />}
          </div>
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
        </div>

        {/* Navigation Arrows */}
        <SectionNavigator
          onPrev={() => scroll("left")}  // Left arrow scrolls left
          onNext={() => scroll("right")} // Right arrow scrolls right
          showPrev={canScrollLeft}
          showNext={canScrollRight}
        />
      </div>

      {/* Scrollable Products Grid */}
      <div
        ref={scrollContainerRef}
        onScroll={checkScrollability}
        className="overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="grid grid-flow-col auto-cols-[minmax(260px,1fr)] gap-3.5 pb-2">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
