import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <img 
          src="https://i.ibb.co/XrfpMMcv/bright-png9.png" 
          alt="UCCD Brighter Futures Logo" 
          className="mx-auto mb-12 h-80 w-auto"
        />
        <h2 className="text-4xl font-bold mb-6 text-amber-400">من نحن؟</h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-12 max-w-4xl mx-auto">
          المركز الجامعي للتطوير المهني (UCCD) بجامعة المنوفية هو مبادرة رائدة تهدف إلى سد الفجوة بين الحياة الأكاديمية ومتطلبات سوق العمل، وتزويد الطلاب والخريجين بالمهارات اللازمة للنجاح في مسيرتهم المهنية.
        </p>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 text-right">
          {/* Vision Card */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700/50">
            <h3 className="text-2xl font-bold mb-3 text-amber-400">رؤيتنا</h3>
            <p className="text-gray-300 leading-relaxed">
              أن نكون المركز الرائد في تقديم خدمات التطوير المهني المبتكرة، والمساهم الأول في إعداد كوادر مهنية قادرة على المنافسة عالميًا.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700/50">
            <h3 className="text-2xl font-bold mb-3 text-amber-400">رسالتنا</h3>
            <p className="text-gray-300 leading-relaxed">
              تمكين طلاب وخريجي جامعة المنوفية من خلال برامج تدريبية وإرشادية عالية الجودة تلبي احتياجات سوق العمل المتغيرة.
            </p>
          </div>
          
          {/* Goals Card */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700/50">
            <h3 className="text-2xl font-bold mb-3 text-amber-400">أهدافنا</h3>
            <p className="text-gray-300 leading-relaxed">
             تطوير المهارات، تعزيز فرص التوظيف، بناء شراكات استراتيجية مع قطاع الصناعة والأعمال، ونشر ثقافة التعلم المستمر.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;