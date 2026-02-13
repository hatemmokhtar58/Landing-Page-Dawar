import './style.css';
import Navbar from './components/Navbar.js';

document.body.insertAdjacentHTML('afterbegin', Navbar());

// Data - Official Branches with Map Links
const BRANCHES = [
  {
    region: "المنطقة الوسطى",
    branches: [
      // الرياض
      { name: "الرياض - العقيق", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+العقيق+الرياض" },
      { name: "الرياض - الدرعية", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+الدرعية" },
      { name: "الرياض - الملقا", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+الملقا" },
      { name: "الرياض - النرجس", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+النرجس" },
      { name: "الرياض - قرطبة", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+قرطبة" },
      { name: "الرياض - طويق", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+طويق" },
      { name: "الرياض - المحمدية", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+المحمدية" },
      { name: "الرياض - العارض", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+العارض" },
      { name: "الرياض - الرحاب", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+الرحاب" },
      { name: "الرياض - المطار الشمالي", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+المطار+الشمالي" },
      { name: "الرياض - المسيف", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+المسيف" },
      { name: "الرياض - القدس", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+القدس+الرياض" },
      { name: "الرياض - خريص", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+خريص" },
      { name: "الرياض - الملز", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+الملز" },
      { name: "الرياض - الربيع", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+الربيع" },
      { name: "الرياض - السليمانية", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+السليمانية" },
      { name: "الرياض - الرمال", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+الرمال" },
      { name: "الرياض - اليرموك", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+اليرموك" },
      { name: "الرياض - النظيم", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+النظيم" },
      { name: "الرياض - حطين", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+حطين" },
      { name: "الرياض - البديعة", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+البديعة" },
      { name: "الرياض - الحدا", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+الحدا" },
      { name: "الرياض - الروابي", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+الروابي" },
      { name: "الرياض - الفيحاء", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+الفيحاء" },
      { name: "الرياض - العوالي", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+العوالي+الرياض" },
      { name: "الرياض - النخيل", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+النخيل" },
      { name: "الرياض - الأحمدية", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+الأحمدية" },
      { name: "الرياض - العرقة", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+العرقة" },
      { name: "الرياض - الشهداء", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+الشهداء" },
      { name: "الرياض - الوزارات", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+الوزارات" },
      { name: "الرياض - لبن", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+لبن" },

      // الخرج
      { name: "الخرج", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+الخرج" },

      // القصيم (مدمجة)
      { name: "بريدة", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+بريدة" },
      { name: "عنيزة", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+عنيزة" },
      { name: "الرس", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+الرس" }
    ]
  },
  {
    region: "المنطقة الغربية",
    branches: [
      { name: "جدة - التحلية", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+جدة+التحلية" },
      { name: "جدة - أبحر الشمالية", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+أبحر" },
      { name: "مكة المكرمة - العوالي", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+مكة+العوالي" },
      { name: "مكة المكرمة - الشوقية", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+الشوقية" },
      { name: "الطائف", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+الطائف" },
      { name: "المدينة المنورة", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+المدينة+المنورة" }
    ]
  },
  {
    region: "المنطقة الشرقية",
    branches: [
      { name: "الدمام - الفيصلية", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+الدمام+الفيصلية" },
      { name: "الدمام - الشاطئ", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+الشاطئ+الدمام" },
      { name: "الخبر - العزيزية", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+الخبر+العزيزية" },
      { name: "الظهران", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+الظهران" },
      { name: "الجبيل", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+الجبيل" },
      { name: "الأحساء", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+الأحساء" }
    ]
  },
  {
    region: "المنطقة الجنوبية",
    branches: [
      { name: "أبها", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+أبها" },
      { name: "خميس مشيط", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+خميس+مشيط" },
      { name: "جازان", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+جازان" },
      { name: "نجران", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+نجران" }
    ]
  },
  {
    region: "المنطقة الشمالية",
    branches: [
      { name: "تبوك", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+تبوك" },
      { name: "حائل", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+حائل" },
      { name: "عرعر", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+عرعر" },
      { name: "الجوف", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+الجوف" }
    ]
  },
  {
    region: "خارج المملكة",
    branches: [
      { name: "دبي - الإمارات", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+دبي" },
      { name: "المنامة - البحرين", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+البحرين" },
      { name: "الكويت", mapsUrl: "https://www.google.com/maps/search/?api=1&query=دوار+السعادة+الكويت" }
    ]
  }
];

// Default Content Data
const DEFAULT_CONTENT = {
  images: {
    products: [
      { id: "main", url: "/assets/khaliya.png", alt: "بوكس الخلية" },
      { id: "secondary", url: "/assets/mini (1).png", alt: "بوكس الميني ساندوتش" }
    ]
  }
};

// Load Content
const loadContent = () => {
  const stored = localStorage.getItem('dawar_landing_content');
  return stored ? JSON.parse(stored) : DEFAULT_CONTENT;
};

const content = loadContent();

// Render Products Dynamically
const renderProducts = () => {
  const mainImg = content.images.products.find(img => img.id === 'main');
  const secondaryImg = content.images.products.find(img => img.id === 'secondary');

  const mainPlaceholder = document.getElementById('img-placeholder-main');
  const secondaryPlaceholder = document.getElementById('img-placeholder-secondary');

  const setPlaceholderContent = (element, imgObj) => {
    if (!element) return;

    if (imgObj && imgObj.url) {
      element.style.backgroundImage = `url('${imgObj.url}')`;
      element.innerHTML = '';
      element.classList.remove('placeholder-active');
    } else {
      element.style.backgroundImage = 'none';
      element.innerHTML = '<span style="color:#888;font-size:0.9rem;text-align:center;">الصورة سيتم رفعها من لوحة التحكم</span>';
      element.style.display = 'flex';
      element.style.alignItems = 'center';
      element.style.justifyContent = 'center';
      element.style.backgroundColor = '#f0f0f0';
      element.classList.add('placeholder-active');
    }
  };

  setPlaceholderContent(mainPlaceholder, mainImg);
  setPlaceholderContent(secondaryPlaceholder, secondaryImg);
};

// State
let activeRegionIndex = 0;

// Render Dropdown Options
const renderDropdownOptions = () => {
  const menuContainer = document.getElementById('branches-dropdown-menu');
  if (!menuContainer) return;

  menuContainer.innerHTML = BRANCHES.map((item, index) => {
    const isSelected = index === activeRegionIndex ? 'selected' : '';
    return `<button class="dropdown-item ${isSelected}" onclick="window.selectRegion(${index})">${item.region}</button>`;
  }).join('');
};

// Update Dropdown Header UI
const updateDropdownHeader = () => {
  const headerText = document.querySelector('.selected-region');
  if (headerText) {
    headerText.textContent = BRANCHES[activeRegionIndex].region;
  }
};

// Render Grid
const renderGrid = () => {
  const gridContainer = document.getElementById('branches-grid');
  if (!gridContainer) return;

  // Ensure we are using the global activeRegionIndex
  const currentRegion = BRANCHES[activeRegionIndex];

  if (!currentRegion || !currentRegion.branches) {
    console.error("No data for active region index:", activeRegionIndex);
    return;
  }

  const currentBranches = currentRegion.branches;

  gridContainer.innerHTML = currentBranches.map(branch => `
    <div class="branch-card">
      <div class="branch-name">
        <svg viewBox="0 0 24 24" fill="#FF6B00" style="width:24px;height:24px;flex-shrink:0;">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
        ${branch.name}
      </div>
      <a href="${branch.mapsUrl}" target="_blank" rel="noopener noreferrer" class="branch-btn">
        <span>افتح على خرائط Google</span>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </svg>
      </a>
    </div>
  `).join('');
};

// Toggle Dropdown
const toggleDropdown = () => {
  const menu = document.getElementById('branches-dropdown-menu');
  const header = document.getElementById('branches-dropdown-header');
  menu.classList.toggle('open');
  header.classList.toggle('active');
};

// Select Region
window.selectRegion = (index) => {
  activeRegionIndex = index;
  updateDropdownHeader();

  // Update selected class manually to avoid full re-render if not needed, 
  // or re-render if that's the preferred approach. 
  // Re-rendering options ensures 'selected' class is accurate.
  renderDropdownOptions();

  renderGrid();
  toggleDropdown(); // Close after selection
};

// Setup Dropdown Listeners
const setupDropdown = () => {
  const header = document.getElementById('branches-dropdown-header');
  if (header) {
    header.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleDropdown();
    });
  }

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    const dropdown = document.querySelector('.custom-dropdown');
    const menu = document.getElementById('branches-dropdown-menu');
    const header = document.getElementById('branches-dropdown-header');

    if (dropdown && !dropdown.contains(e.target)) {
      menu.classList.remove('open');
      header.classList.remove('active');
    }
  });
};

// Reveal on Scroll
const setupObserver = () => {
  if (!('IntersectionObserver' in window)) {
    // Fallback for browsers without IntersectionObserver support
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};

// Smooth Anchor Scroll
const setupSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
};

// Initialize Application
const initApp = () => {
  try {
    // Render Components
    renderProducts();

    if (document.getElementById('branches-dropdown-menu')) {
      renderDropdownOptions();
      renderGrid();
      setupDropdown();
    }

    // Setup Interactions
    setupObserver();
    setupSmoothScroll();

    console.log("App initialized successfully");
  } catch (error) {
    console.error("Initialization error:", error);
    // Emergency Fallback: Reveal content if JS crashes
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
  }
};

// Start App
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
