'use client';
import { useState } from 'react';
import { 
    CheckCircleIcon, 
    XMarkIcon, 
    CubeIcon, 
    StackIcon, 
    DocumentTextIcon, 
    AdjustmentsHorizontalIcon,
    ArrowLeftIcon,
    MagnifyingGlassIcon 
} from '../components/Icons';

export default function OrdersPage() {
    // State
    const [activeOrderTab, setActiveOrderTab] = useState('rejected');
    const [selectedOrder, setSelectedOrder] = useState(null);

    // Mock Data
    const orders = [
        { 
            id: '123', 
            type: 'تحديث سعر', 
            date: '12 / 12 / 2025', 
            points: 42, 
            status: 'rejected', 
            product: 'اسم المنتج',
            category: 'فئة الالكترونيات',
            rejectionReason: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة. لقد ققد تم توليد هذا النص منطقيا',
            prices: [
                { store: 'ماجيلا', location: 'اللاذقية سوق التجار مقابل مقهى الملكي', price: '$123.5', icon: 'store' },
                { store: 'اللاذقية سوق التجار مقابل مقهى الملكي', location: 'اللاذقية سوق التجار مقابل مقهى الملكي', price: '$123.5', icon: 'pin' },
                { store: 'خزانتي', location: null, price: '$123.5', icon: 'cart' },
                { store: 'اللاذقية سوق التجار مقابل مقهى الملكي', location: null, price: '$123.5', icon: 'pin' }
            ]
        },
        { 
            id: '126', 
            type: 'تحديث سعر', 
            date: '12 / 12 / 2025', 
            points: 12, 
            status: 'completed', 
            product: 'اسم المنتج',
            category: 'فئة الالكترونيات',
            prices: [
                 { store: 'ماجيلا', location: 'اللاذقية سوق التجار مقابل مقهى الملكي', price: '$123.5', icon: 'store' },
            ]
        },
        { 
            id: '127', 
            type: 'تحديث سعر', 
            date: '12 / 12 / 2025', 
            points: 12, 
            status: 'pending', 
            product: 'اسم المنتج',
            category: 'فئة الالكترونيات',
             prices: [
                 { store: 'ماجيلا', location: 'اللاذقية سوق التجار مقابل مقهى الملكي', price: '$123.5', icon: 'store' },
            ]
        },
        { id: '124', type: 'تحديث سعر', date: '12 / 12 / 2025', points: 12, status: 'rejected', product: 'اسم المنتج', category: 'فئة الالكترونيات', rejectionReason: 'سبب الرفض هنا...' },
        { id: '125', type: 'تحديث سعر', date: '12 / 12 / 2025', points: 12, status: 'rejected', product: 'اسم المنتج', category: 'فئة الالكترونيات', rejectionReason: 'سبب الرفض هنا...' },
    ];

    const filteredOrders = orders.filter(order => order.status === activeOrderTab);

    return (
        <div className="animate-fadeIn w-full">
            {/* <h2 className="text-2xl font-bold text-[#07334B] mb-8 relative inline-block">
                سجل الطلبات
                <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-[#8B8A6C] rounded-full"></span>
            </h2> */}

            {!selectedOrder ? (
                /* ORDERS LIST VIEW */
                <div className="animate-fadeIn w-full">
                     {/* Order Tabs */}
                     <div className="flex items-center justify-between border-b border-gray-100 mb-8 w-full">
                         <div className="flex w-full">
                             <button 
                                 onClick={() => setActiveOrderTab('rejected')}
                                 className={`pb-4 text-base font-bold transition-all relative flex-1 flex items-center justify-center gap-2 ${activeOrderTab === 'rejected' ? 'text-[#07334B]' : 'text-gray-400 hover:text-gray-600'}`}
                             >
                                 مرفوضة
                                 <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-[#8B8A6C] font-bold">( 14 )</span>
                                 {activeOrderTab === 'rejected' && <span className="absolute bottom-0 left-0 w-full h-1 bg-[#8B8A6C] rounded-t-full"></span>}
                             </button>
                             <button 
                                 onClick={() => setActiveOrderTab('pending')}
                                 className={`pb-4 text-base font-bold transition-all relative flex-1 flex items-center justify-center gap-2 ${activeOrderTab === 'pending' ? 'text-[#07334B]' : 'text-gray-400 hover:text-gray-600'}`}
                             >
                                 معلقة
                                 <span className="text-xs text-gray-400"><CubeIcon className="w-4 h-4" /></span>
                                 {activeOrderTab === 'pending' && <span className="absolute bottom-0 left-0 w-full h-1 bg-[#8B8A6C] rounded-t-full"></span>}
                             </button>
                             <button 
                                 onClick={() => setActiveOrderTab('completed')}
                                 className={`pb-4 text-base font-bold transition-all relative flex-1 flex items-center justify-center gap-2 ${activeOrderTab === 'completed' ? 'text-[#07334B]' : 'text-gray-400 hover:text-gray-600'}`}
                             >
                                 مكتملة
                                 <span className="text-xs text-gray-400"><CheckCircleIcon className="w-4 h-4" /></span>
                                 {activeOrderTab === 'completed' && <span className="absolute bottom-0 left-0 w-full h-1 bg-[#8B8A6C] rounded-t-full"></span>}
                             </button>
                         </div>
                     </div>

                     {/* Search and Filter */}
                     <div className="flex items-center bg-white border border-gray-200 rounded-2xl mb-8 p-1 shadow-sm">
                         <div className="flex-1 relative">
                             <input 
                                 type="text" 
                                 placeholder="عم تبحث ؟" 
                                 className="w-full bg-transparent border-none py-3 pr-12 pl-4 focus:ring-0 text-sm font-medium text-right text-gray-700 placeholder:text-gray-400"
                             />
                             <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                                 <MagnifyingGlassIcon className="w-5 h-5" />
                             </div>
                         </div>
                         <div className="w-px h-8 bg-gray-200 mx-1"></div>
                         <button className="p-3 text-gray-500 hover:text-[#07334B] transition-colors">
                             <AdjustmentsHorizontalIcon className="w-6 h-6" />
                         </button>
                     </div>

                     {/* Orders List */}
                     <div className="space-y-4">
                         {filteredOrders.length > 0 ? filteredOrders.map((order) => (
                             <div key={order.id} className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-all cursor-default group">
                                 {/* Top Row: Header */}
                                 <div className="flex justify-between items-start mb-5">
                                     {/* Right: Info & Logo */}
                                     <div className="flex gap-4 items-center">
                                         {/* Logo */}
                                         <div className="w-14 h-14 bg-[#F8F9FA] rounded-xl flex flex-col items-center justify-center text-[#07334B] font-bold border border-gray-100 shadow-sm flex-shrink-0">
                                             <span className="text-[10px] leading-tight opacity-70">Shhal</span>
                                             <span className="text-xs">شحّال</span>
                                         </div>
                                         {/* Details */}
                                         <div className="space-y-1.5">
                                             <div className="flex items-center gap-2 text-[#55493B]">
                                                 <span className="font-bold text-sm">رقم الطلب : {order.id}</span>
                                                 <DocumentTextIcon className="w-4 h-4 text-[#8B8A6C]" />
                                             </div>
                                             <div className="flex items-center gap-2 text-gray-500">
                                                 <span className="text-xs">نوع الطلب : <span className="text-[#8B8A6C] font-medium">{order.type}</span></span>
                                                 <CubeIcon className="w-4 h-4 text-[#8B8A6C]" />
                                             </div>
                                         </div>
                                     </div>

                                     {/* Left: Date & Link */}
                                     <div className="flex flex-col items-end gap-3 h-full justify-between">
                                         <span className="text-gray-400 text-xs font-medium dir-ltr">{order.date}</span>
                                         <button 
                                            onClick={() => setSelectedOrder(order)}
                                            className="text-[#07334B] font-bold text-xs flex items-center gap-1 hover:underline border-b border-transparent hover:border-[#07334B] pb-0.5 transition-all"
                                         >
                                             رؤية التفاصيل
                                             <ArrowLeftIcon className="w-3 h-3" />
                                         </button>
                                     </div>
                                 </div>

                                 {/* Divider */}
                                 <div className="h-px w-full bg-dashed border-t border-dashed border-gray-100 mb-4"></div>

                                 {/* Bottom Row: Product & Status */}
                                 <div className="flex justify-between items-center">
                                      {/* Right: Product */}
                                      <div className="flex items-center gap-3">
                                          <div className="w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 overflow-hidden relative">
                                              {/* Placeholder Image */}
                                              <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                                          </div>
                                          <span className="text-[#07334B] font-bold text-sm">{order.product}</span>
                                      </div>

                                      {/* Left: Points & Icon */}
                                      <div className="flex items-center gap-3">
                                          {order.status === 'rejected' && (
                                              <>
                                                  <span className="text-gray-500 text-xs font-medium">مجموع النقاط : {order.points} نقطة</span>
                                                  <div className="w-6 h-6 rounded-full border border-red-500 flex items-center justify-center text-red-500 bg-red-50">
                                                      <XMarkIcon className="w-3.5 h-3.5" />
                                                  </div>
                                              </>
                                          )}
                                          {order.status === 'completed' && (
                                              <>
                                                  <span className="text-gray-500 text-xs font-medium">مجموع النقاط : {order.points} نقطة</span>
                                                  <div className="w-6 h-6 rounded-full border border-green-500 flex items-center justify-center text-green-500 bg-green-50">
                                                      <CheckCircleIcon className="w-3.5 h-3.5" />
                                                  </div>
                                              </>
                                          )}
                                          {order.status === 'pending' && (
                                              <>
                                                  <span className="text-gray-500 text-xs font-medium">مجموع النقاط : {order.points} نقطة</span>
                                                  <div className="w-6 h-6 rounded-full border-2 border-gray-200 border-t-[#07334B] animate-spin"></div>
                                              </>
                                          )}
                                      </div>
                                 </div>
                             </div>
                         )) : (
                             <div className="flex flex-col items-center justify-center py-16 text-center">
                                 <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-gray-300">
                                     <DocumentTextIcon className="w-8 h-8" />
                                 </div>
                                 <h3 className="text-gray-900 font-bold mb-1">لا توجد طلبات</h3>
                                 <p className="text-gray-400 text-sm">لا توجد طلبات في هذه القائمة حالياً</p>
                             </div>
                         )}
                     </div>
                </div>
            ) : (
                /* ORDER DETAILS VIEW */
                /* ORDER DETAILS VIEW */
                <div className="animate-in slide-in-from-left-4 duration-300 w-full mb-10">
                     {/* Back Button */}
                     <div className="flex items-center justify-start mb-8">
                         <button onClick={() => setSelectedOrder(null)} className="flex items-center gap-2 text-[#07334B] font-bold hover:text-[#8B8A6C] transition-colors">
                             <span>الرجوع للخلف</span>
                             <ArrowLeftIcon className="w-5 h-5 rotate-180" />
                         </button>
                     </div>

                     {/* Header Row: Date - Status - ID */}
                     <div className="flex items-center justify-between mb-8 px-1">
                         <div className="text-gray-500 font-medium dir-ltr w-1/3 text-left">{selectedOrder.date}</div>
                         
                         <div className="flex justify-center w-1/3">
                             {selectedOrder.status === 'completed' && <CheckCircleIcon className="w-10 h-10 text-green-500" />}
                             {selectedOrder.status === 'rejected' && (
                                 <div className="w-10 h-10 rounded-full border border-red-500 flex items-center justify-center text-red-500 bg-white">
                                     <XMarkIcon className="w-6 h-6" />
                                 </div>
                             )}
                             {selectedOrder.status === 'pending' && (
                                 <div className="w-10 h-10 rounded-full border-2 border-gray-200 border-t-[#07334B] animate-spin"></div>
                             )}
                         </div>

                         <div className="text-[#07334B] font-bold text-lg text-right w-1/3">رقم الطلب : {selectedOrder.id}</div>
                     </div>

                     {/* Decorative Info Card */}
                     <div className="relative bg-[#F9F9F8] rounded-[1.5rem] p-8 mb-8 overflow-hidden min-h-[140px] flex flex-col justify-center items-end gap-5">
                         {/* Decorations */}
                         <div className="absolute top-0 left-0 w-40 h-20 bg-[#8B8A6C] rounded-br-[100px] opacity-90 z-0"></div>
                         <div className="absolute top-[3rem] -left-4 w-48 h-32 border-t-2 border-dashed border-gray-400/30 rounded-full rotate-12 pointer-events-none z-0"></div>

                         {/* Content */}
                         <div className="relative z-10 flex items-center gap-3 w-full justify-start">
                             <CubeIcon className="w-5 h-5 text-[#8B8A6C]" />
                             <div className="text-right">
                                 <span className="text-gray-500 font-medium text-base">نوع الطلب : <span className="font-bold text-[#55493B]">تحديث سعر</span></span>
                             </div>
                         </div>
                         <div className="relative z-10 flex items-center gap-3 w-full justify-start">
                             <StackIcon className="w-5 h-5 text-[#8B8A6C]" />
                             <div className="text-right">
                                 <span className="text-gray-500 font-medium text-base">النقاط المستحقة : <span className="font-bold text-[#55493B]">{selectedOrder.points} نقطة</span></span>
                             </div>
                         </div>
                     </div>

                     {/* Product Section */}
                     <div className="bg-[#FBFBFB] rounded-[2rem] p-6 mb-8">
                           {/* Product Header */}
                           <div className="flex items-center justify-start gap-4 mb-8">
                               <div className="w-14 h-14 bg-gray-200 rounded-full overflow-hidden shadow-sm relative border border-gray-100">
                                   <div className="absolute inset-0 bg-gray-300"></div>
                                   {/* Replicate 'sunglasses' style if possible or placeholder */}
                                   <div className="absolute bottom-0 right-0 w-8 h-8 bg-black/10 rounded-tl-lg"></div> 
                               </div>
                               <div className="text-right">
                                   <h3 className="text-[#07334B] font-bold text-lg mb-1">{selectedOrder.product}</h3>
                                   <p className="text-gray-400 text-sm">{selectedOrder.category}</p>
                               </div>
                           </div>

                           <div className="text-right mb-6">
                               <p className="text-gray-500 font-medium text-sm"> : تحديث سعر المنتج </p>
                           </div>

                           {/* Stores List */}
                           <div className="space-y-6">
                               {selectedOrder.prices && selectedOrder.prices.map((price, idx) => (
                                   <div key={idx} className="flex flex-row justify-between items-start gap-4">
                                       {/* Right: Info (First in HTML for RTL Right Side) */}
                                       <div className="flex flex-col items-start gap-1 flex-1">
                                            <div className="flex items-center gap-2 justify-start">
                                                <div className="w-4 h-4 text-[#55493B] flex-shrink-0">
                                                    {price.icon === 'store' && <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 007.5 9.75c1.13 0 2.145-.518 2.812-1.334.668.816 1.683 1.334 2.813 1.334s2.145-.518 2.812-1.334c.668.816 1.683 1.334 2.812 1.334a3.75 3.75 0 004.902-5.652l-1.3-1.299a1.875 1.875 0 00-1.325-.55H5.223z" /></svg>}
                                                    {price.icon === 'pin' && <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>}
                                                    {price.icon === 'cart' && <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" /><path fillRule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z" clipRule="evenodd" /></svg>}
                                                </div>
                                                <span className="text-[#07334B] font-bold text-sm text-right">{price.store.indexOf('مقابل') > -1 ? 'ماجيلا' : price.store}</span>
                                            </div>
                                            <div className="flex items-center gap-2 justify-start">
                                                <div className="w-3.5 h-3.5 text-[#8B8A6C] flex-shrink-0">
                                                    {/* Pin Icon */}
                                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>
                                                </div>
                                                <span className="text-gray-400 text-xs text-right leading-tight max-w-[200px]">{price.location || price.store}</span>
                                            </div>
                                       </div>

                                       {/* Left: Price (Second in HTML for RTL Left Side) */}
                                       <div className="text-[#07334B] font-bold text-base dir-ltr pt-1">{price.price}</div>
                                   </div>
                               ))}
                           </div>
                     </div>

                     {/* Footer Sections */}
                     {selectedOrder.status === 'rejected' && (
                         <div className="bg-[#FBFBFB] rounded-[2rem] p-6 mb-6 animate-in slide-in-from-bottom-2 border border-red-50">
                             <div className="text-right mb-2">
                                 <h4 className="text-red-500 font-bold text-sm">: سبب الرفض</h4>
                             </div>
                             <div className="text-right">
                                 <p className="text-gray-600 text-sm leading-relaxed font-medium">
                                     {selectedOrder.rejectionReason}
                                 </p>
                             </div>
                         </div>
                     )}

                     {selectedOrder.status === 'pending' && (
                         <div className="flex gap-4 mt-8 animate-in slide-in-from-bottom-2">
                             <button className="flex-1 bg-[#07334B] text-white font-bold py-3.5 rounded-xl hover:bg-[#094260] transition-colors shadow-lg">
                                 تعديل الطلب
                             </button>
                             <button className="flex-1 bg-white border border-red-500 text-red-500 font-bold py-3.5 rounded-xl hover:bg-red-50 transition-colors">
                                 إلغاء الطلب
                             </button>
                         </div>
                     )}
                </div>
            )}
        </div>
    );
}
