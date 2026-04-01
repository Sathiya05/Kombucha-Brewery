// Kombucha Brewery Navigation Bar
// Theme: Guava Green (#8FC140), Bright Orange (#FF7043), White, and Deep Slate

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
<footer class=" w-full transition-colors duration-500 bg-slate-50 dark:bg-[#0f172a] border-t-4 relative overflow-hidden" style="border-top-color: var(--kombu-green);">
  
  <div class="absolute top-0 left-0 w-64 h-64 bg-[#8FC140]/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
  <div class="absolute bottom-0 right-0 w-80 h-80 bg-[#FF7043]/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3"></div>

  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid gap-12 grid-cols-1 md:grid-cols-12">

    <div class="md:col-span-12 lg:col-span-4 pr-0 lg:pr-8">
      <a href="index.html" class="flex items-center space-x-2 rtl:space-x-reverse group mb-6">
        <i class="fas fa-leaf text-2xl drop-shadow-sm transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" style="color: var(--kombu-green);"></i>
        <span class="text-xl font-black tracking-tighter uppercase text-gray-900 dark:text-white">
          Ferma<span style="color: var(--kombu-orange);">Fizz</span>
        </span>
      </a>
      <p class="text-sm font-semibold text-gray-600 dark:text-slate-400 leading-relaxed mb-8">
        Small-batch, artisanal kombucha brewed with 100% organic ingredients. We don't pasteurize, filter, or dilute. Just pure, raw, probiotic goodness for your gut.
      </p>
      
      <div class="flex gap-3">
        <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 text-gray-500 dark:text-slate-400 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:text-white dark:hover:text-white hover:border-transparent hover:scale-110 shadow-sm" onmouseover="this.style.backgroundColor='var(--kombu-orange)'" onmouseout="this.style.backgroundColor=''">
          <i class="fab fa-instagram text-lg"></i>
        </a>
        <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 text-gray-500 dark:text-slate-400 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:text-white dark:hover:text-white hover:border-transparent hover:scale-110 shadow-sm" onmouseover="this.style.backgroundColor='var(--kombu-green)'" onmouseout="this.style.backgroundColor=''">
          <i class="fab fa-tiktok text-lg"></i>
        </a>
        <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 text-gray-500 dark:text-slate-400 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:text-white dark:hover:text-white hover:border-transparent hover:scale-110 shadow-sm" onmouseover="this.style.backgroundColor='var(--kombu-orange)'" onmouseout="this.style.backgroundColor=''">
          <i class="fab fa-twitter text-lg"></i>
        </a>
        <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 text-gray-500 dark:text-slate-400 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:text-white dark:hover:text-white hover:border-transparent hover:scale-110 shadow-sm" onmouseover="this.style.backgroundColor='var(--kombu-green)'" onmouseout="this.style.backgroundColor=''">
          <i class="fab fa-facebook-f text-lg"></i>
        </a>
      </div>
    </div>

    <div class="md:col-span-6 lg:col-span-2">
      <h3 class="text-sm font-black mb-6 uppercase tracking-widest text-gray-900 dark:text-white border-b-2 inline-block pb-1" style="border-color: var(--kombu-green);">Quick Links</h3>
      <ul class="space-y-4 text-sm font-bold">
        <li>
          <a href="index.html" class="footer-link flex items-center text-gray-600 dark:text-slate-400 transition-all duration-300">
            <i class="fas fa-chevron-right text-[10px] mr-2 opacity-0 -ml-4 transition-all duration-300" style="color: var(--kombu-orange);"></i>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="about.html" class="footer-link flex items-center text-gray-600 dark:text-slate-400 transition-all duration-300">
            <i class="fas fa-chevron-right text-[10px] mr-2 opacity-0 -ml-4 transition-all duration-300" style="color: var(--kombu-orange);"></i>
            <span>About</span>
          </a>
        </li>
        <li>
          <a href="process.html" class="footer-link flex items-center text-gray-600 dark:text-slate-400 transition-all duration-300">
            <i class="fas fa-chevron-right text-[10px] mr-2 opacity-0 -ml-4 transition-all duration-300" style="color: var(--kombu-orange);"></i>
            <span>Process</span>
          </a>
        </li>
        <li>
          <a href="taproom.html" class="footer-link flex items-center text-gray-600 dark:text-slate-400 transition-all duration-300">
            <i class="fas fa-chevron-right text-[10px] mr-2 opacity-0 -ml-4 transition-all duration-300" style="color: var(--kombu-orange);"></i>
            <span>Visit Taproom</span>
          </a>
        </li>
      </ul>
    </div>
    
    <div class="md:col-span-6 lg:col-span-2">
      <h3 class="text-sm font-black mb-6 uppercase tracking-widest text-gray-900 dark:text-white border-b-2 inline-block pb-1" style="border-color: var(--kombu-orange);">Support</h3>
      <ul class="space-y-4 text-sm font-bold">
        <li>
          <a href="faq.html" class="footer-link flex items-center text-gray-600 dark:text-slate-400 transition-all duration-300">
            <i class="fas fa-chevron-right text-[10px] mr-2 opacity-0 -ml-4 transition-all duration-300" style="color: var(--kombu-green);"></i>
            <span>Kombucha FAQ</span>
          </a>
        </li>
        <li>
          <a href="shipping.html" class="footer-link flex items-center text-gray-600 dark:text-slate-400 transition-all duration-300">
            <i class="fas fa-chevron-right text-[10px] mr-2 opacity-0 -ml-4 transition-all duration-300" style="color: var(--kombu-green);"></i>
            <span>Shipping Info</span>
          </a>
        </li>
        <li>
          <a href="wholesale.html" class="footer-link flex items-center text-gray-600 dark:text-slate-400 transition-all duration-300">
            <i class="fas fa-chevron-right text-[10px] mr-2 opacity-0 -ml-4 transition-all duration-300" style="color: var(--kombu-green);"></i>
            <span>Wholesale</span>
          </a>
        </li>
        <li>
          <a href="contact.html" class="footer-link flex items-center text-gray-600 dark:text-slate-400 transition-all duration-300">
            <i class="fas fa-chevron-right text-[10px] mr-2 opacity-0 -ml-4 transition-all duration-300" style="color: var(--kombu-green);"></i>
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="md:col-span-12 lg:col-span-4">
      <h3 class="text-sm font-black mb-6 uppercase tracking-widest text-gray-900 dark:text-white border-b-2 inline-block pb-1" style="border-color: var(--kombu-green);">Join the Culture</h3>
      <p class="text-sm text-gray-600 dark:text-slate-400 font-semibold mb-5 leading-relaxed">
        Sign up for exclusive drops, secret taproom flavors, and <span class="text-[#FF7043] font-black">10% off</span> your first online order.
      </p>

      <form class="flex flex-col sm:flex-row gap-2" id="newsletterForm">
        <input type="email" placeholder="Your email address..." class="flex-1 px-5 py-3.5 bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-semibold rounded-full border-2 border-gray-200 dark:border-slate-700 focus:outline-none focus:border-[#8FC140] dark:focus:border-[#8FC140] transition-colors shadow-sm w-full">
        <button type="submit" class="px-8 py-3.5 font-black uppercase tracking-wider text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 bg-gradient-to-r from-[#8FC140] to-[#FF7043] hover:from-[#7da838] hover:to-[#e6653c] w-full sm:w-auto">
          Subscribe
        </button>
      </form>

    </div>
  </div>

  <div class="border-t border-gray-200 dark:border-slate-800 relative z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row gap-4 justify-between items-center text-xs font-bold text-gray-500 dark:text-slate-500">
      
      <div class="flex items-center gap-2">
        <p>© 2026 FermaFizz Kombucha. All rights reserved.</p>
      </div>

      <div class="flex gap-6">
        <a href="#" class="hover:text-[#FF7043] transition-colors duration-300">Privacy Policy</a>
        <a href="#" class="hover:text-[#FF7043] transition-colors duration-300">Terms of Service</a>
        <a href="#" class="hover:text-[#FF7043] transition-colors duration-300">Refunds</a>
      </div>
    </div>
  </div>
</footer>
`;

  /* ===============================
     FOOTER INTERACTIVITY
  =============================== */
  
  // Newsletter form submission
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        alert('✨ Welcome to the Culture! Check your inbox for your 10% off code.');
        emailInput.value = '';
      } else {
        alert('Please enter a valid email address to join.');
      }
    });
  }

  /* ===============================
     RTL SUPPORT (Flipping Icons)
  =============================== */
  function updateFooterRTL() {
    const isRTL = document.documentElement.dir === 'rtl';
    const footer = document.querySelector('footer');
    
    if (isRTL) {
      footer?.classList.add('rtl');
    } else {
      footer?.classList.remove('rtl');
    }
  }

  const rtlObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'dir') {
        updateFooterRTL();
      }
    });
  });

  rtlObserver.observe(document.documentElement, { attributes: true });
  updateFooterRTL();

  /* ===============================
     INJECT CUSTOM STYLES
  =============================== */
  const footerStyles = document.createElement('style');
  footerStyles.textContent = `
    :root {
      --kombu-green: #8FC140;
      --kombu-orange: #FF7043;
    }

    /* Custom Link Hover Animation (Bubbly slide right) */
    .footer-link:hover {
      color: var(--kombu-orange) !important;
      transform: translateX(8px);
    }
    
    .footer-link:hover i.fa-chevron-right {
      opacity: 1;
      margin-left: 0;
    }

    /* RTL specific hover animation */
    footer.rtl .footer-link:hover {
      transform: translateX(-8px);
    }
    
    footer.rtl .footer-link i.fa-chevron-right {
      transform: scaleX(-1);
      margin-right: -1rem;
      margin-left: 0.5rem;
    }
    
    footer.rtl .footer-link:hover i.fa-chevron-right {
      margin-right: 0;
    }
    
    [dir="rtl"] footer .pr-0.lg\\:pr-8 {
      padding-right: 0;
      padding-left: 2rem;
    }
  `;
  document.head.appendChild(footerStyles);
});