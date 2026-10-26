import Lenis from "lenis";

let lenis = null;

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function startSmoothScroll() {
  if (lenis || prefersReducedMotion()) return () => {};

  lenis = new Lenis({
    duration: 1.1,
    easing: (t) => 1 - Math.pow(1 - t, 4),
    smoothWheel: true,
  });

  let frame;
  const raf = (time) => {
    lenis.raf(time);
    frame = requestAnimationFrame(raf);
  };
  frame = requestAnimationFrame(raf);

  return () => {
    cancelAnimationFrame(frame);
    lenis.destroy();
    lenis = null;
  };
}

// Header height is kept in a CSS variable so anchors land below it
const headerOffset = () =>
  -(parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h"), 10) || 72);

export function scrollToHash(hash) {
  const target = hash === "#top" ? 0 : document.querySelector(hash);
  if (target === null) return;
  if (lenis) {
    lenis.scrollTo(target, { offset: target === 0 ? 0 : headerOffset() });
  } else {
    const top = target === 0 ? 0 : target.getBoundingClientRect().top + window.scrollY + headerOffset();
    window.scrollTo({ top, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  }
  if (hash !== "#top") window.history.replaceState(null, "", hash);
}

export function lockScroll(locked) {
  if (lenis) locked ? lenis.stop() : lenis.start();
  document.documentElement.classList.toggle("is-locked", locked);
}

export function onScroll(callback) {
  if (lenis) {
    lenis.on("scroll", callback);
    return () => lenis && lenis.off("scroll", callback);
  }
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}
