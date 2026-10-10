/**
 * PHONE CULTURE — CINEMATIC GSAP ANIMATION ENGINE
 * Ultra-premium preloader with official 3D logo aura, cursor interactions, & ScrollTrigger
 */

// Initialize GSAP & ScrollTrigger if loaded
document.addEventListener("DOMContentLoaded", () => {
  initSignaturePreloader();
  initCustomCursor();
  initPageTransitions();
  initScrollAnimations();
});

/* ==========================================================================
   1. SIGNATURE PRELOADER WITH OFFICIAL 3D LOGO
   ========================================================================== */
function initSignaturePreloader() {
  const preloader = document.getElementById("site-preloader");
  const progressFill = document.querySelector(".preloader-progress-fill");
  const statusText = document.querySelector(".preloader-status-text");

  if (!preloader) return;

  // Check if session already loaded to avoid repetitive long wait on same session navigation
  const hasLoadedBefore = sessionStorage.getItem("pc_preloaded_session");

  let progress = 0;
  const speed = hasLoadedBefore ? 15 : 25; // Faster if returning

  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 8) + 4;
    if (progress > 100) progress = 100;

    if (progressFill) progressFill.style.width = `${progress}%`;
    if (statusText) statusText.textContent = `${progress}% • LUXURY SHOWROOM`;

    if (progress === 100) {
      clearInterval(interval);
      setTimeout(() => {
        dismissPreloader(preloader);
      }, 250);
    }
  }, speed);
}

function dismissPreloader(preloader) {
  sessionStorage.setItem("pc_preloaded_session", "true");

  if (typeof gsap !== "undefined") {
    const tl = gsap.timeline({
      onComplete: () => {
        preloader.classList.add("loaded");
        triggerHeroEntrance();
      }
    });

    tl.to(".preloader-content", {
      scale: 1.05,
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut"
    })
    .to(preloader, {
      yPercent: -100,
      duration: 0.6,
      ease: "power3.inOut"
    });
  } else {
    preloader.style.transition = "opacity 0.5s ease";
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.classList.add("loaded");
      triggerHeroEntrance();
    }, 500);
  }
}

/* ==========================================================================
   2. HERO SECTION GSAP ENTRANCE
   ========================================================================== */
function triggerHeroEntrance() {
  if (typeof gsap === "undefined") return;

  gsap.fromTo(".hero-eyebrow", 
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
  );

  gsap.fromTo(".hero-title", 
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, delay: 0.1, ease: "power4.out" }
  );

  gsap.fromTo(".hero-description", 
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.7, delay: 0.25, ease: "power3.out" }
  );

  gsap.fromTo(".hero-actions", 
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, delay: 0.35, ease: "power3.out" }
  );

  gsap.fromTo(".hero-card-display", 
    { opacity: 0, scale: 0.94, y: 40 },
    { opacity: 1, scale: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" }
  );

  gsap.fromTo(".hero-floating-spec", 
    { opacity: 0, x: 20 },
    { opacity: 1, x: 0, duration: 0.8, delay: 0.5, ease: "power3.out" }
  );
}

/* ==========================================================================
   3. CUSTOM CURSOR (DESKTOP)
   ========================================================================== */
function initCustomCursor() {
  const dot = document.querySelector(".custom-cursor-dot");
  const ring = document.querySelector(".custom-cursor-ring");
  const textEl = document.querySelector(".custom-cursor-text");

  if (!dot || !ring || window.innerWidth < 1024) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  function renderRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(renderRing);
  }
  renderRing();

  // Attach hover states to products & interactive elements
  document.addEventListener("mouseover", (e) => {
    const target = e.target;

    if (target.closest(".product-card") || target.closest(".apple-card-large")) {
      ring.className = "custom-cursor-ring cursor-view";
      if (textEl) textEl.textContent = "VIEW";
    } else if (target.closest(".category-card") || target.closest(".instagram-item")) {
      ring.className = "custom-cursor-ring cursor-explore";
      if (textEl) textEl.textContent = "EXPLORE";
    } else if (target.closest("button") || target.closest("a") || target.closest(".btn")) {
      ring.className = "custom-cursor-ring cursor-hover";
      if (textEl) textEl.textContent = "";
    } else {
      ring.className = "custom-cursor-ring";
      if (textEl) textEl.textContent = "";
    }
  });
}

/* ==========================================================================
   4. SCROLLTRIGGER & REVEAL ANIMATIONS
   ========================================================================== */
function initScrollAnimations() {
  if (typeof ScrollTrigger !== "undefined" && typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    // Stagger product cards
    gsap.utils.toArray(".products-grid").forEach(grid => {
      gsap.from(grid.querySelectorAll(".product-card"), {
        scrollTrigger: {
          trigger: grid,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out"
      });
    });

    // Brand Showcases
    gsap.utils.toArray(".brand-showcase-apple, .brand-showcase-samsung, .brand-showcase-pixel").forEach(section => {
      gsap.from(section.querySelectorAll(".apple-card-large, .apple-card-compact, .samsung-card, .pixel-card"), {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });
    });
  } else {
    // Fallback IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal-fade-up, .reveal-fade-in, .reveal-scale-up").forEach(el => {
      observer.observe(el);
    });
  }
}

/* ==========================================================================
   5. PAGE TRANSITIONS
   ========================================================================== */
function initPageTransitions() {
  const curtain = document.querySelector(".page-transition-curtain");
  if (!curtain) return;

  // Intercept normal links for smooth transition
  document.querySelectorAll("a").forEach(link => {
    const href = link.getAttribute("href");
    const target = link.getAttribute("target");

    if (href && !href.startsWith("#") && !href.startsWith("javascript:") && !href.startsWith("http") && !target && !href.startsWith("mailto:") && !href.startsWith("tel:")) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        curtain.classList.add("active");
        setTimeout(() => {
          window.location.href = href;
        }, 320);
      });
    }
  });

  // Remove transition on new page load
  window.addEventListener("pageshow", () => {
    curtain.classList.remove("active");
  });
}
