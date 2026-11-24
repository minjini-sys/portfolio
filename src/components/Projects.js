export default function Projects() {
  return `
    <section id="projects" class="section">
          <h2 class="section-title reveal">프로젝트</h2>
          <p class="section-sub reveal">AWS를 "왜" 썼는지와 "어떻게 검증했는지"를 중심으로 정리했습니다.</p>

          <div class="projects">
            <article class="project reveal">
              <div class="arch" aria-label="아키텍처 흐름">
                <span>Local PC<small>MediaPipe 제스처 인식</small></span>
                <i>MQTT over TLS</i>
                <span class="aws">AWS IoT Core<small>evacuation/gesture</small></span>
                <i>subscribe</i>
                <span class="aws">EC2<small>Minecraft · MCP controller</small></span>
              </div>
              <div class="project-body">
                <p class="tag">IoT · EC2 · Terraform · 실제 배포 및 검증</p>
                <h3>Evacuation Simulator AWS Migration</h3>
                <p>Minecraft 기반 재난 대피 시뮬레이터에서 TAS와 Mobius를 거치던 긴 제스처 전달 경로를 AWS IoT Core 기반 MQTT 흐름으로 바꿨습니다. 웹캠 영상은 로컬에 두고 인식 결과만 보내 네트워크 사용량과 개인정보 노출을 줄였습니다.</p>
                <ul class="points">
                  <li>IoT Core Thing·인증서·정책과 EC2 서버를 Terraform 스택 2개로 재현 가능하게 구성</li>
                  <li>RCON 비밀번호·인증서는 SSM Parameter Store(SecureString)로 분리, RCON 포트는 외부에 열지 않음</li>
                  <li>CloudWatch Dashboard와 systemd로 서버 상태 확인</li>
                  <li>제스처 → IoT Core → EC2 → Minecraft 퀴즈 표시까지 팀원 접속 환경에서 검증 후 <code>terraform destroy</code>로 비용 정리</li>
                </ul>
                <a class="link" href="https://github.com/minjini-sys/evacuation-simulator-aws" target="_blank" rel="noopener">GitHub 저장소 →</a>
              </div>
            </article>

            <article class="project reveal">
              <div class="arch" aria-label="아키텍처 흐름">
                <span>Route 53 · ACM</span>
                <i>HTTPS</i>
                <span class="aws">ALB<small>host-header 라우팅</small></span>
                <i>→</i>
                <span class="aws">ECS Fargate<small>web · api</small></span>
                <i>→</i>
                <span class="aws">RDS · EFS<small>private subnet</small></span>
              </div>
              <div class="project-body">
                <p class="tag">ABC 해커톤 · ECS Fargate · IaC 설계</p>
                <h3>AI Quant Maker 배포 인프라</h3>
                <p>Next.js 웹과 FastAPI 백엔드를 AWS에 배포하기 위한 인프라를 Terraform으로 설계·코드화했습니다. AI의 도움으로 만든 코드를 리소스 단위로 다시 그려 보며 역할을 이해하고, 비용과 구조를 검토했습니다.</p>
                <ul class="points">
                  <li>2개 AZ의 public/private 서브넷, NAT Gateway, 보안그룹으로 네트워크 분리</li>
                  <li>web/api를 ECS 서비스 2개로 나누고 ALB host-header로 라우팅, 이미지는 ECR로 관리</li>
                  <li>API 키는 Secrets Manager, 사용자 매핑은 RDS(Postgres), 추적 파일은 EFS에 저장</li>
                  <li>NAT Gateway·ALB·Fargate의 시간당 과금을 정리하고, 실제 적용 전 비용을 검토</li>
                </ul>
                <a class="link" href="https://github.com/minjini-sys/abc2026" target="_blank" rel="noopener">GitHub 저장소 →</a>
              </div>
            </article>

            <article class="project reveal">
              <div class="arch" aria-label="학습 흐름">
                <span>AWS News</span>
                <i>→</i>
                <span class="aws">요약 · 정리</span>
                <i>→</i>
                <span>SAA · SAP 학습</span>
              </div>
              <div class="project-body">
                <p class="tag">학습 기록 · 꾸준함</p>
                <h3>AWS 스터디 아카이브</h3>
                <p>AWS의 새 소식을 매일 읽고 정리하며, SAP-C02 도메인별 학습 노트와 네트워크·운영체제 같은 CS 기초를 함께 기록하고 있습니다.</p>
                <ul class="points">
                  <li>AWS News 정리 70편 이상</li>
                  <li>SAP-C02 "새로운 솔루션을 위한 설계" 도메인 정리</li>
                  <li>네트워크 계층별 핵심 정리, 운영체제 시험 대비 정리</li>
                </ul>
                <a class="link" href="https://github.com/minjini-sys/study" target="_blank" rel="noopener">GitHub 저장소 →</a>
              </div>
            </article>
          </div>
        </section>
  `;
}
