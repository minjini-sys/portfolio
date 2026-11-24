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
            <button class="tab active" role="tab" aria-selected="true" data-tab="t1">성장 과정</button>
            <button class="tab" role="tab" aria-selected="false" data-tab="t2">성격 및 장단점</button>
            <button class="tab" role="tab" aria-selected="false" data-tab="t3">주요 경험</button>
            <button class="tab" role="tab" aria-selected="false" data-tab="t4">자유주제</button>
          </div>

          <div class="tab-panels reveal">
            <article class="tab-panel active" id="t1" role="tabpanel">
              <h3>백지에 적을 수 있어야 아는 것이다</h3>
              <p>어릴 때 문제를 많이 푸는데도 왜 성적이 오르지 않을까 고민한 적이 있습니다. 개념은 분명 다 아는데 내가 머리가 나쁜 건가 하는 생각도 들었습니다. 그러다 공부법 영상에서 전교 1등 학생들의 차이는 IQ가 아니라 메타인지, 즉 내가 얼마나 알고 있는지 파악하는 능력이라는 것을 알게 되었습니다. 저도 제 메타인지를 시험해 보려고 수학 공식을 백지에 적어 보았는데, 생각만큼 적히지 않았습니다. 그때 제가 오만했다는 것을 깨닫고, 이후로는 개념을 배우면 항상 백지에 써 보는 습관을 들였습니다. 그 결과 암기 과목은 물론 수학처럼 이해와 응용이 필요한 과목에서도 좋은 성적을 얻었습니다.</p>
              <p>이 습관 덕분에 제가 모르는 것을 정확히 알고 질문할 수 있게 되었습니다. 선생님들께 "너는 질문하는 걸 보면 잘될 것 같다"는 말을 자주 들었고, 이 습관은 대학교에서 전교 1등을 하는 데까지 이어졌습니다.</p>
            </article>
            <article class="tab-panel" id="t2" role="tabpanel" hidden>
              <h3>꾸준함과, 무너진 다음을 설계하는 힘</h3>
              <p>저의 장점은 꾸준함입니다. 고등학교 2학년까지 과체중이었던 저는 고3 때 다이어트를 결심했습니다. 극단적으로 빼면 요요가 올 것 같아, 평생 가져갈 습관을 만들자는 방향으로 시작했습니다. 세 끼를 모두 먹되 단백질 위주로 바꾸고, 운동은 하루 30분에서 1시간까지 늘렸습니다. 그 결과 10kg 이상 감량했고, 3년째 한 번도 요요 없이 유지하고 있습니다.</p>
              <p>단점은 완벽주의입니다. 계획대로 하지 못하면 그동안의 노력이 모두 무너진 것처럼 느꼈습니다. 한 끼를 참지 못한 날에는 "어차피 망했다"며 야식까지 먹고 우울하게 누웠습니다. 그런데 돌아보니 저를 망친 것은 그 한 끼가 아니라 그 뒤의 포기였습니다. 실수보다 그다음 선택이 결과를 더 크게 바꾼다는 것을 깨닫고, 지난 일은 보내고 다음 할 일에 집중하기로 했습니다.</p>
              <p>이 태도는 실패를 대하는 방식이 되었습니다. SAA 시험에서 한 문제 차이로 떨어졌지만 포기하지 않고, SA라는 꿈을 향해 다시 준비하고 있습니다.</p>
            </article>
            <article class="tab-panel" id="t3" role="tabpanel" hidden>
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
