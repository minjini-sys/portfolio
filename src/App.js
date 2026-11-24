import Particles, { initParticles } from "./components/Particles.js";
import Header, { initHeader } from "./components/Header.js";
import Home, { initHome } from "./components/Home.js";
import About, { initAbout } from "./components/About.js";
import Skills from "./components/Skills.js";
import Projects from "./components/Projects.js";
import Activities from "./components/Activities.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function App() {
  return `
    ${Particles()}
    ${Header()}
    <main>
      ${Home()}
      ${About()}
      ${Skills()}
      ${Projects()}
      ${Activities()}
      ${Contact()}
    </main>
    ${Footer()}
  `;
}

// Fade sections in as they scroll into view, and count up the numbers on the home stats.
function initReveal() {
  function countUp(el) {
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimals || "0", 10);
    if (reduceMotion) { el.textContent = target.toFixed(decimals); return; }
    const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / 1200);
      el.textContent = (target * (1 - Math.pow(1 - t, 3))).toFixed(decimals);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("visible");
      e.target.querySelectorAll("[data-count]").forEach(countUp);
      observer.unobserve(e.target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

document.getElementById("root").innerHTML = App();
initParticles(reduceMotion);
initHeader();
initHome(reduceMotion);
initAbout();
initReveal();
