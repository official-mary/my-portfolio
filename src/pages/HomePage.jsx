import { Link } from "react-router-dom";
import {
FaGithub,
FaLinkedinIn,
FaMedium,
FaUpwork,
} from "react-icons/fa6";
import { SiHashnode } from "react-icons/si";
import heroImage from "../assets/hero.png";

const projects = [
{
title: "Spring PetClinic Platform",
description:
"Built AWS infrastructure and deployed a containerized microservices platform using Terraform, Docker, Kubernetes, GitHub Actions, Helm, Argo CD, RDS, External Secrets, and observability tooling.",
tools: ["AWS", "Terraform", "Kubernetes", "Argo CD"],
link: "https://github.com/official-mary/platform-petclinic",
},
{
title: "Book Review AWS Infrastructure",
description:
"Designed and provisioned a secure three-tier AWS environment with reusable Terraform modules, networking, Application Load Balancers, EC2, and RDS MySQL.",
tools: ["AWS", "Terraform", "VPC", "ALB", "RDS"],
link: "https://github.com/official-mary/book-review-terraform",
},
{
title: "EpicBook CI/CD Deployment",
description:
"Built a dual-pipeline workflow where Terraform provisions infrastructure and Ansible deploys the application through Azure DevOps.",
tools: ["Azure DevOps", "Terraform", "Ansible", "Nginx"],
link: "https://github.com/official-mary/infra-epicbook",
},
];

const toolkit = [
{
title: "Cloud Platforms",
items: ["AWS", "Microsoft Azure"],
},
{
title: "Infrastructure as Code",
items: ["Terraform", "Ansible", "Modular Infrastructure"],
},
{
title: "Containers & Orchestration",
items: ["Docker", "Kubernetes", "Helm"],
},
{
title: "CI/CD & GitOps",
items: ["GitHub Actions", "Azure DevOps", "Argo CD"],
},
{
title: "Observability & Security",
items: ["Prometheus", "Grafana", "Trivy", "Health Checks"],
},
{
title: "Systems & Collaboration",
items: ["Linux", "GitHub", "Nginx", "Jira"],
},
];

function HomePage() {
const handleMessageSubmit = (event) => {
event.preventDefault();

const form = new FormData(event.currentTarget);

const name = String(form.get("name") || "");
const email = String(form.get("email") || "");
const subject = String(form.get("subject") || "Portfolio Enquiry");
const message = String(form.get("message") || "");

const emailBody =
  "Name: " +
  name +
  "\nEmail: " +
  email +
  "\n\nMessage:\n" +
  message;

const mailtoLink =
  "mailto:ogbonnamaryminds@gmail.com?subject=" +
  encodeURIComponent(subject) +
  "&body=" +
  encodeURIComponent(emailBody);

window.location.href = mailtoLink;

};

return ( <main> <nav className="navbar"> <a className="brand" href="#home">
Nwanneka<span>.</span> </a>

    <div className="nav-links">
      <a href="#about">About</a>
      <Link to="/certificates">Credentials</Link>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#writing">Writing</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>

  <section className="hero" id="home">
    <div className="hero-content">
      <p className="eyebrow">CLOUD • DEVOPS • AUTOMATION</p>

      <h1>
        Hi, I’m <span>Nwanneka Mary.</span>
      </h1>

      <h2>Cloud & DevOps Engineer</h2>

      <p className="hero-text">
        I build reliable cloud infrastructure, automate deployments, and
        help teams ship containerized applications with confidence.
      </p>

      <div className="hero-buttons">
        <a className="btn btn-primary" href="#projects">
          View My Projects
        </a>

        <a
          className="btn btn-secondary"
          href={`${import.meta.env.BASE_URL}Ogbonna_Nwanneka_Mary_CV-DevOps.pdf`}
          download
        >
          Download CV
        </a>
      </div>

      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/mary-nwanneka"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/official-mary"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.upwork.com/freelancers/~01cbfd5028e80ccfc5"
          target="_blank"
          rel="noreferrer"
        >
          Hire Me on Upwork
        </a>
      </div>
    </div>

    <div className="hero-image-wrap">
      <div className="image-backdrop"></div>

      <img
        className="hero-image"
        src={heroImage}
        alt="Nwanneka Mary, Cloud and DevOps Engineer"
      />

      <div className="experience-card">
        <strong>Cloud & DevOps</strong>
        <span>Infrastructure • CI/CD • Kubernetes</span>
      </div>
    </div>
  </section>

  <section className="section about-section" id="about">
    <p className="section-label">ABOUT ME</p>

    <div className="about-grid">
      <h2>
        I turn infrastructure ideas into reliable environments teams can
        deploy to with confidence.
      </h2>

      <div>
        <p>
          I am a Cloud and DevOps Engineer focused on building secure,
          scalable, and repeatable infrastructure across AWS and Azure.
          My work brings together Terraform, Docker, Kubernetes, CI/CD,
          observability, and operational troubleshooting.
        </p>

        <p>
          I enjoy the full delivery flow: understanding what an
          application needs, building the infrastructure it runs on,
          automating its deployment, and ensuring teams can observe and
          maintain it properly after release.
        </p>
      </div>
    </div>
  </section>

  <section className="section stats-section">
    <p className="section-label">CAREER SNAPSHOT</p>

    <div className="stats-grid">
      <a
        className="stat-card"
        href="https://github.com/official-mary"
        target="_blank"
        rel="noreferrer"
      >
        <strong>33</strong>
        <span>GitHub Repositories</span>
        <small>View my code →</small>
      </a>

      <a
        className="stat-card"
        href="https://medium.com/@mary-ogbonna"
        target="_blank"
        rel="noreferrer"
      >
        <strong>10+</strong>
        <span>Medium Articles</span>
        <small>Read my writing →</small>
      </a>

      <Link className="stat-card" to="/certificates">
        <strong>8</strong>
        <span>Credentials & Awards</span>
        <small>View all credentials →</small>
      </Link>
    </div>
  </section>

  <section className="section credentials-summary">
    <div className="credentials-summary-copy">
      <p className="section-label">CREDENTIALS</p>

      <h2>
        Cloud and DevOps foundations, backed by
        <span> hands-on delivery.</span>
      </h2>

      <p>
        My learning is strengthened by real work across AWS, Azure,
        Terraform, Docker, Kubernetes, CI/CD, GitOps, observability, and
        infrastructure automation.
      </p>

      <Link className="btn btn-primary" to="/certificates">
        View All Certifications →
      </Link>
    </div>

    <div className="credentials-summary-card">
      <span className="summary-badge">FEATURED</span>

      <h3>DevOps Micro-Internship with Agentic AI</h3>

      <p>
        Hands-on training across cloud infrastructure, Terraform, Docker,
        Kubernetes, CI/CD, GitOps, Linux, and AI-assisted DevOps
        workflows.
      </p>

      <Link className="project-link" to="/certificates">
        Explore Credentials →
      </Link>
    </div>
  </section>

  <section className="section skills-section" id="skills">
    <p className="section-label">TECHNICAL TOOLKIT</p>

    <h2 className="section-title">
      The tools I use to design infrastructure, automate delivery, and
      keep cloud environments reliable.
    </h2>

    <div className="toolkit-grid">
      {toolkit.map((group) => (
        <article className="toolkit-card" key={group.title}>
          <h3>{group.title}</h3>

          <ul>
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>

  <section className="section projects-section" id="projects">
    <div className="section-heading">
      <div>
        <p className="section-label">FEATURED PROJECTS</p>

        <h2 className="section-title">
          Real infrastructure, deployment, and automation work.
        </h2>
      </div>

      <a
        className="text-link"
        href="https://github.com/official-mary"
        target="_blank"
        rel="noreferrer"
      >
        View GitHub →
      </a>
    </div>

    <div className="projects-grid">
      {projects.map((project, index) => (
        <article className="project-card" key={project.title}>
          <div className="project-number">
            FEATURED #{String(index + 1).padStart(2, "0")}
          </div>

          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <div className="project-tools">
            {project.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>

          <a
            className="project-link"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            View Repository →
          </a>
        </article>
      ))}
    </div>
  </section>

  <section className="section writing-section" id="writing">
    <div className="section-heading">
      <div>
        <p className="section-label">FEATURED WRITING</p>

        <h2 className="section-title">
          Lessons, deployments, and practical DevOps stories from my work.
        </h2>

        <p className="section-intro">
          I write about deployments, cloud infrastructure, CI/CD,
          Kubernetes, Docker, GitOps, and the technical decisions behind
          my projects.
        </p>
      </div>
    </div>

    <div className="featured-articles-grid">
      <article className="article-card">
        <span className="article-platform hashnode-badge">Hashnode</span>

        <p className="article-meta">Docker • Microservices • Deployment</p>

        <h3>
          My First Step Before AWS Deployment: Running Spring PetClinic
          Microservices Locally with Docker.
        </h3>

        <p>
          A practical walkthrough of running Spring PetClinic locally with
          Docker Compose before deploying it to AWS.
        </p>

        <div className="article-tags">
          <span>#docker</span>
          <span>#microservices</span>
          <span>#devops</span>
        </div>

        <a
          className="project-link"
          href="https://petclinic-microservice.hashnode.dev/my-first-step-before-aws-deployment-running-spring-petclinic-microservices-locally-with-docker"
          target="_blank"
          rel="noreferrer"
        >
          Read Article →
        </a>
      </article>

      <article className="article-card">
        <span className="article-platform medium-badge">Medium</span>

        <p className="article-meta">Cloud • DevOps • Career Journey</p>

        <h3>My Journey into Cloud and DevOps Engineering.</h3>

        <p>
          A personal introduction to my path into cloud engineering,
          automation, infrastructure, and DevOps.
        </p>

        <div className="article-tags">
          <span>#cloud</span>
          <span>#devops</span>
          <span>#automation</span>
        </div>

        <a
          className="project-link"
          href="https://medium.com/@mary-ogbonna"
          target="_blank"
          rel="noreferrer"
        >
          Read on Medium →
        </a>
      </article>
    </div>

    <div className="article-buttons">
      <a
        className="article-button hashnode-button"
        href="https://hashnode.com/@official-mary"
        target="_blank"
        rel="noreferrer"
      >
        Hashnode Articles →
      </a>

      <a
        className="article-button medium-button"
        href="https://medium.com/@mary-ogbonna"
        target="_blank"
        rel="noreferrer"
      >
        Medium Articles →
      </a>
    </div>
  </section>

  <section className="section connect-section" id="contact">
    <div className="connect-heading">
      <p className="section-label">LET&apos;S CONNECT</p>

      <h2>
        Let&apos;s <span>work together.</span>
      </h2>

      <p>
        Whether you have a project in mind, a DevOps role, a collaboration
        idea, or simply want to talk cloud infrastructure, I would love to
        hear from you.
      </p>
    </div>

    <div className="contact-layout">
      <div className="contact-info-card">
        <h3>Get in Touch</h3>

        <div className="contact-item">
          <div className="contact-icon">✉</div>

          <div>
            <span>Email</span>

            <a href="mailto:ogbonnamaryminds@gmail.com">
              ogbonnamaryminds@gmail.com
            </a>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">⌘</div>

          <div>
            <span>Collaboration</span>

            <strong>Open to Cloud & DevOps Opportunities</strong>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">⌖</div>

          <div>
            <span>Location</span>

            <strong>Lagos, Nigeria · Remote Ready</strong>
          </div>
        </div>
      </div>

      <div className="contact-right-column">
        <div className="follow-card">
          <h3>Follow Me</h3>

          <div className="social-icon-links">
            <a
              href="https://github.com/official-mary"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit my GitHub"
              title="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/mary-nwanneka"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit my LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://medium.com/@mary-ogbonna"
              target="_blank"
              rel="noreferrer"
              aria-label="Read my Medium articles"
              title="Medium"
            >
              <FaMedium />
            </a>

            <a
              href="https://hashnode.com/@official-mary"
              target="_blank"
              rel="noreferrer"
              aria-label="Read my Hashnode articles"
              title="Hashnode"
            >
              <SiHashnode />
            </a>

            <a
              href="https://www.upwork.com/freelancers/~01cbfd5028e80ccfc5"
              target="_blank"
              rel="noreferrer"
              aria-label="Hire me on Upwork"
              title="Upwork"
            >
              <FaUpwork />
            </a>
          </div>
        </div>

        <form className="message-form" onSubmit={handleMessageSubmit}>
          <h3>Send a Message</h3>

          <label>
            Name
            <input name="name" type="text" placeholder="Your name" required />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </label>

          <label>
            Subject
            <input
              name="subject"
              type="text"
              placeholder="What would you like to discuss?"
              required
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows="6"
              placeholder="Tell me about your project, opportunity, or idea..."
              required
            />
          </label>

          <button className="btn btn-primary message-submit" type="submit">
            Send Message →
          </button>
        </form>
      </div>
    </div>
  </section>

  <footer className="site-footer">
    <div className="footer-grid">
      <div className="footer-profile">
        <a className="brand" href="#home">
          Nwanneka<span>.</span>
        </a>

        <p>
          Cloud & DevOps Engineer building reliable infrastructure,
          automating delivery workflows, and helping teams deploy with
          confidence.
        </p>

        <div className="footer-socials">
          <a
            href="https://github.com/official-mary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mary-nwanneka"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://medium.com/@mary-ogbonna"
            target="_blank"
            rel="noreferrer"
          >
            Medium
          </a>

          <a
            href="https://hashnode.com/@official-mary"
            target="_blank"
            rel="noreferrer"
          >
            Hashnode
          </a>

          <a
            href="https://www.upwork.com/freelancers/~01cbfd5028e80ccfc5"
            target="_blank"
            rel="noreferrer"
          >
            Upwork
          </a>
        </div>
      </div>

      <div className="footer-cta">
        <h4>Let&apos;s Build Something Reliable</h4>

        <p>
          Open to Cloud, DevOps, infrastructure automation, and technical
          support opportunities.
        </p>

        <a
          className="footer-contact-button"
          href="mailto:ogbonnamaryminds@gmail.com?subject=Portfolio%20Enquiry"
        >
          ✉ Contact Me <span>→</span>
        </a>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© 2026 Nwanneka Mary. All rights reserved.</p>

      <a href="#home">Back to top ↑</a>
    </div>
  </footer>
</main>

);
}

export default HomePage;
