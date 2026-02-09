export default function About() {
    return `
    <section id="about" class="py-20 bg-brand-accent">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row gap-12 items-center">
          <div class="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="About Dawar" 
              class="rounded-lg shadow-xl"
            >
          </div>
          <div class="w-full md:w-1/2">
            <h2 class="text-4xl font-bold mb-6 text-brand-secondary">
              قصة سعادة بدأت من 2021
            </h2>
            <p class="text-lg text-gray-700 leading-relaxed mb-6">
              في دوار السعادة، نؤمن أن الطعام ليس مجرد وجبة، بل هو لحظة فرح وتواصل. بدأنا رحلتنا بشغف لتقديم المأكولات السعودية والعالمية بلمسة عصرية تحافظ على الأصالة.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed mb-8">
              كل طبق نقدمه يُعد بعناية فائقة، باستخدام أجود المكونات الطازجة، لنضمن لكم تجربة لا تُنسى في كل زيارة.
            </p>
            <div class="flex gap-8">
              <div>
                <span class="block text-3xl font-bold text-brand-primary">20+</span>
                <span class="text-gray-600">فرع حول المملكة</span>
              </div>
              <div>
                <span class="block text-3xl font-bold text-brand-primary">100k+</span>
                <span class="text-gray-600">عميل سعيد</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
