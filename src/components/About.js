export default function About() {
  return `
    <section id="about" class="section">
          <h2 class="section-title reveal">자기소개</h2>
          <p class="section-sub reveal">"모르는 것을 정확히 알고, 갈 방향을 먼저 정합니다."</p>

          <div class="about-intro reveal">
            <p>
              저는 매일 어제보다 조금 더 나아지는 삶을 살고 싶은 사람입니다.
              배운 것을 백지에 적어 보며 모르는 부분을 찾고, 설명할 수 있을 때까지 공부합니다.
              AI가 만든 결과도 그대로 믿지 않고, 그 답이 상황에 맞는지 판단하고 설명하는 것.
              이것이 Solutions Architect에게 가장 필요한 역량이라고 생각합니다.
            </p>
          </div>

          <div class="tabs reveal" role="tablist" aria-label="자기소개 항목">
            <button class="tab active" role="tab" aria-selected="true" data-tab="t3">주요 경험</button>
            <button class="tab" role="tab" aria-selected="false" data-tab="t4">자유주제</button>
          </div>

          <div class="tab-panels reveal">
            <article class="tab-panel active" id="t3" role="tabpanel">
              <h3>AI가 만든 인프라를 내가 설명할 수 있을 때까지</h3>
              <p>ABC 해커톤에서 AI Quant Maker라는 서비스의 AWS 배포 인프라를 Terraform으로 설계했습니다. 코드는 AI의 도움으로 빠르게 만들었지만, 제가 설명하지 못하는 인프라는 제 것이 아니라고 생각했습니다. 그래서 VPC, 서브넷, ECS Fargate, ALB, RDS 같은 리소스가 실제 아키텍처에서 어떤 역할을 하는지 하나씩 그림으로 그려 가며 이해했습니다.</p>
              <p>이어서 이 구조가 정말 최적인지 따져 보았습니다. AWS 공식 문서를 참고해 비용·보안·가용성 기준으로 살펴보고, 해커톤 규모에 비해 NAT Gateway 비용이 크지 않은지, 더 단순한 구성은 없는지 대안을 비교했습니다.</p>
              <p>이 경험으로 AI가 답을 빠르게 주는 시대일수록, 그 답이 상황에 맞는지 판단하고 설명하는 능력이 더 중요하다는 것을 배웠습니다. 이것이 SA에게 꼭 필요한 역량이라고 생각합니다.</p>
            </article>
            <article class="tab-panel" id="t4" role="tabpanel" hidden>
              <h3>꿈을 이루기 위해 무엇을 해야 하는지 아는 것</h3>
              <p>부트캠프에서 클라우드를 처음 접했을 때, 서버를 필요한 만큼 빌려 쓴다는 개념이 신선했습니다. 이후 고객의 문제를 듣고 맞는 아키텍처를 설계하는 Solutions Architect를 알게 되었고, 이 일을 하고 싶다는 꿈이 생겼습니다.</p>
              <p>저는 꿈을 이루려면 무엇을 해야 하는지 명확히 아는 것이 먼저라고 생각합니다. 그래서 AWSKRUG 세미나에 나가 현직자분들께 SA가 되려면 어떤 역량을 쌓아야 하는지 직접 여쭤보았고, "AWS를 많이 써 보고 AI를 많이 활용해 보라"는 답을 들었습니다. 또 관리 인력이 적은 기업에는 관리형 서비스로만 구현한다는 사례를 들으며, 기술보다 고객의 상황을 먼저 이해해야 한다는 것도 깨달았습니다.</p>
              <p>지금은 AI와 함께 AWS 인프라를 직접 구축해 보고, 한신대학교 첫 AWS Student Builder Group Leader로 배운 것을 다른 학생들에게 설명하고 있습니다. 앞으로도 방향을 점검하며 한 걸음씩 나아가겠습니다.</p>
            </article>
          </div>

          <div class="swot reveal">
            <div class="swot-card"><h4><span>S</span>강점</h4><p>빠르고 정확한 방향 설정, 메타인지와 질문하는 습관, 꾸준함과 성실함, 일할 때는 먼저 나서는 적극성</p></div>
            <div class="swot-card"><h4><span>W</span>약점</h4><p>SAA 자격증 재도전 중, 큰 프로젝트 경험 부족, 처음 만나는 사람과 친해지는 데 시간이 걸림</p></div>
            <div class="swot-card"><h4><span>O</span>기회</h4><p>AI 확산으로 늘어나는 클라우드 인재 수요, SBG 활동으로 만나는 학생·현직자 네트워크</p></div>
            <div class="swot-card"><h4><span>T</span>위협</h4><p>경력직을 선호하는 SA 채용, AI로 쉬워진 구축. 그래서 판단하고 설명하는 역량에 집중합니다.</p></div>
          </div>
        </section>
  `;
}

export function initAbout() {
  const tabs = [...document.querySelectorAll(".tab")];
  tabs.forEach((tab) => tab.addEventListener("click", () => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.classList.toggle("active", on);
      t.setAttribute("aria-selected", String(on));
      const panel = document.getElementById(t.dataset.tab);
      panel.hidden = !on;
      panel.classList.toggle("active", on);
    });
  }));
}
