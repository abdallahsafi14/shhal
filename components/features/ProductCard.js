'use client';

import Link from 'next/link';
import { 
  Heart, 
  Store, 
  TrendingDown, 
  TrendingUp, 
  Eye, 
  Grid3x3 
} from 'lucide-react';

/**
 * ProductCard - Displays a summary of a product with price range and metadata
 */
export default function ProductCard({ product }) {
  // Mock ID if not present since we use dynamic routing
  const productId = product.id || '1';

  return (
    <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-50 flex flex-col h-full group">
      {/* Image Container with Link */}
      <Link href={`/products/${productId}`} className="relative aspect-square overflow-hidden bg-gray-50 cursor-pointer block">
        <img 
          src={product.image || "/products/camera.jpg"} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        
        {/* Favorite Button (Overlay) - Prevent propagation to Link */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            // Add favorite logic here
          }}
          className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors shadow-sm"
        >
          <Heart className="w-5 h-5 fill-current" />
        </button>
      </Link>

      {/* Content Container with Link */}
      <Link href={`/products/${productId}`} className="p-5 flex-1 flex flex-col text-right cursor-pointer">
        <div className="mb-4">
          <h3 className="text-[17px] font-bold text-[#333333] mb-2 group-hover:text-[#07334B] transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center justify-end gap-2 text-[13px] text-[#777777]">
            <span className="font-medium">{product.category}</span>
            <Grid3x3 className="w-4 h-4 text-[#8B8A6C]" />
            <span className="text-[#AAAAAA] mr-1">الفئة :</span>
          </div>
        </div>

        {/* Price Info */}
        <div className="space-y-2.5 mb-5">
          <div className="flex items-center justify-end gap-2 text-[13px] text-[#777777]">
            <span className="font-bold text-[#8B8A6C] text-[15px]">{product.minPrice}</span>
            <TrendingDown className="w-4 h-4 text-[#8B8A6C]" />
            <span className="text-[#AAAAAA]">أقل سعر :</span>
          </div>
          <div className="flex items-center justify-end gap-2 text-[13px] text-[#777777]">
            <span className="font-bold text-[#333333] text-[15px]">{product.maxPrice}</span>
            <TrendingUp className="w-4 h-4 text-gray-400" />
            <span className="text-[#AAAAAA]">أعلى سعر :</span>
          </div>
        </div>

        {/* Footer Meta */}
        <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-end gap-3 text-[12px] text-[#AAAAAA]">
          <span className="font-medium text-[#777777]">{product.views}</span>
          <Eye className="w-4 h-4" />
          <span className="text-[#BBBBBB]">عدد المشاهدين :</span>
        </div>
      </Link>
    </div>
  );
}
