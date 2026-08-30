/* ==========================================================================
   VIDYASHREE M — DATA LOG
   Design system: a research ledger. Ink + paper + moss + amber.
   ========================================================================== */

:root{
  /* ---- color tokens ---- */
  --ink:        #14181A;   /* primary dark ground */
  --ink-soft:   #1D2224;
  --paper:      #EDE8DE;   /* warm bone paper */
  --paper-dim:  #DDD6C7;
  --moss:       #4B5E3A;   /* deep green */
  --moss-soft:  #6E8459;
  --amber:      #B8863B;   /* muted ochre-amber accent */
  --amber-soft: #D8AE6E;
  --rust:       #A6432F;   /* rare alert / highlight */
  --slate:      #7C8078;   /* secondary text on paper */
  --slate-dark: #9AA39A;   /* secondary text on ink */
  --line:       rgba(20,24,26,0.14);
  --line-dark:  rgba(237,232,222,0.14);

  /* ---- type ---- */
  --f-display: 'Fraunces', Georgia, serif;
  --f-body:    'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  --f-mono:    'JetBrains Mono', ui-monospace, SFMono-Regular, monospace;

  /* ---- layout ---- */
  --rail-w: 15rem;
  --edge: clamp(1.25rem, 4vw, 3.5rem);
  --radius: 2px;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
}

*, *::before, *::after{ box-sizing: border-box; }
html{ scroll-behavior: smooth; }
@media (prefers-reduced-motion: reduce){
  html{ scroll-behavior: auto; }
}

body{
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font-family: var(--f-body);
  font-size: 16px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

img{ max-width: 100%; display: block; }
a{ color: inherit; text-decoration: none; }
ul{ margin: 0; padding: 0; list-style: none; }
h1,h2,h3,p,dl,dd,figure{ margin: 0; }
button{ font: inherit; background: none; border: none; cursor: pointer; color: inherit; }

.mono{ font-family: var(--f-mono); letter-spacing: 0.02em; }

.skip-link{
  position: absolute; left: -999px; top: 0;
  background: var(--ink); color: var(--paper); padding: 0.75rem 1.25rem;
  z-index: 999;
}
.skip-link:focus{ left: 1rem; top: 1rem; }

:focus-visible{
  outline: 2px solid var(--amber);
  outline-offset: 3px;
}

/* film grain, very subtle, purely textural */
.grain{
  position: fixed; inset: 0; z-index: 999; pointer-events: none;
  opacity: 0.035; mix-blend-mode: multiply;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* ==========================================================================
   INDEX RAIL (desktop persistent nav)
   ========================================================================== */

.rail{
  position: fixed; top: 0; left: 0; bottom: 0; width: var(--rail-w);
  display: flex; flex-direction: column;
  padding: 2rem 1.75rem;
  border-right: 1px solid var(--line);
  z-index: 100;
}

.rail-mark{ display: flex; align-items: baseline; gap: 0.5rem; margin-bottom: 3.5rem; }
.rail-initials{ font-family: var(--f-display); font-weight: 600; font-size: 1.25rem; }
.rail-sub{ font-family: var(--f-mono); font-size: 0.65rem; color: var(--slate); letter-spacing: 0.12em; }

.rail-list{ display: flex; flex-direction: column; gap: 0.35rem; flex: 1; }
.rail-list a{
  display: flex; align-items: center; gap: 0.6rem;
  padding: 0.5rem 0; font-size: 0.85rem;
  color: var(--slate); transition: color 0.25s var(--ease);
  position: relative;
}
.rail-num{ font-family: var(--f-mono); font-size: 0.7rem; opacity: 0.7; }
.rail-list a:hover, .rail-list a.is-active{ color: var(--ink); }
.rail-list a.is-active .rail-num{ color: var(--amber); opacity: 1; }
.rail-list a.is-active::before{
  content: ''; position: absolute; left: -1.75rem; top: 50%; transform: translateY(-50%);
  width: 3px; height: 1.1rem; background: var(--amber);
}

.rail-status{
  display: flex; align-items: center; gap: 0.5rem;
  font-family: var(--f-mono); font-size: 0.72rem; color: var(--moss);
  padding-top: 1.5rem; border-top: 1px solid var(--line);
}
.rail-status .dot{
  width: 6px; height: 6px; border-radius: 50%; background: var(--moss);
  box-shadow: 0 0 0 3px rgba(75,94,58,0.15);
}

/* ==========================================================================
   MOBILE TOP BAR / NAV
   ========================================================================== */

.topbar{
  display: none;
  position: fixed; top: 0; left: 0; right: 0; z-index: 200;
  align-items: center; justify-content: space-between;
  padding: 1rem var(--edge);
  background: rgba(237,232,222,0.92); backdrop-filter: blur(6px);
  border-bottom: 1px solid var(--line);
}
.topbar-mark{ font-family: var(--f-display); font-weight: 600; font-size: 1.1rem; }
.topbar-mark span{ font-family: var(--f-mono); font-size: 0.65rem; color: var(--slate); margin-left: 0.25rem; }

.topbar-toggle{
  width: 2.25rem; height: 2.25rem; display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 5px;
}
.topbar-toggle span{
  display: block; width: 20px; height: 2px; background: var(--ink);
  transition: transform 0.25s var(--ease), opacity 0.25s var(--ease);
}
.topbar-toggle[aria-expanded="true"] span:first-child{ transform: translateY(3.5px) rotate(45deg); }
.topbar-toggle[aria-expanded="true"] span:last-child{ transform: translateY(-3.5px) rotate(-45deg); }

.mobile-nav{
  display: none;
  position: fixed; top: 3.6rem; left: 0; right: 0; z-index: 199;
  background: var(--paper); border-bottom: 1px solid var(--line);
  flex-direction: column; padding: 0.5rem var(--edge) 1.25rem;
  transform: translateY(-8px); opacity: 0; pointer-events: none;
  transition: transform 0.25s var(--ease), opacity 0.25s var(--ease);
}
.mobile-nav.is-open{ transform: translateY(0); opacity: 1; pointer-events: auto; }
.mobile-nav a{
  padding: 0.65rem 0; font-family: var(--f-mono); font-size: 0.85rem;
  border-bottom: 1px solid var(--line); color: var(--slate);
}
.mobile-nav a .rail-num{ color: var(--amber); margin-right: 0.5rem; }

/* ==========================================================================
   MAIN / SHARED ENTRY STRUCTURE
   ========================================================================== */

main{ margin-left: var(--rail-w); }

.entry-head{ padding: 0 var(--edge); margin-bottom: 3rem; }
.entry-num{
  display: block; font-size: 0.75rem; color: var(--amber); margin-bottom: 0.6rem;
}
.entry-title{
  font-family: var(--f-display); font-weight: 600; font-size: clamp(2.2rem, 5vw, 3.4rem);
  letter-spacing: -0.01em;
}
.entry-note{ margin-top: 0.6rem; font-size: 0.8rem; color: var(--slate); }

.entry{ padding: 6.5rem 0; border-bottom: 1px solid var(--line); }
.entry--dark{
  background: var(--ink); color: var(--paper); border-bottom: 1px solid var(--line-dark);
}
.entry--dark .entry-num{ color: var(--amber-soft); }
.entry--dark .entry-note{ color: var(--slate-dark); }

/* reveal-on-scroll utility */
.reveal{ opacity: 0; transform: translateY(24px); transition: opacity 0.7s var(--ease), transform 0.7s var(--ease); }
.reveal.is-visible{ opacity: 1; transform: translateY(0); }
@media (prefers-reduced-motion: reduce){
  .reveal{ opacity: 1; transform: none; transition: none; }
}

/* ==========================================================================
   HERO
   ========================================================================== */

.hero{
  min-height: 100svh;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 2rem;
  padding: 7rem var(--edge) 3rem;
  position: relative;
}

.hero-eyebrow{ font-size: 0.72rem; color: var(--moss); margin-bottom: 1.5rem; }

.hero-headline{
  font-family: var(--f-display);
  font-weight: 600;
  font-size: clamp(2.6rem, 7vw, 5.4rem);
  line-height: 0.98;
  letter-spacing: -0.01em;
}
.hero-headline .line{ display: block; }
.hero-headline .line--outline{
  font-style: italic; font-weight: 500;
  color: transparent;
  -webkit-text-stroke: 1.5px var(--ink);
}

.hero-meta{ margin-top: 2.25rem; padding-top: 1.5rem; border-top: 1px solid var(--line); max-width: 30rem; }
.hero-name{ font-family: var(--f-display); font-size: 1.35rem; font-weight: 600; margin-bottom: 0.4rem; }
.hero-role{ font-size: 0.78rem; color: var(--slate); line-height: 1.6; }

.hero-console{
  background: var(--ink); color: var(--paper);
  border-radius: var(--radius);
  padding: 1.1rem 1.1rem 1.4rem;
  display: flex; flex-direction: column; gap: 0.9rem;
  box-shadow: 0 30px 60px -30px rgba(20,24,26,0.45);
}
.console-head{
  display: flex; justify-content: space-between; align-items: center;
  font-size: 0.68rem; color: var(--slate-dark); padding-bottom: 0.7rem;
  border-bottom: 1px solid var(--line-dark);
}
.console-live{ color: var(--moss-soft); }
.console-live::before{ content: ''; }

#ledgerCanvas{ width: 100%; height: 220px; display: block; }

.console-pipeline{
  display: flex; align-items: center; gap: 0.6rem;
  font-size: 0.7rem; padding-top: 0.7rem; border-top: 1px solid var(--line-dark);
}
.pipe-stage{
  color: var(--slate-dark); padding: 0.3rem 0.6rem; border: 1px solid var(--line-dark);
  border-radius: var(--radius); transition: color 0.4s var(--ease), border-color 0.4s var(--ease), background 0.4s var(--ease);
}
.pipe-stage.is-active{ color: var(--ink); background: var(--amber-soft); border-color: var(--amber-soft); }
.pipe-arrow{ color: var(--slate-dark); }

.hero-scroll{
  position: absolute; left: var(--edge); bottom: 2rem;
  display: flex; align-items: center; gap: 0.75rem;
  font-size: 0.68rem; color: var(--slate);
}
.scroll-line{ width: 2.5rem; height: 1px; background: var(--slate); position: relative; overflow: hidden; }
.scroll-line::after{
  content: ''; position: absolute; inset: 0; background: var(--amber);
  transform: translateX(-100%); animation: scrollpulse 2.4s var(--ease) infinite;
}
@keyframes scrollpulse{
  0%{ transform: translateX(-100%); } 50%{ transform: translateX(0); } 100%{ transform: translateX(100%); }
}
@media (prefers-reduced-motion: reduce){ .scroll-line::after{ animation: none; transform: translateX(0); } }

@media (max-width: 900px){
  .hero-scroll{ display: none; }
}

/* ==========================================================================
   ABOUT
   ========================================================================== */

.about-grid{
  padding: 0 var(--edge);
  display: grid;
  grid-template-columns: 0.9fr 1.4fr 0.9fr;
  gap: 3rem;
  align-items: start;
}

.about-chain{ display: flex; flex-direction: column; gap: 0; }
.chain-node{
  display: flex; align-items: baseline; gap: 0.9rem;
  padding: 0.85rem 0; border-bottom: 1px solid var(--line);
  position: relative;
}
.chain-node:first-child{ border-top: 1px solid var(--line); }
.chain-index{ font-size: 0.72rem; color: var(--amber); }
.chain-text{ font-family: var(--f-display); font-size: 1.05rem; }

.about-lede{ font-size: 1.15rem; line-height: 1.65; color: var(--ink); max-width: 34rem; }

.about-facts{ margin-top: 2rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem 1.5rem; }
.about-facts div{ display: flex; flex-direction: column; gap: 0.25rem; }
.about-facts dt{ font-size: 0.65rem; color: var(--slate); text-transform: uppercase; }
.about-facts dd{ font-size: 0.82rem; }

.about-stats{ display: flex; flex-direction: column; gap: 1.5rem; border-left: 1px solid var(--line); padding-left: 2rem; }
.stat-num{ display: block; font-family: var(--f-display); font-size: 2.6rem; font-weight: 600; color: var(--moss); line-height: 1; }
.stat-label{ font-size: 0.7rem; color: var(--slate); }

@media (max-width: 900px){
  .about-grid{ grid-template-columns: 1fr; }
  .about-stats{ border-left: none; padding-left: 0; flex-direction: row; flex-wrap: wrap; gap: 2rem; border-top: 1px solid var(--line); padding-top: 1.5rem; }
}

/* ==========================================================================
   SKILLS / INSTRUMENTS (dark)
   ========================================================================== */

.stack{
  padding: 0 var(--edge);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--line-dark);
  border-top: 1px solid var(--line-dark);
  border-bottom: 1px solid var(--line-dark);
}

.stack-group{
  background: var(--ink); padding: 2rem 1.75rem;
  transition: background 0.35s var(--ease);
}
.stack-group:hover{ background: var(--ink-soft); }

.stack-group-head{ display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 1.1rem; }
.stack-icon{ font-size: 0.68rem; color: var(--amber-soft); }
.stack-group-head h3{ font-family: var(--f-display); font-size: 1.15rem; font-weight: 500; }

.stack-tags{ display: flex; flex-wrap: wrap; gap: 0.5rem; }
.stack-tags li{
  font-family: var(--f-mono); font-size: 0.72rem; color: var(--slate-dark);
  border: 1px solid var(--line-dark); padding: 0.35rem 0.65rem; border-radius: var(--radius);
  transition: color 0.25s var(--ease), border-color 0.25s var(--ease);
}
.stack-group:hover .stack-tags li{ color: var(--paper); border-color: var(--moss-soft); }

@media (max-width: 900px){
  .stack{ grid-template-columns: 1fr; }
}

/* ==========================================================================
   PROJECT ARCHIVE
   ========================================================================== */

.archive{ padding: 6.5rem 0; border-bottom: 1px solid var(--line); }

.project{
  display: grid; grid-template-columns: 1fr 1fr;
  border-top: 1px solid var(--line);
  min-height: 60vh;
}
.project:last-of-type{ border-bottom: 1px solid var(--line); }
.project--reverse{ direction: rtl; }
.project--reverse > *{ direction: ltr; }

.project-id{
  grid-column: 1 / -1;
  display: flex; align-items: center; gap: 1rem;
  padding: 1.5rem var(--edge) 0;
}
.project--reverse .project-id{ flex-direction: row-reverse; justify-content: flex-end; }
.project-num{ font-size: 3.5rem; font-family: var(--f-display); font-weight: 300; color: var(--paper-dim); line-height: 1; }
.project-cat{ font-size: 0.68rem; color: var(--moss); border-left: 1px solid var(--line); padding-left: 0.9rem; }
.project--reverse .project-cat{ border-left: none; border-right: 1px solid var(--line); padding-left: 0; padding-right: 0.9rem; }

.project-body{ padding: 1.5rem var(--edge) 2.5rem; display: flex; flex-direction: column; }
.project-title{
  font-family: var(--f-display); font-weight: 600;
  font-size: clamp(1.6rem, 3vw, 2.3rem); line-height: 1.08; margin-bottom: 1.1rem;
}
.project-desc{ color: var(--slate); max-width: 30rem; line-height: 1.65; margin-bottom: 1.25rem; }

.project-tech{ display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.75rem; }
.project-tech li{
  font-size: 0.68rem; padding: 0.3rem 0.6rem; border: 1px solid var(--line);
  border-radius: var(--radius); color: var(--ink);
}

.project-actions{ display: flex; gap: 1rem; align-items: center; margin-top: auto; }
.btn{
  font-family: var(--f-mono); font-size: 0.75rem; padding: 0.7rem 1.1rem;
  border-radius: var(--radius); transition: background 0.25s var(--ease), color 0.25s var(--ease), border-color 0.25s var(--ease);
}
.btn--ghost{ border: 1px solid var(--ink); }
.btn--ghost:hover{ background: var(--ink); color: var(--paper); }
.btn--text{ color: var(--slate); border: none; padding: 0.7rem 0; }
.btn--text:hover{ color: var(--ink); }

.project-details{
  max-height: 0; overflow: hidden; opacity: 0;
  transition: max-height 0.4s var(--ease), opacity 0.35s var(--ease), margin 0.4s var(--ease);
  border-left: 2px solid var(--amber); margin-top: 0;
}
.project-details.is-open{ max-height: 12rem; opacity: 1; margin-top: 1.25rem; }
.project-details p{ padding-left: 1rem; font-size: 0.88rem; line-height: 1.6; color: var(--ink); }

.project-visual{
  position: relative; background: var(--paper-dim);
  border-left: 1px solid var(--line); min-height: 260px;
}
.project--reverse .project-visual{ border-left: none; border-right: 1px solid var(--line); }
.viz-canvas{ position: absolute; inset: 0; width: 100%; height: 100%; }

@media (max-width: 900px){
  .project, .project--reverse{ grid-template-columns: 1fr; direction: ltr; }
  .project-id{ padding-top: 2rem; }
  .project--reverse .project-id{ flex-direction: row; justify-content: flex-start; }
  .project--reverse .project-cat{ border-left: 1px solid var(--line); border-right: none; padding-left: 0.9rem; padding-right: 0; }
  .project-visual{ order: -1; min-height: 220px; border-left: none; border-right: none; border-bottom: 1px solid var(--line); }
}

/* also built */
.also-built{ padding: 3.5rem var(--edge) 0; }
.also-built-label{ font-size: 0.68rem; color: var(--slate); margin-bottom: 1rem; }
.also-built-list{ display: flex; flex-wrap: wrap; gap: 0.6rem; }
.also-built-list li{
  font-size: 0.78rem; padding: 0.5rem 0.9rem; border: 1px solid var(--line);
  border-radius: var(--radius); color: var(--slate);
}

/* ==========================================================================
   RECORD / TIMELINE
   ========================================================================== */

.timeline{ padding: 0 var(--edge); position: relative; }
.timeline::before{
  content: ''; position: absolute; left: calc(var(--edge) + 5px); top: 0.5rem; bottom: 0.5rem;
  width: 1px; background: var(--line);
}
.timeline-item{ display: flex; gap: 1.75rem; padding-bottom: 2.75rem; position: relative; }
.timeline-item:last-child{ padding-bottom: 0; }
.timeline-dot{
  width: 11px; height: 11px; border-radius: 50%; background: var(--paper); border: 2px solid var(--moss);
  flex-shrink: 0; margin-top: 0.35rem; position: relative; z-index: 1;
}
.timeline-date{ font-size: 0.68rem; color: var(--amber); display: block; margin-bottom: 0.4rem; }
.timeline-content h3{ font-family: var(--f-display); font-size: 1.25rem; font-weight: 600; margin-bottom: 0.35rem; }
.timeline-content p{ color: var(--slate); font-size: 0.9rem; }

.practice-note{
  margin: 3rem var(--edge) 0; padding-top: 1.5rem; border-top: 1px solid var(--line);
  font-size: 0.78rem; color: var(--slate);
}
.practice-note span{ color: var(--ink); }

/* ==========================================================================
   CLOSING / CONTACT
   ========================================================================== */

.closing{
  background: var(--ink); color: var(--paper);
  padding: 7rem var(--edge) 2.5rem;
  display: flex; flex-direction: column; min-height: 100svh;
}
.closing-frame{ flex: 1; display: flex; flex-direction: column; justify-content: center; }

.closing-eyebrow{ font-size: 0.72rem; color: var(--amber-soft); margin-bottom: 1.75rem; }
.closing-headline{
  font-family: var(--f-display); font-weight: 600;
  font-size: clamp(3rem, 9vw, 7rem); line-height: 0.95; letter-spacing: -0.01em;
}
.closing-headline span{ display: block; }

.closing-sub{ margin-top: 0.5rem; }
.closing-sub-line{
  display: block; font-family: var(--f-display); font-style: italic; font-weight: 500;
  font-size: clamp(2.2rem, 6vw, 4rem); color: var(--slate-dark);
}
.closing-sub-line--accent{ color: var(--amber-soft); }

.closing-links{ margin-top: 3.5rem; display: flex; flex-direction: column; gap: 0; }
.magnetic-btn{
  display: flex; justify-content: space-between; align-items: center;
  padding: 1.4rem 0; border-top: 1px solid var(--line-dark);
  transition: padding-left 0.3s var(--ease), color 0.3s var(--ease);
}
.closing-links .magnetic-btn:last-child{ border-bottom: 1px solid var(--line-dark); }
.magnetic-btn:hover{ padding-left: 0.75rem; color: var(--amber-soft); }
.magnetic-label{ font-size: 0.7rem; color: var(--slate-dark); }
.magnetic-value{ font-family: var(--f-display); font-size: clamp(1.1rem, 2.5vw, 1.6rem); }

.footer{
  display: flex; flex-wrap: wrap; gap: 0.75rem 1.5rem; justify-content: space-between;
  font-size: 0.68rem; color: var(--slate-dark); padding-top: 2rem;
}

/* ==========================================================================
   RESPONSIVE — RAIL COLLAPSE
   ========================================================================== */

@media (max-width: 1080px){
  .rail{ display: none; }
  .topbar{ display: flex; }
  .mobile-nav{ display: flex; }
  main{ margin-left: 0; }
  .hero{ padding-top: 6.5rem; }
}

@media (max-width: 900px){
  .hero{ grid-template-columns: 1fr; gap: 2.5rem; padding-bottom: 4rem; }
}

@media (max-width: 560px){
  :root{ --edge: 1.1rem; }
  .about-facts{ grid-template-columns: 1fr; }
}
