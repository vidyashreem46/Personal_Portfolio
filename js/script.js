/* =====================================================
   ROOT
===================================================== */

:root {

    --bg: #08090d;
    --bg-soft: #0d0f15;
    --card: rgba(18, 20, 28, 0.72);

    --text: #f2f3f5;
    --text-soft: #a7abb7;
    --text-muted: #686d79;

    --accent: #8b7cff;
    --accent-soft: #b4adff;

    --border: rgba(255,255,255,0.09);

    --green: #7ee2a8;
    --blue: #82aaff;
    --yellow: #e7c875;
    --purple: #c792ea;

    --mono: "DM Mono", monospace;
    --sans: "Inter", sans-serif;

    --max-width: 1200px;
}


/* =====================================================
   RESET
===================================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {

    background: var(--bg);

    color: var(--text);

    font-family: var(--sans);

    line-height: 1.6;

    overflow-x: hidden;
}

a {
    color: inherit;
    text-decoration: none;
}

button {
    font-family: inherit;
}

::selection {
    background: var(--accent);
    color: white;
}


/* =====================================================
   BACKGROUND
===================================================== */

.background-grid {

    position: fixed;

    inset: 0;

    z-index: -5;

    opacity: .28;

    background-image:
        linear-gradient(
            rgba(255,255,255,.025) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(255,255,255,.025) 1px,
            transparent 1px
        );

    background-size: 60px 60px;

    mask-image:
        linear-gradient(
            to bottom,
            black,
            transparent 85%
        );
}

.orb {

    position: fixed;

    width: 450px;
    height: 450px;

    border-radius: 50%;

    filter: blur(120px);

    opacity: .09;

    z-index: -4;

    pointer-events: none;
}

.orb-one {

    background: #7667ff;

    top: -200px;
    right: -150px;
}

.orb-two {

    background: #5f8dff;

    bottom: -200px;
    left: -180px;
}

.noise {

    position: fixed;

    inset: 0;

    z-index: 100;

    pointer-events: none;

    opacity: .025;

    background-image:
        url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E");
}


/* =====================================================
   NAVBAR
===================================================== */

.navbar {

    position: fixed;

    top: 0;

    left: 50%;

    transform: translateX(-50%);

    width: min(
        calc(100% - 40px),
        1200px
    );

    height: 74px;

    margin-top: 18px;

    padding: 0 22px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    border: 1px solid var(--border);

    background: rgba(8,9,13,.72);

    backdrop-filter: blur(18px);

    border-radius: 18px;

    z-index: 999;
}

.logo {

    font-family: var(--mono);

    font-weight: 500;

    font-size: 18px;

    letter-spacing: -1px;
}

.logo-bracket {
    color: var(--accent);
}

.nav-links {

    display: flex;

    gap: 28px;
}

.nav-links a {

    color: var(--text-muted);

    font-size: 12px;

    font-family: var(--mono);

    transition: .25s;
}

.nav-links a:hover,
.nav-links a.active {

    color: var(--text);
}

.nav-connect {

    display: flex;

    gap: 9px;

    align-items: center;

    font-size: 11px;

    font-family: var(--mono);

    border: 1px solid var(--border);

    padding: 10px 14px;

    border-radius: 10px;

    transition: .25s;
}

.nav-connect:hover {

    background: rgba(255,255,255,.06);

    border-color:
        rgba(139,124,255,.5);
}

.menu-btn {

    display: none;

    border: 0;

    background: transparent;

    color: white;

    font-size: 20px;
}


/* =====================================================
   GENERAL
===================================================== */

.section {

    width: min(
        calc(100% - 40px),
        var(--max-width)
    );

    margin: auto;

    padding: 120px 0;
}

.section-heading {

    display: flex;

    gap: 30px;

    margin-bottom: 70px;
}

.section-number {

    font-family: var(--mono);

    font-size: 12px;

    color: var(--accent);

    padding-top: 9px;
}

.eyebrow {

    display: block;

    font-family: var(--mono);

    font-size: 10px;

    letter-spacing: 2px;

    color: var(--text-muted);

    margin-bottom: 14px;
}

.section-heading h2 {

    font-size: clamp(38px, 5vw, 68px);

    line-height: .95;

    letter-spacing: -3px;

    font-weight: 600;
}

.section-heading h2 span {

    color: var(--text-muted);

    font-weight: 400;
}


/* =====================================================
   HERO
===================================================== */

.hero {

    min-height: 100vh;

    display: grid;

    grid-template-columns: 1fr 1fr;

    align-items: center;

    gap: 80px;

    padding-top: 160px;
}

.status-pill {

    display: inline-flex;

    align-items: center;

    gap: 9px;

    border: 1px solid var(--border);

    background: rgba(255,255,255,.025);

    padding: 8px 12px;

    border-radius: 100px;

    font-family: var(--mono);

    font-size: 9px;

    letter-spacing: 1px;

    color: var(--text-muted);

    margin-bottom: 28px;
}

.status-dot {

    width: 6px;
    height: 6px;

    border-radius: 50%;

    background: var(--green);

    box-shadow:
        0 0 12px var(--green);

    animation: pulse 2s infinite;
}

@keyframes pulse {

    0%,100% {
        opacity: .5;
    }

    50% {
        opacity: 1;
    }
}

.hero-intro {

    color: var(--text-muted);

    font-family: var(--mono);

    font-size: 13px;

    margin-bottom: 8px;
}

.hero h1 {

    font-size: clamp(
        65px,
        9vw,
        120px
    );

    line-height: .85;

    letter-spacing: -7px;

    font-weight: 700;
}

.hero h1 span {

    color: var(--accent);
}

.hero-role {

    display: flex;

    align-items: center;

    gap: 12px;

    margin-top: 28px;

    font-family: var(--mono);

    font-size: 11px;

    letter-spacing: 1px;

    color: var(--text-soft);
}

.hero-role b {

    color: var(--accent);
}

.role-line {

    width: 35px;

    height: 1px;

    background: var(--accent);
}

.hero-description {

    max-width: 560px;

    color: var(--text-muted);

    font-size: 15px;

    margin-top: 28px;
}

.hero-description strong {

    color: var(--text-soft);

    font-weight: 500;
}

.hero-buttons {

    display: flex;

    gap: 12px;

    margin-top: 35px;
}

.btn {

    display: inline-flex;

    align-items: center;

    gap: 10px;

    padding: 14px 18px;

    border-radius: 10px;

    font-family: var(--mono);

    font-size: 11px;

    transition: .3s;
}

.btn-primary {

    background: var(--text);

    color: var(--bg);
}

.btn-primary:hover {

    transform: translateY(-3px);

    box-shadow:
        0 15px 35px rgba(255,255,255,.08);
}

.btn-secondary {

    border: 1px solid var(--border);

    color: var(--text-soft);
}

.btn-secondary:hover {

    background: rgba(255,255,255,.05);

    color: white;
}

.hero-socials {

    display: flex;

    gap: 10px;

    margin-top: 30px;
}

.hero-socials a {

    width: 36px;
    height: 36px;

    border: 1px solid var(--border);

    border-radius: 9px;

    display: flex;

    align-items: center;
    justify-content: center;

    color: var(--text-muted);

    font-size: 13px;

    transition: .3s;
}

.hero-socials a:hover {

    color: white;

    border-color: var(--accent);

    transform: translateY(-3px);
}


/* =====================================================
   TERMINAL
===================================================== */

.hero-right {

    position: relative;

    min-height: 480px;

    display: flex;

    align-items: center;

    justify-content: center;
}

.terminal-window {

    width: 100%;

    max-width: 500px;

    border: 1px solid var(--border);

    background:
        rgba(12,14,20,.85);

    border-radius: 15px;

    overflow: hidden;

    box-shadow:
        0 40px 100px rgba(0,0,0,.45),

        0 0 80px rgba(
            139,124,255,.06
        );
}

.terminal-top {

    height: 45px;

    border-bottom: 1px solid var(--border);

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 0 16px;
}

.terminal-dots {

    display: flex;

    gap: 6px;
}

.terminal-dots span {

    width: 8px;
    height: 8px;

    border-radius: 50%;

    background: #30323b;
}

.terminal-title {

    font-family: var(--mono);

    font-size: 9px;

    color: var(--text-muted);
}

.terminal-body {

    padding: 30px 22px;

    font-family: var(--mono);

    font-size: 12px;

    line-height: 2.1;
}

.code-line {

    display: flex;

    gap: 20px;
}

.line-number {

    width: 18px;

    color: #3d414b;

    user-select: none;
}

.indent {
    padding-left: 25px;
}

.double-indent {
    padding-left: 50px;
}

.purple {
    color: var(--purple);
}

.blue {
    color: var(--blue);
}

.yellow {
    color: var(--yellow);
}

.green {
    color: var(--green);
}

.terminal-cursor {

    margin-left: 38px;

    color: var(--accent);

    animation: blink 1s infinite;
}

@keyframes blink {

    50% {
        opacity: 0;
    }
}

.floating-card {

    position: absolute;

    display: flex;

    align-items: center;

    gap: 12px;

    padding: 13px;

    border: 1px solid var(--border);

    background: rgba(15,17,24,.85);

    backdrop-filter: blur(15px);

    border-radius: 12px;

    box-shadow: 0 20px 50px rgba(0,0,0,.25);
}

.floating-card i {

    color: var(--accent);

    font-size: 15px;
}

.floating-card strong {

    display: block;

    font-size: 11px;
}

.floating-card small {

    display: block;

    color: var(--text-muted);

    font-family: var(--mono);

    font-size: 8px;

    margin-top: 2px;
}

.card-top {

    top: 20px;

    right: -15px;
}

.card-bottom {

    bottom: 30px;

    left: -15px;
}


/* =====================================================
   STATS
===================================================== */

.stats-section {

    width: min(
        calc(100% - 40px),
        var(--max-width)
    );

    margin: auto;

    display: grid;

    grid-template-columns:
        repeat(4,1fr);

    border-top: 1px solid var(--border);

    border-bottom: 1px solid var(--border);
}

.stat {

    padding: 28px;

    border-right: 1px solid var(--border);

    position: relative;
}

.stat:last-child {
    border-right: 0;
}

.stat strong {

    font-family: var(--mono);

    font-size: 28px;

    font-weight: 400;
}

.stat > span {

    color: var(--accent);

    font-family: var(--mono);
}

.stat p {

    color: var(--text-muted);

    font-size: 10px;

    font-family: var(--mono);

    margin-top: 4px;
}


/* =====================================================
   ABOUT
===================================================== */

.about-grid {

    display: grid;

    grid-template-columns:
        1.5fr 1fr;

    gap: 80px;
}

.big-text {

    font-size: clamp(
        26px,
        3vw,
        42px
    );

    line-height: 1.2;

    letter-spacing: -1.5px;

    margin-bottom: 30px;
}

.big-text span {
    color: var(--accent-soft);
}

.about-main > p:not(.big-text) {

    color: var(--text-muted);

    max-width: 620px;

    margin-bottom: 15px;

    font-size: 14px;
}

.about-tags {

    display: flex;

    flex-wrap: wrap;

    gap: 8px;

    margin-top: 30px;
}

.about-tags span {

    border: 1px solid var(--border);

    padding: 8px 11px;

    border-radius: 8px;

    font-family: var(--mono);

    color: var(--text-muted);

    font-size: 9px;
}

.about-side {

    display: flex;

    flex-direction: column;

    gap: 15px;
}

.info-card {

    padding: 28px;

    border: 1px solid var(--border);

    background: rgba(255,255,255,.02);

    border-radius: 13px;

    transition: .3s;
}

.info-card:hover {

    border-color:
        rgba(139,124,255,.35);

    transform: translateY(-4px);
}

.card-label {

    color: var(--accent);

    font-family: var(--mono);

    font-size: 9px;

    letter-spacing: 1px;
}

.info-card h3 {

    margin-top: 18px;

    font-size: 22px;
}

.info-card p {

    color: var(--text-soft);

    font-size: 12px;

    margin: 4px 0 12px;
}

.info-card small {

    color: var(--text-muted);

    font-family: var(--mono);

    font-size: 9px;

    line-height: 1.8;
}


/* =====================================================
   PROJECTS
===================================================== */

.project-featured {

    display: grid;

    grid-template-columns:
        repeat(2,1fr);

    gap: 18px;
}

.project-card {

    position: relative;

    min-height: 430px;

    padding: 35px;

    border: 1px solid var(--border);

    background:
        linear-gradient(
            145deg,
            rgba(255,255,255,.035),
            rgba(255,255,255,.012)
        );

    border-radius: 17px;

    overflow: hidden;

    transition: .4s;
}

.project-card:hover {

    transform: translateY(-7px);

    border-color:
        rgba(139,124,255,.4);

    box-shadow:
        0 30px 80px rgba(0,0,0,.25);
}

.project-large {

    grid-column: span 2;

    min-height: 500px;

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 40px;
}

.project-number {

    position: absolute;

    top: 25px;

    right: 28px;

    font-family: var(--mono);

    font-size: 10px;

    color: var(--text-muted);
}

.project-meta {

    display: flex;

    gap: 15px;

    font-family: var(--mono);

    font-size: 8px;

    letter-spacing: 1px;

    color: var(--accent);
}

.project-content h3 {

    font-size: 37px;

    line-height: 1;

    letter-spacing: -1.5px;

    margin-top: 28px;
}

.project-content p {

    color: var(--text-muted);

    font-size: 13px;

    max-width: 460px;

    margin-top: 20px;
}

.tech-list {

    display: flex;

    flex-wrap: wrap;

    gap: 7px;

    margin-top: 25px;
}

.tech-list span {

    font-family: var(--mono);

    font-size: 8px;

    color: var(--text-muted);

    border: 1px solid var(--border);

    padding: 6px 8px;

    border-radius: 6px;
}

.project-link {

    display: inline-flex;

    align-items: center;

    gap: 8px;

    margin-top: 28px;

    font-family: var(--mono);

    font-size: 10px;

    color: var(--text-soft);

    transition: .3s;
}

.project-link:hover {

    color: var(--accent-soft);

    gap: 12px;
}


/* =====================================================
   MINI DASHBOARD
===================================================== */

.project-visual {

    display: flex;

    align-items: center;

    justify-content: center;
}

.mini-dashboard {

    width: 90%;

    padding: 22px;

    border: 1px solid var(--border);

    background: rgba(0,0,0,.22);

    border-radius: 12px;

    transform:
        perspective(900px)
        rotateY(-7deg)
        rotateX(3deg);

    box-shadow:
        30px 30px 70px rgba(0,0,0,.3);
}

.mini-header {

    font-family: var(--mono);

    font-size: 8px;

    color: var(--accent);

    padding-bottom: 15px;

    border-bottom: 1px solid var(--border);
}

.mini-score {

    display: grid;

    grid-template-columns:
        repeat(3,1fr);

    gap: 8px;

    margin-top: 20px;
}

.mini-score div {

    padding: 12px 8px;

    border: 1px solid var(--border);

    border-radius: 7px;
}

.mini-score span {

    display: block;

    font-family: var(--mono);

    color: var(--text-muted);

    font-size: 7px;
}

.mini-score strong {

    display: block;

    margin-top: 5px;

    font-size: 17px;

    font-weight: 500;
}

.mini-chart {

    height: 130px;

    display: flex;

    align-items: end;

    gap: 8px;

    padding-top: 25px;
}

.mini-chart span {

    flex: 1;

    background:
        linear-gradient(
            to top,
            var(--accent),
            rgba(139,124,255,.1)
        );

    border-radius: 3px 3px 0 0;

    opacity: .7;
}


/* =====================================================
   OTHER PROJECTS
===================================================== */

.other-projects {

    margin-top: 80px;
}

.other-title {

    display: flex;

    align-items: end;

    justify-content: space-between;

    border-bottom: 1px solid var(--border);

    padding-bottom: 20px;

    margin-bottom: 10px;
}

.other-title > span {

    font-family: var(--mono);

    color: var(--accent);

    font-size: 9px;

    letter-spacing: 2px;
}

.other-title p {

    color: var(--text-muted);

    font-size: 11px;

    max-width: 380px;
}

.project-list {

    display: grid;

    grid-template-columns:
        repeat(2,1fr);
}

.small-project {

    display: flex;

    align-items: center;

    gap: 20px;

    padding: 20px 5px;

    border-bottom: 1px solid var(--border);

    transition: .3s;
}

.small-project:hover {

    padding-left: 12px;
}

.small-project > span {

    font-family: var(--mono);

    font-size: 9px;

    color: var(--text-muted);

    width: 20px;
}

.small-project div {

    flex: 1;
}

.small-project h4 {

    font-size: 13px;

    font-weight: 500;
}

.small-project p {

    font-family: var(--mono);

    font-size: 8px;

    color: var(--text-muted);

    margin-top: 3px;
}

.small-project i {

    color: var(--text-muted);

    font-size: 10px;
}


/* =====================================================
   CURRENTLY BUILDING
===================================================== */

.building-grid {

    display: grid;

    grid-template-columns:
        repeat(2,1fr);

    gap: 18px;
}

.building-card {

    position: relative;

    padding: 35px;

    border: 1px dashed
        rgba(139,124,255,.25);

    border-radius: 15px;

    background:
        rgba(139,124,255,.025);

    transition: .3s;
}

.building-card:hover {

    background:
        rgba(139,124,255,.05);

    transform: translateY(-5px);
}

.building-icon {

    width: 46px;
    height: 46px;

    display: flex;

    align-items: center;
    justify-content: center;

    border: 1px solid var(--border);

    border-radius: 11px;

    color: var(--accent);

    margin-bottom: 25px;
}

.building-status {

    position: absolute;

    top: 30px;

    right: 30px;

    font-family: var(--mono);

    color: var(--accent);

    font-size: 8px;

    letter-spacing: 1px;
}

.building-card h3 {

    font-size: 27px;

    line-height: 1.05;

    max-width: 250px;
}

.building-card p {

    color: var(--text-muted);

    font-size: 12px;

    margin-top: 15px;

    max-width: 450px;
}

.building-tech {

    display: flex;

    gap: 7px;

    margin-top: 22px;
}

.building-tech span {

    font-family: var(--mono);

    font-size: 8px;

    color: var(--text-muted);

    border: 1px solid var(--border);

    border-radius: 6px;

    padding: 6px 8px;
}


/* =====================================================
   EXPERIENCE
===================================================== */

.experience-card {

    display: grid;

    grid-template-columns: 130px 1fr;

    border: 1px solid var(--border);

    border-radius: 15px;

    padding: 35px;

    background:
        rgba(255,255,255,.02);
}

.experience-date {

    font-family: var(--mono);

    color: var(--text-muted);

    font-size: 11px;
}

.experience-line {

    width: 1px;

    height: 100px;

    background:
        linear-gradient(
            var(--accent),
            transparent
        );

    margin: 15px 0 0 4px;
}

.experience-top {

    display: flex;

    align-items: start;

    justify-content: space-between;
}

.experience-label {

    font-family: var(--mono);

    font-size: 8px;

    letter-spacing: 1.5px;

    color: var(--accent);
}

.experience-main h3 {

    font-size: 34px;

    margin-top: 7px;
}

.completed {

    font-family: var(--mono);

    font-size: 8px;

    color: var(--green);

    border: 1px solid
        rgba(126,226,168,.25);

    padding: 7px 9px;

    border-radius: 7px;
}

.experience-main > p {

    max-width: 650px;

    color: var(--text-muted);

    font-size: 13px;

    margin-top: 18px;
}

.experience-tags {

    display: flex;

    gap: 7px;

    margin-top: 22px;
}

.experience-tags span {

    font-family: var(--mono);

    color: var(--text-muted);

    border: 1px solid var(--border);

    font-size: 8px;

    padding: 6px 8px;

    border-radius: 6px;
}


/* =====================================================
   SKILLS
===================================================== */

.skills-grid {

    display: grid;

    grid-template-columns:
        repeat(3,1fr);

    gap: 1px;

    background: var(--border);

    border: 1px solid var(--border);

    border-radius: 15px;

    overflow: hidden;
}

.skill-category {

    padding: 30px;

    background: var(--bg-soft);

    min-height: 190px;

    transition: .3s;
}

.skill-category:hover {

    background: #11131b;
}

.skill-heading {

    display: flex;

    align-items: center;

    gap: 10px;

    margin-bottom: 25px;
}

.skill-heading i {

    color: var(--accent);

    font-size: 13px;
}

.skill-heading h3 {

    font-size: 13px;

    font-weight: 500;
}

.skill-items {

    display: flex;

    flex-wrap: wrap;

    gap: 7px;
}

.skill-items span {

    padding: 7px 9px;

    border: 1px solid var(--border);

    border-radius: 7px;

    font-family: var(--mono);

    font-size: 8px;

    color: var(--text-muted);

    transition: .3s;
}

.skill-items span:hover {

    color: white;

    border-color:
        rgba(139,124,255,.4);
}


/* =====================================================
   CERTIFICATIONS
===================================================== */

.cert-grid {

    display: grid;

    grid-template-columns:
        repeat(4,1fr);

    gap: 12px;
}

.cert-card {

    position: relative;

    min-height: 240px;

    padding: 25px;

    border: 1px solid var(--border);

    border-radius: 13px;

    transition: .3s;
}

.cert-card:hover {

    transform: translateY(-5px);

    border-color:
        rgba(139,124,255,.35);
}

.cert-card > span {

    position: absolute;

    top: 20px;

    right: 20px;

    font-family: var(--mono);

    color: var(--text-muted);

    font-size: 8px;
}

.cert-card i {

    color: var(--accent);

    margin-top: 30px;

    font-size: 18px;
}

.cert-card h3 {

    font-size: 17px;

    line-height: 1.2;

    margin-top: 25px;
}

.cert-card p {

    color: var(--text-muted);

    font-size: 10px;

    margin-top: 10px;
}


/* =====================================================
   CONTACT
===================================================== */

.contact {

    padding-bottom: 150px;
}

.contact-box {

    position: relative;

    overflow: hidden;

    text-align: center;

    border: 1px solid var(--border);

    border-radius: 20px;

    padding: 90px 30px;

    background:
        radial-gradient(
            circle at center,
            rgba(139,124,255,.09),
            transparent 55%
        );
}

.contact-box h2 {

    font-size:
        clamp(50px,8vw,100px);

    line-height: .9;

    letter-spacing: -5px;

    margin-top: 15px;
}

.contact-box h2 span {

    color: var(--accent);
}

.contact-box > p {

    max-width: 600px;

    margin: 25px auto 35px;

    color: var(--text-muted);

    font-size: 13px;
}

.email-button {

    display: inline-flex;

    align-items: center;

    gap: 12px;

    border: 1px solid var(--border);

    padding: 15px 20px;

    border-radius: 10px;

    font-family: var(--mono);

    font-size: 11px;

    transition: .3s;
}

.email-button:hover {

    background: white;

    color: var(--bg);

    transform: translateY(-3px);
}

.contact-socials {

    display: flex;

    justify-content: center;

    gap: 12px;

    margin-top: 25px;
}

.contact-socials a {

    color: var(--text-muted);

    font-family: var(--mono);

    font-size: 9px;

    transition: .3s;
}

.contact-socials a:hover {

    color: white;
}


/* =====================================================
   FOOTER
===================================================== */

footer {

    width: min(
        calc(100% - 40px),
        var(--max-width)
    );

    margin: auto;

    padding: 30px 0 40px;

    border-top: 1px solid var(--border);

    display: flex;

    align-items: center;

    justify-content: space-between;

    color: var(--text-muted);

    font-family: var(--mono);

    font-size: 8px;
}

.footer-logo {

    color: white;

    font-size: 14px;
}

.footer-logo span {

    color: var(--accent);
}


/* =====================================================
   SCROLL REVEAL
===================================================== */

.section,
.stats-section {

    opacity: 0;

    transform: translateY(30px);

    transition:
        opacity .8s ease,
        transform .8s ease;
}

.section.visible,
.stats-section.visible {

    opacity: 1;

    transform: translateY(0);
}


/* =====================================================
   RESPONSIVE
===================================================== */

@media (max-width: 950px) {

    .nav-links {
        display: none;
    }

    .nav-connect {
        display: none;
    }

    .menu-btn {
        display: block;
    }

    .hero {

        grid-template-columns: 1fr;

        padding-top: 150px;
    }

    .hero-right {

        min-height: 400px;
    }

    .stats-section {

        grid-template-columns:
            repeat(2,1fr);
    }

    .stat:nth-child(2) {

        border-right: 0;
    }

    .stat:nth-child(1),
    .stat:nth-child(2) {

        border-bottom: 1px solid var(--border);
    }

    .about-grid {

        grid-template-columns: 1fr;
    }

    .skills-grid {

        grid-template-columns:
            repeat(2,1fr);
    }

    .cert-grid {

        grid-template-columns:
            repeat(2,1fr);
    }
}


@media (max-width: 700px) {

    .navbar {

        width: calc(100% - 24px);

        margin-top: 10px;
    }

    .section {

        width: calc(100% - 30px);

        padding: 85px 0;
    }

    .hero h1 {

        font-size: 68px;

        letter-spacing: -5px;
    }

    .hero-right {

        min-height: 330px;
    }

    .floating-card {

        display: none;
    }

    .terminal-body {

        font-size: 9px;
    }

    .project-featured {

        grid-template-columns: 1fr;
    }

    .project-large {

        grid-column: span 1;

        grid-template-columns: 1fr;

        min-height: auto;
    }

    .project-visual {

        display: none;
    }

    .project-card {

        min-height: auto;

        padding: 28px;
    }

    .project-content h3 {

        font-size: 30px;
    }

    .project-list {

        grid-template-columns: 1fr;
    }

    .building-grid {

        grid-template-columns: 1fr;
    }

    .experience-card {

        grid-template-columns: 1fr;

        gap: 20px;
    }

    .experience-line {

        display: none;
    }

    .skills-grid {

        grid-template-columns: 1fr;
    }

    .cert-grid {

        grid-template-columns: 1fr;
    }

    .section-heading {

        gap: 15px;

        margin-bottom: 45px;
    }

    .section-heading h2 {

        font-size: 43px;

        letter-spacing: -2px;
    }

    .contact-box {

        padding: 65px 20px;
    }

    .contact-box h2 {

        font-size: 55px;

        letter-spacing: -3px;
    }

    .email-button {

        font-size: 9px;

        max-width: 100%;

        word-break: break-all;
    }

    footer {

        flex-direction: column;

        gap: 12px;

        text-align: center;
    }

}
