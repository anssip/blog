document.addEventListener("DOMContentLoaded", () => {
  // Select all elements meant to have parallax backgrounds
  const backgrounds = document.querySelectorAll(".parallax-background-element");

  if (!backgrounds.length) {
    return; // Exit if no parallax elements found
  }

  let ticking = false;

  function updateParallaxForElement(background) {
    const container = background.parentElement; // Get the container (.parallax-cross-horizontal or .parallax-cross-vertical)
    if (!container) return;

    const scrollY = window.scrollY;
    const containerRect = container.getBoundingClientRect();
    const backgroundHeight = background.offsetHeight;
    const containerHeight = container.offsetHeight;
    const viewportHeight = window.innerHeight;

    // Check if container is potentially visible
    if (containerRect.bottom >= 0 && containerRect.top <= viewportHeight) {
      // Parallax factor (smaller = slower scroll)
      const parallaxFactor = 0.2; // Adjust speed here

      // Calculate desired Y shift (adjust calculation if needed)
      // Simple version: shift based on overall scroll
      let desiredY = -(scrollY * parallaxFactor);

      // Alternative: shift relative to container position in viewport
      // let centerOffset = containerRect.top + containerHeight / 2 - viewportHeight / 2;
      // let desiredY = -(centerOffset * parallaxFactor);

      // --- Clamping ---
      const maxTranslateY = 0;
      const minTranslateY = -(backgroundHeight - containerHeight);

      const translateY = Math.max(
        minTranslateY,
        Math.min(maxTranslateY, desiredY)
      );

      background.style.transform = `translateY(${translateY}px)`;
    }
  }

  function updateAllParallax() {
    backgrounds.forEach(updateParallaxForElement);
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(updateAllParallax);
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });

  // Initial call
  updateAllParallax();
});
