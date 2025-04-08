import React from 'react'; 
import './ArabicNewsBlog.css'

const ArabicNewsBlog = () => {
//   return (
//     <div dir="rtl" className="font-sans bg-gray-100">
//       {/* Top Featured Articles - 2 columns */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//         {/* First featured article */}
//         <div className="relative overflow-hidden h-64 rounded">
//           <img src="/api/placeholder/600/400" alt="فريق عمل" className="w-full h-full object-cover" />
//           <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
//           <div className="absolute bottom-0 right-0 p-4 text-white">
//             <div className="mb-1">
//               <span className="bg-red-600 text-white py-1 px-2 text-xs font-bold">أعمال</span>
//             </div>
//             <h2 className="text-xl font-bold mb-2">كيف يمكن لفريق جيد أن يؤثر إيجابًا على عملك</h2>
//             <div className="text-sm flex items-center">
//               <span>سارة بلوغينج تيم</span>
//               <span className="mx-2">•</span>
//               <span>٠٥ مارس، ٢٠٢٠</span>
//             </div>
//           </div>
//         </div>

//         {/* Second featured article */}
//         <div className="relative overflow-hidden h-64 rounded">
//           <img src="/api/placeholder/600/400" alt="طائرة بدون طيار" className="w-full h-full object-cover" />
//           <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
//           <div className="absolute bottom-0 right-0 p-4 text-white">
//             <div className="mb-1">
//               <span className="bg-red-600 text-white py-1 px-2 text-xs font-bold">طائرات</span>
//             </div>
//             <h2 className="text-xl font-bold mb-2">الطائرات بدون طيار أداة لا غنى عنها للمهنيين من مختلف القطاعات</h2>
//             <div className="text-sm">
//               <span>٠٥ مارس، ٢٠٢٠</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Music Section */}
//       <div className="mb-6">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-lg font-bold bg-black text-white px-4 py-1">موسيقى</h3>
//           <a href="#" className="text-sm text-gray-500 hover:text-black">عرض الكل</a>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           {/* Main Music Article */}
//           <div className="relative overflow-hidden h-64 md:col-span-1">
//             <img src="/api/placeholder/300/200" alt="الاستماع إلى الموسيقى" className="w-full h-full object-cover" />
//             <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
//             <div className="absolute bottom-0 right-0 p-4 text-white">
//               <div className="mb-1">
//                 <span className="bg-red-600 text-white py-1 px-2 text-xs font-bold">تعلم</span>
//               </div>
//               <h2 className="text-md font-bold mb-2">دراسة: الاستماع إلى الموسيقى يمكن أن يساعدك على حفظ المعلومات بسهولة أكبر</h2>
//               <div className="text-sm">
//                 <span>سارة بلوغينج تيم</span>
//                 <span className="mx-2">•</span>
//                 <span>٠٥ مارس، ٢٠٢٠</span>
//               </div>
//             </div>
//           </div>

//           {/* Music Articles List */}
//           <div className="md:col-span-3">
//             <div className="border-b border-gray-200 pb-4 mb-4 flex">
//               <img src="/api/placeholder/120/80" alt="إلكترونيات" className="w-24 h-16 object-cover" />
//               <div className="mr-4">
//                 <h3 className="font-bold text-sm mb-1">إلكترونيات ميسورة التكلفة لإعداد استوديو الخاص بك</h3>
//                 <div className="text-xs text-gray-500">٠٥ مارس، ٢٠٢٠</div>
//               </div>
//             </div>
            
//             <div className="border-b border-gray-200 pb-4 mb-4 flex">
//               <img src="/api/placeholder/120/80" alt="سبوتيفاي" className="w-24 h-16 object-cover" />
//               <div className="mr-4">
//                 <h3 className="font-bold text-sm mb-1">شاهد قائمة التشغيل الأفضل على سبوتيفاي وجدد ذخيرتك الموسيقية</h3>
//                 <div className="text-xs text-gray-500">٠٥ مارس، ٢٠٢٠</div>
//               </div>
//             </div>
            
//             <div className="border-b border-gray-200 pb-4 mb-4 flex">
//               <img src="/api/placeholder/120/80" alt="آلات إيقاعية" className="w-24 h-16 object-cover" />
//               <div className="mr-4">
//                 <h3 className="font-bold text-sm mb-1">آلات إيقاعية لتتعلم العزف عليها الآن</h3>
//                 <div className="text-xs text-gray-500">٠٥ مارس، ٢٠٢٠</div>
//               </div>
//             </div>
            
//             <div className="flex">
//               <img src="/api/placeholder/120/80" alt="الغناء" className="w-24 h-16 object-cover" />
//               <div className="mr-4">
//                 <h3 className="font-bold text-sm mb-1">خبراء يشيرون إلى أن الغناء مفيد للصحة العقلية</h3>
//                 <div className="text-xs text-gray-500">٠٥ مارس، ٢٠٢٠</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Technology Section */}
//       <div className="mb-6">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-lg font-bold bg-black text-white px-4 py-1">تكنولوجيا</h3>
//           <a href="#" className="text-sm text-gray-500 hover:text-black">عرض الكل</a>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {/* Tech Article 1 */}
//           <div className="relative overflow-hidden h-48 rounded">
//             <img src="/api/placeholder/400/300" alt="فريق عمل" className="w-full h-full object-cover" />
//             <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
//             <div className="absolute bottom-0 right-0 p-4 text-white">
//               <h2 className="text-md font-bold mb-1">كيف يمكن لفريق جيد أن يؤثر إيجابًا على عملك</h2>
//               <div className="text-xs">٠٥ مارس، ٢٠٢٠</div>
//             </div>
//           </div>

//           {/* Tech Article 2 */}
//           <div className="relative overflow-hidden h-48 rounded">
//             <img src="/api/placeholder/400/300" alt="طائرات بدون طيار" className="w-full h-full object-cover" />
//             <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
//             <div className="absolute bottom-0 right-0 p-4 text-white">
//               <h2 className="text-md font-bold mb-1">الطائرات بدون طيار أداة لا غنى عنها للمهنيين من مختلف القطاعات</h2>
//               <div className="text-xs">٠٥ مارس، ٢٠٢٠</div>
//             </div>
//           </div>

//           {/* Tech Article 3 */}
//           <div className="relative overflow-hidden h-48 rounded">
//             <img src="/api/placeholder/400/300" alt="ويندوز فون" className="w-full h-full object-cover" />
//             <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
//             <div className="absolute bottom-0 right-0 p-4 text-white">
//               <h2 className="text-md font-bold mb-1">أهم الأسباب التي دفعت مايكروسوفت لإيقاف ويندوز فون</h2>
//               <div className="text-xs">٠٥ مارس، ٢٠٢٠</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right Sidebar Section */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         <div className="col-span-3">
//           {/* This would be your main content area */}
//         </div>
        
//         <div className="col-span-1">
//           {/* Follow Us */}
//           <div className="mb-6">
//             <h3 className="text-lg font-bold bg-black text-white px-4 py-1 mb-4">تابعنا</h3>
//             <div className="grid grid-cols-3 gap-2">
//               <div className="bg-blue-800 text-white text-center py-2 rounded">
//                 <div className="text-sm">فيس</div>
//                 <div className="text-xs">١.٢م</div>
//               </div>
//               <div className="bg-blue-400 text-white text-center py-2 rounded">
//                 <div className="text-sm">تويتر</div>
//                 <div className="text-xs">٩٣٥ك</div>
//               </div>
//               <div className="bg-red-600 text-white text-center py-2 rounded">
//                 <div className="text-sm">يوتيوب</div>
//                 <div className="text-xs">٢.٣م</div>
//               </div>
//               <div className="bg-blue-600 text-white text-center py-2 rounded">
//                 <div className="text-sm">لينكدإن</div>
//                 <div className="text-xs">٥٠٠</div>
//               </div>
//               <div className="bg-pink-600 text-white text-center py-2 rounded">
//                 <div className="text-sm">إنستا</div>
//                 <div className="text-xs">١.٨م</div>
//               </div>
//               <div className="bg-blue-900 text-white text-center py-2 rounded">
//                 <div className="text-sm">في كي</div>
//                 <div className="text-xs">١.٣م</div>
//               </div>
//             </div>
//           </div>

//           {/* Smartphones */}
//           <div className="mb-6">
//             <h3 className="text-lg font-bold bg-black text-white px-4 py-1 mb-4">الهواتف الذكية</h3>
            
//             <div className="mb-4">
//               <div className="relative overflow-hidden h-40 rounded mb-2">
//                 <img src="/api/placeholder/300/200" alt="ويندوز فون" className="w-full h-full object-cover" />
//                 <div className="absolute top-0 right-0 m-2">
//                   <span className="bg-red-600 text-white py-1 px-2 text-xs font-bold">الهواتف الذكية</span>
//                 </div>
//               </div>
//               <h3 className="font-bold text-sm mb-1">أهم الأسباب التي دفعت مايكروسوفت لإيقاف ويندوز فون</h3>
//               <div className="text-xs text-gray-500">
//                 <span>سارة بلوغينج تيم</span>
//                 <span className="mx-2">•</span>
//                 <span>٠٥ مارس، ٢٠٢٠</span>
//               </div>
//             </div>
            
//             <div className="border-b border-gray-200 pb-4 mb-4 flex">
//               <img src="/api/placeholder/120/80" alt="أمان البيانات" className="w-24 h-16 object-cover" />
//               <div className="mr-4">
//                 <h3 className="font-bold text-xs mb-1">تحقق من بعض نصائح الأمان لحماية بياناتك على جهازك المحمول</h3>
//                 <div className="text-xs text-gray-500">٠٥ مارس، ٢٠٢٠</div>
//               </div>
//             </div>
            
//             <div className="border-b border-gray-200 pb-4 mb-4 flex">
//               <img src="/api/placeholder/120/80" alt="بطارية الهاتف" className="w-24 h-16 object-cover" />
//               <div className="mr-4">
//                 <h3 className="font-bold text-xs mb-1">انظر ما يمكنك القيام به لتحسين أداء بطارية هاتفك الذكي</h3>
//                 <div className="text-xs text-gray-500">٠٥ مارس، ٢٠٢٠</div>
//               </div>
//             </div>
            
//             <div className="flex">
//               <img src="/api/placeholder/120/80" alt="تطبيقات المراسلة" className="w-24 h-16 object-cover" />
//               <div className="mr-4">
//                 <h3 className="font-bold text-xs mb-1">تطبيقات المراسلة، انظر أيها قد يناسب ملفك الشخصي بشكل أفضل</h3>
//                 <div className="text-xs text-gray-500">٠٥ مارس، ٢٠٢٠</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
};


export default ArabicNewsBlog;
  
    
    