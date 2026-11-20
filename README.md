# Xinhao Cui | Academic Website

This academic website is built with [Hugo](https://gohugo.io/) and the [PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme. It adapts the MIT-licensed structure of [Sunkanghong-Wang.github.io](https://github.com/Sunkanghong-Wang/Sunkanghong-Wang.github.io).

## Local preview

Run `hugo server` from this directory and open `/about/`.

## Cloudflare visitor map

GitHub Pages builds a public snapshot covering the last seven complete UTC dates. In this repository's Actions secrets, set `CF_ACCOUNT_ID` and `CF_ANALYTICS_TOKEN`. The token must be restricted to the relevant Cloudflare account, with Account Analytics: Read and Account Settings: Read. Never put the token into source code or the public website.

In GitHub Actions, run **Deploy Hugo site to Pages** from the default branch. Subsequent scheduled builds refresh the snapshot daily. The Cloudflare lookup is scoped to the configured site's beacon and hostname. Published data consists of visit totals, country/region aggregates and dates only; unknown locations are not plotted. The prior map remains in use if neither secret is configured. An API error with credentials configured aborts deployment and preserves the last published website.

The world outlines are derived from [Natural Earth 1:110m Admin 0 Countries v5.1.2](https://github.com/nvkelso/natural-earth-vector/tree/v5.1.2/geojson). A region without its own outline can still appear in the breakdown.

## Content

- `config.yml` — site title, navigation, and settings
- `content/about/index.md` — biography, evidence-led research portfolio, skills, service, and education
- `content/publications/` — publication records with plain-language research summaries, key findings, and CRediT-based author roles
- `static/images/research/` — web-optimized figures cropped from the author's published-paper PDFs
- `content/ongoing-papers.md` — current projects
- `content/conferences.md` — conference talks
- `content/awards.md` — awards and funding
- `static/avatar.jpg` and `static/cv.pdf` — portrait and CV

The original and theme license notices are preserved in `LICENSE` and `themes/PaperMod/LICENSE`.

Research figures are credited on their publication pages, which also link to the original articles. Website code licenses do not grant reuse rights for the research figures, photographs, or CV.
