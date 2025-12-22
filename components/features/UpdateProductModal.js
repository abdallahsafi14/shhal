'use client';

import { useState } from 'react';
import { X, Store, MapPin, Coins, Plus, ChevronDown } from 'lucide-react';

/**
 * UpdateProductModal - Modal for updating product prices and branches
 * Matches the design mockup precisely
 */
export default function UpdateProductModal({ isOpen, onClose }) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    if (!isOpen) return null;

    const handleOnClose = () => {
        setIsSubmitted(false);
        onClose();
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/40" 
                onClick={handleOnClose}
            />

            {/* Modal Content */}
            <div className="relative bg-white w-full max-w-[580px] rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                {/* Close Button - TOP RIGHT for RTL */}
                <button 
                    onClick={handleOnClose}
                    className="absolute top-6 right-6 w-10 h-10 rounded-full border border-red-500 flex items-center justify-center text-red-500 hover:bg-red-50 transition-colors z-10"
                >
                    <X className="w-6 h-6 border-2 border-red-500 rounded-full p-1" />
                </button>

                {!isSubmitted ? (
                    <div className="p-10 pt-16 space-y-8">
                        {/* Header */}
                        <div className="text-center">
                            <h2 className="text-[19px] font-bold text-[#333333]">
                                قم بتحديث الأسعار التي تريدها لإنشاء المنتج الذي تريده
                            </h2>
                        </div>

                        <div className="space-y-6">
                            {/* Store Name */}
                            <div className="space-y-2 text-right">
                                <label className="text-[14px] font-bold text-[#07334B] pr-1">اسم المتجر</label>
                                <div className="relative group">
                                    <div className="w-full bg-white border border-gray-200 rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:border-[#8B8A6C] transition-all">
                                        <ChevronDown className="w-5 h-5 text-gray-400" />
                                        <div className="flex items-center gap-3">
                                            <span className="text-[15px] font-medium text-[#555555]">ماجيلا</span>
                                            <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                                                <Store className="w-4 h-4 text-[#8B8A6C]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Branch 1 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2 text-right">
                                    <label className="text-[14px] font-bold text-[#07334B] pr-1">سعر المنتج</label>
                                    <div className="relative">
                                        <input 
                                            type="text" 
                                            defaultValue="$12.87"
                                            className="w-full bg-white border border-gray-200 rounded-2xl p-4 text-right pr-12 pl-4 focus:outline-none focus:border-[#8B8A6C] transition-all"
                                        />
                                        <Coins className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    </div>
                                </div>
                                <div className="space-y-2 text-right order-first md:order-last">
                                    <label className="text-[14px] font-bold text-[#07334B] pr-1">الفرع الأول</label>
                                    <div className="relative">
                                        <input 
                                            type="text" 
                                            defaultValue="اللاذقية مقابل مقهى الصوفي"
                                            className="w-full bg-white border border-gray-200 rounded-2xl p-4 text-right pr-12 pl-4 focus:outline-none focus:border-[#8B8A6C] transition-all"
                                        />
                                        <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    </div>
                                </div>
                            </div>

                            {/* Branch 2 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2 text-right">
                                    <label className="text-[14px] font-bold text-[#07334B] pr-1">سعر المنتج</label>
                                    <div className="relative">
                                        <input 
                                            type="text" 
                                            defaultValue="$120"
                                            className="w-full bg-white border border-gray-200 rounded-2xl p-4 text-right pr-12 pl-4 focus:outline-none focus:border-[#8B8A6C] transition-all"
                                        />
                                        <Coins className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    </div>
                                </div>
                                <div className="space-y-2 text-right order-first md:order-last">
                                    <label className="text-[14px] font-bold text-[#07334B] pr-1">الفرع الثاني</label>
                                    <div className="relative">
                                        <input 
                                            type="text" 
                                            defaultValue="الشام , شارع بغداد"
                                            className="w-full bg-white border border-gray-200 rounded-2xl p-4 text-right pr-12 pl-4 focus:outline-none focus:border-[#8B8A6C] transition-all"
                                        />
                                        <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    </div>
                                </div>
                            </div>

                            {/* Add Another Branch */}
                            <div className="flex justify-end pt-2">
                                <button className="flex items-center gap-2 text-[#777777] hover:text-[#07334B] transition-colors font-bold text-[14px]">
                                    <span className="underline underline-offset-4">أدخل فرع أخر للمحل</span>
                                    <div className="w-5 h-5 rounded-md border border-gray-300 flex items-center justify-center">
                                        <Plus className="w-3 h-3" />
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col md:flex-row gap-4 pt-4">
                            <button className="flex-1 order-2 md:order-1 border border-[#07334B] text-[#07334B] font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-all text-[16px]">
                                <Coins className="w-5 h-5" /> أدخل سعر أخر
                            </button>
                            <button 
                                onClick={handleSubmit}
                                className="flex-[1.5] order-1 md:order-2 bg-[#07334B] text-white font-bold py-4 rounded-xl hover:bg-[#0a4566] transition-all text-[16px] shadow-lg shadow-[#07334B]/20"
                            >
                                تحديث المنتج
                            </button>
                        </div>
                    </div>
                ) : (
                    /* Under Review View */
                    <div className="p-12 pt-20 text-center space-y-8 animate-in fade-in zoom-in-95 duration-500">
                        {/* Custom Paper Bag Illustration matching the mockup */}
                        <div className="relative w-64 h-64 mx-auto mb-10">
                            <div className="absolute inset-0 bg-[#e5e4d7]/40 rounded-full scale-110" />
                            <div className="relative z-10 w-full h-full flex items-center justify-center">
                                <svg viewBox="0 0 200 200" className="w-48 h-48 drop-shadow-xl">
                                    {/* Paper Bag Shape */}
                                    <path 
                                        d="M60 60 L140 60 L150 160 L50 160 Z" 
                                        fill="#C0BEA4" 
                                        stroke="#8B8A6C" 
                                        strokeWidth="2"
                                    />
                                    {/* Fold line */}
                                    <path 
                                        d="M60 60 L70 40 L130 40 L140 60" 
                                        fill="#D6D4C0" 
                                        stroke="#8B8A6C" 
                                        strokeWidth="2"
                                    />
                                    {/* Design details */}
                                    <path 
                                        d="M75 60 L100 80 L125 60" 
                                        fill="none" 
                                        stroke="#8B8A6C" 
                                        strokeWidth="2"
                                    />
                                    {/* Decorative circles and stars */}
                                    <circle cx="165" cy="100" r="5" fill="#D6D4C0" />
                                    <circle cx="155" cy="50" r="3" fill="#8B8A6C" opacity="0.4" />
                                    <circle cx="40" cy="130" r="6" fill="#D6D4C0" />
                                    <path d="M170 145l4 4m0-4l-4 4" stroke="#8B8A6C" strokeWidth="2" />
                                    <path d="M30 45l4 4m0-4l-4 4" stroke="#8B8A6C" strokeWidth="2" />
                                </svg>
                            </div>
                        </div>

                        <div className="space-y-4 max-w-sm mx-auto">
                            <h3 className="text-[28px] font-bold text-[#8B8A6C]">طلبك قيد المراجعة</h3>
                            <p className="text-[17px] text-[#999999] leading-relaxed">
                                سيصلك إشعار عند إتمام العملية بنجاح وستحصول على <span className="font-bold text-[#777777]">24 نقطة</span> في حال إتمام المهمة
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
