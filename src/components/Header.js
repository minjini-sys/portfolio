export default function Header() {
  return `
    <header class="navbar" id="navbar">
        <a href="#home" class="logo">KIM MINJIN</a>
        <button class="menu-toggle" id="menuToggle" aria-label="메뉴 열기" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <nav>
          <ul class="nav-links" id="navLinks">
            <li><a href="#home">소개</a></li>
            <li><a href="#about">자기소개</a></li>
            <li><a href="#skills">기술</a></li>
            <li><a href="#projects">프로젝트</a></li>
            <li><a href="#activities">활동</a></li>
            <li><a href="#contact">연락처</a></li>
          </ul>
        </nav>
      </header>
  `;
}

export function initHeader() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("menuToggle");
  const links = document.getElementById("navLinks");
  const anchors = [...links.querySelectorAll("a")];

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 30);
  }, { passive: true });

  const close = () => {
    links.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  };
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });
  anchors.forEach((a) => a.addEventListener("click", close));

  // highlight the menu item of the section in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      anchors.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("main section[id]").forEach((s) => observer.observe(s));
}
