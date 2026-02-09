export default function Navbar() {
    return `
    <nav class="bg-brand-secondary/95 text-white fixed w-full z-50 transition-all duration-300 backdrop-blur-sm">
      <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <!-- Logo -->
        <div class="text-2xl font-bold text-brand-primary">
          دوار السعادة
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex gap-8 items-center">
          <a href="#hero" class="hover:text-brand-primary transition-colors">الرئيسية</a>
          <a href="#about" class="hover:text-brand-primary transition-colors">من نحن</a>
          <a href="#branches" class="hover:text-brand-primary transition-colors">الفروع</a>
          <a href="#franchise" class="hover:text-brand-primary transition-colors">الامتياز التجاري</a>
          <a href="#contact" class="px-4 py-2 border border-brand-primary text-brand-primary rounded hover:bg-brand-primary hover:text-brand-secondary transition-all">
            تواصل معنا
          </a>
        </div>

        <!-- Mobile Menu Button (Placeholder) -->
        <button class="md:hidden text-brand-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </nav>
  `;
}
