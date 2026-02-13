import { saveContent, resetContent } from '../config/content.js';

export const Admin = (initialData) => {
    let data = JSON.parse(JSON.stringify(initialData)); // Deep copy
    const PASSCODE = "1234"; // Simple gate

    // State for session
    const isAuthenticated = sessionStorage.getItem('admin_session') === 'true';

    if (!isAuthenticated) {
        return `
      <div class="min-h-screen flex items-center justify-center bg-slate-100 p-4">
        <div class="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full text-center">
            <h2 class="text-2xl font-bold mb-6 text-brand-secondary">لوحة التحكم</h2>
            <input type="password" id="admin-pass" placeholder="أدخل رمز الدخول" class="input-premium mb-4 text-center dir-ltr" />
            <button id="login-btn" class="btn-primary w-full">دخول</button>
        </div>
      </div>
    `;
    }

    // Render Dashboard
    setTimeout(() => initDashboard(data), 0);

    return `
    <div class="min-h-screen bg-slate-50 pb-20">
        <!-- Header -->
        <header class="bg-brand-secondary text-white py-4 px-6 shadow-md sticky top-0 z-50">
            <div class="container mx-auto flex justify-between items-center">
                <h1 class="font-bold text-xl">لوحة التحكم - دوار السعادة</h1>
                <div class="flex gap-2">
                    <a href="#/" class="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm transition font-medium">مشاهدة الموقع</a>
                    <button id="logout-btn" class="bg-red-500/80 hover:bg-red-600 px-4 py-2 rounded-lg text-sm transition font-medium">خروج</button>
                </div>
            </div>
        </header>

        <div class="container mx-auto px-4 py-8 max-w-4xl">
            <!-- Tabs Navigation -->
            <div class="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-xl shadow-sm border border-slate-100">
                <button class="tab-btn active flex-1 py-3 rounded-lg font-bold text-sm transition-all bg-brand-primary text-white" data-tab="branding">العلامة التجارية</button>
                <button class="tab-btn flex-1 py-3 rounded-lg font-bold text-sm transition-all hover:bg-slate-50 text-slate-600" data-tab="images">الصور</button>
                <button class="tab-btn flex-1 py-3 rounded-lg font-bold text-sm transition-all hover:bg-slate-50 text-slate-600" data-tab="links">الروابط</button>
                <button class="tab-btn flex-1 py-3 rounded-lg font-bold text-sm transition-all hover:bg-slate-50 text-slate-600" data-tab="branches">الفروع</button>
            </div>

            <!-- Tab Content: Branding -->
            <div id="tab-branding" class="tab-content block space-y-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 class="text-xl font-bold text-brand-secondary border-b pb-4 mb-4">نصوص الشعار</h3>
                <div class="space-y-4">
                    <div>
                        <label class="block text-sm font-bold text-slate-700 mb-2">اسم البراند (عربي)</label>
                        <input type="text" class="input-premium border bg-slate-50" value="${data.brand.ar}" onchange="updateData('brand.ar', this.value)">
                    </div>
                    <div>
                        <label class="block text-sm font-bold text-slate-700 mb-2">اسم البراند (إنجليزي)</label>
                        <input type="text" class="input-premium border bg-slate-50 dir-ltr" value="${data.brand.en}" onchange="updateData('brand.en', this.value)">
                    </div>
                    <div>
                        <label class="block text-sm font-bold text-slate-700 mb-2">السلوجان الرئيسي</label>
                        <input type="text" class="input-premium border bg-slate-50" value="${data.slogan.main}" onchange="updateData('slogan.main', this.value)">
                    </div>
                    <div>
                        <label class="block text-sm font-bold text-slate-700 mb-2">السلوجان الثانوي (Accent)</label>
                        <input type="text" class="input-premium border bg-slate-50" value="${data.slogan.accent}" onchange="updateData('slogan.accent', this.value)">
                    </div>
                     <div>
                        <label class="block text-sm font-bold text-slate-700 mb-2">الوصف</label>
                        <textarea class="input-premium border bg-slate-50 h-24" onchange="updateData('slogan.description', this.value)">${data.slogan.description}</textarea>
                    </div>
                </div>
            </div>

            <!-- Tab Content: Images -->
            <div id="tab-images" class="tab-content hidden space-y-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 class="text-xl font-bold text-brand-secondary border-b pb-4 mb-4">إدارة الصور</h3>
                <div class="grid md:grid-cols-2 gap-8">
                    <!-- Hero Image -->
                    <div class="space-y-4">
                        <label class="block text-sm font-bold text-slate-700">صورة الخلفية (Hero)</label>
                        <div class="relative aspect-video rounded-xl overflow-hidden bg-slate-100 border-2 border-dashed border-slate-300 group hover:border-brand-primary transition-colors">
                            <img src="${data.images.hero}" id="preview-hero" class="w-full h-full object-cover">
                            <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <label class="cursor-pointer bg-white px-4 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-brand-primary hover:text-white transition">
                                    تغيير الصورة
                                    <input type="file" accept="image/*" class="hidden" onchange="handleImageUpload('hero', this)">
                                </label>
                            </div>
                        </div>
                        <input type="text" class="input-premium border text-xs" placeholder="أو رابط الصورة URL" value="${data.images.hero}" onchange="updateData('images.hero', this.value); document.getElementById('preview-hero').src = this.value">
                    </div>

                    <!-- Product Image -->
                    <div class="space-y-4">
                        <label class="block text-sm font-bold text-slate-700">صورة المنتجات</label>
                        <div class="relative aspect-square rounded-xl overflow-hidden bg-slate-100 border-2 border-dashed border-slate-300 group hover:border-brand-primary transition-colors">
                            <img src="${data.images.products}" id="preview-products" class="w-full h-full object-cover">
                            <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <label class="cursor-pointer bg-white px-4 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-brand-primary hover:text-white transition">
                                    تغيير الصورة
                                    <input type="file" accept="image/*" class="hidden" onchange="handleImageUpload('products', this)">
                                </label>
                            </div>
                        </div>
                         <input type="text" class="input-premium border text-xs" placeholder="أو رابط الصورة URL" value="${data.images.products}" onchange="updateData('images.products', this.value); document.getElementById('preview-products').src = this.value">
                    </div>
                </div>
            </div>

            <!-- Tab Content: Links -->
            <div id="tab-links" class="tab-content hidden space-y-6">
                <!-- Delivery Apps -->
                <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <h3 class="text-xl font-bold text-brand-secondary border-b pb-4 mb-4">تطبيقات التوصيل</h3>
                    <div class="space-y-3">
                        ${data.deliveryApps.map((app, index) => `
                            <div class="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
                                <span class="font-bold w-32 text-slate-700">${app.name}</span>
                                <input type="text" class="input-premium border py-2 text-sm dir-ltr" placeholder="رابط التطبيق..." value="${app.url}" onchange="updateData('deliveryApps.${index}.url', this.value)">
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Social Media -->
                <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <h3 class="text-xl font-bold text-brand-secondary border-b pb-4 mb-4">التواصل الاجتماعي</h3>
                    <div class="space-y-3">
                        ${Object.keys(data.social).map(key => `
                            <div class="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
                                <span class="font-bold w-32 text-slate-700 uppercase">${key}</span>
                                <input type="text" class="input-premium border py-2 text-sm dir-ltr" placeholder="رابط الحساب..." value="${data.social[key]}" onchange="updateData('social.${key}', this.value)">
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- Tab Content: Branches -->
            <div id="tab-branches" class="tab-content hidden space-y-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div class="flex justify-between items-center border-b pb-4 mb-4">
                     <h3 class="text-xl font-bold text-brand-secondary">إدارة الفروع</h3>
                     <button onclick="addRegion()" class="text-xs bg-brand-secondary text-white px-3 py-1 rounded">إضافة منطقة +</button>
                </div>
                
                <div id="branches-list" class="space-y-4">
                    <!-- Rendered via JS to support Add/Remove logic -->
                </div>
            </div>

            <!-- Actions -->
            <div class="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-4 shadow-lg z-40 flex justify-between items-center">
                 <button id="reset-btn" class="text-red-500 font-bold text-sm px-4">استعادة الافتراضي</button>
                 <button id="save-btn" class="btn-primary px-8 py-3 text-base shadow-xl">حفظ التغييرات</button>
            </div>
        </div>
    </div>
  `;
};

// --- Logic Helpers ---

function initDashboard(data) {
    window.dashboardData = data; // Global for simple inline handlers

    // Tab Switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.replace('bg-brand-primary', 'hover:bg-slate-50'));
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.replace('text-white', 'text-slate-600'));

            btn.classList.replace('hover:bg-slate-50', 'bg-brand-primary');
            btn.classList.replace('text-slate-600', 'text-white');

            document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
            document.getElementById(`tab-${btn.dataset.tab}`).classList.remove('hidden');
        });
    });

    // Login logic
    const loginBtn = document.getElementById('login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            const pass = document.getElementById('admin-pass').value;
            // Check passcode ("1234" hardcoded as requested)
            if (pass === "1234") {
                sessionStorage.setItem('admin_session', 'true');
                window.location.reload();
            } else {
                alert("رمز الدخول غير صحيح");
            }
        });
        return;
    }

    // Logout
    document.getElementById('logout-btn')?.addEventListener('click', () => {
        sessionStorage.removeItem('admin_session');
        window.location.reload();
    });

    // Save
    document.getElementById('save-btn')?.addEventListener('click', () => {
        if (saveContent(window.dashboardData)) {
            const btn = document.getElementById('save-btn');
            const originalText = btn.textContent;
            btn.textContent = "تم الحفظ ✓";
            btn.classList.add('bg-green-500');
            setTimeout(() => {
                btn.textContent = originalText;
                btn.classList.remove('bg-green-500');
            }, 2000);
        }
    });

    // Reset
    document.getElementById('reset-btn')?.addEventListener('click', resetContent);

    // Initial Render Branches
    renderBranchesEditor();
}

// Global update handler attached to window
window.updateData = (path, value) => {
    const keys = path.split('.');
    let target = window.dashboardData;
    for (let i = 0; i < keys.length - 1; i++) {
        target = target[keys[i]];
    }
    target[keys[keys.length - 1]] = value;
};

window.handleImageUpload = (key, input) => {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            window.dashboardData.images[key] = e.target.result;
            // Update preview
            document.getElementById(`preview-${key}`).src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
};

window.renderBranchesEditor = () => {
    const container = document.getElementById('branches-list');
    if (!container) return;

    container.innerHTML = window.dashboardData.branches.map((region, rIndex) => `
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div class="flex gap-2 mb-3">
                <input type="text" class="input-premium border py-2 text-sm font-bold text-brand-secondary" 
                       value="${region.region}" 
                       onchange="window.dashboardData.branches[${rIndex}].region = this.value">
                <button onclick="deleteRegion(${rIndex})" class="text-red-500 text-xs px-2">حذف</button>
            </div>
            <div class="space-y-2">
                ${region.branches.map((branch, bIndex) => `
                    <div class="flex gap-2">
                        <input type="text" class="input-premium border py-1.5 text-xs text-slate-600 bg-white" 
                               value="${branch}" 
                               onchange="window.dashboardData.branches[${rIndex}].branches[${bIndex}] = this.value">
                        <button onclick="deleteBranch(${rIndex}, ${bIndex})" class="text-slate-400 hover:text-red-500">×</button>
                    </div>
                `).join('')}
                <button onclick="addBranch(${rIndex})" class="text-xs text-brand-primary font-bold mt-2">+ إضافة فرع</button>
            </div>
        </div>
    `).join('');
};

window.addRegion = () => {
    window.dashboardData.branches.push({ region: "منطقة جديدة", branches: [] });
    renderBranchesEditor();
};

window.deleteRegion = (index) => {
    if (confirm('حذف المنطقة بالكامل؟')) {
        window.dashboardData.branches.splice(index, 1);
        renderBranchesEditor();
    }
};

window.addBranch = (rIndex) => {
    window.dashboardData.branches[rIndex].branches.push("فرع جديد");
    renderBranchesEditor();
};

window.deleteBranch = (rIndex, bIndex) => {
    window.dashboardData.branches[rIndex].branches.splice(bIndex, 1);
    renderBranchesEditor();
};
