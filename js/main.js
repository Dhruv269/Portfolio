/**
 * ============================================================================
 * MAIN JAVASCRIPT — DARK EXPERIMENTAL EDITORIAL MOTION ENGINE
 * 
 * Architecture:
 * 1. Page-Load & Progressive Enhancement Initialization
 * 2. Scroll-Triggered Element Reveals (IntersectionObserver with unobserve)
 * 3. Section Scroll Spy (Dynamic Active Navigation Synchronization)
 * 4. Restrained 3D Technical Construct Parallax Tilt (RAF Lerp)
 * 5. Architectural Mobile Drawer Navigation with Accessible ARIA Management
 * 6. Sticky Header Elevation State Tracking
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Flag that JavaScript is operational for progressive styling
  document.documentElement.classList.add('js-enabled');

  initGenesisPreloader();
  initDynamicYear();
  initScrollReveal();
  initMobileNavigation();
  initHeaderScrollState();
  initScrollSpy();
  initConstructTilt();
});

/**
 * PROJECT: GENESIS — Cinematic Preloader Controller
 * Sequences awakening, fragmented chaos, synchronization, identity reveal,
 * smooth progress line, and the camera expansion transition into the homepage.
 */
function initGenesisPreloader() {
  const preloader = document.getElementById('genesis-preloader');
  if (!preloader) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let alreadySeen = false;
  try {
    alreadySeen = sessionStorage.getItem('genesis_preloader_seen') === 'true';
  } catch (e) {
    alreadySeen = false;
  }

  const hash = window.location.hash;
  const isSculptureInspect = hash === '#sculpture';
  const isSkipPreloader = hash === '#skip' || hash === '#preview';

  // Bypass immediately if already seen in this session or if reduced motion is requested
  if ((alreadySeen || prefersReduced || isSkipPreloader) && !isSculptureInspect) {
    document.documentElement.classList.remove('genesis-loading');
    preloader.style.display = 'none';
    preloader.setAttribute('aria-hidden', 'true');
    return;
  }

  // If directly inspecting the assembled geometric sculpture
  if (isSculptureInspect) {
    document.documentElement.classList.add('genesis-loading');
    preloader.classList.add('genesis-inspect');
    return;
  }

  document.documentElement.classList.add('genesis-loading');
  const progressLine = document.getElementById('genesis-progress-line');

  let isPageLoaded = document.readyState === 'complete';
  if (!isPageLoaded) {
    window.addEventListener('load', () => {
      isPageLoaded = true;
    }, { once: true });
  }

  const startTime = performance.now();
  const targetDuration = 2000; // 2 seconds target duration
  const maxSafetyTimeout = 3200; // Hard fail-safe limit to never block user
  let animationCompleted = false;

  function finishPreloader() {
    if (animationCompleted) return;
    animationCompleted = true;

    if (progressLine) {
      progressLine.style.transform = 'scaleX(1)';
    }

    // Trigger Stage 06: Expansion transition towards camera & fade-out
    preloader.classList.add('genesis-complete');

    // Wait for the expansion and fade transition to complete
    setTimeout(() => {
      document.documentElement.classList.remove('genesis-loading');
      preloader.style.display = 'none';
      preloader.setAttribute('aria-hidden', 'true');

      try {
        sessionStorage.setItem('genesis_preloader_seen', 'true');
      } catch (e) {}

      // Resume existing hero animations cleanly
      const heroRows = document.querySelectorAll('.headline-row');
      heroRows.forEach((row) => {
        row.style.animationPlayState = 'running';
      });
    }, 650);
  }

  function step(now) {
    const elapsed = now - startTime;
    // Progress follows a smooth ease curve
    let rawProgress = Math.min(1, elapsed / targetDuration);
    // Cubic ease-out curve
    let eased = 1 - Math.pow(1 - rawProgress, 2.5);

    // If page is not loaded yet, hold progress gracefully at ~95%
    if (!isPageLoaded && eased > 0.94 && elapsed < maxSafetyTimeout) {
      eased = 0.94;
    }

    if (progressLine) {
      progressLine.style.transform = `scaleX(${eased.toFixed(4)})`;
    }

    if ((elapsed >= targetDuration && isPageLoaded) || elapsed >= maxSafetyTimeout) {
      finishPreloader();
    } else {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);

  // Absolute safety fallback timer
  setTimeout(finishPreloader, maxSafetyTimeout + 300);
}

/**
 * 0. Dynamic Current Year Synchronization
 * Keeps copyright notices and footer year dynamically synchronized with the current calendar year.
 */
function initDynamicYear() {
  const currentYear = new Date().getFullYear();
  const yearElements = document.querySelectorAll('.current-year');
  yearElements.forEach((el) => {
    el.textContent = String(currentYear);
  });
}

/**
 * 1. Scroll-Triggered Element Reveals
 * Uses IntersectionObserver to reveal sections, headlines, and cards.
 * Unobserves elements once revealed to prevent repetitive animation triggers on minor scrolls.
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('[data-reveal]');
  if (!revealElements.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // If reduced motion is requested or IntersectionObserver is unsupported, reveal all immediately
  if (prefersReduced || !('IntersectionObserver' in window)) {
    revealElements.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px', // Trigger slightly before element reaches lower viewport
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        // Unobserve to ensure the animation runs once cleanly without stuttering on scroll direction changes
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => revealObserver.observe(el));
}

/**
 * 2. Mobile Navigation Drawer
 * Accessible navigation drawer with ARIA state tracking, click-outside dismissal, and Escape key navigation.
 */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (!toggleBtn || !navMenu) return;

  // Unhide the toggle button now that JavaScript is active
  toggleBtn.removeAttribute('hidden');

  function setMenuState(isOpen) {
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
    navMenu.classList.toggle('nav-menu--open', isOpen);
    toggleBtn.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Toggle navigation menu');
  }

  // Toggle button click handler
  toggleBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = toggleBtn.getAttribute('aria-expanded') === 'true';
    setMenuState(!isOpen);
  });

  // Close drawer when any nav link is clicked
  navMenu.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      if (toggleBtn.getAttribute('aria-expanded') === 'true') {
        setMenuState(false);
      }
    });
  });

  // Dismiss on click outside
  document.addEventListener('click', (event) => {
    if (toggleBtn.getAttribute('aria-expanded') === 'true') {
      if (!navMenu.contains(event.target) && !toggleBtn.contains(event.target)) {
        setMenuState(false);
      }
    }
  });

  // Dismiss on Escape key & return focus
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') {
      setMenuState(false);
      toggleBtn.focus();
    }
  });

  // Automatically close drawer if resized beyond tablet drawer breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth > 960 && toggleBtn.getAttribute('aria-expanded') === 'true') {
      setMenuState(false);
    }
  }, { passive: true });
}

/**
 * 3. Sticky Header Scroll Elevation
 * Subtly deepens borders and background opacity when user scrolls.
 */
function initHeaderScrollState() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  function updateHeader() {
    if (window.scrollY > 20) {
      header.classList.add('site-header--scrolled');
    } else {
      header.classList.remove('site-header--scrolled');
    }
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
}

/**
 * 4. Section Scroll Spy
 * Automatically tracks visible section and sets active state on the corresponding nav item.
 */
function initScrollSpy() {
  const navLinks = document.querySelectorAll('.nav-link[data-nav]');
  const sections = document.querySelectorAll('section[id]');

  if (!navLinks.length || !sections.length) return;

  function setActive(activeId) {
    navLinks.forEach((link) => {
      const match = link.getAttribute('data-nav') === activeId;
      link.classList.toggle('active', match);
      if (match) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, {
      root: null,
      rootMargin: '-25% 0px -65% 0px',
      threshold: 0
    });

    sections.forEach((sec) => observer.observe(sec));
  } else {
    // Fallback scroll listener
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY + 140;
      sections.forEach((sec) => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          setActive(sec.id);
        }
      });
    }, { passive: true });
  }
}

/**
 * 5. Technical Construct Parallax Tilt
 * Organic, restrained mouse-interactive tilt with linear interpolation (lerp).
 */
function initConstructTilt() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  // Only enable 3D mouse parallax tilt on devices with hover/fine pointer capability
  const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!hasFinePointer) return;

  const heroSection = document.getElementById('hero');
  const construct = document.getElementById('editorial-construct');

  if (!heroSection || !construct) return;

  let currentRotX = 0;
  let currentRotY = 0;
  let targetRotX = 0;
  let targetRotY = 0;
  let isHovered = false;
  let rafId = null;

  function lerp(start, end, factor) {
    return start + (end - start) * factor;
  }

  function handleMouseMove(e) {
    const rect = heroSection.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const normX = (e.clientX - centerX) / (rect.width / 2);
    const normY = (e.clientY - centerY) / (rect.height / 2);

    // Controlled, restrained tilt degrees (max ±8 degrees)
    targetRotY = Math.max(-8, Math.min(8, normX * 8));
    targetRotX = Math.max(-8, Math.min(8, -normY * 8));

    if (!isHovered) {
      isHovered = true;
      startLoop();
    }
  }

  function handleMouseLeave() {
    targetRotX = 0;
    targetRotY = 0;
    isHovered = false;
  }

  function startLoop() {
    function step() {
      currentRotX = lerp(currentRotX, targetRotX, 0.08);
      currentRotY = lerp(currentRotY, targetRotY, 0.08);

      construct.style.transform = `perspective(800px) rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg)`;

      const delta = Math.abs(targetRotX - currentRotX) + Math.abs(targetRotY - currentRotY);
      if (delta > 0.01 || isHovered) {
        rafId = requestAnimationFrame(step);
      } else {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    }

    if (!rafId) {
      rafId = requestAnimationFrame(step);
    }
  }

  heroSection.addEventListener('mousemove', handleMouseMove, { passive: true });
  heroSection.addEventListener('mouseleave', handleMouseLeave);
}
