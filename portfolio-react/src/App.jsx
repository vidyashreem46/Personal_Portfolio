import './App.css'
import './index.css'

const projects = [
  {
    number: '01',
    title: 'AI Chatbot Benchmarking Tool',
    description:
      'A Django application for comparing AI chatbot responses using performance metrics, response time, scoring, and dashboard analytics.',
    tags: ['Python', 'Django', 'AI APIs', 'SQLite'],
    category: 'AI APPLICATION',
    color: 'violet',
    icon: '✳',
    url: 'https://github.com/vidyashreem46/AI-Chatbot-Benchmarking-Tool',
  },
  {
    number: '02',
    title: 'Smart Canteen Ordering System',
    description:
      'A digital canteen workflow for menu browsing, QR-based access, cart and orders, kitchen updates, order tracking, and digital bills.',
    tags: ['Python', 'Streamlit', 'SQLite'],
    category: 'HACKATHON PROJECT',
    color: 'coral',
    icon: '↗',
    url: 'https://github.com/vidyashreem46/Smart-Canteen-Ordering-System',
  },
  {
    number: '03',
    title: 'AI Intelligence Ingestion Pipeline',
    description:
      'A data pipeline concept for collecting, validating, enriching, normalizing, and resolving AI ecosystem information from multiple sources.',
    tags: ['Python', 'Data Pipelines', 'AI'],
    category: 'DATA ENGINEERING',
    color: 'blue',
    icon: '⌘',
    url: 'https://github.com/vidyashreem46/ai-intelligence-ingestion-pipeline',
  },
  {
    number: '04',
    title: 'UUCMS Result Automation',
    description:
      'Automates result extraction from the UUCMS portal and exports extracted marks into Excel and CSV files.',
    tags: ['Python', 'Selenium', 'Pandas'],
    category: 'AUTOMATION',
    color: 'yellow',
    icon: '↘',
    url: 'https://github.com/vidyashreem46/uucms-result-automation',
  },
  {
    number: '05',
    title: 'Big Data Visualization System',
    description:
      'An interactive dashboard for exploring uploaded business data, KPIs, sales, profit, regional analysis, and decision-support insights.',
    tags: ['JavaScript', 'Chart.js', 'Excel/CSV'],
    category: 'DATA ANALYTICS',
    color: 'pink',
    icon: '▥',
    url: 'https://github.com/vidyashreem46/data_dashboard',
  },
  {
    number: '06',
    title: 'Spam Email Detection',
    description:
      'A beginner machine-learning project that processes email text and classifies messages as spam or not spam using Naive Bayes.',
    tags: ['Python', 'Pandas', 'Scikit-learn'],
    category: 'MACHINE LEARNING',
    color: 'green',
    icon: '✉',
    url: 'https://github.com/vidyashreem46/spam_email_detection',
  },
  {
    number: '07',
    title: 'CareNest',
    description:
      'A web application project in my repository collection. Explore the repository for its implementation and current features.',
    tags: ['Web Development', 'Project'],
    category: 'WEB APPLICATION',
    color: 'coral',
    icon: '♡',
    url: 'https://github.com/vidyashreem46/CareNest',
  },
  {
    number: '08',
    title: 'Digitalized Stationery',
    description:
      'A digital stationery project created around making stationery resources easier to discover and access.',
    tags: ['Web Development', 'Digital Resources'],
    category: 'DIGITAL PRODUCT',
    color: 'violet',
    icon: '✎',
    url: 'https://github.com/vidyashreem46/SVC_Digitalized_Stationary',
  },
  {
    number: '09',
    title: 'Student Management System',
    description:
      'A student management project. Visit the repository to view the source code and implementation details.',
    tags: ['Programming', 'Management System'],
    category: 'SOFTWARE PROJECT',
    color: 'blue',
    icon: '▤',
    url: 'https://github.com/vidyashreem46/Student_Managment_System',
  },
  {
    number: '10',
    title: 'Password Generator',
    description:
      'A utility project for generating passwords. Explore the source code and available functionality on GitHub.',
    tags: ['Programming', 'Utility'],
    category: 'PYTHON PROJECT',
    color: 'yellow',
    icon: '⌑',
    url: 'https://github.com/vidyashreem46/password._.generator',
  },
  {
    number: '11',
    title: 'Bank Management System',
    description:
      'A C programming project focused on basic bank-management operations and programming fundamentals.',
    tags: ['C', 'Programming Fundamentals'],
    category: 'C PROGRAMMING',
    color: 'green',
    icon: '▦',
    url: 'https://github.com/vidyashreem46/Bank-Managment-System-C',
  },
  {
    number: '12',
    title: 'Library Book Management',
    description:
      'A C programming project for practicing library book-management concepts and core programming logic.',
    tags: ['C', 'Data Management'],
    category: 'C PROGRAMMING',
    color: 'pink',
    icon: '▧',
    url: 'https://github.com/vidyashreem46/Library-book-Managment-in-C',
  },
]

const skillGroups = [
  {
    number: '01',
    title: 'Programming',
    skills: ['Python', 'C', 'SQL'],
  },
  {
    number: '02',
    title: 'Data & AI',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Machine Learning'],
  },
  {
    number: '03',
    title: 'Web Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    number: '04',
    title: 'Tools & Databases',
    skills: ['Git', 'GitHub', 'SQLite', 'Jupyter Notebook'],
  },
]

function BrandMark() {
  return (
    <a className="brand" href="#home" aria-label="Vidyashree portfolio home">
      <svg
        className="brand-symbol"
        viewBox="0 0 48 48"
        role="img"
        aria-label="Abstract flower data logo"
      >
        <rect width="48" height="48" rx="15" fill="currentColor" />
        <g fill="none" stroke="#fffaf6" strokeWidth="2.5">
          <ellipse cx="24" cy="15" rx="5" ry="8" />
          <ellipse cx="24" cy="33" rx="5" ry="8" />
          <ellipse
            cx="16.2"
            cy="24"
            rx="5"
            ry="8"
            transform="rotate(-90 16.2 24)"
          />
          <ellipse
            cx="31.8"
            cy="24"
            rx="5"
            ry="8"
            transform="rotate(-90 31.8 24)"
          />
        </g>
        <circle cx="24" cy="24" r="3" fill="#f5bf9e" />
      </svg>
      <span className="brand-name">vidya<span>.</span></span>
    </a>
  )
}

function App() {
  return (
    <>
      <header className="site-header">
        <BrandMark />

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#journey">Journey</a>
          <a className="nav-cta" href="#contact">
            Let&apos;s connect <span>↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <div className="hero-label">
              <span className="status-dot" />
              DATA SCIENCE &amp; AI STUDENT
            </div>

            <p className="eyebrow">HELLO THERE, I&apos;M</p>

            <h1>
              <span className="name-line">Vidyashree.M</span>
              <span className="hero-title-second">
                Ideas meet <em>intelligence.</em>
              </span>
            </h1>

            <p className="hero-description">
              I&apos;m a Data Science and Artificial Intelligence student
              exploring Python, machine learning, data, and creative software
              solutions — one project at a time.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my projects <span>↘</span>
              </a>
              <a className="button button-outline" href="#contact">
                Say hello <span>↗</span>
              </a>
            </div>

            <div className="hero-footnote">
              <span>BASED IN INDIA</span>
              <span className="footnote-star">✳</span>
              <span>ALWAYS LEARNING. ALWAYS BUILDING.</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Abstract creative data illustration">
            <div className="art-label art-label-top">CREATIVITY × CODE</div>
            <div className="art-grid" />

            <div className="art-ring ring-one" />
            <div className="art-ring ring-two" />

            <div className="art-sun" />
            <div className="art-shape">
              <div className="shape-inner" />
            </div>

            <div className="art-flower">✳</div>
            <div className="art-sparkle sparkle-one">✦</div>
            <div className="art-sparkle sparkle-two">✧</div>

            <div className="art-mini-card">
              <span className="mini-card-icon">⌘</span>
              <span>
                <strong>Curious mind</strong>
                <small>Building with purpose</small>
              </span>
            </div>

            <div className="art-label art-label-bottom">THINK · CREATE · REPEAT</div>
            <span className="art-dot art-dot-one" />
            <span className="art-dot art-dot-two" />
          </div>

          <a className="scroll-cue" href="#about">
            SCROLL TO DISCOVER <span>↓</span>
          </a>
        </section>

        <div className="ticker" aria-label="Portfolio themes">
          <span>DATA WITH PURPOSE</span><i>✳</i>
          <span>CODE WITH CURIOSITY</span><i>✳</i>
          <span>IDEAS INTO ACTION</span><i>✳</i>
          <span>DATA WITH PURPOSE</span>
        </div>

        <section className="section about-section" id="about">
          <div className="section-kicker">
            <span>01</span> / A LITTLE ABOUT ME
          </div>

          <div className="about-layout">
            <h2 className="section-title">
              Learning the
              <br />
              <em>why</em> behind the
              <br />
              <span className="title-highlight">what.</span>
            </h2>

            <div className="about-copy">
              <div className="about-note">
                <span>✳</span>
                <p>Curiosity is where every good project begins.</p>
              </div>

              <p>
                I&apos;m pursuing a B.Sc. (Hons) in Data Science and Artificial
                Intelligence at Sarada Vilas College, University of Mysore.
              </p>
              <p>
                I enjoy turning what I learn into practical work — from Python
                programming and data dashboards to machine-learning experiments
                and web applications.
              </p>
              <p>
                My goal is to keep strengthening my fundamentals and grow into
                an AI and Data Science professional who builds useful,
                thoughtful solutions.
              </p>

              <a className="text-link" href="#journey">
                A little more about my journey <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="projects-inner">
            <div className="projects-heading">
              <div>
                <div className="section-kicker">
                  <span>02</span> / PROJECT PLAYGROUND
                </div>
                <h2 className="section-title">
                  Things I&apos;ve
                  <br />
                  <em>been building.</em>
                </h2>
              </div>
              <a
                className="all-projects-link"
                href="https://github.com/vidyashreem46"
                target="_blank"
                rel="noreferrer"
              >
                Browse all repositories <span>↗</span>
              </a>
            </div>

            <p className="projects-intro">
              From AI experiments and automation to analytics and software
              fundamentals — a selection from my GitHub portfolio.
            </p>

            <div className="project-grid">
              {projects.map((project) => (
                <article
                  className={`project-card project-${project.color}`}
                  key={project.number}
                >
                  <div className="project-visual">
                    <span className="project-index">{project.number}</span>
                    <span className="project-art-icon">{project.icon}</span>
                    <span className="project-art-caption">{project.category}</span>
                    <span className="project-orbit" />
                  </div>

                  <div className="project-info">
                    <p className="project-category">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    <div className="tag-list">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <a
                      className="project-link"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      View on GitHub <span>↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <p className="projects-footnote">
              Project links open their GitHub repositories. Descriptions are
              summaries; please check each repository for its current code,
              features, and implementation details.
            </p>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-kicker">
            <span>03</span> / MY TOOLKIT
          </div>

          <h2 className="section-title">
            Growing my skills,
            <br />
            <em>one step at a time.</em>
          </h2>

          <div className="skills-layout">
            <div className="skills-note">
              <span className="skills-note-icon">✳</span>
              <p>Learn the fundamentals. Apply them. Keep improving.</p>
              <span className="skills-note-caption">MY APPROACH ↘</span>
            </div>

            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article className="skill-group" key={group.number}>
                  <span className="skill-number">{group.number} / TOOLKIT</span>
                  <h3>{group.title}</h3>
                  <div className="tag-list">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section journey-section" id="journey">
          <div className="section-kicker">
            <span>04</span> / THE JOURNEY
          </div>

          <h2 className="section-title">
            Still becoming.
            <br />
            <em>Always curious.</em>
          </h2>

          <article className="journey-card">
            <div className="journey-icon">✳</div>
            <div className="journey-content">
              <span className="journey-status">CURRENT CHAPTER</span>
              <h3>B.Sc. (Hons) Data Science &amp; Artificial Intelligence</h3>
              <p className="journey-school">
                Sarada Vilas College · University of Mysore
              </p>
              <p>
                Building a foundation in programming, data analysis, machine
                learning, and software development through coursework and
                hands-on projects.
              </p>
            </div>
            <span className="journey-stamp">IN PROGRESS ↗</span>
          </article>

          <div className="journey-bottom">
            <span>WHAT&apos;S NEXT?</span>
            <p>More experiments. Deeper knowledge. Better solutions.</p>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-decoration contact-decoration-one">✳</div>
          <div className="contact-decoration contact-decoration-two">✦</div>

          <div className="section-kicker">
            <span>05</span> / YOUR TURN
          </div>

          <h2>
            Have something
            <br />
            <em>interesting in mind?</em>
          </h2>

          <p className="contact-description">
            Let&apos;s connect, share ideas, and discover what we can build
            together.
          </p>

          <a className="button contact-button" href="mailto:dreamtail06@gmail.com">
            Email me <span>↗</span>
          </a>

          <div className="social-links">
            <a
              href="https://github.com/vidyashreem46"
              target="_blank"
              rel="noreferrer"
            >
              <span className="social-symbol">⌘</span>
              <span className="social-copy">
                <small>EXPLORE MY CODE</small>
                <strong>GitHub ↗</strong>
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/vidyashree-m-98a7641b7/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="social-symbol">in</span>
              <span className="social-copy">
                <small>LET&apos;S NETWORK</small>
                <strong>LinkedIn ↗</strong>
              </span>
            </a>

            <a href="mailto:dreamtail06@gmail.com">
              <span className="social-symbol">✉</span>
              <span className="social-copy">
                <small>SEND A MESSAGE</small>
                <strong>Email ↗</strong>
              </span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <BrandMark />
        <p>Made with curiosity by Vidyashree.M</p>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </>
  )
}

export default App