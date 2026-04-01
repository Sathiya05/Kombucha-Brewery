// Kombucha Brewery Navigation Bar
// Theme: Guava Green (#8FC140), Bright Orange (#FF7043), White, and Deep Slate

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  navbar.innerHTML = `
<nav class="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md dark:bg-[#0f172a]/90">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-20 md:h-24">

      <a href="index.html" class="flex items-center space-x-2 rtl:space-x-reverse group">
        <i class="fas fa-leaf text-2xl drop-shadow-sm transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" style="color: var(--kombu-green);"></i>
        <span class="text-xl font-black tracking-tighter uppercase dark:text-white text-gray-900">
          Ferma<span style="color: var(--kombu-orange);">Fizz</span>
        </span>
      </a>

      <div class="hidden xl:flex flex-1 justify-center space-x-2 rtl:space-x-reverse items-center font-bold text-sm tracking-wide">

        <div class="relative">
          <button id="homeBtn" class="flex items-center space-x-1 px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#8fc14020] text-gray-800 dark:text-gray-100 group">
            <span>Home</span>
            <i class="fas fa-chevron-down text-xs transition-transform duration-300 group-hover:rotate-180" style="color: var(--kombu-green);"></i>
          </button>
          <div id="homeMenu" class="hidden absolute mt-3 w-48 bg-white dark:bg-[#1e293b] rounded-2xl shadow-xl py-3 z-50 transform transition-all duration-200 origin-top border border-gray-100 dark:border-slate-700">
            <a href="index.html" class="home-link block px-5 py-2 transition-all duration-200 hover:translate-x-1 text-gray-800 dark:text-gray-200 hover:text-[#FF7043] dark:hover:text-[#FF7043]">Home 1</a>
            <a href="home2.html" class="home-link block px-5 py-2 transition-all duration-200 hover:translate-x-1 text-gray-800 dark:text-gray-200 hover:text-[#FF7043] dark:hover:text-[#FF7043]">Home 2</a>
          </div>
        </div>
         <a href="about.html" class="nav-link px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#8fc14020] hover:text-[#8FC140] text-gray-800 dark:text-gray-100">
          About
        </a>
        <a href="blog.html" class="nav-link px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#8fc14020] hover:text-[#8FC140] text-gray-800 dark:text-gray-100">
          Blog
        </a>
        <a href="flavours.html" class="nav-link px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#8fc14020] hover:text-[#8FC140] text-gray-800 dark:text-gray-100">
          Flavors
        </a>
        <a href="process.html" class="nav-link px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#8fc14020] hover:text-[#8FC140] text-gray-800 dark:text-gray-100">
          Process
        </a>
        <a href="shop.html" class="nav-link px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#8fc14020] hover:text-[#8FC140] text-gray-800 dark:text-gray-100">
          Shop
        </a>
        <a href="taproom.html" class="nav-link px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#8fc14020] hover:text-[#8FC140] text-gray-800 dark:text-gray-100">
          Taproom
        </a>
        <a href="contact.html" class="nav-link px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#8fc14020] hover:text-[#8FC140] text-gray-800 dark:text-gray-100">
          Contact
        </a>
      </div>

      <div class="hidden xl:flex items-center space-x-4 rtl:space-x-reverse">
        
         <div class="flex items-center bg-gray-100/50 dark:bg-slate-800/50 rounded-full p-1 border border-gray-200 dark:border-slate-700 backdrop-blur-sm">
          <button id="rtlToggle" class="w-10 h-8 flex items-center justify-center text-xs font-bold text-gray-500 dark:text-gray-400 hover:text-[#8FC140] transition-colors rounded-full">
            <span class="rtl-text">RTL</span>
          </button>
          <div class="w-px h-4 bg-gray-300 dark:bg-slate-600 mx-1"></div>
         <button id="darkToggle" class="w-10 h-8 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-[#FF7043] transition-colors rounded-full">
            <i id="darkIcon" class="fas fa-moon text-md"></i>
          </button>
        </div>

        <div class="flex space-x-2 rtl:space-x-reverse">
         <a href="login.html" class="px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wide text-white transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 bg-gradient-to-r from-[#8FC140] to-[#FF7043] hover:from-[#7da838] hover:to-[#e6653c] border-none">
            Log In
          </a>
          <a href="signup.html" class="px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wide text-white transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 bg-gradient-to-r from-[#8FC140] to-[#FF7043] hover:from-[#7da838] hover:to-[#e6653c] border-none">
            Sign Up
          </a>
        </div>
      </div>

      <div class="flex xl:hidden items-center space-x-2">
        <button id="mobileBtn" class="w-12 h-12 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-[#8fc14020] flex items-center justify-center transition-all duration-300" style="color: var(--kombu-green);">
          <i id="mobileIcon" class="fas fa-bars text-xl"></i>
        </button>
      </div>
    </div>

    <div id="mobileMenu" class="xl:hidden hidden py-6 border-t transition-all duration-300 dark:border-slate-700 border-gray-200">
      
      <div class="space-y-2 font-bold tracking-wide">
        
        <div class="relative">
          <button id="mobileHomeBtn" class="w-full text-gray-800 dark:text-white flex items-center justify-between px-5 py-3 transition-all duration-300 rounded-2xl hover:bg-[#8fc14015] group">
            <span class="flex items-center gap-3">Home</span>
            <i id="mobileHomeIcon" class="fas fa-chevron-down text-xs transition-all duration-300 group-hover:rotate-180" style="color: var(--kombu-orange);"></i>
          </button>
          <div id="mobileHomeMenu" class="hidden mt-2 ml-4 w-[95%] text-gray-600 dark:text-gray-400 rounded-xl py-2 space-y-2 border-l-4" style="border-color: var(--kombu-green);">
            <a href="index.html" class="home-link block px-6 py-2 transition-all duration-200 hover:translate-x-2 hover:text-[#8FC140] dark:hover:text-[#8FC140]">Home 1</a>
            <a href="home2.html" class="home-link block px-6 py-2 transition-all duration-200 hover:translate-x-2 hover:text-[#8FC140] dark:hover:text-[#8FC140]">Home 2</a>
          </div>
        </div>
        <a href="about.html" class="flex items-center text-gray-800 dark:text-white px-5 py-3 transition-all duration-300 rounded-2xl hover:bg-[#8fc14015] hover:translate-x-1">About</a>
                <a href="blog.html" class="flex items-center text-gray-800 dark:text-white px-5 py-3 transition-all duration-300 rounded-2xl hover:bg-[#8fc14015] hover:translate-x-1">Blog</a>

        <a href="flavours.html" class="flex items-center text-gray-800 dark:text-white px-5 py-3 transition-all duration-300 rounded-2xl hover:bg-[#8fc14015] hover:translate-x-1">Flavors</a>
        <a href="process.html" class="flex items-center text-gray-800 dark:text-white px-5 py-3 transition-all duration-300 rounded-2xl hover:bg-[#8fc14015] hover:translate-x-1">Process</a>
       <a href="shop.html" class="flex items-center text-gray-800 dark:text-white px-5 py-3 transition-all duration-300 rounded-2xl hover:bg-[#8fc14015] hover:translate-x-1">Shop</a>

        <a href="taproom.html" class="flex items-center text-gray-800 dark:text-white px-5 py-3 transition-all duration-300 rounded-2xl hover:bg-[#8fc14015] hover:translate-x-1">Taproom</a>
        <a href="contact.html" class="flex items-center text-gray-800 dark:text-white px-5 py-3 transition-all duration-300 rounded-2xl hover:bg-[#8fc14015] hover:translate-x-1">Contact</a>
      </div>

      <div class="mt-8 pt-6 pb-4 border-t dark:border-slate-700 border-gray-200 space-y-6">
         <div class="flex justify-center w-full">
           <div class="flex items-center bg-gray-100/50 dark:bg-slate-800/50 rounded-full p-1.5 border border-gray-200 dark:border-slate-700">
            <button id="mobileRtlToggle" class="w-16 h-10 flex items-center justify-center text-xs font-bold text-gray-500 dark:text-gray-400 hover:text-[#8FC140] transition-colors rounded-full">
              <span class="rtl-text">RTL</span>
            </button>
            <div class="w-px h-6 bg-gray-300 dark:bg-slate-600 mx-2"></div>
            <button id="mobileDarkToggle" class="w-16 h-10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-[#FF7043] transition-colors rounded-full">
              <i id="mobileDarkIcon" class="fas fa-moon text-lg"></i>
            </button>
          </div>
        </div>

        <div class="flex flex-col w-full gap-3 px-4">
          <a href="login.html" class="w-full px-5 py-3.5 font-bold uppercase tracking-wider text-center text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg bg-gradient-to-r from-[#8FC140] to-[#FF7043]">
            Log In
          </a>
          <a href="signup.html" class="w-full px-5 py-3.5 font-bold uppercase tracking-wider text-center text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg bg-gradient-to-r from-[#8FC140] to-[#FF7043]">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
`;

  /* ===============================
     INJECT CUSTOM CSS VARIABLES & STYLES
  =============================== */
  const customStyles = document.createElement('style');
  customStyles.textContent = `
    :root {
      --kombu-green: #8FC140;
      --kombu-orange: #FF7043;
    }

    body {
      transition: background-color 0.3s ease, color 0.3s ease;
    }
    
    /* Sleek slate dark mode instead of pure black */
    html.dark body {
      background-color: #0f172a; 
      color: #f8fafc;
    }

    /* Active link styles - Bubble highlight effect */
    .active-link {
      color: var(--kombu-green) !important;
      background-color: rgba(143, 193, 64, 0.1) !important;
    }
    
    .home-link.active-link {
      color: var(--kombu-orange) !important;
      background-color: transparent !important;
    }

    /* RTL Specific Styles */
    [dir="rtl"] .space-x-1 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 1; }
    [dir="rtl"] .space-x-2 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 1; }
    [dir="rtl"] .space-x-4 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 1; }
    [dir="rtl"] .ml-4 { margin-left: 0; margin-right: 1rem; border-left: none; border-right: 4px solid var(--kombu-green); }

    /* Mobile Menu Animation */
    #mobileMenu { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); max-height: calc(100vh - 5rem); overflow-y: auto; }
    #mobileMenu:not(.hidden) { animation: slideDown 0.3s ease-out; }
    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-10px) scale(0.98); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    body { overflow-x: hidden; }
  `;
  document.head.appendChild(customStyles);

  /* ===============================
     ACTIVE NAV LINK HIGHLIGHT
  =============================== */
  const currentPage = window.location.pathname.split("/").pop();

  const homeBtn = document.getElementById("homeBtn");
  const mobileHomeBtn = document.getElementById("mobileHomeBtn");
  const homeLinks = document.querySelectorAll(".home-link");
  const allNavLinks = document.querySelectorAll("a[href]");
  const navButtons = [homeBtn, mobileHomeBtn].filter(btn => btn);

  const homePages = ['', 'index.html', 'home1.html', 'home2.html', './', '/'];
  const isHomePageActive = homePages.includes(currentPage);

  allNavLinks.forEach(link => { link.classList.remove("active-link"); });
  navButtons.forEach(btn => { if (btn) btn.classList.remove("active-link"); });

  if (isHomePageActive) {
    navButtons.forEach(btn => { if (btn) btn.classList.add("active-link"); });
  }

  homeLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage ||
      (currentPage === '' && href === 'index.html') ||
      (currentPage === 'home1.html' && href === 'home1.html')) {
      link.classList.add("active-link");
    }
  });

  allNavLinks.forEach(link => {
    if (link.querySelector('i') || link.querySelector('span')?.classList.contains('text-2xl')) return;
    if (link.classList.contains('home-link')) return;

    const href = link.getAttribute('href');
    if (!href || homePages.includes(href)) return;

    if (href === currentPage) { link.classList.add("active-link"); }
  });

  /* ===============================
     DESKTOP DROPDOWNS
  =============================== */
  const homeMenu = document.getElementById("homeMenu");

  homeBtn?.addEventListener("click", e => {
    e.stopPropagation();
    homeMenu?.classList.toggle("hidden");
  });

  /* ===============================
     MOBILE DROPDOWNS
  =============================== */
  const mobileHomeMenu = document.getElementById("mobileHomeMenu");
  const mobileHomeIcon = document.getElementById("mobileHomeIcon");

  mobileHomeBtn?.addEventListener("click", e => {
    e.stopPropagation();
    const isHidden = mobileHomeMenu?.classList.toggle("hidden");
    if (mobileHomeIcon) {
      mobileHomeIcon.className = isHidden
        ? "fas fa-chevron-down text-xs transition-all duration-300"
        : "fas fa-chevron-up text-xs transition-all duration-300";
    }
  });

  /* ===============================
     MOBILE MENU TOGGLE WITH CLOSE ICON
  =============================== */
  const mobileBtn = document.getElementById("mobileBtn");
  const mobileIcon = document.getElementById("mobileIcon");
  const mobileMenu = document.getElementById("mobileMenu");

  if (mobileBtn && mobileIcon && mobileMenu) {
    mobileBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      mobileMenu.classList.toggle("hidden");

      if (mobileMenu.classList.contains("hidden")) {
        mobileIcon.className = "fas fa-bars text-xl";
      } else {
        mobileIcon.className = "fas fa-times text-xl";
        if (mobileHomeMenu) mobileHomeMenu.classList.add("hidden");
        if (mobileHomeIcon) mobileHomeIcon.className = "fas fa-chevron-down text-xs transition-all duration-300";
      }
    });

    document.addEventListener("click", function (e) {
      if (!mobileMenu.classList.contains("hidden") && !mobileBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add("hidden");
        if (mobileIcon) mobileIcon.className = "fas fa-bars text-xl";
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1280) { // xl breakpoint
        if (!mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.add("hidden");
          if (mobileIcon) mobileIcon.className = "fas fa-bars text-xl";
        }
      }
    });

    if (mobileMenu) {
      mobileMenu.addEventListener("click", function (e) { e.stopPropagation(); });
    }
  }

  document.addEventListener("click", () => {
    homeMenu?.classList.add("hidden");
  });

  /* ===============================
     RTL MODE
  =============================== */
  const rtlToggle = document.getElementById("rtlToggle");
  const mobileRtlToggle = document.getElementById("mobileRtlToggle");

  function toggleRTL() {
    const isRTL = document.documentElement.dir === "rtl";
    document.documentElement.dir = isRTL ? "ltr" : "rtl";

    if (rtlToggle) rtlToggle.textContent = isRTL ? "RTL" : "LTR";
    const mobileRtlSpan = mobileRtlToggle?.querySelector(".rtl-text");
    if (mobileRtlSpan) mobileRtlSpan.textContent = isRTL ? "RTL" : "LTR";

    localStorage.setItem("Kombucha-rtl", !isRTL);
  }

  rtlToggle?.addEventListener("click", toggleRTL);
  mobileRtlToggle?.addEventListener("click", toggleRTL);

  const savedRTL = localStorage.getItem("Kombucha-rtl") === "true";
  if (savedRTL) {
    document.documentElement.dir = "rtl";
    if (rtlToggle) rtlToggle.textContent = "LTR";
    const mobileRtlSpan = mobileRtlToggle?.querySelector(".rtl-text");
    if (mobileRtlSpan) mobileRtlSpan.textContent = "LTR";
  }

  /* ===============================
     DARK MODE
  =============================== */
  const darkToggle = document.getElementById("darkToggle");
  const mobileDarkToggle = document.getElementById("mobileDarkToggle");
  const darkIcon = document.getElementById("darkIcon");
  const mobileDarkIcon = document.getElementById("mobileDarkIcon");

  function updateThemeIcons(isDark) {
    if (darkIcon) darkIcon.className = isDark ? "fas fa-sun text-md" : "fas fa-moon text-md";
    if (mobileDarkIcon) mobileDarkIcon.className = isDark ? "fas fa-sun text-lg" : "fas fa-moon text-lg";
  }

  const savedDarkMode = localStorage.getItem("Kombucha-dark") === "true";
  if (savedDarkMode) {
    document.documentElement.classList.add("dark");
    updateThemeIcons(true);
  } else {
    document.documentElement.classList.remove("dark");
    updateThemeIcons(false);
  }

  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("Kombucha-dark", isDark);
    updateThemeIcons(isDark);
  }

  darkToggle?.addEventListener("click", toggleTheme);
  mobileDarkToggle?.addEventListener("click", toggleTheme);

});