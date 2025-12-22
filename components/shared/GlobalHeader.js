import { useState } from 'react';
import Link from 'next/link';
import NotificationModal from '@/components/features/NotificationModal';
import FavoritesModal from '@/components/features/FavoritesModal';

// Custom Icon Components
function MagnifyingGlassIcon(props) {
    return <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>;
}

function BellIcon(props) {
    return <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>;
}

function HeartIcon(props) {
    return <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>;
}

function UserIcon(props) {
    return <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>;
}

/**
 * GlobalHeader - Shared header component with navigation, search, and user actions
 */
export default function GlobalHeader({ imagePreview }) {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

    // Mock favorites data
    const favorites = [
        {
            name: "نظارة شمسية",
            currentPrice: "$124.5",
            purchasePrice: "$164.1",
            image: "/products/camera.jpg", // Using existing placeholder
            views: "12.1622",
        },
        {
            name: "نظارة شمسية",
            currentPrice: "$124.5",
            purchasePrice: "$164.1",
            image: "/products/camera.jpg",
            views: "12.1622",
        },
        {
            name: "نظارة شمسية",
            currentPrice: "$124.5",
            purchasePrice: "$164.1",
            image: "/products/camera.jpg",
            views: "12.1622",
        },
        {
            name: "نظارة شمسية",
            currentPrice: "$124.5",
            purchasePrice: "$164.1",
            image: "/products/camera.jpg",
            views: "12.1622",
        },
    ];

    // Mock notifications data
    const notifications = [
        {
            type: 'success',
            title: 'طلبك قيد المعالجة',
            message: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المكان لقد تم توليد هذا النص من مولد النص العربى.',
            time: '9 days ago',
            read: false,
        },
        {
            type: 'success',
            title: 'تم قبول طلبك بنجاح',
            message: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المكان لقد تم توليد هذا النص من مولد النص العربى.',
            time: '13 days ago',
            read: false,
        },
        {
            type: 'gift',
            title: 'مجموعة جديدة - اكتشفها الآن!',
            message: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المكان لقد تم توليد هذا النص من مولد النص العربى.',
            time: '4 days ago',
            read: true,
        },
    ];

    const unreadCount = notifications.filter(n => !n.read).length;

    return (
        <>
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 mb-12">
                {/* Navigation Links (Right Side in RTL - First Child) */}
                <nav className="flex items-center gap-8 self-end md:self-center">
                    <Link href="/" className="text-[#55493B] font-bold text-lg hover:text-[#07334B] transition-colors">
                        الرئيسية
                    </Link>
                    <Link href="/categories" className="text-[#55493B] font-bold text-lg hover:text-[#07334B] transition-colors">
                        الفئات
                    </Link>
                </nav>

                {/* Search and User Actions (Left Side in RTL - Second Child) */}
                <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
                    {/* Search */}
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="ابحث هنا على ما تريد..." 
                            className="bg-[#F5F5F5] rounded-full py-2.5 px-4 pr-10 pl-4 w-full md:w-64 text-sm text-right focus:outline-none focus:ring-1 focus:ring-[#8B8A6C] transition-all placeholder:text-gray-400"
                        />
                        <MagnifyingGlassIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Favorites Button */}
                        <button 
                            onClick={() => setIsFavoritesOpen(true)}
                            className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors"
                        >
                            <HeartIcon className="w-5 h-5" />
                        </button>
                        
                        {/* Notification Button */}
                        <button 
                            onClick={() => setIsNotificationOpen(true)}
                            className="relative w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center text-gray-400 hover:text-[#07334B] transition-colors"
                        >
                            <BellIcon className="w-5 h-5" />
                            {unreadCount > 0 && (
                                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                            )}
                        </button>
                        
                        <Link href="/profile" className="w-10 h-10 rounded-full overflow-hidden border border-gray-100 flex-shrink-0">
                            {imagePreview ? (
                                <img src={imagePreview} alt="User" className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                    <UserIcon className="w-6 h-6 text-gray-400" />
                                </div>
                            )}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Modals */}
            <NotificationModal
                isOpen={isNotificationOpen}
                onClose={() => setIsNotificationOpen(false)}
                notifications={notifications}
                unreadCount={unreadCount}
            />

            <FavoritesModal
                isOpen={isFavoritesOpen}
                onClose={() => setIsFavoritesOpen(false)}
                favorites={favorites}
            />
        </>
    );
}
