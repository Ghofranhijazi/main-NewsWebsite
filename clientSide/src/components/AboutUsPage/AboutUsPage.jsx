const AboutUsPage= () => {

  const teamMembers = [
    {
      id: 1,
      name: ' غفران حجازي',
      
      image: 'https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296990_640.png'
    },
    {
      id: 2,
      name: 'رغد كمال',

      image: 'https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296990_640.png'
    },
    {
      id: 3,
      name: 'أحلام المومني',
      
      image: 'https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296990_640.png'
    },

    {
      id: 2,
      name: 'علي أبو حسان',

      image: 'https://cdn.pixabay.com/photo/2013/07/13/13/38/man-161282_1280.png'
    },
    {
      id: 2,
      name: ' رامي عبد الحميد',

      image: 'https://cdn.pixabay.com/photo/2013/07/13/13/38/man-161282_1280.png'
    },
    {
      id: 2,
      name: 'حارث الجندي ',

      image: 'https://cdn.pixabay.com/photo/2013/07/13/13/38/man-161282_1280.png'
    },
    {
      id: 2,
      name: 'محمد الحمود ',

      image: 'https://cdn.pixabay.com/photo/2013/07/13/13/38/man-161282_1280.png'
    },
    



    // <div className="relative w-full h-115 bg-gray-100">
    //     {/* Background Image */}
    //     <div className="absolute inset-0 bg-cover bg-center opacity-80" 
    //          style={{backgroundImage: "url('https://images.pexels.com/photos/2479946/pexels-photo-2479946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"}}></div>
        
    //     {/* Overlay */}
    //     <div className="absolute inset-0 bg-black opacity-40"></div>
        
    //     {/* Content */}
    //     <div className="relative p-8 flex flex-col justify-center h-full text-white mr-10">
    //       <h1 className="text-5xl   text-[#5D8736]  mb-4"> يقين</h1>
    //       <p className="text-3xl max-w-md">
          
    //       الأخبار العاجلة لحظة بلحظة.. من المصدر إلى شاشتك
    //       </p>
          
    //       {/* Navigation */}
          
    //     </div>
    //   </div>


  ];
  return (
    <div className="flex flex-col min-h-screen font-sans" dir="rtl">
      {/* Hero Section with Banner Image */}
      <div className="relative w-full h-100 flex items-center text-white">
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src="https://videos.pexels.com/video-files/29325396/12641526_640_360_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "rgba(40, 36, 41, 0.7)" }}></div>
        <div className="relative z-10 max-w-4xl ml-auto px-10 lg:px-20 text-right" style={{ marginTop: "150px" }}>
        <h1 className="text-lg md:text-xl font-bold"> نقدم لكم رؤية شاملة وموثوقة للأخبار والتقارير مع التحليل العميق والموضوعية التي تميزنا في عالم الصحافة الرقمية{" "} <span className="text-[#51a31d]">يقين.</span> </h1>
        </div>
      </div>
      <div className="w-full h-1 bg-[#51a31d]"></div>
      
      {/* Main Content Section */}
      <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800  flex items-center justify-center gap-1 mt-15 mb-10" dir="rtl">
          <span>لماذا</span>
          <span className="text-[#5D8736]">يقين</span>
          <span className="text-gray-800">؟</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* First Card */}
          <div className="bg-white rounded-lg p-8 shadow-md transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <div className="bg-[#5D8736] p-4 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">دقة ومصداقية</h3>
            <p className="text-gray-600 text-center">نحرص على تقديم الأخبار بمصادر موثوقة وتحليل دقيق للأحداث.</p>
          </div>
          
          {/* Second Card */}
          <div className="bg-white rounded-lg p-8 shadow-md transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <div className="bg-[#5D8736] p-4 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">تغطية شاملة</h3>
            <p className="text-gray-600 text-center">نغطي الأحداث المحلية والعالمية لنقدم لكم صورة متكاملة عن المستجدات.</p>
          </div>
          
          {/* Third Card */}
          <div className="bg-white rounded-lg p-8 shadow-md transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <div className="bg-[#5D8736] p-4 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">تحليل عميق</h3>
            <p className="text-gray-600 text-center">نقدم تحليلات معمقة للأحداث لنساعدكم في فهم خلفيات الأخبار.</p>
          </div>
          
          {/* Fourth Card */}
          <div className="bg-white rounded-lg p-8 shadow-md transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <div className="bg-[#5D8736] p-4 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">سرعة في النشر</h3>
            <p className="text-gray-600 text-center">نوفر لكم الأخبار العاجلة فور حدوثها مع تحديثات مستمرة.</p>
          </div>
        </div>
      </div>
    </div>



    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold inline-flex items-center">
            <span className="text-gray-800">فريق</span>
            <span className="text-[#5D8736] mr-2">يقين</span>
          </h2>
          <div className="mt-2 relative">
            <div className="h-1 w-16 bg-[#5D8736] mx-auto"></div>
          </div>
          <p className="mt-6 text-gray-600">
            فريقنا يضم نخبة من المختصين      
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#5D8736]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
              <p className="text-gray-500 mb-4">{member.role}</p>
              
              <div className="flex justify-center gap-3 rtl:space-x-reverse">
                <a href="#" className="bg-[#5D8736] text-white p-2 rounded-full hover:bg-[#5D8736] transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
                <a href="#" className="bg-[#5D8736] text-white p-2 rounded-full hover:bg-[#5D8736] transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
                <a href="#" className="bg-[#5D8736] text-white p-2 rounded-full hover:bg-[#5D8736] transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>






  );
};

export default AboutUsPage;

