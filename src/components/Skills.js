export default function Skills() {
  return `
    <section id="skills" class="section">
          <h2 class="section-title reveal">기술</h2>
          <p class="section-sub reveal">프로젝트에서 직접 다뤄 보았거나 공부하고 있는 도구들입니다.</p>

          <div class="skill-groups">
            <div class="skill-group reveal">
              <h3>AWS</h3>
              <ul class="chips">
                <li>EC2</li><li>VPC · Subnet</li><li>S3</li><li>Lambda</li><li>RDS</li>
                <li>Application Load Balancer</li><li>ECS Fargate</li><li>ECR</li>
                <li>IoT Core</li><li>CloudWatch</li><li>SSM Parameter Store</li>
                <li>Secrets Manager</li><li>Route 53 · ACM</li><li>EFS</li><li>IAM</li>
              </ul>
            </div>
            <div class="skill-group reveal">
              <h3>Infra &amp; DevOps</h3>
              <ul class="chips">
                <li class="strong">Terraform (IaC)</li><li>Docker</li><li>Git · GitHub</li><li>Linux</li><li>MQTT</li>
              </ul>
            </div>
            <div class="skill-group reveal">
              <h3>Language &amp; Data</h3>
              <ul class="chips">
                <li>Python</li><li>Java</li><li>C</li><li>MySQL</li><li>Hadoop · Spark (수강 중)</li>
              </ul>
            </div>
            <div class="skill-group reveal">
              <h3>Cloud 학습</h3>
              <ul class="chips">
                <li>AWS SAA-C03 재도전 준비</li><li>SAP-C02 학습 노트</li><li>AWS News 정리 70편+</li><li>NAVER Cloud Platform</li>
              </ul>
            </div>
          </div>
        </section>
  `;
}
