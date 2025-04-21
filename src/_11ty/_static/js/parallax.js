document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".parallax-strip-container");
  const background = document.querySelector(".parallax-strip-background");

  if (!container || !background) {
    // Only run if elements exist on the page
    return;
  }

  let ticking = false; // For scroll event throttling
  let lastScrollY = window.scrollY;

  function updateParallax() {
    const scrollY = window.scrollY;
    const containerRect = container.getBoundingClientRect();
    const backgroundHeight = background.offsetHeight;
    const containerHeight = container.offsetHeight;

    // Calculate how far into view the container is (0 = just entering bottom, 1 = fully exited top)
    // We only care when it's potentially visible
    const viewportHeight = window.innerHeight;
    const progress =
      (viewportHeight - containerRect.top) / (viewportHeight + containerHeight);

    // Only calculate if potentially visible
    if (progress >= 0 && progress <= 1) {
      // Parallax factor (smaller = slower scroll, larger = faster)
      // Adjust this value to change the speed
      const parallaxFactor = 0.2;

      // Calculate desired Y shift based on overall page scroll
      // We multiply by progress relative to viewport entry/exit for smoothness
      let desiredY = -(scrollY * parallaxFactor);

      // --- Clamping ---
      // Calculate the maximum amount the background can move upwards
      const maxTranslateY = 0; // Cannot move background above container top
      // Calculate the maximum amount the background can move downwards
      const minTranslateY = -(backgroundHeight - containerHeight);

      // Clamp the desired Y translation
      const translateY = Math.max(
        minTranslateY,
        Math.min(maxTranslateY, desiredY)
      );

      // Apply the transform
      background.style.transform = `translateY(${translateY}px)`;
    }

    ticking = false;
  }

  function onScroll() {
    lastScrollY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });

  // Initial call in case element is already in view on load
  updateParallax();
});
