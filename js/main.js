/**
 * ============================================================================
 * MAIN JAVASCRIPT
 * Progressive enhancement interactions for the developer portfolio.
 * 
 * Design Philosophy:
 * All core content and links remain 100% usable if JavaScript is disabled.
 * This file adds lightweight interactive polish only when JS is available.
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mark HTML root to indicate JavaScript is active (useful for progressive styling)
  document.documentElement.classList.add('js-enabled');

  initMobileNavigation();
});

/**
 * Mobile Navigation Drawer
 * Accessible toggle controlling the mobile menu with ARIA states and keyboard support.
 */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (!toggleBtn || !navMenu) return;

  // Reveal the toggle button only now that JavaScript is confirmed active
  toggleBtn.removeAttribute('hidden');

  function toggleMenu(isOpen) {
    const nextState = typeof isOpen === 'boolean' ? isOpen : toggleBtn.getAttribute('aria-expanded') !== 'true';
    toggleBtn.setAttribute('aria-expanded', String(nextState));
    navMenu.classList.toggle('nav-menu--open', nextState);
    toggleBtn.setAttribute('aria-label', nextState ? 'Close navigation menu' : 'Toggle navigation menu');
  }

  // Click toggle
  toggleBtn.addEventListener('click', () => {
    toggleMenu();
  });

  // Close menu when a navigation anchor is clicked
  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (toggleBtn.getAttribute('aria-expanded') === 'true') {
        toggleMenu(false);
      }
    });
  });

  // Close menu on Escape key press for keyboard accessibility
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') {
      toggleMenu(false);
      toggleBtn.focus();
    }
  });
}

