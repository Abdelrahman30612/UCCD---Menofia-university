import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-16 text-amber-400">تواصل معنا</h2>
      
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
        
        {/* Contact Details Row */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          
          {/* Address */}
          <div className="flex items-start gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div className="text-right">
              <h3 className="text-xl font-bold text-white">العنوان</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                شارع جمال عبد الناصر، الحرم الرئيسي لجامعة المنوفية، كلية الحاسبات والمعلومات، الدور الأرضي، شبين الكوم، مصر.
              </p>
            </div>
          </div>
          
          {/* Phone */}
          <div className="flex items-start gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div className="text-right">
              <h3 className="text-xl font-bold text-white">الهاتف</h3>
              <a href="tel:01203171309" className="text-gray-300 hover:text-amber-400 transition-colors text-lg" dir="ltr">
                012 03171309
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div className="text-right">
              <h3 className="text-xl font-bold text-white">البريد الإلكتروني</h3>
              <a href="mailto:uccd@menofia.edu.eg" className="text-gray-300 hover:text-amber-400 transition-colors text-lg">
                uccd@menofia.edu.eg
              </a>
            </div>
          </div>
          
           {/* Instagram */}
          <div className="flex items-start gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
            </svg>
            <div className="text-right">
              <h3 className="text-xl font-bold text-white">انستجرام</h3>
              <a href="https://instagram.com/uccd.menoufia" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400 transition-colors text-lg">
                uccd.menoufia
              </a>
            </div>
          </div>

          {/* MMP Link */}
          <div className="flex items-start gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
            </svg>
            <div className="text-right">
              <h3 className="text-xl font-bold text-white">MMP Homepage</h3>
              <a href="http://mmp.aucegypt.edu/home/homepage" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400 transition-colors text-lg">
                mmp.aucegypt.edu
              </a>
            </div>
          </div>

          {/* Facebook */}
          <div className="flex items-start gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
            </svg>
            <div className="text-right">
              <h3 className="text-xl font-bold text-white">فيسبوك</h3>
              <a href="https://www.facebook.com/UCCD.Menofia" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400 transition-colors text-lg">
                UCCD.Menofia
              </a>
            </div>
          </div>

        </div>
        
        {/* Divider */}
        <div className="w-4/5 md:w-1/2 h-px bg-gray-700 my-4"></div>

        {/* Working Hours */}
        <div className="text-center">
           <h3 className="text-2xl font-bold text-white mb-4">أوقات العمل</h3>
           <div className="text-gray-300 space-y-2 text-lg">
             <p>الأحد - الخميس: 9:00 صباحًا - 5:00 مساءً</p>
             <p>الجمعة - السبت: مغلق</p>
           </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;