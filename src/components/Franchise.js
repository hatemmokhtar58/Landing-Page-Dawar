export default function Franchise() {
    return `
    <section id="franchise" class="py-20 bg-brand-secondary text-white relative overflow-hidden">
      <div class="absolute top-0 right-0 w-64 h-64 bg-brand-primary rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      
      <div class="container mx-auto px-6 text-center relative z-10">
        <h2 class="text-4xl font-bold mb-6 text-brand-primary">
          كن شريكاً في النجاح
        </h2>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          انضم إلى عائلة دوار السعادة واستفد من اسم تجاري قوي ونظام تشغيل مثبت. 
          نقدم الدعم الكامل لشركائنا لضمان نجاحهم.
        </p>
        
        <div class="flex flex-col md:flex-row gap-6 justify-center">
          <a href="#" class="px-8 py-4 bg-brand-primary text-brand-secondary font-bold rounded hover:bg-yellow-400 transition-colors">
            قدم طلب الامتياز
          </a>
          <a href="#" class="px-8 py-4 border border-gray-600 text-gray-300 font-bold rounded hover:border-brand-primary hover:text-brand-primary transition-colors">
            تحميل الملف التعريفي
          </a>
        </div>
      </div>
    </section>
  `;
}
