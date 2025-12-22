'use client';

import { X } from 'lucide-react';

// Custom icon components for notifications
function CheckCircleIcon(props) {
  return <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
}

function GiftIcon(props) {
  return <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>;
}

function StarIcon(props) {
  return <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>;
}

function PercentIcon(props) {
  return <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9 9a3 3 0 100-6 3 3 0 000 6zm0 0v6m0 0a3 3 0 100 6 3 3 0 000-6zm9-12a3 3 0 100 6 3 3 0 000-6zm-9 6l9-6" /></svg>;
}

const notificationIcons = {
  success: { icon: CheckCircleIcon, bgColor: 'bg-green-100', iconColor: 'text-green-600' },
  gift: { icon: GiftIcon, bgColor: 'bg-orange-100', iconColor: 'text-orange-600' },
  star: { icon: StarIcon, bgColor: 'bg-yellow-100', iconColor: 'text-yellow-600' },
  discount: { icon: PercentIcon, bgColor: 'bg-red-100', iconColor: 'text-red-600' },
};

/**
 * NotificationModal - Displays notifications in a modal overlay
 */
export default function NotificationModal({ isOpen, onClose, notifications = [], unreadCount = 0 }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop - Simple overlay without blur */}
      <div 
        className="fixed inset-0 bg-black/40 z-[9998] transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal - Positioned towards the right side */}
      <div className="fixed top-12 right-12 md:right-32 z-[9999] w-[90%] max-w-[480px] animate-slideDown overflow-visible">
        <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative overflow-hidden">
          
          {/* Custom Close Button (Red Circle with X) */}
          <button
            onClick={onClose}
            className="absolute top-6 right-8 w-7 h-7 rounded-full bg-white shadow-sm border-2 border-red-500 flex items-center justify-center group hover:bg-red-50 transition-all z-[10001]"
          >
            <X className="w-4 h-4 text-red-500 stroke-[3.5px]" />
          </button>

          {/* Header */}
          <div className="px-8 pt-10 pb-6 text-center">
            <h2 className="text-[17px] font-bold text-[#555555]">
              الإشعارات <span className="text-[#999999] font-normal text-[15px]">({unreadCount} إشعار)</span>
            </h2>
          </div>

          {/* Notifications List - Force dir="ltr" wrapper to get scrollbar on right */}
          <div className="max-h-[70vh] overflow-y-auto px-4 pb-8 custom-scrollbar dir-ltr">
            <div className="dir-rtl w-full px-2">
              {notifications.length === 0 ? (
                <div className="py-16 px-8 text-center flex flex-col items-center">
                  <div className="relative w-40 h-40 mb-6">
                    {/* Simple Bell Illustration SVG matching the mockup style */}
                    <svg viewBox="0 0 200 200" className="w-full h-full text-gray-200">
                      <circle cx="100" cy="100" r="80" fill="#f8f8f8" />
                      <path d="M100 40c-25 0-45 20-45 45v30l-10 15h110l-10-15V85c0-25-20-45-45-45z" fill="#ccc" />
                      <path d="M85 140h30a15 15 0 01-30 0z" fill="#999" />
                      {/* Decorative stars/dots around */}
                      <circle cx="40" cy="80" r="3" fill="#8B8A6C" opacity="0.4" />
                      <circle cx="160" cy="110" r="4" fill="#8B8A6C" opacity="0.4" />
                      <path d="M140 50l4 4m0-4l-4 4" stroke="#8B8A6C" strokeWidth="2" opacity="0.4" />
                    </svg>
                  </div>
                  <h3 className="text-[19px] font-bold text-[#666666] mb-2">لا يوجد إشعارات بعد</h3>
                  <p className="text-[14px] text-[#999999] leading-relaxed">
                    ابدأ بتصفح الفئات ومشاهدة المنتجات للحصول على نقاط
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {notifications.map((notification, index) => {
                    const iconConfig = notificationIcons[notification.type] || notificationIcons.success;
                    const IconComponent = iconConfig.icon;

                    return (
                      <div
                        key={index}
                        className="px-2 py-2 transition-all duration-200 cursor-pointer group"
                      >
                        <div className="flex gap-4 items-start relative pt-6">
                          {/* Time - Top Left */}
                          <div className="absolute top-0 left-0 text-[11px] font-medium text-[#BBBBBB]">
                            {notification.time}
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <h3 className="text-[14px] font-bold text-[#333333] mb-1 leading-tight">
                              {notification.title}
                            </h3>
                            <p className="text-[12px] text-[#777777] leading-[1.6]">
                              {notification.message}
                            </p>
                          </div>

                          {/* Icon */}
                          <div className={`w-10 h-10 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110`}>
                            <IconComponent className={`w-8 h-8 ${iconConfig.iconColor}`} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .dir-ltr { direction: ltr; }
        .dir-rtl { direction: rtl; }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Custom Scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #8B8A6C;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #7A795C;
        }
      `}</style>
    </>
  );
}



