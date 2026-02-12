export default function Hero() {
  return `
    <section id="hero" class="relative h-screen flex items-center justify-center bg-brand-secondary text-white overflow-hidden">
      <!-- Background Overlay -->
      <div class="absolute inset-0 bg-black/50 z-10"></div>
      
      <!-- Background Image -->
      <div class="absolute inset-0 bg-[url('/assets/Logo.png')] bg-contain bg-center bg-no-repeat"></div>

      <div class="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 text-brand-primary animate-fade-in-up">
          اللي يحبه قلبك
        </h1>
        <p class="text-xl md:text-2xl mb-10 text-gray-200 animate-fade-in-up delay-100">
          أكثر من مجرد مطعم، تجربة سعودية أصيلة تجمع بين الطعم الأصيل والأجواء الساحرة.
        </p>
        <div class="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up delay-200">
          <a href="#branches" class="px-8 py-3 bg-brand-primary text-brand-secondary font-bold rounded hover:bg-yellow-400 transition-colors">
            أقرب فرع لك
          </a>
          <a href="#about" class="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded hover:bg-white hover:text-brand-secondary transition-colors">
            اكتشف قصتنا
          </a>
        </div>
      </div>
    </section>
  `;
}
