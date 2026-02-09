const branchesData = {
    "المنطقة الوسطى": ["الرياض - الدرعية", "الرياض - الملقا", "الخرج"],
    "المنطقة الغربية": ["جدة - الروضة", "جدة - البلد", "مكة المكرمة", "الطائف"],
    "المنطقة الشرقية": ["الدمام", "الخبر", "الظهران"],
    "المنطقة الجنوبية": ["أبها", "خميس مشيط"],
    "المنطقة الشمالية": ["تبوك", "حائل"],
    "خارج المملكة العربية السعودية": ["دبي", "المنامة"]
};

export default function Branches() {
    // We'll use a simple vanilla JS approach to handle tabs since we aren't using a framework like React/Vue
    // Ideally, this data would be fetched or managed in a stateful way, but for static generation:

    const regions = Object.keys(branchesData);

    // Generating HTML for tabs
    const tabsHtml = regions.map((region, index) => `
    <button 
      class="branch-tab px-6 py-3 rounded-full border border-gray-200 hover:bg-brand-primary hover:text-brand-secondary hover:border-brand-primary transition-all whitespace-nowrap ${index === 0 ? 'bg-brand-primary text-brand-secondary border-brand-primary' : 'bg-white text-gray-600'}"
      data-region="${region}"
    >
      ${region}
    </button>
  `).join('');

    // Initial Content (Central Region)
    const initialBranches = branchesData["المنطقة الوسطى"].map(branch => `
    <div class="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow border border-gray-100">
      <h3 class="text-xl font-bold text-brand-secondary mb-2">${branch}</h3>
      <p class="text-gray-500 text-sm">مفتوح الآن • حتى 12:00 صباحاً</p>
      <a href="#" class="mt-4 inline-block text-brand-primary text-sm font-bold hover:underline">عرض الموقع ></a>
    </div>
  `).join('');

    return `
    <section id="branches" class="py-20 bg-gray-50">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold mb-4 text-brand-secondary">
          أقرب مما تتخيل
        </h2>
        <p class="text-xl text-gray-500 mb-12">
          نقدم لكم السعادة في أكثر من <span class="text-brand-primary font-bold">20 فرع</span> حول المملكة
        </p>

        <!-- Tabs Container -->
        <div class="flex flex-wrap justify-center gap-3 mb-12" id="branch-tabs">
          ${tabsHtml}
        </div>

        <!-- Content Grid -->
        <div id="branches-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-right px-4">
          ${initialBranches}
        </div>
      </div>
    </section>
  `;
}

// Client-side script to handle tab switching
export const branchesScript = `
  const branchesData = ${JSON.stringify(branchesData)};
  
  document.getElementById('branch-tabs').addEventListener('click', (e) => {
    if (e.target.classList.contains('branch-tab')) {
      // Update active state
      document.querySelectorAll('.branch-tab').forEach(t => {
        t.classList.remove('bg-brand-primary', 'text-brand-secondary', 'border-brand-primary', 'scale-105', 'shadow-md');
        t.classList.add('bg-white', 'text-gray-600', 'hover:bg-gray-50');
      });
      e.target.classList.remove('bg-white', 'text-gray-600', 'hover:bg-gray-50');
      e.target.classList.add('bg-brand-primary', 'text-brand-secondary', 'border-brand-primary', 'scale-105', 'shadow-md');

      // Update content
      const region = e.target.getAttribute('data-region');
      const branches = branchesData[region];
      const grid = document.getElementById('branches-grid');
      
      grid.innerHTML = branches.map((branch, index) => \`
        <div class="group relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-brand-primary/10 hover:shadow-xl hover:border-brand-primary/30 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in" style="animation-delay: \${index * 50}ms">
            <div class="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-bl-full -z-10 transition-all group-hover:bg-brand-primary/10"></div>
            
            <h3 class="text-xl font-bold text-brand-secondary mb-3 group-hover:text-brand-primary transition-colors">\${branch}</h3>
            
            <div class="flex items-center gap-2 text-gray-500 text-sm mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-brand-primary">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>مفتوح الآن • حتى 12:00 صباحاً</span>
            </div>

            <a href="#" class="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 text-gray-700 font-bold text-sm hover:bg-brand-primary hover:text-brand-secondary transition-all group-hover:shadow-sm">
                <span>عرض الموقع</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 rtl:rotate-180">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </a>
        </div>
      \`).join('');
    }
  });
`;
