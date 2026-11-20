---
title: "About"
layout: about
about_home: true
hidemeta: true
description: "Xinhao Cui is a Ph.D. candidate at Beihang University who develops optimization models and algorithms for resilient decision-making under uncertainty."
---

<section class="about-hero">
  <div class="about-hero-photo">
    {{< about-avatar >}}
  </div>
  <div class="about-hero-info">
    <h1 class="about-name">Xinhao Cui</h1>
    <p class="about-role">Ph.D. Candidate · <strong class="about-research-focus">Optimization for Resilient Decision-Making</strong></p>
    <p class="about-affiliation">School of Reliability and Systems Engineering<br>Beihang University · Beijing, China</p>
    <p class="about-tagline">I develop optimization methods that help systems prepare for disruptions and recover when they occur.</p>
    <div class="about-actions">
      <a class="about-btn about-btn-primary" href="/cv.pdf" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Download CV
      </a>
      <span class="about-email-wrap">
        <a class="about-btn" href="mailto:cuixinhao@buaa.edu.cn">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          Email
        </a>
        <span class="about-email-tip" aria-hidden="true">cuixinhao@buaa.edu.cn</span>
      </span>
    </div>
  </div>
</section>

<nav class="about-jump-links" aria-label="On this page">
  <a href="#academic-positions">Academic positions</a>
  <a href="#research-interests">Research interests</a>
  <a href="#research-portfolio">Selected publications</a>
  <a href="#academic-service">Academic service</a>
  <a href="#education">Education</a>
</nav>

<section class="about-section" data-studio-section="about-me">
  <h2 class="about-h2">About me</h2>
  <p>My research examines how to <strong class="about-key-point">coordinate interdependent decisions under uncertainty</strong>. In routing, scheduling, and resource allocation, a decision made now can limit the options available later. I study how to account for those dependencies when making plans and <strong class="about-key-point">revise those plans as new information becomes available</strong>.</p>
  <p>I formulate these problems using <strong class="about-key-point">mathematical programming</strong> and develop matheuristics for large instances. I also investigate how reinforcement learning can guide optimization. My work draws on problems in transportation, energy, and logistics. I am a Ph.D. candidate in Safety Science and Engineering at <a href="https://www.buaa.edu.cn/" target="_blank" rel="noopener">Beihang University</a>, advised by Prof. Yiyong Xiao.</p>
</section>

<section class="about-section" id="academic-positions" aria-labelledby="academic-positions-title">
  <div class="about-positions">
    <div>
      <h2 class="about-h2" id="academic-positions-title"><span class="about-inline-icon" aria-hidden="true">🌐︎</span> Academic positions</h2>
      <p>I am seeking <strong class="about-key-point">postdoctoral and assistant professor positions worldwide</strong>, with a start date after I complete my Ph.D. I welcome inquiries from research groups and departments working in mathematical optimization, operations research, and related fields.</p>
    </div>
    <a class="about-btn" href="mailto:cuixinhao@buaa.edu.cn"><span class="about-inline-icon" aria-hidden="true">✉︎</span> Get in touch</a>
  </div>
</section>

<section class="about-section" id="research-interests" data-studio-section="interests">
  <h2 class="about-h2">Research interests</h2>
  <div class="interest-grid">
    <div class="interest-card">
      <h3>Discrete Optimization</h3>
      <p>Mixed-integer and bilevel formulations for coordinating decisions about routes, schedules, facility locations, and resource allocation.</p>
    </div>
    <div class="interest-card">
      <h3>Resilience and Uncertainty</h3>
      <p>Optimization models for maintaining or restoring performance when access is limited and delays propagate through a system.</p>
    </div>
    <div class="interest-card">
      <h3>Learning-Guided Optimization</h3>
      <p>Reinforcement learning to guide mathematical optimization when new information calls for a change of plan.</p>
    </div>
    <div class="interest-card">
      <h3>CPU–GPU Solver Development</h3>
      <p>Exploring which solver operations benefit from GPU parallelism and how to coordinate them with CPU computation.</p>
    </div>
  </div>
  <a class="research-all-link current-research-link" href="{{< site-path "ongoing-papers/" >}}">View ongoing work <span aria-hidden="true">→</span></a>
</section>

<section class="about-section research-portfolio" id="research-portfolio" data-studio-section="research-portfolio">
  <div class="research-section-heading">
    <h2 class="about-h2">Selected publications</h2>
    <a class="research-all-link" href="{{< site-path "publications/" >}}">View all publications <span aria-hidden="true">→</span></a>
  </div>

  <div class="research-gallery">
    <a class="research-card" href="{{< site-path "publications/omega-2026/" >}}">
      <div class="research-card-media"><img src="{{< site-path "images/research/omega-cascading-uncertainty.webp" >}}" alt="Graphical model of infrastructure rush-repair routing under cascading time uncertainty" loading="lazy"></div>
      <div class="research-card-body">
        <span class="research-card-kicker">Omega · 2026</span>
        <h3>Routing technicians when repair delays cascade</h3>
        <p>Jointly assigns repair tasks and plans technician routes by modeling <strong class="about-key-point">how uncertainty accumulates along each route</strong>.</p>
        <div class="research-card-tags"><span>Infrastructure repair</span><span>Technician routing</span><span>Repair scheduling</span><span>Cascading delays</span></div>
      </div>
    </a><a class="research-card" href="{{< site-path "publications/applied-energy-2026/" >}}">
      <div class="research-card-media"><img src="{{< site-path "images/research/apen-offshore-wind.webp" >}}" alt="Four-layer IoT-enabled offshore wind maintenance decision framework" loading="lazy"></div>
      <div class="research-card-body">
        <span class="research-card-kicker">Applied Energy · 2026</span>
        <h3>Planning offshore wind maintenance around weather windows</h3>
        <p>Coordinates vessel routes and maintenance schedules within <strong class="about-key-point">forecast-informed access windows</strong>, accounting for uncertainty in task durations.</p>
        <div class="research-card-tags"><span>Offshore wind</span><span>Maintenance scheduling</span><span>Vessel routing</span><span>Weather windows</span></div>
      </div>
    </a><a class="research-card" href="{{< site-path "publications/iot-2026/" >}}">
      <div class="research-card-media"><img src="{{< site-path "images/research/iot-human-cyber-physical.webp" >}}" alt="Four-layer human-cyber-physical decision architecture for dynamic network intervention" loading="lazy"></div>
      <div class="research-card-body">
        <span class="research-card-kicker">Internet of Things · 2026</span>
        <h3>Human-guided interventions in social networks</h3>
        <p>Uses sensor data to update a digital twin. The system <strong class="about-key-point">recommends interventions for experts to review and adjust</strong>.</p>
        <div class="research-card-tags"><span>Social networks</span><span>Digital twins</span><span>Human-in-the-loop</span><span>Network intervention</span></div>
      </div>
    </a><a class="research-card" href="{{< site-path "publications/caie-2026/" >}}">
      <div class="research-card-media"><img src="{{< site-path "images/research/caie-maritime-support.webp" >}}" alt="Multi-layer maritime support mission with support-center location and USV-UAV routing" loading="lazy"></div>
      <div class="research-card-body">
        <span class="research-card-kicker">Computers &amp; Industrial Engineering · 2026</span>
        <h3>Coordinating vessels and drones for maritime support</h3>
        <p>Uses a bilevel model to <strong class="about-key-point">link support-center location to vessel and drone routing</strong> under uncertain demand and navigation conditions.</p>
        <div class="research-card-tags"><span>Maritime logistics</span><span>Facility location</span><span>Vessel–drone routing</span><span>Demand uncertainty</span></div>
      </div>
    </a><a class="research-card" href="{{< site-path "publications/trd-2025/" >}}">
      <div class="research-card-media"><img src="{{< site-path "images/research/trd-transport-restoration.webp" >}}" alt="Tongzhou transportation network used to study resilience-based restoration sequencing" loading="lazy"></div>
      <div class="research-card-body">
        <span class="research-card-kicker">Transportation Research Part D · 2025</span>
        <h3>Prioritizing road repairs after disruptions</h3>
        <p>Selects and <strong class="about-key-point">sequences repairs to damaged road links</strong> to restore network connectivity and mobility in stages.</p>
        <div class="research-card-tags"><span>Road networks</span><span>Network resilience</span><span>Repair priorities</span><span>Mobility recovery</span></div>
      </div>
    </a><a class="research-card" href="{{< site-path "publications/ress-2025/" >}}">
      <div class="research-card-media"><img src="{{< site-path "images/research/ress-rush-repair.webp" >}}" alt="Rush-repair mission scenario with disrupted units, teams, and repair routes" loading="lazy"></div>
      <div class="research-card-body">
        <span class="research-card-kicker">Reliability Engineering &amp; System Safety · 2025</span>
        <h3>Coordinating emergency repair crews</h3>
        <p>Assigns crews by skill and plans their routes to repair interdependent equipment. The model accounts for <strong class="about-key-point">recovery speed and mission reliability</strong>.</p>
        <div class="research-card-tags"><span>Emergency repair</span><span>Crew assignment</span><span>System dependencies</span><span>Mission reliability</span></div>
      </div>
    </a>
  </div>
  <p class="research-figure-note">Figure sources are listed on the individual publication pages.</p>
</section>

<section class="about-section" data-studio-section="skills">
  <h2 class="about-h2">Skills</h2>
  <div class="skill-groups">
    <div class="skill-group service-entry"><h3>Methods</h3><div class="skill-chips"><span class="skill-chip">Mixed-integer linear programming</span><span class="skill-chip">Bilevel programming</span><span class="skill-chip">Matheuristics</span><span class="skill-chip">Deep reinforcement learning</span><span class="skill-chip">Reliability-based optimization</span><span class="skill-chip">Affordability analysis</span></div></div>
    <div class="skill-group service-entry"><h3>Tools</h3><div class="skill-chips"><span class="skill-chip">Python</span><span class="skill-chip">AMPL</span><span class="skill-chip">CPLEX</span><span class="skill-chip">Gurobi</span><span class="skill-chip">SCIP</span><span class="skill-chip">Origin</span><span class="skill-chip">CAD</span></div></div>
  </div>
</section>

<section class="about-section" id="academic-service" data-studio-section="services">
  <h2 class="about-h2">Academic service</h2>
  <div class="about-service">
    <article class="service-entry"><h3 class="service-role">Session Chair</h3><p>International Conference on Reliability, Maintainability and Safety, Guangzhou, 2026.</p></article>
    <article class="service-entry">
      <h3 class="service-role">Peer Reviewer</h3>
      <p class="service-review-summary"><strong class="about-key-point">32 reviews for the 12 journals listed below.</strong> <a href="https://orcid.org/0009-0006-3297-213X#peer-reviews" target="_blank" rel="noopener noreferrer">View peer review activity on ORCID <span aria-hidden="true">↗</span></a></p>
      <ul class="service-journals" aria-label="Selected journals">
        <li class="pub-journal-badge"><span>Computers &amp; Industrial Engineering</span><span class="service-review-count">7 reviews</span></li>
        <li class="pub-journal-badge"><span>Humanities and Social Sciences Communications</span><span class="service-review-count">1 review</span></li>
        <li class="pub-journal-badge"><span>International Journal of Disaster Risk Reduction</span><span class="service-review-count">2 reviews</span></li>
        <li class="pub-journal-badge"><span>International Journal of Electrical Power &amp; Energy Systems</span><span class="service-review-count">2 reviews</span></li>
        <li class="pub-journal-badge"><span>International Journal of Machine Learning and Cybernetics</span><span class="service-review-count">1 review</span></li>
        <li class="pub-journal-badge"><span>International Journal of Production Economics</span><span class="service-review-count">4 reviews</span></li>
        <li class="pub-journal-badge"><span>Journal of Manufacturing Processes</span><span class="service-review-count">1 review</span></li>
        <li class="pub-journal-badge"><span>Reliability Engineering &amp; System Safety</span><span class="service-review-count">3 reviews</span></li>
        <li class="pub-journal-badge"><span>Results in Engineering</span><span class="service-review-count">1 review</span></li>
        <li class="pub-journal-badge"><span>Scientific Reports</span><span class="service-review-count">3 reviews</span></li>
        <li class="pub-journal-badge"><span>Sustainable Futures</span><span class="service-review-count">1 review</span></li>
        <li class="pub-journal-badge"><span>Transportation Research Part D: Transport and Environment</span><span class="service-review-count">6 reviews</span></li>
      </ul>
    </article>
  </div>
</section>

<section class="about-section" id="education" data-studio-section="education">
  <h2 class="about-h2">Education</h2>
  <ol class="about-timeline">
    <li><span class="t-dot"></span><div class="t-logo" data-school="BUAA"></div><div class="t-body"><div class="t-when">Sep 2024 — Present</div><div class="t-what">Ph.D. Candidate in Safety Science and Engineering</div><div class="t-where">School of Reliability and Systems Engineering · Beihang University · Beijing, China</div><div class="t-meta"><div class="t-meta-row"><span class="t-meta-label">Advisor</span><span class="t-meta-value">Prof. Yiyong Xiao</span></div><div class="t-meta-row"><span class="t-meta-label">Thesis</span><span class="t-meta-value">Proactive Resilience Modeling and Optimization of Cross-domain Heterogeneous Hypernetworks</span></div></div></div></li>
    <li><span class="t-dot"></span><div class="t-logo" data-school="BUAA"></div><div class="t-body"><div class="t-when">Sep 2022 — Jun 2024</div><div class="t-what">M.S. in Electronic Information</div><div class="t-where">Beihang University · Beijing, China</div><div class="t-meta"><div class="t-meta-row"><span class="t-meta-label">GPA</span><span class="t-meta-value">3.91 / 4.0 · <strong>Ranked 1st of 73</strong></span></div><div class="t-meta-row"><span class="t-meta-label">Advisor</span><span class="t-meta-value">Prof. Yiyong Xiao</span></div></div></div></li>
    <li><span class="t-dot"></span><div class="t-logo" data-school="BUAA"></div><div class="t-body"><div class="t-when">Sep 2018 — Jun 2022</div><div class="t-what">B.S. in Safety Engineering</div><div class="t-where">Beihang University · Beijing, China</div><div class="t-meta"><div class="t-meta-row"><span class="t-meta-label">GPA</span><span class="t-meta-value">3.47 / 4.0 · Ranked 12th of 36</span></div></div></div></li>
  </ol>
</section>

