---
title: "Timeliness-driven routing and scheduling for infrastructure rush repairs with cascading time uncertainties"
date: 2026-09-02
description: "A mixed-integer model and matheuristic for technician routing and scheduling when uncertainty in repair and travel times accumulates along a route."
tags: ["infrastructure repair", "routing", "scheduling", "uncertainty"]
author: ["Xinhao Cui", "Penghao Qi", "Bo Li", "Yi Ren", "Yiyong Xiao"]
compactAuthors: ["Xinhao Cui", "et al.", "Yiyong Xiao"]
correspondingAuthor: ["Yiyong Xiao"]
journal: "Omega"
volume: "145"
pages: "103659"
doi: "10.1016/j.omega.2026.103659"
bibtexKey: "cui2026cascading"
cover:
  image: "images/research/omega-cascading-uncertainty.webp"
  alt: "Infrastructure rush-repair routing and scheduling under cascading time uncertainty"
  relative: false
  hiddenInSingle: true
---

## Overview

A delay at one repair site can affect every subsequent arrival on a technician’s route. The model assigns technicians to tasks and determines their routes and schedules to improve service recovery over the planning horizon. A mean–variance formulation represents how timing uncertainty accumulates. The matheuristic combines variable neighborhood search with exact local optimization.

## Findings

The method matched proven optima on small test instances and found the best solutions among the methods tested on larger instances. Computation time was up to 96% lower than that of the commercial solver in the reported experiments.

## Author contribution

**First author.** I contributed to the study’s conceptualization, provided resources, prepared visualizations, and drafted and revised the manuscript.

<figure class="paper-figure">
  <img src="{{< site-path "images/research/omega-cascading-uncertainty.webp" >}}" alt="Infrastructure rush-repair scenario and its abstract technician-routing representation" loading="eager">
  <figcaption>A disrupted system and the corresponding technician routing and scheduling problem (Fig. 1 in the article).</figcaption>
</figure>
