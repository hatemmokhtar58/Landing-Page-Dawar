export const DEFAULT_CONTENT = {
    brand: { 
      ar: "دوّار السعادة", 
      en: "Dawar Alsa’adah" 
    },
    slogan: {
        main: "نكهات تدور...",
        accent: "وسعادة تدوم",
        description: "استمتع بأشهى المخبوزات والسندويشات المحضرة يومياً بكل حب. الخيار الأمثل لجمعاتكم وأوقاتكم السعيدة."
    },
    images: {
      hero: "/assets/hero.jpg",
      products: "/assets/products.jpg"
    },
    deliveryApps: [
      { name: "Jahez", url: "#" },
      { name: "HungerStation", url: "#" },
      { name: "Mrsool", url: "#" },
      { name: "The Chefz", url: "#" },
      { name: "ToYou", url: "#" },
      { name: "Ninja", url: "#" }
    ],
    social: {
      x: "#",
      instagram: "#",
      tiktok: "#"
    },
    branches: [
      { region: "المنطقة الوسطى", branches: ["الرياض - الدرعية", "الرياض - الملقا", "الخرج"] },
      { region: "المنطقة الغربية", branches: ["جدة - الروضة", "جدة - البلد", "مكة المكرمة", "الطائف"] },
      { region: "المنطقة الشرقية", branches: ["الدمام", "الخبر", "الظهران"] },
      { region: "المنطقة الجنوبية", branches: ["أبها", "خميس مشيط"] },
      { region: "المنطقة الشمالية", branches: ["تبوك", "حائل"] },
      { region: "خارج المملكة", branches: ["دبي - الإمارات", "المنامة - البحرين"] }
    ]
  };
  
  const STORAGE_KEY = 'dawar_landing_content';
  
  export const loadContent = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : DEFAULT_CONTENT;
    } catch (e) {
      console.error("Failed to load content", e);
      return DEFAULT_CONTENT;
    }
  };
  
  export const saveContent = (data) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch (e) {
      console.error("Failed to save content", e);
      alert("Storage limit reached! Try using smaller images or external URLs.");
      return false;
    }
  };
  
  export const resetContent = () => {
    if(confirm("هل أنت متأكد من استعادة الإعدادات الافتراضية؟")) {
        localStorage.removeItem(STORAGE_KEY);
        window.location.reload();
    }
  };
