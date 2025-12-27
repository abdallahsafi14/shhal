'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/hooks/useAuth';

export default function Verify() {
    // State for 5-digit OTP
    const [otp, setOtp] = useState(['', '', '', '', '']);
    const inputRefs = useRef([]);
    const { verifyOtp, isVerifying, resendOtp, isResending } = useAuth();

    // Initialize refs array and focus first input
    useEffect(() => {
        inputRefs.current = inputRefs.current.slice(0, 5);
        // Auto focus first input on mount
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    const handleVerify = (code) => {
        verifyOtp({ code });
    };


    const handleChange = (index, value) => {
        // Only allow numbers
        if (value && !/^\d+$/.test(value)) return;
        
        // Clear error logic removed as handled globally
        
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-focus logic & Auto-submit
        if (value) {
            if (index < 4) {
                inputRefs.current[index + 1].focus();
            } else {
                // If last digit is entered, checks if all inputs are filled
                const isComplete = newOtp.every(digit => digit !== '');
                if (isComplete) {
                    // Remove focus from input to prevent double typing or keyboard issues
                    inputRefs.current[index].blur();
                    handleVerify(newOtp.join(''));
                }
            }
        }
    };

    const handleKeyDown = (index, e) => {
        // Handle backspace to focus previous input
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 5).split('');
        if (pastedData.every(char => /^\d$/.test(char))) {
             const newOtp = [...otp];
            pastedData.forEach((char, index) => {
                if (index < 5) newOtp[index] = char;
            });
            setOtp(newOtp);
            
            // Focus logic after paste
            if (pastedData.length < 5) {
                inputRefs.current[pastedData.length].focus();
            } else {
                inputRefs.current[4].blur();
                handleVerify(newOtp.join(''));
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleVerify(otp.join(''));
    };

    return (
        <div className="min-h-screen flex" dir="rtl">
            {/* Right Side - Branding (appears on right in RTL) */}
            <div className="hidden lg:flex lg:w-1/3 bg-[#8B8A6C] items-center justify-center p-12 relative overflow-hidden">
                
                <div className="text-center z-10 max-w-md flex flex-col items-center">
                    {/* Logo/Brand */}
                    <div className='relative w-[150px] h-[150px] mb-8'>
                        <Image 
                            src="/icons/logo.png" 
                            alt="Logo" 
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    
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

            {/* Left Side - Verify Form (appears on left in RTL) */}
            <div className="flex-1 flex items-center justify-center p-8 bg-white relative overflow-hidden">
                {/* Decorative curved element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B8A6C]/10 rounded-full translate-x-32 -translate-y-32 border-2 border-dashed border-[#8B8A6C]/20"></div>
                <div className="w-full max-w-md relative z-10">
                    {/* Illustration */}
                    <div className="w-full mb-8 flex justify-center">
                        <Image 
                            src="/icons/login.png" 
                            alt="Login Illustration" 
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-[250px] h-auto object-contain"
                            priority
                        />
                    </div>

                    {/* Form Title */}
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-[#8B8A6C] mb-2">التحقق من الكود</h2>
                        <p className="text-gray-500 text-sm">
                            قم بإدخال الكود لإكمال العملية والبدء باستخدام التطبيق.
                        </p>
                    </div>

                    {/* Verify Form */}
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* OTP Input */}
                        <div className="flex justify-center gap-4" dir="ltr">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    type="text"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    onPaste={handlePaste}
                                    className={`w-16 h-16 rounded-xl border-2 text-center text-2xl font-semibold focus:outline-none transition-all duration-300 bg-white text-gray-800 border-gray-200 focus:border-[#07334B] focus:ring-2 focus:ring-[#07334B]/20`}
                                    required
                                />
                            ))}
                        </div>


                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isVerifying}
                            className="w-full bg-[#07334B] text-white py-3 rounded-lg font-medium hover:bg-[#07334B]/90 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isVerifying ? 'جاري التحقق...' : 'التحقق من الكود'}
                        </button>

                        {/* Resend Link */}
                        <div className="text-center text-sm text-gray-500">
                             لم استلم أي كود بعد الأن{' '}
                            <button 
                                type="button" 
                                onClick={() => resendOtp()}
                                disabled={isResending}
                                className="text-[#07334B] hover:underline font-bold disabled:opacity-50"
                            >
                                {isResending ? 'جاري الإرسال...' : 'أعد الإرسال'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
