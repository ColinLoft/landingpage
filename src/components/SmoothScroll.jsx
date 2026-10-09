import { useEffect } from "react";

// Wheel / keyboard scrolling is eased and speed-capped site-wide.
// Any section marked with `data-scroll-slow` gets a slower, more cinematic pace.
const MODES = {
  normal: { wheel: 0.9, lead: 800, speed: 2200, ease: 6 },
  story: { wheel: 0.45, lead: 300, speed: 520, ease: 3.2 },
  storyfast: { wheel: 0.55, lead: 500, speed: 950, ease: 4.5 },
};

const clamp = (v, a, b) => Math.min(Math.max(v, a), b);
const maxScroll = () => Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
const isLocked = () =>
  document.body.hasAttribute("data-scroll-locked") || window.getComputedStyle(document.body).overflow === "hidden";

function currentMode() {
  const mid = window.innerHeight / 2;
  for (const el of document.querySelectorAll("[data-scroll-slow], [data-scroll-fast]")) {
    const r = el.getBoundingClientRect();
    if (r.top <= mid && r.bottom >= mid) return el.hasAttribute("data-scroll-fast") ? MODES.storyfast : MODES.story;
  }
  return MODES.normal;
}

function scrollsInside(el) {
  while (el && el !== document.body && el !== document.documentElement) {
    if (el.nodeType === 1) {
      const s = window.getComputedStyle(el);
      if (/(auto|scroll)/.test(s.overflowY) && el.scrollHeight > el.clientHeight) return true;
    }
    el = el.parentElement;
  }
  return false;
}

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let current = window.scrollY;
    let target = current;
    let raf = 0;
    let last = 0;

    const loop = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const m = currentMode();
      const diff = target - current;
      if (Math.abs(diff) < 0.4) {
        current = target;
        window.scrollTo({ top: current, behavior: "instant" });
        raf = 0;
        return;
      }
      const ease = diff * (1 - Math.exp(-m.ease * dt));
      const cap = m.speed * dt;
      current += clamp(ease, -cap, cap);
      window.scrollTo({ top: current, behavior: "instant" });
      raf = requestAnimationFrame(loop);
    };

    const push = (delta) => {
      const m = currentMode();
      target = clamp(target + delta, current - m.lead, current + m.lead);
      target = clamp(target, 0, maxScroll());
      if (!raf) {
        last = performance.now();
        raf = requestAnimationFrame(loop);
      }
    };

    const onWheel = (e) => {
      if (e.ctrlKey || e.defaultPrevented || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      if (isLocked() || scrollsInside(e.target)) return;
      e.preventDefault();
      let dy = e.deltaY;
      if (e.deltaMode === 1) dy *= 32;
      else if (e.deltaMode === 2) dy *= window.innerHeight;
      push(dy * currentMode().wheel);
    };

    const onKey = (e) => {
      if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
      const t = e.target;
      if (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return;
      if (isLocked() || scrollsInside(t)) return;
      const h = window.innerHeight;
      let dy = 0;
      if (e.key === "ArrowDown") dy = 90;
      else if (e.key === "ArrowUp") dy = -90;
      else if (e.key === "PageDown") dy = h * 0.85;
      else if (e.key === "PageUp") dy = -h * 0.85;
      else if (e.key === " ") {
        if (/^(BUTTON|A)$/.test(t.tagName) || t.getAttribute("role")) return;
        dy = e.shiftKey ? -h * 0.85 : h * 0.85;
      } else return;
      e.preventDefault();
      push(dy);
    };

    // Re-sync when something else moves the page (scrollbar drag, route change, anchors).
    const onScroll = () => {
      if (Math.abs(window.scrollY - current) > 3) {
        current = window.scrollY;
        target = current;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}