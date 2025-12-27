"use client";
import { useState, useEffect } from 'react';
import { UserIcon, PhoneIcon, EnvelopeIcon, KeyIcon, PencilIcon, ArrowLeftIcon } from './components/Icons';
import { useAuth } from '@/hooks/useAuth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UserService } from '@/services/user.service';
import { toast } from 'sonner';

export default function ProfilePage() {
    const { user, verifyOtp, isVerifying, resendOtp, isResending } = useAuth();
    const queryClient = useQueryClient();
    
    // State for Verification View
    const [showVerify, setShowVerify] = useState(false);
    const [otp, setOtp] = useState(['', '', '', '', '']);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        if (user) {
            setFormData({
                firstName: user.firstName || user.name?.split(' ')[0] || '',
                lastName: user.lastName || user.name?.split(' ')[1] || '',
                email: user.email || '',
                phone: user.phone || ''
            });
        }
    }, [user]);

    const updateProfileMutation = useMutation({
        mutationFn: UserService.updateProfile,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user'] });
            toast.success('تم تحديث الملف الشخصي بنجاح');
            setShowVerify(true); // Assuming API requires verification after update
        }
    });

    // Handle OTP Input
    const handleOtpChange = (element, index) => {
        if (isNaN(element.value)) return false;

        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        // Auto-focus next input
        if (element.value && element.nextSibling) {
            element.nextSibling.focus();
        }

        // Auto-submit when filled
        if (newOtp.every(digit => digit !== '') && index === 4) {
            verifyOtp({ code: newOtp.join('') });
        }
    };


    // Handle Backspace
    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && e.target.previousSibling) {
            e.target.previousSibling.focus();
        }
    };

    if (showVerify) {
        return (
            <div className="animate-in slide-in-from-left-4 duration-500 w-full min-h-[600px] flex flex-col  px-4">
                 {/* Back Button */}
                 <div className="w-full flex justify-start ">
                     <button 
                        onClick={() => setShowVerify(false)}
                        className="flex items-center gap-2 text-[#55493B] font-bold text-base hover:text-[#07334B] transition-colors group"
                     >
                         <span>الرجوع للخلف</span>
                         <ArrowLeftIcon className="w-5 h-5 transform rotate-180 group-hover:-translate-x-1 transition-transform" />
                     </button>
                 </div>

                 <div className="w-full justify-center flex flex-col items-center text-center">
                     {/* Icon - Clean & Simple */}
                     <div className="mb-8 relative flex items-center justify-center">
                        <img src="/icons/Verify-opt.png" alt="Lock" />
                     </div>

                    <div className="text-right w-100  self-start" >
                        <h2 className=" text-right text-3xl font-extrabold text-secondary mb-3 tracking-wide">التحقق من الكود</h2>
                        <p className="text-[#888] font-medium mb-12 text-sm leading-relaxed  mx-auto text-right">قم بإدخال الكود لإكمال العملية والبدء باستخدام التطبيق.</p>
                    </div>
                     {/* OTP Inputs */}
                     <div className="flex flex-row-reverse gap-3 mb-12 justify-center dir-ltr">
                         {otp.map((data, index) => (
                             <input
                                 key={index}
                                 type="text"
                                 name="otp"
                                 maxLength="1"
                                 value={data}
                                 autoFocus={index === 0}
                                 onChange={e => handleOtpChange(e.target, index)}
                                 onKeyDown={e => handleKeyDown(e, index)}
                                 onFocus={e => e.target.select()}
                                 className={`w-[70px] h-[70px]  md:w-[90px] md:h-[90px] lg:w-[85px] lg:h-[85px] border-[1.5px] rounded-2xl text-center text-3xl font-bold outline-none transition-all duration-200 shadow-sm ${
                                     data 
                                     ? 'border-[#07334B] text-[#07334B] bg-transparent ring-2 ' 
                                     : 'border-gray-200 text-gray-400 focus:border-[#07334B] focus:text-[#07334B] bg-[transparent] focus:bg-white'
                                 }`}
                                 placeholder=""
                             />
                         ))}
                     </div>

                     {/* Resend Link */}
                     <div className="flex items-center justify-center gap-2 text-[16px] mb-4 text-gray-400 font-medium">
                         <span>لم استلم أي كود بعد الأن</span>
                         <button 
                            type="button"
                            onClick={() => resendOtp()}
                            disabled={isResending}
                            className="font-extrabold text-[#07334B] border-b-2 border-[#07334B] pb-0.5 hover:text-[#094260] transition-colors disabled:opacity-50"
                         >
                             {isResending ? 'جاري الإرسال...' : 'أعد الإرسال'}
                         </button>
                     </div>

                     {/* Submit Button */}
                     <button 
                        onClick={() => verifyOtp({ code: otp.join('') })}
                        disabled={isVerifying}
                        className="w-full bg-[#07334B] text-white font-bold py-4 rounded-xl hover:bg-[#094260] transition-colors shadow-lg text-lg disabled:opacity-50"
                     >
                         {isVerifying ? 'جاري التحقق...' : 'التحقق من الكود'}
                     </button>
                 </div>
            </div>
        );
    }

    return (
        <div className="animate-fadeIn w-full">
            <h2 className="text-xl md:text-2xl font-bold text-[#07334B] mb-2 text-right">
                قم بإنشاء التعديلات على ملفك الشخصي وحفظ <br className="hidden md:block"/> التعديلات
            </h2>
            
            <div className="flex justify-end mb-10">
                 {/* Placeholder for potential secondary action or removed duplicate */}
            </div>

            <form className="space-y-6 max-w-2xl mx-auto md:ml-auto md:mr-0 text-right dir-rtl" onSubmit={(e) => { 
                e.preventDefault(); 
                updateProfileMutation.mutate(formData);
            }}>
                {/* First Name */}
                <div className="space-y-2">
                    <div className="relative group">
                        <input 
                            type="text" 
                            value={formData.firstName}
                            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                            className="w-full bg-white border border-gray-100 rounded-xl py-4 px-4 pr-12 text-[#07334B] font-bold text-right focus:outline-none focus:border-[#07334B] transition-all shadow-sm"
                            required
                        />
                         <div className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400">
                            <UserIcon className="w-5 h-5" />
                        </div>
                        <label className="absolute -top-7 right-1 text-[#07334B] font-bold text-sm">الاسم الأول</label>
                    </div>
                </div>

                {/* Last Name */}
                <div className="space-y-2 mt-8">
                    <div className="relative group">
                        <input 
                            type="text" 
                            value={formData.lastName}
                            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                            className="w-full bg-white border border-gray-100 rounded-xl py-4 px-4 pr-12 text-[#07334B] font-bold text-right focus:outline-none focus:border-[#07334B] transition-all shadow-sm"
                            required
                        />
                         <div className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400">
                            <UserIcon className="w-5 h-5" />
                        </div>
                         <label className="absolute -top-7 right-1 text-[#07334B] font-bold text-sm">الاسم الأخير</label>
                    </div>
                </div>

                {/* Email */}
                <div className="space-y-2 mt-8">
                    <div className="relative group">
                        <input 
                            type="email" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full bg-white border border-gray-100 rounded-xl py-4 px-4 pr-12 text-[#555] font-medium text-right focus:outline-none focus:border-[#07334B] transition-all shadow-sm"
                            required
                        />
                        <div className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400">
                            <EnvelopeIcon className="w-5 h-5" />
                        </div>
                         <label className="absolute -top-7 right-1 text-[#07334B] font-bold text-sm">البريد الألكتروني</label>
                    </div>
                </div>

                {/* Phone Number */}
                <div className="space-y-2 mt-8">
                    <div className="relative group">
                        <input 
                            type="tel" 
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full bg-white border border-gray-100 rounded-xl py-4 px-4 pr-12 text-[#555] font-bold text-right focus:outline-none focus:border-[#07334B] transition-all shadow-sm"
                            required
                        />
                         <div className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400">
                            <PhoneIcon className="w-5 h-5" />
                        </div>
                         <label className="absolute -top-7 right-1 text-[#07334B] font-bold text-sm">رقم الهاتف</label>
                    </div>
                </div>

                 {/* Save Button */}
                <div className="pt-8">
                     <button 
                        type="submit" 
                        disabled={updateProfileMutation.isPending}
                        className="w-full bg-[#07334B] text-white font-bold py-4 rounded-xl hover:bg-[#094260] transition-colors shadow-lg text-lg disabled:opacity-50"
                     >
                         {updateProfileMutation.isPending ? 'جاري الحفظ...' : 'حفظ التعديلات'}
                     </button>
                </div>
            </form>
        </div>
    );
}
