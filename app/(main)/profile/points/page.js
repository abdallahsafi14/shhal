'use client';
import { useState } from 'react';
import { 
    BanknotesIcon, 
    CurrencyDollarIcon, 
    CreditCardIcon,
    StackIcon,
    ChevronLeftIcon,
    UserIcon,
    CalendarIcon,
    CheckCircleIcon,
    DocumentTextIcon
} from '../components/Icons';

export default function PointsPage() {
    // State
    const [showExchange, setShowExchange] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState(null);
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [paymentDetails, setPaymentDetails] = useState('');
    const [points, setPoints] = useState('');

    const isPointsError = parseInt(points) > 1000;

    // Mock Data for Transactions
    const transactions = [
        { id: 123, type: 'binance', amount: '$321', points: 1700, date: '12 / 12 / 2024' },
        { id: 123, type: 'bitcoin', amount: '$321', points: 1700, date: '12 / 12 / 2024' },
        { id: 123, type: 'bitcoin', amount: '$321', points: 1700, date: '12 / 12 / 2024' },
        { id: 123, type: 'paypal', amount: '$321', points: 1700, date: '12 / 12 / 2024' },
        { id: 123, type: 'paypal', amount: '$321', points: 1700, date: '12 / 12 / 2024' },
        { id: 123, type: 'paypal', amount: '$321', points: 1700, date: '12 / 12 / 2024' },
    ];

    // Transaction Modal
    const TransactionModal = () => {
        if (!selectedTransaction) return null;
        
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setSelectedTransaction(null)}></div>
                <div className="relative bg-white rounded-[2rem] w-full max-w-md p-8 shadow-2xl animate-in zoom-in-95 duration-200">
                    {/* Close Button */}
                    <button 
                        onClick={() => setSelectedTransaction(null)}
                        className="absolute top-6 left-6 text-red-500 hover:text-red-700 transition-colors"
                    >
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>

                    {/* Header */}
                    <div className="text-right mb-6">
                        <h3 className="text-xl font-bold text-[#07334B] mb-2 flex items-center gap-2">
                             {/* Optional Header Icon if needed, otherwise just text */}
                            <span>تفاصيل العملية :</span>
                        </h3>
                        <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                            <CheckCircleIcon className="w-5 h-5" />
                            <span>تم اكتمال العملية بنجاح</span>
                        </div>
                    </div>

                    {/* Details List */}
                    <div className="bg-[#FBFBFB] rounded-[1.5rem] p-6 space-y-5">
                         {/* Name */}
                         <div className="flex items-center gap-3 text-[#55493B]">
                             <div className="text-[#8B8A6C]"><UserIcon className="w-5 h-5" /></div>
                             <span className="font-medium">محمد الأحمد العلي</span>
                         </div>
                         {/* ID */}
                         <div className="flex items-center gap-3 text-[#55493B]">
                             <div className="text-[#8B8A6C]"><DocumentTextIcon className="w-5 h-5" /></div>
                             <span className="font-medium dir-ltr">123 : رقم العملية</span>
                         </div>
                         {/* Date */}
                         <div className="flex items-center gap-3 text-[#55493B]">
                             <div className="text-[#8B8A6C]"><CalendarIcon className="w-5 h-5" /></div>
                             <span className="font-medium dir-ltr">2024 / 12 / 12 : تاريخ العملية</span>
                         </div>
                         {/* Points */}
                         <div className="flex items-center gap-3 text-[#55493B]">
                             <div className="text-[#8B8A6C]"><BanknotesIcon className="w-5 h-5" /></div>
                             <span className="font-medium">النقاط المصروفة : 1232 نقطة</span>
                         </div>
                         {/* Value */}
                         <div className="flex items-center gap-3 text-[#55493B]">
                             <div className="text-[#8B8A6C]"><StackIcon className="w-5 h-5" /></div>
                             <span className="font-medium dir-ltr">$ 120 : القيمة المالية</span>
                         </div>
                         {/* Method */}
                         <div className="flex items-center gap-3 text-[#55493B]">
                             <div className="text-[#8B8A6C] font-bold text-lg leading-none w-5 text-center">₿</div>
                             <span className="font-medium">طريقة الدفع : بايبال ( Paypal )</span>
                         </div>
                    </div>
                </div>
            </div>
        );
    };

    if (showExchange) {
        return (
            <div className="animate-in slide-in-from-left-4 duration-500 w-full mb-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-8 text-right">
                    <div className="order-2 md:order-1 flex-1">
                        <h2 className="text-xl font-bold text-[#07334B] mb-3">
                            قم بتحويل نقاطك لكسب المزيد من الأموال الحقيقية
                            .
                        </h2>
                        <p className="text-gray-500 text-sm font-medium leading-relaxed">
                             عدد النقاط المتوفرة لديك <span className="text-[#07334B] font-bold">1450</span> نقطة يمكنك صرف نقاطك واستبدالها بأموال حقيقية
                        </p>
                    </div>
                    {/* Small Ring */}
                    <div className="order-1 md:order-2 relative w-16 h-16 flex-shrink-0">
                         <svg className="w-full h-full transform -rotate-90">
                            <circle className="text-[#E0E0E0]" strokeWidth="6" stroke="currentColor" fill="transparent" r="28" cx="32" cy="32" />
                            <circle className="text-[#8B8A6C]" strokeWidth="6" strokeDasharray={175} strokeDashoffset={175 - (175 * 930) / 1000} strokeLinecap="round" stroke="currentColor" fill="transparent" r="28" cx="32" cy="32" />
                        </svg>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <span className="text-xs font-bold text-[#8B8A6C]">930</span>
                        </div>
                    </div>
                </div>

                {/* Points Input */}
                <div className="mb-8">
                    <label className="block text-[#07334B] font-bold text-sm mb-3 text-right">عدد النقاط للصرف</label>
                    <div className="relative">
                        <input 
                            type="text" 
                            value={points}
                            onChange={(e) => {
                                const val = e.target.value;
                                if (val === '' || /^\d*$/.test(val)) {
                                    setPoints(val);
                                }
                            }}
                            placeholder="أدخل عدد النقاط التي تريد صرفها ( 1000 نقطة كحد أقصى )"
                            className={`w-full bg-white border rounded-xl py-4 px-4 pr-4 pl-12 text-right focus:outline-none transition-all text-sm ${
                                isPointsError 
                                ? 'border-red-500 focus:border-red-500 text-red-500' 
                                : 'border-gray-200 focus:border-[#07334B]'
                            }`}
                        />
                        <div className={`absolute left-4 top-1/2 -translate-y-1/2 ${isPointsError ? 'text-red-500' : 'text-[#8B8A6C]'}`}>
                            <StackIcon className="w-5 h-5" />
                        </div>
                    </div>
                    {isPointsError && (
                        <p className="text-red-500 text-xs mt-2 font-medium text-right animate-in slide-in-from-top-1">
                            الحد الأقصى للصرف هو 1000 نقطة , تأكد من رصيد نقاطك من فضلك.
                        </p>
                    )}
                </div>

                {/* Methods Selection */}
                <label className="flex items-center gap-2 text-[#07334B] font-bold text-sm mb-4 justify-end">
                    <span>اختر طريقة صرف النقاط :</span>
                    <StackIcon className="w-5 h-5 text-[#8B8A6C]" />
                </label>

                <div className="space-y-3 mb-8">
                    {[
                        { id: 'btc', name: 'بيتكوين (BTC)', icon: '₿', color: 'text-black' },
                        { id: 'ltc', name: 'لايتكوين (LTC)', icon: 'Ł', color: 'text-gray-400' },
                        { id: 'bnb', name: 'بينانس (BNB)', icon: '❖', color: 'text-yellow-500' },
                        { id: 'xmr', name: 'مونيرو (XMR)', icon: 'Ⓜ', color: 'text-orange-500' },
                        { id: 'paypal', name: 'بايبال (PayPal)', icon: 'P', color: 'text-blue-600' },
                    ].map((method) => (
                        <div key={method.id} className="transition-all duration-300 ease-in-out">
                            <div 
                                onClick={() => {
                                    setSelectedMethod(method.id);
                                    setPaymentDetails(''); // Reset details when switching
                                }}
                                className={`cursor-pointer bg-white border rounded-xl p-4 flex items-center justify-between hover:border-[#07334B]/50 transition-all ${
                                    selectedMethod === method.id ? 'border-[#07334B] shadow-sm' : 'border-gray-100'
                                }`}
                            >
                                 {/* Radio Selection (Left) */}
                                 <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                     selectedMethod === method.id ? 'border-[#07334B]' : 'border-gray-300'
                                 }`}>
                                     {selectedMethod === method.id && <div className="w-3 h-3 bg-[#07334B] rounded-full"></div>}
                                 </div>

                                 {/* Name & Icon (Right) */}
                                 <div className="flex items-center gap-3">
                                     <span className="font-bold text-[#07334B] text-sm">{method.name}</span>
                                     <div className={`w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center font-bold text-lg ${method.color}`}>
                                         {method.icon}
                                     </div>
                                 </div>
                            </div>

                            {/* Accordion Dropdown for Input */}
                            <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${selectedMethod === method.id ? 'grid-rows-[1fr] mt-4 mb-2' : 'grid-rows-[0fr]'}`}>
                                <div className="overflow-hidden">
                                    <div className="px-1 pt-2">
                                        <div className="flex justify-between items-center mb-3">
                                             <span className="text-gray-400 text-xs"></span>
                                             <label className="text-[#07334B] font-bold text-sm text-right">
                                                {method.id === 'paypal' ? 'اسم المستخدم' : 
                                                 method.id === 'btc' ? 'عنوان محفظة البيتكوين' :
                                                 method.id === 'ltc' ? 'عنوان محفظة اللايتكوين' :
                                                 method.id === 'bnb' ? 'عنوان محفظة بينانس' :
                                                 'عنوان المحفظة'}
                                             </label>
                                        </div>
                                        <div className="relative group">
                                            <input 
                                                type="text" 
                                                value={paymentDetails}
                                                onChange={(e) => setPaymentDetails(e.target.value)}
                                                placeholder={
                                                    method.id === 'paypal' ? 'username@gmail.com' : 
                                                    method.id === 'btc' ? 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh' :
                                                    'Wallet Address'
                                                }
                                                className="w-full bg-white border border-gray-200 rounded-xl py-4 pr-14 pl-12 text-right focus:outline-none focus:border-[#07334B] transition-all text-sm text-gray-600 placeholder:text-gray-300 font-medium shadow-sm group-hover:border-gray-300"
                                                dir="ltr"
                                                style={{ textAlign: 'right' }} 
                                            />
                                            {/* Right Icon (Wallet) */}
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8B8A6C]">
                                                <CreditCardIcon className="w-6 h-6" />
                                            </div>
                                             {/* Left Icon (Copy) */}
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-[#07334B] transition-colors" title="Copy">
                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Confirm Button */}
                <button 
                    disabled={!selectedMethod || !paymentDetails}
                    className={`w-full font-bold py-3 rounded-xl text-lg transition-all ${
                        selectedMethod && paymentDetails 
                        ? 'bg-[#07334B] text-white hover:bg-[#094260] shadow-lg cursor-pointer transform hover:-translate-y-1' 
                        : 'bg-[#D1D1D1] text-[#707070] cursor-not-allowed'
                    }`}
                >
                    تأكيد العملية
                </button>
            </div>
        );
    }

    return (
        <div className="animate-fadeIn w-full">
            <TransactionModal />
            
            {/* Top Points Card - Minimized */}
            <div className="bg-[#F9F9F7] rounded-[2rem] p-6 mb-8 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-50">
                {/* Visual Decoration (Corner) moved to Left */}
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#8B8A6C] rounded-tr-full opacity-50 translate-y-12 -translate-x-12"></div>
                
                {/* Text Content (Right in RTL -> First in DOM) */}
                <div className="text-right flex-1 z-10 order-1">
                    <p className="text-[#55493B] font-medium text-base leading-relaxed mb-4">
                        عند إتمام الـ <span className="font-bold">1000</span> نقطة تستطيع تصريف
                        <br className="hidden md:block" /> هذه النقاط وتحويلها لأموال حقيقية
                    </p>
                    <button 
                        onClick={() => setShowExchange(true)}
                        className="bg-[#07334B] text-white font-bold py-2.5 px-8 rounded-xl hover:bg-[#094260] transition-colors shadow-lg text-sm"
                    >
                        صرف النقاط
                    </button>
                </div>

                {/* Ring (Left in RTL -> Second in DOM) - Minimized */}
                <div className="relative w-32 h-32 flex-shrink-0 order-2">
                    <svg className="w-full h-full transform -rotate-90">
                        <circle
                            className="text-[#E0E0E0] opacity-50"
                            strokeWidth="10"
                            stroke="currentColor"
                            fill="white"
                            r="55"
                            cx="64"
                            cy="64"
                        />
                        <circle
                            className="text-[#8B8A6C]"
                            strokeWidth="10"
                            strokeDasharray={345}
                            strokeDashoffset={345 - (345 * 930) / 1000} // 93% filled
                            strokeLinecap="round"
                            stroke="currentColor"
                            fill="transparent"
                            r="55"
                            cx="64"
                            cy="64"
                        />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <span className="text-2xl font-bold text-[#8B8A6C]">930</span>
                    </div>
                </div>
            </div>

            {/* Transactions Section */}
            <div className="mb-6">
                 {/* Header */}
                 <div className="flex items-center justify-between mb-8">
                     <div className="flex items-center gap-2">
                         <StackIcon className="w-6 h-6 text-[#8B8A6C]" />
                         <h3 className="text-l font-bold text-[#07334B]">آخر عمليات الصرف</h3>
                     </div>
                     <button className="flex items-center gap-2 text-gray-400 text-sm hover:text-[#07334B] transition-colors">
                         رؤية المزيد
                         <ChevronLeftIcon className="w-4 h-4" />
                     </button>
                 </div>

                 {/* List */}
                 <div className="space-y-4">
                     {transactions.map((tx, idx) => (
                         <div 
                            key={idx} 
                            onClick={() => setSelectedTransaction(tx)}
                            className="flex items-center justify-between py-6 border-b border-gray-100 last:border-none group hover:bg-gray-50 transition-colors px-4 rounded-xl cursor-pointer"
                         >
                             {/* Info (Right in RTL -> First in DOM) */}
                             <div className="flex items-center gap-4 text-right">
                                 {/* Icon Based on Type */}
                                 <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-sm ${
                                     tx.type === 'binance' ? 'bg-[#fff] border border-gray-100 text-[#FCD535]' : 
                                     tx.type === 'bitcoin' ? 'bg-[#fff] border border-gray-100 text-black' : 
                                     'bg-[#fff] border border-gray-100 text-[#0070BA]'
                                 }`}>
                                     {tx.type === 'binance' && <CurrencyDollarIcon className="w-6 h-6" />}
                                     {tx.type === 'bitcoin' && <span className="font-bold text-lg">₿</span>}
                                     {tx.type === 'paypal' && <span className="font-bold text-lg font-serif italic">P</span>}
                                 </div>

                                 <div>
                                     <div className="text-gray-500 text-sm mb-1">رقم العملية : {tx.id}</div>
                                     <div className="font-bold text-[#07334B]">
                                         {tx.points} نقطة <span className="text-gray-400 font-normal dir-ltr">({tx.amount})</span>
                                     </div>
                                 </div>
                             </div>

                             {/* Date (Left in RTL -> Second in DOM) */}
                             <div className="text-gray-500 font-medium dir-ltr text-sm translate-y-0.5">
                                 {tx.date}
                             </div>
                         </div>
                     ))}
                 </div>
            </div>
        </div>
    );
}
