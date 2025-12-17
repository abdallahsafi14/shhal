'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        birthDate: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registering:', formData);
    };

    return (
        <div className="min-h-screen flex" dir="rtl">
            {/* Right Side - Branding (appears on right in RTL) */}
            <div className="hidden lg:flex lg:w-1/3 bg-[#8B8A6C] items-center justify-center p-12 relative overflow-hidden">
                
                <div className="text-center z-10 max-w-md">
                    {/* Logo/Brand */}
                    <h1 className="text-7xl font-bold text-[#07334B] mb-8" style={{ fontFamily: 'serif' }}>
                        شحال
                        <div className="text-4xl mt-2 font-light">Shhal</div>
                    </h1>
                    
                    {/* Description */}
                    <p className="text-white/90 text-lg leading-relaxed mb-12 font-light">
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى.
                    </p>
                    
                    {/* Social Media Icons */}
                    <div className="flex justify-center gap-6">
                        <Link href="#" className="transform hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </Link>
                        <Link href="#" className="transform hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                        </Link>
                        <Link href="#" className="transform hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </Link>
                        <Link href="#" className="transform hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </Link>
                        <Link href="#" className="transform hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Left Side - Register Form (appears on left in RTL) */}
            <div className="flex-1 flex items-center justify-center p-8 bg-white relative overflow-hidden">
                {/* Decorative curved element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B8A6C]/10 rounded-full translate-x-32 -translate-y-32 border-2 border-dashed border-[#8B8A6C]/20"></div>
                
                <div className="w-full max-w-xl relative z-10">
                    {/* Illustration */}
                    <div className="mb-8 flex justify-center">
                        <div className="relative">
                            {/* Laptop illustration */}
                            <div className="w-48 h-32 border-8 border-[#07334B] rounded-lg relative bg-white">
                                {/* Screen content - person waving */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        {/* Simple person illustration - Fixed colors */}
                                        <div className="w-16 h-16 rounded-full bg-[#8B8A6C]/30 mx-auto mb-2 relative">
                                            <div className="absolute top-2 left-4 w-8 h-8 rounded-full bg-[#07334B]/60"></div>
                                            <div className="absolute top-6 left-3 w-10 h-10 rounded-t-full bg-[#8B8A6C]"></div>
                                        </div>
                                        {/* Waving hand */}
                                        <div className="absolute -top-2 -right-4 text-3xl animate-bounce">👋</div>
                                    </div>
                                </div>
                                {/* Keyboard base */}
                                <div className="absolute -bottom-2 left-0 right-0 h-2 bg-[#07334B] rounded-b-lg border-t-2 border-[#07334B]"></div>
                            </div>
                            {/* Decorative leaves */}
                            <div className="absolute -right-8 top-8 text-[#8B8A6C]/40 text-4xl">🌿</div>
                            <div className="absolute -left-8 bottom-4 text-[#8B8A6C]/40 text-3xl">🍃</div>
                        </div>
                    </div>

                    {/* Form Title */}
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-[#8B8A6C] mb-2">معلومات إنشاء حساب</h2>
                        <p className="text-gray-500 text-sm">
                            مرحبا بك ! من فضلك قم باستكمال المعلومات لإتمام العملية بنجاح.
                        </p>
                    </div>

                    {/* Register Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* First Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    الاسم الأول
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="أدخل الاسم الأول لك هنا"
                                        className="w-full rounded-md border border-gray-200 bg-white pr-10 pl-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#07334B] focus:border-transparent text-right"
                                    />
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Last Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    الاسم الأخير
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="أدخل الاسم الأخير لك هنا"
                                        className="w-full rounded-md border border-gray-200 bg-white pr-10 pl-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#07334B] focus:border-transparent text-right"
                                    />
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    رقم الهاتف
                                </label>
                                <div className="relative">
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="أدخل رقم هاتفك هنا"
                                        className="w-full rounded-md border border-gray-200 bg-white pr-10 pl-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#07334B] focus:border-transparent text-right"
                                    />
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Birth Date */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    تاريخ الميلاد
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="birthDate"
                                        value={formData.birthDate}
                                        onChange={handleChange}
                                        placeholder="أدخل تاريخ ميلادك هنا"
                                        className="w-full rounded-md border border-gray-200 bg-white pr-10 pl-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#07334B] focus:border-transparent text-right"
                                        onFocus={(e) => e.target.type = 'date'}
                                        onBlur={(e) => {
                                            if (!e.target.value) e.target.type = 'text';
                                        }}
                                    />
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#07334B] text-white py-3 rounded-lg font-medium hover:bg-[#07334B]/90 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] mt-8"
                        >
                            أنشأ حساب
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
