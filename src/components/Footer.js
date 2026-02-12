export default function Footer() {
  return `
    <footer class="bg-black text-white pt-16 pb-8 border-t border-gray-900">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <!-- Brand -->
          <div>
            <h3 class="text-3xl font-bold text-brand-primary mb-6">دوار السعادة</h3>
            <p class="text-gray-400 leading-relaxed">
              وجهتكم الأولى للطعم الأصيل والجلسات الرائعة. نسعد بخدمتكم في جميع فروعنا حول المملكة.
            </p>
          </div>

          <!-- Links -->
          <div>
            <h4 class="text-xl font-bold mb-6 text-white">روابط مهمة</h4>
            <ul class="space-y-4 text-gray-400">
              <li><a href="#about" class="hover:text-brand-primary transition-colors">من نحن</a></li>
              <li><a href="#branches" class="hover:text-brand-primary transition-colors">فروعنا</a></li>
              <li><a href="#franchise" class="hover:text-brand-primary transition-colors">الامتياز التجاري</a></li>
              <li><a href="#" class="hover:text-brand-primary transition-colors">الوظائف</a></li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h4 class="text-xl font-bold mb-6 text-white">تواصل معنا</h4>
            <ul class="space-y-4 text-gray-400">
              <li class="flex items-center gap-3">
                <span>info@dawar.sa</span>
              </li>
              <li class="flex items-center gap-3">
                <span>920000000</span>
              </li>
            </ul>
          </div>

          <!-- Social -->
          <div>
            <h4 class="text-xl font-bold mb-6 text-white">تابعنا على</h4>
            <div class="flex gap-4">
              <!-- X (Twitter) -->
              <a href="https://x.com/dawar_sa" target="_blank" class="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <!-- TikTok -->
              <a href="https://www.tiktok.com/@dawar_sa" target="_blank" class="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v10.1c-.05 2.31-1.39 4.55-3.5 5.68-2.66 1.42-6.04.83-7.98-1.55-1.95-2.4-1.34-5.96 1.34-7.65 1.57-.99 3.51-1.01 5.09-.04v4.03c-.45-.25-.94-.49-1.44-.53-.78-.06-1.57.17-2.12.72-.54.54-.73 1.32-.51 2.05.21.72.9 1.25 1.66 1.26.79.01 1.55-.47 1.83-1.19.28-.73.22-1.55-.17-2.22l-.11-.18V.02z"/></svg>
              </a>
              <!-- Instagram -->
              <a href="https://www.instagram.com/dawar_sa" target="_blank" class="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2024 دوار السعادة. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  `;
}
