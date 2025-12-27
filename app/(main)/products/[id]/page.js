'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
    ArrowLeft, 
    Star, 
    Eye, 
    Grid3x3, 
    Store, 
    Heart, 
    MapPin, 
    ChevronDown,
    Sparkles,
    Package,
    TrendingUp,
    TrendingDown,
    Activity,
    Maximize2,
    BarChart3,
    Files
} from 'lucide-react';
import ProductSection from '@/components/features/ProductSection';
import UpdateProductModal from '@/components/features/UpdateProductModal';
import { 
    LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    Tooltip, 
    ResponsiveContainer,
    ReferenceLine
} from 'recharts';

import { useQuery } from '@tanstack/react-query';
import { ProductService } from '@/services/products.service';

/**
 * ProductDetailsPage - Displays detailed information about a product
 */
export default function ProductDetailsPage({ params }) {
    const { id } = params;
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('price-analysis');
    const [selectedImage, setSelectedImage] = useState(0);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

    const { data: productData, isLoading } = useQuery({
        queryKey: ['product', id],
        queryFn: () => ProductService.getById(id),
    });

    const product = productData || {
        name: "ساعة ذكية بمواصفات خارقة",
        description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المكان، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
        rating: 4.7,
        views: "21,671",
        category: "فئة الالكترونيات",
        stores: ["Shein", "Zara", "Zara", "Zara", "Zara", "Nick", "Nick", "Nick", "Noon", "Noon"],
        variants: [
            { label: "اللون : أسود", active: true },
            { label: "المقاس : XS", active: false },
            { label: "العمر : 15 - 24 سنة", active: false },
        ],
        images: Array(5).fill("/products/camera.jpg"),
        comparisonStores: [
            { name: "ماجيلا", location: "اللاذقية سوق التجار مقابل مقهى الملكي", price: "$123.5" },
            { name: "Zara", location: "متجر إلكتروني", price: "$123.5" },
            { name: "Amazon", location: "متجر إلكتروني", price: "$123.5" },
        ],
        analysisStats: [
            // Row 1
            { label: 'أعلى سعر :', value: '$1200.72', provider: 'Amazon', color: 'bg-[#E1FCEF]', iconColor: 'text-[#14B8A6]', icon: TrendingUp },
            { label: 'أقل سعر :', value: '$1200.72', provider: 'Target', color: 'bg-[#FCE7F3]', iconColor: 'text-[#EC4899]', icon: TrendingDown },
            { label: 'الانحراف السعري :', value: '$1200.72', provider: 'Shein', color: 'bg-[#FFF7ED]', iconColor: 'text-[#F97316]', icon: Activity },
            // Row 2
            { label: 'المدى السعري :', value: '$1200.72', provider: 'Amazon', color: 'bg-[#FEFCE8]', iconColor: 'text-[#EAB308]', icon: Maximize2 },
            { label: 'المتوسط السعري :', value: '$1200.72', provider: 'Zara', color: 'bg-[#F5F5F5]', iconColor: 'text-[#737373]', icon: BarChart3 },
        ],
        chartData: [
            { name: 'Amazon', price: 150 },
            { name: 'Shein', price: 400 },
            { name: 'Target', price: 250 },
            { name: 'Zara', price: 100 },
            { name: 'Noon', price: 50 },
            { name: 'Noon', price: 300 },
            { name: 'Adidas', price: 180 },
            { name: 'Nick', price: 100 },
        ]
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#07334B]"></div>
            </div>
        );
    }


    const similarProducts = Array(8).fill({
        name: "كاميرا التصوير",
        category: "أزياء&موضة",
        minPrice: "$124.5",
        maxPrice: "$164.1",
        views: "12.1622",
        image: "/products/camera.jpg",
    });

    const reviews = {
        average: 4.5,
        total: 270,
        breakdown: [
            { stars: 5, percentage: 95 },
            { stars: 4, percentage: 70 },
            { stars: 3, percentage: 45 },
            { stars: 2, percentage: 25 },
            { stars: 1, percentage: 15 },
        ],
        items: Array(3).fill({
            user: "سارة أحمد",
            date: "26 Apr, 2021",
            rating: 5,
            comment: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
            images: Array(4).fill("/products/camera.jpg")
        })
    };

    const tabs = [
        { id: 'price-comparison', label: 'مقارنة الأسعار' },
        { id: 'price-analysis', label: 'تحليل الأسعار' },
        { id: 'reviews', label: 'التقييمات' },
    ];

    return (
        <div className="max-w-[1200px] mx-auto pb-20 px-4 md:px-0">
            {/* Back Button */}
            <div className="flex justify-start mb-8">
                <button onClick={() => router.back()} className="flex items-center gap-2 text-[#55493B] font-bold hover:text-[#07334B] transition-colors text-[15px]">
                    الرجوع للخلف <ArrowLeft className="w-5 h-5" />
                </button>
            </div>

            {/* Main Product Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <div className="order-1 flex flex-col gap-5">
                    {/* Thumbnails */}
                    <div className="flex justify-between gap-3 overflow-x-auto pb-2 scrollbar-hide">
                        {product.images.map((img, i) => (
                            <button key={i} onClick={() => setSelectedImage(i)} className={`w-28 h-20 rounded-2xl overflow-hidden flex-shrink-0 border-2 transition-all ${selectedImage === i ? 'border-[#8B8A6C]' : 'border-transparent opacity-70 hover:opacity-100'}`}>
                                <img src={img} alt="thumb" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                    {/* Main Image */}
                    <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-gray-50 border border-gray-100 shadow-xl group">
                        <img src={product.images[selectedImage]} alt="Main product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                </div>

                {/* Left col: Info */}
                <div className="order-2 text-right">
                    <h1 className="text-[16px] font-bold text-[#333333] mb-6 leading-tight">{product.name}</h1>
                    <div className="mb-8 space-y-3">
                        <h3 className="text-[#8B8A6C] font-bold text-[15px] flex items-center justify-start gap-2">
                             <Sparkles className="w-4 h-4" /> 
                             <span className='text-primary'>وصف المنتج :</span>
                        </h3>
                        <p className="text-[#777777] text-[14px] leading-relaxed max-w-xl ml-auto">{product.description}</p>
                    </div>

                    <div className="flex items-center justify-center gap-10 mb-8 py-4 border-b border-t border-gray-100">
                        <div className="flex items-center gap-2">
                            <Grid3x3 className="w-5 h-5 text-[#8B8A6C]" />
                            <span className="text-[15px] font-bold text-[#555555]">{product.category}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Eye className="w-5 h-5 text-[#8B8A6C]" />
                            <span className="text-[15px] font-bold text-[#555555]">{product.views}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            <span className="text-[15px] font-bold text-[#555555]">{product.rating}</span>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-[#8B8A6C] font-bold text-[15px] mb-4 flex items-center justify-start gap-2"><Store className="w-5 h-5" /> 
                        <span className='text-primary'>المتاجر المتوفرة :</span>
                        </h3>
                        <div className="flex flex-wrap justify-center gap-x-5 gap-y-3">
                            {product.stores.map((s, i) => <span key={i} className="text-[#999999] text-[13px] font-medium">{s}</span>)}
                        </div>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-[#8B8A6C] font-bold text-[15px] mb-5 flex items-center justify-start gap-2"><Package className="w-5 h-5" /> 
                        <span className='text-primary'>متغيرات المنتج :</span>
                         </h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {product.variants.map((v, i) => (
                                <span key={i} className={`px-8 py-3 rounded-xl text-[13px] font-bold transition-colors ${v.active ? 'bg-[#818063] text-white shadow-md' : 'bg-[#D0CFB3] text-[#777777]'}`}>{v.label}</span>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-4">
                        <button 
                            onClick={() => setIsUpdateModalOpen(true)}
                            className="flex-1 bg-[#07334B] text-white font-bold py-4 rounded-xl hover:bg-[#0a4566] transition-all text-[16px] shadow-lg shadow-[#07334B]/20"
                        >
                            تحديث المنتج
                        </button>
                        <button className="w-22 h-16 rounded-xl bg-[#EBECF0] flex items-center justify-center text-[#07334B] hover:text-red-500 transition-all border border-gray-100">
                            <Heart className="w-7 h-7" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="mb-12 flex justify-center border-b border-gray-100">
                <div className="flex min-w-max gap-16 relative">
                    {tabs.map((tab) => (
                        <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`pb-5 px-4 text-[17px] font-bold transition-all relative ${activeTab === tab.id ? 'text-[#07334B]' : 'text-[#AAAAAA] hover:text-[#888888]'}`}>
                            {tab.label}
                            {activeTab === tab.id && <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#07334B] rounded-full" />}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content: Reviews */}
            {activeTab === 'reviews' && (
                <div className="flex flex-col items-center lg:flex-row gap-20">
                     {/* Right Side: Rating Summary (Second Child = Right in RTL) */}
                    <div className="w-full lg:w-[400px] space-y-8 order-1">
                        <h3 className="text-xl font-bold text-[#333333] text-right">: الأراء والتقييمات</h3>
                        
                        <div className="flex items-center justify-end gap-5">
                            <div className="text-right">
                                <div className="flex items-center justify-end gap-2">
                                    <Star className="w-7 h-7 text-[#8B8A6C] fill-[#8B8A6C]" />
                                    <span className="text-[48px] font-bold text-[#333333] leading-none">{reviews.average}</span>
                                </div>
                                <span className="text-[14px] text-[#999999] font-medium block text-right mt-2">{reviews.total} شخص</span>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {reviews.breakdown.map((item, i) => (
                                <div key={i} className="flex items-center gap-4 justify-end">
                                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div 
                                            className="h-full bg-[#8B8A6C] rounded-full transition-all duration-1000" 
                                            style={{ width: `${item.percentage}%` }}
                                        />
                                    </div>
                                    <span className="text-[13px] font-bold text-[#555555] min-w-[12px]">{item.stars}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Left Side: Review List (First Child = Left in RTL) */}
                    <div className="flex-1 space-y-8 text-right order-2">
                        {reviews.items.map((review, i) => (
                            <div key={i} className="space-y-4 pb-8 border-b border-gray-100 last:border-0">
                                {/* Top Header: Stars on left, User info on right */}
                                <div className="flex items-center justify-between">
                                    {/* Left: Stars */}
                                  
                                    
                                    {/* Right: User info */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                                            <img src="/products/camera.jpg" alt="user" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="text-right">
                                            <h4 className="font-bold text-[#333333] text-[15px]">{review.user}</h4>
                                            <span className="text-[13px] text-[#999999]">{review.date}</span>
                                        </div>
                                    </div>
                                      <div className="flex gap-1">
                                        {Array(5).fill(0).map((_, j) => (
                                            <Star key={j} className={`w-4 h-4 ${j < review.rating ? 'text-[#8B8A6C] fill-[#8B8A6C]' : 'text-gray-300'}`} />
                                        ))}
                                    </div>
                                </div>

                                <p className="text-[#555555] text-[14px] leading-relaxed">
                                    {review.comment}
                                </p>

                                {review.images && (
                                    <div className="flex justify-end gap-3 pt-2">
                                        {review.images.map((img, idx) => (
                                            <div key={idx} className="w-20 h-20 rounded-xl overflow-hidden border border-gray-200 hover:scale-105 transition-transform cursor-pointer">
                                                <img src={img} alt="review" className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        <div className="pt-6 flex justify-center">
                            <button className="px-16 py-3.5 bg-[#8B8A6C33] text-secondary border border-[secondary] font-bold rounded-xl hover:bg-secondary hover:text-white transition-colors text-[15px]">
                                تحميل المزيد
                            </button>
                        </div>
                    </div>

                   
                </div>
            )}

            {/* Price Analysis Tab */}
            {activeTab === 'price-analysis' && (
                <div className="space-y-12">
                    <div>
                        <h3 className="text-lg font-bold text-[#333333] mb-6 text-right">: التحليلات والإحصائيات</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {product.analysisStats.map((stat, i) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={i} className={`${stat.color} rounded-2xl p-6 flex flex-col items-start justify-start text-right gap-4 border border-white relative overflow-hidden`}>
                                        <div className="flex items-center justify-start gap-2">
                                            <Icon className={`w-5 h-5 ${stat.iconColor}`} />
                                            <span className="text-[15px] font-bold text-[#555555]">{stat.label}</span>
                                        </div>
                                        <div className="flex  items-center justify-start text-right w-100  gap-1 ">
                                            <span className="text-[19px] font-bold text-[#333333]" dir="ltr">{stat.value}</span>
                                             <span className="text-sm text-[#777777] font-medium" dir="ltr">({stat.provider})</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="bg-[#FFFFFF] rounded-[2.5rem] p-8 md:p-12 border border-gray-50 shadow-sm">
                        <h3 className="text-xl font-bold text-[#333333] text-right mb-10">: الرسم البياني</h3>
                        <div className="flex flex-col lg:flex-row gap-12">
                            {/* Legend - Now on Left (visually) because of flex-row-reverse, or standard flex-row if direction is LTR. 
                                User wants "label to the left". 
                                In a standard LTR container:
                                - First child is Left
                                - Second child is Right
                                
                                In the previous code: 
                                - Legend was First Child (Left)
                                - Chart was Second Child (Right)
                                
                                User says "chart design is off... I want the label to the left".
                                This implies the label IS currently on the Left? 
                                Wait, if the app is RTL direction, then:
                                - First child is Right
                                - Second child is Left
                                
                                If user wants "label to the left", in RTL, that means the Label should be the Second Child.
                                So: Chart (Right) -> Legend (Left).
                                
                                Let's swap the order in code so Legend is second child.
                                */}
                            
                            <div className="flex-1 bg-[#FFFFFF] rounded-3xl p-8 border border-gray-50 shadow-sm">
                                <h4 className="text-xl font-bold text-[#07334B] text-right mb-12">تحليل سعر الهاتف</h4>
                                <div className="h-[400px] w-full dir-ltr">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={product.chartData}>
                                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill:'#AAA',fontSize:12}} />
                                            <YAxis axisLine={false} tickLine={false} tick={{fill:'#AAA',fontSize:12}} ticks={[100, 200, 300, 400]} />
                                            <Tooltip content={({active, payload}) => (active && payload?.length ? (
                                                <div className="bg-[#F0F2E8] p-4 rounded-xl border border-[#D5D4BC] shadow-lg text-left min-w-[150px]">
                                                    <p className="text-sm text-[#555555] mb-1">Target</p>
                                                    <div className="flex items-center gap-2">
                                                        <p className="text-lg font-bold text-[#07334B]">$1200.72</p>
                                                        <p className="text-sm font-bold text-[#22C55E]">+124.12</p>
                                                    </div>
                                                </div>
                                            ) : null)} />
                                            <ReferenceLine y={200} stroke="#D97706" strokeWidth={2} />
                                            <Line 
                                                type="monotone" 
                                                dataKey="price" 
                                                stroke="#8B8A6C" 
                                                strokeWidth={4} 
                                                dot={{r:6, fill:'#F0F2E8', stroke:'#8B8A6C', strokeWidth:2}} 
                                                activeDot={{r:8, fill:'#F0F2E8', stroke:'#8B8A6C', strokeWidth:2}}
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center gap-8 min-w-[200px]">
                                {[{l:'الانحراف السعري', c:'bg-[#EF4444]'}, {l:'متوسط السعر', c:'bg-[#B45309]'}, {l:'تحت المتوسط', c:'bg-[#22C55E]'}, {l:'فوق المتوسط', c:'bg-[#A855F7]'}].map((item, i) => (
                                    <div key={i} className="flex items-center justify-end gap-3 group cursor-pointer hover:opacity-80 transition-opacity">
                                        <span className="text-[15px] font-bold text-[#555555]">{item.l}</span>
                                        <div className={`w-5 h-5 rounded-[6px] ${item.c} shadow-sm`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Price Comparison Tab */}
            {activeTab === 'price-comparison' && (
                <div className="bg-[#FFFFFF] border border-gray-50 rounded-[2.5rem] p-8 md:p-12 shadow-sm">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
                        <h2 className="text-lg font-bold text-[#07334B]">12 من المتاجر يتوفر بها المنتج</h2>
                        <div className='flex items-center gap-3'>

                            <span className="text-s font-bold text-muted-foreground ">ترتيب حسب : </span>
                        <div className="flex items-center gap-4 bg-[transparent] p-2 px-4  border">

                            <span className="text-xs font-bold text-primary">الأسعار تصاعديا </span>
                            <ChevronDown className="w-4 h-4" />
                        </div>
                        </div>
                    </div>
                    <div className="space-y-10">
                        {product.comparisonStores.map((s, i) => (
                            <div key={i} className="flex flex-col md:flex-row items-center justify-between pb-6 border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors p-4 rounded-xl">
                                <div className="text-right space-y-1.5 flex flex-col items-start">
                                    <div className="flex items-center gap-2 text-[15px] font-bold text-[#333333]">
                                        <Store className="w-4 h-4 text-[#8B8A6C]" />
                                        {s.name} 
                                    </div>
                                    <div className="flex items-center gap-2 text-[13px] text-[#777777]">
                                        <MapPin className="w-4 h-4 text-[#8B8A6C]" />
                                        {s.location} 
                                    </div>
                                </div>
                                <div className="text-[19px] font-bold text-[#07334B]" dir="ltr">{s.price}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="mt-10">
                <ProductSection title="منتجات مشابهة للمنتج الأساسي" icon={<Sparkles className="w-full h-full" />} products={similarProducts} />
            </div>

            {/* Update Product Modal */}
            <UpdateProductModal 
                isOpen={isUpdateModalOpen} 
                onClose={() => setIsUpdateModalOpen(false)} 
            />
        </div>
    );
}
