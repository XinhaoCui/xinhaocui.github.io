---
title: "Resilience-oriented maintenance scheduling and routing optimization for IoT-enabled offshore wind farms with forecast-informed accessibility windows and cumulative task-time uncertainty"
date: 2026-07-15
description: "A mixed-integer model and two-echelon matheuristic for offshore wind maintenance with forecast-informed access windows and uncertain task durations."
tags: ["offshore wind", "maintenance", "routing", "resilience"]
author: ["Xinhao Cui", "Chenxin Zhang", "Bo Li", "Fangcheng Xiao", "Yi Ren", "Yiyong Xiao"]
compactAuthors: ["Xinhao Cui", "et al.", "Yiyong Xiao"]
correspondingAuthor: ["Yiyong Xiao"]
journal: "Applied Energy"
volume: "424"
pages: "128355"
doi: "10.1016/j.apenergy.2026.128355"
bibtexKey: "cui2026offshore"
cover:
  image: "images/research/apen-offshore-wind.webp"
  alt: "IoT-enabled offshore wind maintenance scheduling and routing framework"
  relative: false
  hiddenInSingle: true
---

## Overview

Weather forecasts inform estimates of when vessels can access offshore turbines. Uncertainty in the duration of one maintenance task can affect the timing of subsequent stops. The model assigns tasks to vessels and jointly determines their routes and maintenance schedules to restore generating capacity sooner. A two-echelon matheuristic combines adaptive search with fix-and-optimize steps.

## Findings

On test instances derived from the Empire Wind development, the method produced solutions close to the certified optima where those optima were available. Rolling-horizon experiments examined how maintenance plans change as new information about offshore conditions becomes available.

## Author contribution

**First author.** I contributed to conceptualization, methodology, and investigation, and drafted the manuscript.

<figure class="paper-figure">
  <img src="{{< site-path "images/research/apen-offshore-wind.webp" >}}" alt="Four-layer offshore-wind maintenance framework linking sensor data, uncertainty models, optimization, and vessel schedules" loading="eager">
  <figcaption>The maintenance framework uses sensor data and forecasts to update vessel routes and schedules (Fig. 2 in the article).</figcaption>
</figure>
