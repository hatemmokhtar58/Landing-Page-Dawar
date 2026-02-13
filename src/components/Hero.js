export default function Hero() {
  return `
    <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden" style="background: linear-gradient(135deg, #FDF8F3 0%, #F8F1E8 100%);">
      <!-- Hero Container -->
      <div class="container mx-auto px-6 py-20">
        <div class="hero-simple-layout">
          <!-- Center Content -->
          <div class="hero-center-content">
            <h1 class="hero-main-title">
              اللي يحبه قلبك
            </h1>
            <p class="hero-subtitle">
              أكثر من مجرد مطعم، تجربة سعودية أصيلة تجمع بين الطعم الأصيل والأجواء الساحرة.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}
