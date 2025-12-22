'use client';

import { useState } from 'react';
import Image from "next/image";
import CategoryChips from "@/components/features/CategoryChips";
import ProductSection from "@/components/features/ProductSection";
import CategoriesModal from "@/components/features/CategoriesModal";
import { Grid3x3, Sparkles } from "lucide-react";

export default function Home() {
  const [isCategoriesModalOpen, setIsCategoriesModalOpen] = useState(false);

  // Mock data - Replace with actual data from API
  const categories = [
    { name: "الكترونيات", icon: "/icons/electronics.svg" },
    { name: "أثاث منزلي", icon: "/icons/electronics.svg" },
    { name: "ملابس", icon: "/icons/electronics.svg" },
    { name: "أجهزة رياضية", icon: "/icons/electronics.svg" },
    { name: "كتب", icon: "/icons/electronics.svg" },
    { name: "ألعاب", icon: "/icons/electronics.svg" },
    { name: "مستحضرات تجميل", icon: "/icons/electronics.svg" },
    { name: "أدوات مطبخ", icon: "/icons/electronics.svg" },
    { name: "إكسسوارات", icon: "/icons/electronics.svg" },
    { name: "حقائب", icon: "/icons/electronics.svg" },
    { name: "أحذية", icon: "/icons/electronics.svg" },
    { name: "ساعات", icon: "/icons/electronics.svg" },
  ];

  const featuredProducts = [
    {
      name: "كاميرا التصوير الاحترافية",
      category: "إلكترونيات",
      image: "/products/camera.jpg",
      currentPrice: "$124.5",
      purchasePrice: "$164.1",
      location: "الرياض",
      views: "12.16/22",
    },
    {
      name: "كاميرا التصوير الرقمية",
      category: "إلكترونيات",
      image: "/products/camera.jpg",
      currentPrice: "$124.5",
      purchasePrice: "$164.1",
      location: "جدة",
      views: "12.16/22",
    },
    {
      name: "كاميرا فيديو 4K",
      category: "إلكترونيات",
      image: "/products/camera.jpg",
      currentPrice: "$124.5",
      purchasePrice: "$164.1",
      location: "الدمام",
      views: "12.16/22",
    },
    {
      name: "كاميرا مراقبة ذكية",
      category: "إلكترونيات",
      image: "/products/camera.jpg",
      currentPrice: "$124.5",
      purchasePrice: "$164.1",
      location: "مكة",
      views: "12.16/22",
    },
    {
      name: "كاميرا تصوير فوري",
      category: "إلكترونيات",
      image: "/products/camera.jpg",
      currentPrice: "$124.5",
      purchasePrice: "$164.1",
      location: "المدينة",
      views: "12.16/22",
    },
    {
      name: "كاميرا أكشن",
      category: "إلكترونيات",
      image: "/products/camera.jpg",
      currentPrice: "$124.5",
      purchasePrice: "$164.1",
      location: "الطائف",
      views: "12.16/22",
    },
    {
      name: "كاميرا بدون مرآة",
      category: "إلكترونيات",
      image: "/products/camera.jpg",
      currentPrice: "$124.5",
      purchasePrice: "$164.1",
      location: "أبها",
      views: "12.16/22",
    },
    {
      name: "كاميرا DSLR",
      category: "إلكترونيات",
      image: "/products/camera.jpg",
      currentPrice: "$124.5",
      purchasePrice: "$164.1",
      location: "تبوك",
      views: "12.16/22",
    },
    {
      name: "كاميرا كومباكت",
      category: "إلكترونيات",
      image: "/products/camera.jpg",
      currentPrice: "$124.5",
      purchasePrice: "$164.1",
      location: "حائل",
      views: "12.16/22",
    },
    {
      name: "كاميرا احترافية",
      category: "إلكترونيات",
      image: "/products/camera.jpg",
      currentPrice: "$124.5",
      purchasePrice: "$164.1",
      location: "الخبر",
      views: "12.16/22",
    },
  ];

  const recentProducts = [
    {
      name: "كاميرا سينمائية",
      category: "إلكترونيات",
      image: "/products/camera.jpg",
      currentPrice: "$124.5",
      purchasePrice: "$164.1",
      location: "الرياض",
      views: "12.16/22",
    },
    {
      name: "كاميرا للمبتدئين",
      category: "إلكترونيات",
      image: "/products/camera.jpg",
      currentPrice: "$124.5",
      purchasePrice: "$164.1",
      location: "جدة",
      views: "12.16/22",
    },
    {
      name: "كاميرا رياضية",
      category: "إلكترونيات",
      image: "/products/camera.jpg",
      currentPrice: "$124.5",
      purchasePrice: "$164.1",
      location: "الدمام",
      views: "12.16/22",
    },
    {
      name: "كاميرا تحت الماء",
      category: "إلكترونيات",
      image: "/products/camera.jpg",
      currentPrice: "$124.5",
      purchasePrice: "$164.1",
      location: "مكة",
      views: "12.16/22",
    },
    {
      name: "كاميرا بانورامية",
      category: "إلكترونيات",
      image: "/products/camera.jpg",
      currentPrice: "$124.5",
      purchasePrice: "$164.1",
      location: "المدينة",
      views: "12.16/22",
    },
    {
      name: "كاميرا 360 درجة",
      category: "إلكترونيات",
      image: "/products/camera.jpg",
      currentPrice: "$124.5",
      purchasePrice: "$164.1",
      location: "الطائف",
      views: "12.16/22",
    },
    {
      name: "كاميرا للسفر",
      category: "إلكترونيات",
      image: "/products/camera.jpg",
      currentPrice: "$124.5",
      purchasePrice: "$164.1",
      location: "أبها",
      views: "12.16/22",
    },
    {
      name: "كاميرا ليلية",
      category: "إلكترونيات",
      image: "/products/camera.jpg",
      currentPrice: "$124.5",
      purchasePrice: "$164.1",
      location: "تبوك",
      views: "12.16/22",
    },
    {
      name: "كاميرا مزدوجة العدسة",
      category: "إلكترونيات",
      image: "/products/camera.jpg",
      currentPrice: "$124.5",
      purchasePrice: "$164.1",
      location: "حائل",
      views: "12.16/22",
    },
    {
      name: "كاميرا بتقنية AI",
      category: "إلكترونيات",
      image: "/products/camera.jpg",
      currentPrice: "$124.5",
      purchasePrice: "$164.1",
      location: "الخبر",
      views: "12.16/22",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Categories Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">الفئات المتوفرة</h2>
          <button 
            onClick={() => setIsCategoriesModalOpen(true)}
            className="text-sm text-[#8B8A6C] hover:text-[#07334B] transition-colors"
          >
            عرض المزيد
          </button>
        </div>
        <CategoryChips categories={categories} />
      </div>

      {/* Featured Products Section */}
      <ProductSection
        title="المنتجات المضافة مؤخراً"
        icon={<Grid3x3 className="w-full h-full" />}
        products={featuredProducts}
      />

      {/* Recent Products Section */}
      <ProductSection
        title="المنتجات المضافة مؤخراً"
        icon={<Sparkles className="w-full h-full" />}
        products={recentProducts}
      />

      {/* Categories Modal */}
      <CategoriesModal 
        isOpen={isCategoriesModalOpen} 
        onClose={() => setIsCategoriesModalOpen(false)} 
        categories={categories}
      />
    </div>
  );
}
