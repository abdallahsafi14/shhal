'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CategoriesPage() {
    const router = useRouter();

    // Mock data for products in categories
    const products = [
        {
            name: "نظارة شمسية",
            currentPrice: "$124.5",
            purchasePrice: "$164.1",
            image: "/products/camera.jpg",
            views: "12.1622",
            stores: "Shein , Trendyol , Zara , Noon"
        },
        {
            name: "نظارة شمسية",
            currentPrice: "$124.5",
            purchasePrice: "$164.1",
            image: "/products/camera.jpg",
            views: "12.1622",
            stores: "Shein , Trendyol , Zara , Noon"
        },
        {
            name: "نظارة شمسية",
            currentPrice: "$124.5",
            purchasePrice: "$164.1",
            image: "/products/camera.jpg",
            views: "12.1622",
            stores: "Shein , Trendyol , Zara , Noon"
        },
        {
            name: "نظارة شمسية",
            currentPrice: "$124.5",
            purchasePrice: "$164.1",
            image: "/products/camera.jpg",
            views: "12.1622",
            stores: "Shein , Trendyol , Zara , Noon"
        },
    ];

    return (
        <div className="max-w-[1200px] mx-auto pb-20 px-6">
            {/* Back Button */}
            <div className="flex justify-start mb-8">
                <button 
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-[#55493B] font-bold hover:text-[#07334B] transition-colors"
                >
                    الرجوع للخلف
                    <ArrowLeft className="w-5 h-5" />
                </button>
            </div>

            {/* Products List */}
            <div className="grid grid-cols-1 gap-6">
                {products.map((product, index) => (
                    <div 
                        key={index}
                        className="bg-white rounded-[2reax-[1400m] p-6 shadow-sm border border-gray-50 flex items-center justify-between hover:shadow-md transition-all duration-300 group"
                    >
                        {/* Right Side: Product Details */}
                        <div className="flex-1 pr-4">
                            <h2 className="text-[22px] font-bold text-[#333333] mb-4">{product.name}</h2>
                            
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-2 text-[14px] text-[#777777]">
                                    <span>أقل سعر :</span>
                                    <span className="font-bold text-[#8B8A6C] text-lg">{product.currentPrice}</span>
                                </div>
                                <div className="flex items-center gap-2 text-[14px] text-[#777777]">
                                    <span>أعلى سعر :</span>
                                    <span className="font-bold text-lg">{product.purchasePrice}</span>
                                </div>
                                <div className="flex items-center gap-2 text-[14px] text-[#777777]">
                                    <span>عدد المشاهدين :</span>
                                    <span className="text-lg">{product.views}</span>
                                </div>
                                <div className="flex items-center gap-2 text-[14px] text-[#777777]">
                                    <span>المتاجر :</span>
                                    <span className="text-[#8B8A6C] font-medium">{product.stores}</span>
                                </div>
                            </div>
                        </div>

                        {/* Left Side: Image */}
                        <div className="w-64 h-48 rounded-[1.5rem] overflow-hidden bg-gray-50 flex-shrink-0">
                            <img 
                                src={product.image} 
                                alt={product.name} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
