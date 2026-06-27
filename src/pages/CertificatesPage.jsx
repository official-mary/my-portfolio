import { Link } from "react-router-dom";

const BASE = import.meta.env.BASE_URL;

const professionalCertifications = [
  {
    title: "DevOps Micro-Internship with Agentic AI",
    provider: "The Cloud Advisory",
    date: "June 2026",
    image: `${BASE}certificates/dmi-devops-micro-internship.jpeg`,
    description:
      "A hands-on DevOps programme covering Linux, Git, CI/CD, AWS, Azure, Terraform, Ansible, Docker, Kubernetes, GitOps, observability, and Agentic AI workflows.",
    featured: true,
  },
  {
    title: "DevOps & Cloud Security Certification",
    provider: "Digital Witch Support Community",
    date: "December 2025",
    image: `${BASE}certificates/devops-cloud-security-digital-witch.png`,
    description:
      "Technical training in AWS, Azure, Terraform, Kubernetes, Docker, CI/CD, cloud security, infrastructure automation, and observability.",
  },
];

const technicalTraining = [
  {
    title: "DevOps with Claude Code: Terraform, EKS, Argo CD & Helm",
    provider: "Udemy",
    date: "May 2026",
    image: `${BASE}certificates/devops-claude-code-udemy.jpeg`,
    description:
      "Focused training on Terraform, Amazon EKS, Helm, Argo CD, and AI-assisted DevOps workflows using Claude Code.",
  },
  {
    title: "DevOps for Beginners: Docker, Kubernetes, AWS & Azure",
    provider: "Udemy",
    date: "April 2026",
    image: `${BASE}certificates/devops-beginners-udemy.png`,
    description:
      "Practical DevOps training covering Docker, Kubernetes, AWS, Azure, container workflows, and hands-on deployment projects.",
  },
  {
    title: "Ultimate Agentic AI DevOps with Claude Code",
    provider: "Udemy",
    date: "March 2026",
    image: `${BASE}certificates/ultimate-agentic-ai-devops-udemy.jpeg`,
    description:
      "Training focused on Agentic AI workflows, Claude Code, practical automation, and AI-supported DevOps operations.",
  },
  {
    title: "Build AI Agents for Business",
    provider: "Udemy",
    date: "April 2026",
    image: `${BASE}certificates/build-ai-agents-udemy.png`,
    description:
      "Practical training in creating AI agents and automating business workflows without traditional coding-heavy approaches.",
  },
];

const achievements = [
  {
    title: "Champion of the Week — Week 13",
    organisation: "DevOps Micro-Internship, Cohort 2",
    image: `${BASE}certificates/champion-week-13.png`,
    description:
      "Recognised for hands-on project delivery involving portfolio deployment, EpicBook, AWS architecture, and a three-tier Book Review application.",
  },
  {
    title: "Champion of the Week — Week 6",
    organisation: "DevOps Micro-Internship, Cohort 2",
    image: `${BASE}certificates/champion-week-6.png`,
    description:
      "Recognised for practical cloud assignments involving Amazon S3 deployment, AWS infrastructure, high availability, and three-tier architecture.",
  },
];

function CredentialCard({ credential, type = "certificate" }) {
  const isFeatured = credential.featured ? "gallery-featured" : "";

  return (
    <article className={`gallery-certificate ${isFeatured}`}>
      <a
        className="gallery-image-wrap"
        href={credential.image}
        target="_blank"
        rel="noreferrer"
      >
        <img src={credential.image} alt={credential.title} />
      </a>

      <div className="gallery-content">
        <p>
          {credential.provider} • {credential.date}
        </p>

        <h3>{credential.title}</h3>

        <span>{credential.description}</span>

        <a
          className="project-link"
          href={credential.image}
          target="_blank"
          rel="noreferrer"
        >
          Open Full {type === "training" ? "Training Certificate" : "Certificate"} →
        </a>
      </div>
    </article>
  );
}

function CertificatesPage() {
  return (
    <main className="certificates-page">
      <nav className="navbar">
        <Link className="brand" to="/">
          Nwanneka<span>.</span>
        </Link>

        <Link className="back-link" to="/">
          ← Back to Portfolio
        </Link>
      </nav>

      <section className="certificate-page-hero">
        <p className="section-label">CREDENTIALS</p>

        <h1>
          Certifications, training, and
          <span> hands-on recognition.</span>
        </h1>

        <p>
          A collection of professional certifications, technical training, and
          recognition earned through practical cloud infrastructure, DevOps,
          automation, and deployment work.
        </p>

        <div className="credential-page-stats">
          <div>
            <strong>2</strong>
            <span>Professional Certifications</span>
          </div>

          <div>
            <strong>4</strong>
            <span>Technical Training Certificates</span>
          </div>

          <div>
            <strong>2</strong>
            <span>Recognition Awards</span>
          </div>
        </div>
      </section>

      <section className="section certificate-gallery-section">
        <div className="section-heading">
          <div>
            <p className="section-label">PROFESSIONAL CERTIFICATIONS</p>

            <h2 className="section-title">
              Credentials that support my cloud and DevOps engineering work.
            </h2>
          </div>
        </div>

        <div className="certificate-gallery">
          {professionalCertifications.map((certificate) => (
            <CredentialCard
              key={certificate.title}
              credential={certificate}
              type="certificate"
            />
          ))}
        </div>
      </section>

      <section className="section training-gallery-section">
        <div className="section-heading">
          <div>
            <p className="section-label">TECHNICAL TRAINING</p>

            <h2 className="section-title">
              Continuous learning across cloud automation, Kubernetes, GitOps,
              and Agentic AI.
            </h2>
          </div>
        </div>

        <div className="certificate-gallery training-certificate-grid">
          {technicalTraining.map((training) => (
            <CredentialCard
              key={training.title}
              credential={training}
              type="training"
            />
          ))}
        </div>
      </section>

      <section className="section recognition-gallery-section">
        <div className="section-heading">
          <div>
            <p className="section-label">RECOGNITION & ACHIEVEMENTS</p>

            <h2 className="section-title">
              Recognition earned through practical DevOps project delivery.
            </h2>
          </div>
        </div>

        <div className="achievement-gallery">
          {achievements.map((achievement) => (
            <article className="gallery-achievement" key={achievement.title}>
              <a
                className="gallery-image-wrap"
                href={achievement.image}
                target="_blank"
                rel="noreferrer"
              >
                <img src={achievement.image} alt={achievement.title} />
              </a>

              <div className="gallery-content">
                <p className="gold-meta">CHAMPION RECOGNITION</p>

                <h3>{achievement.title}</h3>

                <small>{achievement.organisation}</small>

                <span>{achievement.description}</span>

                <a
                  className="project-link"
                  href={achievement.image}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Full Award →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section credentials-closing">
        <div>
          <p className="section-label">BUILDING IN PUBLIC</p>

          <h2>
            Credentials matter most when they become
            <span> real delivery.</span>
          </h2>

          <p>
            Explore my cloud infrastructure, CI/CD, Terraform, Docker,
            Kubernetes, and GitOps projects to see how I apply this learning.
          </p>
        </div>

        <Link className="btn btn-primary" to="/#projects">
          View My Projects →
        </Link>
      </section>

      <footer className="site-footer compact-footer">
        <div className="footer-bottom">
          <p>© 2026 Nwanneka Mary. All rights reserved.</p>

          <Link to="/">Back to Portfolio ↑</Link>
        </div>
      </footer>
    </main>
  );
}

export default CertificatesPage;