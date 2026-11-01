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

  initDynamicYear();
  initScrollReveal();
  initMobileNavigation();
  initHeaderScrollState();
  initScrollSpy();
  initConstructTilt();
});

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
