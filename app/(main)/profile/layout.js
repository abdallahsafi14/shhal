'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
    UserIcon, 
    BanknotesIcon, 
    CubeIcon, 
    ShieldCheckIcon, 
    QuestionMarkCircleIcon, 
    ArrowRightOnRectangleIcon, 
    PencilIcon, 
    PhoneIcon, 
    EnvelopeIcon,
    ChevronLeftIcon
} from './components/Icons';

export default function ProfileLayout({ children }) {
    const pathname = usePathname();
    const [imagePreview, setImagePreview] = useState(null);

    const menuItems = [
        { id: 'info', label: 'المعلومات الشخصية', icon: UserIcon, path: '/profile' },
        { id: 'points', label: 'رصيد النقاط', icon: BanknotesIcon, path: '/profile/points' },
        { id: 'orders', label: 'سجل الطلبات', icon: CubeIcon, path: '/profile/orders' },
        { id: 'privacy', label: 'سياسة الخصوصية', icon: ShieldCheckIcon, path: '/profile/privacy' },
        { id: 'terms', label: 'الأحكام والشروط', icon: QuestionMarkCircleIcon, path: '/profile/terms' },
    ];

    const isActive = (path) => pathname === path;

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="min-h-screen bg-white py-8 px-4 md:px-12 dir-rtl font-sans text-right relative overflow-x-hidden">
             <div className="max-w-[1400px] mx-auto relative z-10">
                 <div className="flex flex-col lg:flex-row gap-8 items-start">
                     {/* RIGHT SIDEBAR */}
                     <div className="w-full lg:w-[380px] flex-shrink-0 flex flex-col gap-6">
                         {/* Profile Card */}
                         <div className="text-center pt-4">
                             <div className="relative inline-block mb-4">
                                 <div className="w-28 h-28 rounded-full border-4 border-[#F5F5F0] overflow-hidden mx-auto relative cursor-pointer">
                                     {imagePreview ? (
                                         <img src={imagePreview} alt="Profile" className="w-full h-full object-cover" />
                                     ) : (
                                         <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                                            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                         </div>
                                     )}
                                     <input type="file" onChange={handleImageChange} className="absolute inset-0 opacity-0 cursor-pointer z-20" accept="image/*" />
                                     <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity z-10 flex items-center justify-center text-white text-xs">تغيير</div>
                                 </div>
                                 <div className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg border border-gray-100 text-[#07334B]">
                                     <PencilIcon className="w-4 h-4" />
                                 </div>
                             </div>
                             
                             <h2 className="text-xl font-bold text-[#07334B] mb-1">محمد الأحمد العلي</h2>
                             
                             <div className="space-y-2 mt-4 dir-ltr">
                                 <div className="flex items-center justify-center gap-2 text-gray-500 text-[13px] font-medium">
                                     <span>(+44) 20 1234 5629</span>
                                     <PhoneIcon className="w-4 h-4" />
                                 </div>
                                 <div className="flex items-center justify-center gap-2 text-gray-500 text-[13px] font-medium">
                                     <span>thomas.abc.inc@gmail.com</span>
                                     <EnvelopeIcon className="w-4 h-4" />
                                 </div>
                             </div>
                         </div>
                         
                         {/* Navigation Menu (Gray Block) */}
                         <div className="bg-[#F9F9F9] rounded-[1.5rem] py-4 px-2">
                             <nav className="space-y-1">
                                 {menuItems.map((item) => (
                                     <Link 
                                         key={item.id}
                                         href={item.path}
                                         className={`w-full flex items-center justify-between py-3 px-6 rounded-xl transition-all duration-200 group hover:bg-gray-100 ${
                                             isActive(item.path)
                                             ? 'text-[#07334B] font-bold'
                                             : 'text-gray-500 font-medium'
                                         }`}
                                     >
                                         <div className="flex items-center gap-4">
                                            <item.icon className="w-5 h-5 text-[#8B8A6C]" />
                                            <span className="text-base">{item.label}</span>
                                         </div>
                                         <ChevronLeftIcon className="w-4 h-4 text-gray-400" />
                                     </Link>
                                 ))}
                             </nav>
                         </div>
                         
                         {/* Logout Button */}
                         <div>
                            <button className="w-full bg-[#F9F9F9] rounded-[1.5rem] py-4 px-8 flex items-center justify-between group hover:bg-red-50 transition-colors duration-200 mb-4">
                                <div className="flex items-center gap-4 text-[#07334B] group-hover:text-red-500 transition-colors">
                                    <ArrowRightOnRectangleIcon className="w-5 h-5 text-red-500 transform rotate-180" />
                                    <span className="text-base font-bold text-[#07334B]">تسجيل خروج</span>
                                </div>
                                <ChevronLeftIcon className="w-4 h-4 text-gray-400" />
                            </button>

                            <button className="text-center text-red-500 text-sm font-bold hover:underline mb-4 border-b border-red-500 block w-fit mx-auto pb-0.5 mt-4">
                                حذف الحساب الشخصي
                            </button>
                         </div>
                     </div>

                     {/* LEFT CONTENT AREA */}
                     <div className="w-full lg:flex-1 bg-white pl-0 lg:pl-12 pt-4">
                         <div className="h-full border-r border-gray-100 pr-0 lg:pr-12">
                            {children}
                         </div>
                     </div>
                 </div>
             </div>
             
             {/* Decorative Background Elements */}
             <div className="fixed top-0 right-0 w-[400px] h-[300px] bg-[#8B8A6C] rounded-bl-full -translate-y-20 translate-x-32 -z-10 opacity-20"></div>
             <div className="fixed top-20 right-20 w-[600px] h-[600px] border border-dashed border-gray-300 rounded-full -z-10 opacity-40 pointer-events-none"></div>
        </div>
    );
}
