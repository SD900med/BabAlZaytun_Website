// ==========================================
    // 1. مصفوفة عناصر الحاسبة (الـ 60 بنداً)
    // ==========================================
    const calculatorItems = [
        { id: 1, ar: "علامات حدود على قواعد مرنة لوح رأسي", en: "Flexible Base Mounted Delineator Post", unitAr: "وحدة", unitEn: "Unit", price: 45 },
        { id: 2, ar: "علامات حدود على قواعد مرنه ، موجة انوبي", en: "Flexible Base Mounted Wave Delineator", unitAr: "وحدة", unitEn: "Unit", price: 45 },
        { id: 3, ar: "خطوط مرور بيضاء عاكسة بلاستيكية حرارية", en: "White Reflective Thermoplastic Road Marking", unitAr: "متر مربع", unitEn: "m²", price: 25 },
        { id: 4, ar: "خطوط مرور صفراء عاكسة بلاستيكية حرارية", en: "Yellow Reflective Thermoplastic Road Marking", unitAr: "متر مربع", unitEn: "m²", price: 25 },
        { id: 5, ar: "المطبات تحذيرية بلاستيكية حرارية عاكسة", en: "Reflective Thermoplastic Speed Humps", unitAr: "متر مربع", unitEn: "m²", price: 80 },
        { id: 6, ar: "علامات تحكم بالمرور عاكسة بلاستيكية حرارية", en: "Reflective Thermoplastic Traffic Symbols", unitAr: "متر مربع", unitEn: "m²", price: 30 },
        { id: 7, ar: "علامات عاكسة (عيون قطط) ألومنيوم نوع (أ)", en: "Aluminum Reflective Road Stud (Type A)", unitAr: "وحدة", unitEn: "Unit", price: 30 },
        { id: 8, ar: "علامات عاكسة (عيون قطط) ألومنيوم نوع (ب)", en: "Aluminum Reflective Road Stud (Type B)", unitAr: "وحدة", unitEn: "Unit", price: 30 },
        { id: 9, ar: "علامات أرضية عاكسة (عيون قطط) نوع (ج)", en: "Reflective Road Stud (Type C)", unitAr: "وحدة", unitEn: "Unit", price: 30 },
        { id: 10, ar: "علامات أرضية عاكسة (عيون قطط) زجاج الكريستال (بلورية)", en: "Crystal Glass Reflective Road Stud", unitAr: "وحدة", unitEn: "Unit", price: 30 },
        { id: 11, ar: "علامات أرضية مضيئة (عيون قطط) تعمل بالطاقة الشمسية", en: "Solar-Powered LED Road Stud", unitAr: "وحدة", unitEn: "Unit", price: 80 },
        { id: 12, ar: "علامات أرضية مضيئة (عيون قطط) تعمل بالطاقة الكهربائية", en: "Electric-Powered LED Road Stud", unitAr: "وحدة", unitEn: "Unit", price: 80 },
        { id: 13, ar: "علامات أرضية مضيئة(عيون قطط) خاصة بالأنفاق تعمل بالطاقة الشمسية", en: "Solar Tunnel LED Road Stud", unitAr: "وحدة", unitEn: "Unit", price: 80 },
        { id: 14, ar: "علامات أرضية بارزة خزفية", en: "Ceramic Raised Pavement Marker", unitAr: "وحدة", unitEn: "Unit", price: 10 },
        { id: 15, ar: "علامات أرضية بارزة خزفية (عاكسة)", en: "Reflective Ceramic Raised Pavement Marker", unitAr: "وحدة", unitEn: "Unit", price: 20 },
        { id: 16, ar: "إعادة تركيب العلامات الأرضية", en: "Reinstallation of Road Studs", unitAr: "وحدة", unitEn: "Unit", price: 700 },
        { id: 17, ar: "مطبات صناعية اسفلتية مع الدهان", en: "Asphalt Speed Humps with Painting", unitAr: "متر مربع", unitEn: "m²", price: 300 },
        { id: 18, ar: "مطبات تنبيه على الأكتاف كشط", en: "Shoulder Rumble Strips (Milled)", unitAr: "متر طولي", unitEn: "Linear Meter", price: 10 },
        { id: 19, ar: "مطبات صناعية مشطية نوع (أ)", en: "Ribbed Speed Hump Type A", unitAr: "متر مربع", unitEn: "m²", price: 35 },
        { id: 20, ar: "مطبات صناعية مشطية نوع (ب)", en: "Ribbed Speed Hump Type B", unitAr: "متر مربع", unitEn: "m²", price: 35 },
        { id: 21, ar: "مطبات اهتزازية بعمق1,2 سم فوق المواصفات", en: "Rumble Strips 1.2 cm Depth", unitAr: "متر مربع", unitEn: "m²", price: 15 },
        { id: 22, ar: "مطبات اصطناعية متنقلة", en: "Portable Speed Humps", unitAr: "وحدة", unitEn: "Unit", price: 100 },
        { id: 23, ar: "ألواح إشارات الطرق", en: "Road Sign Panels", unitAr: "متر مربع", unitEn: "m²", price: 100 },
        { id: 24, ar: "إشارات تحذيرية تعمل بالطاقة الشمسية", en: "Solar Warning Signs", unitAr: "وحدة", unitEn: "Unit", price: 400 },
        { id: 25, ar: "حوامل إشارات (قابلة للانفصال) انبوبية", en: "Breakaway Tubular Sign Posts", unitAr: "وحدة", unitEn: "Unit", price: 300 },
        { id: 26, ar: "علامات كيلومترية (وجه واحد)", en: "Kilometer Marker (Single Face)", unitAr: "وحدة", unitEn: "Unit", price: 300 },
        { id: 27, ar: "علامات كيلومترية (وجهان)", en: "Kilometer Marker (Double Face)", unitAr: "وحدة", unitEn: "Unit", price: 500 },
        { id: 28, ar: "عواكس للحواجز والجدران", en: "Barrier and Wall Reflectors", unitAr: "وحدة", unitEn: "Unit", price: 100 },
        { id: 29, ar: "قاعدة عمود الإشارة", en: "Sign Post Foundation", unitAr: "وحدة", unitEn: "Unit", price: 300 },
        { id: 30, ar: "لوحة للعلامة الكيلومترية", en: "Kilometer Marker Plate", unitAr: "وحدة", unitEn: "Unit", price: 400 },
        { id: 31, ar: "الأعمدة المرنة العاكسة", en: "Flexible Reflective Bollards", unitAr: "وحدة", unitEn: "Unit", price: 50 },
        { id: 32, ar: "شرائح عاكشة خاصة بالحواجز الخرسانية والمعدنية الواقية", en: "Reflective Sheets for Safety Barriers", unitAr: "متر طولي", unitEn: "Linear Meter", price: 100 },
        { id: 33, ar: "وحدات دائمة لقياس حركة المرور - نوع (أ,ب)", en: "Permanent Traffic Count Station Type A/B", unitAr: "وحدة", unitEn: "Unit", price: 1000 },
        { id: 34, ar: "وحدات دائمة لقياس حركة المرور - نوع (ج)", en: "Permanent Traffic Count Station Type C", unitAr: "وحدة", unitEn: "Unit", price: 3000 },
        { id: 35, ar: "وحدات دائمة لقياس حركة المرور - نوع (د)", en: "Permanent Traffic Count Station Type D", unitAr: "وحدة", unitEn: "Unit", price: 3000 },
        { id: 36, ar: "الساتر المعدني لمعبر الجمال", en: "Camel Crossing Metal Barrier", unitAr: "متر طولي", unitEn: "Linear Meter", price: 500 },
        { id: 37, ar: "علامات عاكسة للسياج", en: "Fence Reflectors", unitAr: "وحدة", unitEn: "Unit", price: 50 },
        { id: 38, ar: "وحدات تحذيرية مضيئة بالطاقة الشمسية(زهرة دوار الشمس)", en: "Solar Warning Beacon (Sunflower)", unitAr: "وحدة", unitEn: "Unit", price: 100 },
        { id: 39, ar: "الواح الومنيوم إشارات الطرق تركيب ارضي", en: "Ground Mounted Aluminum Road Signs", unitAr: "متر مربع", unitEn: "m²", price: 400 },
        { id: 40, ar: "إشارات طرق علوية", en: "Overhead Road Signs", unitAr: "متر مربع", unitEn: "m²", price: 500 },
        { id: 41, ar: "حوامل إشارات (قابلة للانفصال) عيون I.P.E", en: "Breakaway IPE Sign Support", unitAr: "كيلوجرام", unitEn: "kg", price: 25 },
        { id: 42, ar: "حوامل إشارات (قابلة للانفصال) عمود واحد I.P.E", en: "Single Post IPE Sign Support", unitAr: "كيلوجرام", unitEn: "kg", price: 25 },
        { id: 43, ar: "حوامل إشارات كابوليه (Cantilever)", en: "Cantilever Sign Support", unitAr: "وحدة", unitEn: "Unit", price: 15000 },
        { id: 44, ar: "حوامل إشارات معلقة (Gantry)", en: "Gantry Sign Support", unitAr: "وحدة", unitEn: "Unit", price: 15000 },
        { id: 45, ar: "علامات الحدود", en: "Boundary Markers", unitAr: "وحدة", unitEn: "Unit", price: 1000 },
        { id: 46, ar: "إزالة الانهيارات الصخرية", en: "Rockfall Removal", unitAr: "متر مكعب", unitEn: "m³", price: 60 },
        { id: 47, ar: "طبقه اسفلتية للتحويلة شاملا الاعمال الترابية", en: "Asphalt Diversion Layer incl. Earthworks", unitAr: "متر مربع", unitEn: "m²", price: 1200 },
        { id: 48, ar: "طرف تثبيت الحواجز المعدنية الرفيعة(طرف امامي)", en: "Thin Metal Guardrail End Terminal (Front)", unitAr: "وحدة", unitEn: "Unit", price: 100 },
        { id: 49, ar: "طرف تثبيت الحواجز المعدنية الرفيعة(طرف خلفي)", en: "Thin Metal Guardrail End Terminal (Rear)", unitAr: "وحدة", unitEn: "Unit", price: 150 },
        { id: 50, ar: "طرف تثبيت الحواجز المعدنية الرفيعة المرتبط بعارضه (W)", en: "W-Beam Guardrail End Terminal", unitAr: "وحدة", unitEn: "Unit", price: 250 },
        { id: 51, ar: "طرف تثبيت الحواجز المعدنية الرفيعة المرتبط بحاجز خرساني", en: "Guardrail End Terminal to Structure/Concrete Barrier", unitAr: "وحدة", unitEn: "Unit", price: 250 },
        { id: 52, ar: "طرف تثبيت مزود بخاصية ماص للصدمات لعارضة W", en: "Energy-Absorbing End Terminal for W-Beam", unitAr: "وحدة", unitEn: "Unit", price: 100000 },
        { id: 53, ar: "طرف تثبيت مزود بخاصية ماص للصدمات لحاجز خرساني", en: "Energy-Absorbing End Terminal for Structure/Barrier", unitAr: "وحدة", unitEn: "Unit", price: 100000 },
        { id: 54, ar: "طرف تثبيت درابزين واق بعارضة Thrie", en: "Thrie-Beam Guardrail End Terminal", unitAr: "وحدة", unitEn: "Unit", price: 5000 },
        { id: 55, ar: "جهاز تخفيف صدمات (HY-DRI) لسرعة اقل من 100كم", en: "Crash Cushion HY-DRI <100 km/h", unitAr: "وحدة", unitEn: "Unit", price: 70000 },
        { id: 56, ar: "جهاز تخفيف صدمات (HY-DRI) لسرعة اكبر من 100كم", en: "Crash Cushion HY-DRI >100 km/h", unitAr: "وحدة", unitEn: "Unit", price: 80000 },
        { id: 57, ar: "حوامل إشارات (قابلة للانفصال) IPE", en: "Breakaway IPE Sign Supports", unitAr: "وحدة", unitEn: "Unit", price: 500 },
        { id: 58, ar: "بردورات خرسانية مصبوبة بالموقع بارتفاع (45) سم", en: "Cast-in-Place Concrete Curb 45 cm", unitAr: "متر طولي", unitEn: "Linear Meter", price: 120 },
        { id: 59, ar: "طلاء المنشاء الخرساني القائم", en: "Painting Existing Concrete Structure", unitAr: "متر مربع", unitEn: "m²", price: 60 },
        { id: 60, ar: "حوامل إشارات علوية", en: "Overhead Sign Supports", unitAr: "وحدة", unitEn: "Unit", price: 15000 }
    ];

    // تعبئة عناصر الحاسبة بأسمائها المطابقة لملفك
    function populateCalculator() {
        const select = document.getElementById('itemSelect') || document.getElementById('calc-service');
        if (!select) return;

        const isEn = document.body.classList.contains('lang-en');
        const selectedValue = select.value;

        select.innerHTML = '';
        calculatorItems.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = isEn 
                ? `${item.en} (${item.price} SAR / ${item.unitEn})` 
                : `${item.ar} (${item.price} ر.س / ${item.unitAr})`;
            select.appendChild(option);
        });

        if (selectedValue) select.value = selectedValue;
    }

    // حساب السعر المطابق لجميع الـ IDs المحتملة
    function calculatePrice() {
        const select = document.getElementById('itemSelect') || document.getElementById('calc-service');
        const qtyInput = document.getElementById('itemQuantity') || document.getElementById('calc-qty');
        const display = document.getElementById('totalPrice') || document.getElementById('price-display');
        const unitDisplay = document.getElementById('unitDisplay');

        if (!select || !qtyInput || !display) return;

        const selectedId = parseInt(select.value) || 1;
        const qty = parseFloat(qtyInput.value) || 0;
        const item = calculatorItems.find(i => i.id === selectedId);

        if (item) {
            const total = qty * item.price;
            const isEn = document.body.classList.contains('lang-en');
            display.textContent = isEn ? `SAR ${total.toLocaleString()}` : `${total.toLocaleString()} ر.س`;
            
            if (unitDisplay) {
                unitDisplay.textContent = isEn 
                    ? `Price per unit: ${item.price} SAR / ${item.unitEn}` 
                    : `سعر الوحدة: ${item.price} ر.س / ${item.unitAr}`;
            }
        }
    }

    // ==========================================
    // 2. Toggle Mobile Menu
    // ==========================================
    function toggleMobileMenu() {
        const nav = document.getElementById('navLinks');
        if(nav) nav.classList.toggle('active');
    }

    function closeMobileMenu() {
        const nav = document.getElementById('navLinks');
        if(window.innerWidth <= 992 && nav) {
            nav.classList.remove('active');
        }
    }

    // ==========================================
    // 3. Language Toggle
    // ==========================================
    function toggleLanguage() {
        const body = document.body;
        const btn = document.querySelector('.lang-switch-btn');
        
        if (body.classList.contains('lang-en')) {
            body.classList.remove('lang-en');
            body.setAttribute('dir', 'rtl');
            body.setAttribute('lang', 'ar');
            if (btn) btn.textContent = 'English';
        } else {
            body.classList.add('lang-en');
            body.setAttribute('dir', 'ltr');
            body.setAttribute('lang', 'en');
            if (btn) btn.textContent = 'العربية';
        }
        
        populateCalculator();
        calculatePrice();
        updateProgressText();
    }

    // ==========================================
    // 4. Services Tabs
    // ==========================================
    function openTab(evt, tabId) {
        const contents = document.querySelectorAll('.tab-content');
        contents.forEach(content => content.classList.remove('active'));

        const buttons = document.querySelectorAll('.tab-btn');
        buttons.forEach(btn => btn.classList.remove('active'));

        const tabElem = document.getElementById(tabId);
        if (tabElem) tabElem.classList.add('active');
        if (evt && evt.currentTarget) evt.currentTarget.classList.add('active');
    }

    // ==========================================
    // 5. Presentation Mode Script
    // ==========================================
    let currentSlide = 0;

    function openPresentation() {
        const mode = document.getElementById('presentationMode');
        if(mode) mode.classList.add('active');
        currentSlide = 0;
        showSlide(currentSlide);
        document.body.style.overflow = 'hidden';
    }

    function closePresentation() {
        const mode = document.getElementById('presentationMode');
        if(mode) mode.classList.remove('active');
        document.body.style.overflow = '';
    }

    function changeSlide(direction) {
        const slides = document.querySelectorAll('#presentationMode .slide');
        if(slides.length === 0) return;

        currentSlide += direction;
        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        showSlide(currentSlide);
    }

    function showSlide(index) {
        const slides = document.querySelectorAll('#presentationMode .slide');
        slides.forEach(slide => slide.classList.remove('active'));
        if (slides[index]) slides[index].classList.add('active');
        updateProgressText();
    }

    function updateProgressText() {
        const isEn = document.body.classList.contains('lang-en');
        const progress = document.getElementById('presProgress');
        const slides = document.querySelectorAll('#presentationMode .slide');
        if (!progress || slides.length === 0) return;
        
        const total = slides.length;
        const current = currentSlide + 1;
        
        progress.textContent = isEn ? `Slide ${current} of ${total}` : `الشريحة ${current} من ${total}`;
    }

    // ==========================================
    // 6. Slider Logic
    // ==========================================
    document.querySelectorAll(".slider").forEach(slider => {
        const slidesList = slider.querySelectorAll(".slide");
        const next = slider.querySelector(".next");
        const prev = slider.querySelector(".prev");

        let index = 0;

        function showSliderSlide(i) {
            slidesList.forEach(slide => slide.classList.remove("active"));
            if (slidesList[i]) slidesList[i].classList.add("active");
        }

        if (next) {
            next.addEventListener("click", () => {
                index = (index + 1) % slidesList.length;
                showSliderSlide(index);
            });
        }

        if (prev) {
            prev.addEventListener("click", () => {
                index = (index - 1 + slidesList.length) % slidesList.length;
                showSliderSlide(index);
            });
        }

        setInterval(() => {
            if (slidesList.length > 0) {
                index = (index + 1) % slidesList.length;
                showSliderSlide(index);
            }
        }, 4000);
    });

    // ==========================================
    // Initialize on Load
    // ==========================================
    document.addEventListener('DOMContentLoaded', () => {
        populateCalculator();
        calculatePrice();
        
        const calcSelect = document.getElementById('itemSelect') || document.getElementById('calc-service');
        const calcQty = document.getElementById('itemQuantity') || document.getElementById('calc-qty');
        
        if (calcSelect) calcSelect.addEventListener('change', calculatePrice);
        if (calcQty) calcQty.addEventListener('input', calculatePrice);
    });
	/* ==========================================
   Gardens Slider
========================================== */

let gardenIndex = 0;

const gardenSlider = document.getElementById("gardens-slider");

if (gardenSlider) {

    const gardenSlides = gardenSlider.querySelectorAll(".slider-image");
    const prevGarden = document.getElementById("garden-prev");
    const nextGarden = document.getElementById("garden-next");

    function showGardenSlide(index) {

        gardenSlides.forEach((slide) => {
            slide.classList.remove("active");
        });

        gardenSlides[index].classList.add("active");
    }

    if (nextGarden) {
        nextGarden.addEventListener("click", function () {
            gardenIndex++;

            if (gardenIndex >= gardenSlides.length) {
                gardenIndex = 0;
            }

            showGardenSlide(gardenIndex);
        });
    }

    if (prevGarden) {
        prevGarden.addEventListener("click", function () {
            gardenIndex--;

            if (gardenIndex < 0) {
                gardenIndex = gardenSlides.length - 1;
            }

            showGardenSlide(gardenIndex);
        });
    }

    // تشغيل أول صورة
    showGardenSlide(gardenIndex);

    // تبديل تلقائي كل 4 ثوانٍ
    setInterval(function () {

        gardenIndex++;

        if (gardenIndex >= gardenSlides.length) {
            gardenIndex = 0;
        }

        showGardenSlide(gardenIndex);

    }, 4000);

}