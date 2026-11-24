export default function Home() {
  return `
    <section id="home" class="home-section">
          <p class="typing"><span id="typing"></span><span class="cursor">|</span></p>
          <h1 class="reveal">올바른 방향을 설계하는<br><span class="accent">Solutions Architect</span></h1>
          <p class="home-desc reveal">
            방향을 먼저 정하고 끝까지 해내는 AWS Solutions Architect 지망생입니다.
            고객의 상황을 이해하고, 맞는 구조를 고르고, 그 이유를 설명할 수 있는 사람이 되고자 합니다.
          </p>
          <div class="home-buttons reveal">
            <a class="btn btn-outline" href="https://github.com/minjini-sys" target="_blank" rel="noopener">GitHub에서 더 알아보기</a>
            <a class="btn btn-primary" href="#about">자기소개 보기</a>
          </div>

          <ul class="stats reveal">
            <li><strong data-count="4.46" data-decimals="2">0</strong><span>학점 (4.5 만점)</span></li>
            <li><strong data-count="4">0</strong><span>해커톤 수상</span></li>
            <li><strong data-count="3">0</strong><span>Terraform 인프라 스택</span></li>
            <li><strong>1st</strong><span>한신대 AWS SBG Leader</span></li>
          </ul>

          <article class="featured reveal">
            <p class="featured-label">대표 프로젝트</p>
            <h2>Evacuation Simulator AWS Migration</h2>
            <p>
              재난 대피 시뮬레이터의 제스처 전달 구조를 AWS IoT Core 기반 MQTT로 재설계하고,
              Terraform으로 EC2 서버를 배포해 실제 동작까지 검증한 프로젝트입니다.
            </p>
            <a class="btn btn-primary" href="#projects">프로젝트 자세히 보기</a>
          </article>
        </section>
  `;
}

const PHRASES = [
  "안녕하세요, Solutions Architect를 꿈꾸는 김민진입니다.",
  "모르는 것을 정확히 알고, 갈 방향을 먼저 정합니다.",
  "AWS로 맞는 구조를 고르고, 그 이유를 설명합니다.",
];

export function initHome(reduceMotion) {
  const el = document.getElementById("typing");
  if (reduceMotion) { el.textContent = PHRASES[0]; return; }
  let p = 0, c = 0, deleting = false;
  (function type() {
    const text = PHRASES[p];
    el.textContent = text.slice(0, c);
    if (!deleting && c < text.length) { c++; setTimeout(type, 70); }
    else if (!deleting) { deleting = true; setTimeout(type, 1800); }
    else if (c > 0) { c--; setTimeout(type, 30); }
    else { deleting = false; p = (p + 1) % PHRASES.length; setTimeout(type, 300); }
  })();
}
