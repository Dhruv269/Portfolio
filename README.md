# Dhruv Jagtap — Personal Developer Portfolio

A modern, minimal, and dark editorial developer portfolio built from scratch with semantic HTML5, modern CSS3 custom properties, and vanilla JavaScript. Zero external frameworks, build tools, or runtime dependencies.

---

## Overview

This repository contains the source code for the personal developer portfolio of **Dhruv Jagtap**, a first-year Computer Science student specializing in Artificial Intelligence and Machine Learning at Newton School of Technology – ADYPU, Pune.

The portfolio is designed around a "learning by building" philosophy. Rather than using generic templates or unearned claims, it documents genuine early milestones, active learning frontiers, verified tooling exposure, and personal pursuits through a distinct **Dark Experimental Editorial** visual language.

---

## Key Features

- **Semantic HTML5 & Accessibility**: Built with accessible landmark elements (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`), strict heading hierarchy, skip-to-content shortcut, and full usability even if JavaScript is disabled.
- **Dark Editorial Visual Design**: Tailored INK / ACID color system (`#101010` ink canvas, `#D6FF3F` acid lime, `#FF5C35` signal orange, and `#F1EFE8` paper white) paired with Space Grotesk and JetBrains Mono typography.
- **Choreographed Hero & Abstract Artwork**: Sequenced page-load entrance with kinetic masked headline reveals, technical metadata ribbons, and a bespoke SVG coordinate drafting construct featuring a restrained 3D mouse parallax tilt.
- **Currently Exploring Section**: Four-part ledger highlighting active learning domains (Python fundamentals, Web Development foundations, Full-Stack concepts, and Artificial Intelligence) without prematurely claiming mastery.
- **Verified Technical Skills & Honest Disclosure**: Catalogs only tools with practical exposure (Python, Git, GitHub, Visual Studio Code, Antigravity IDE, Terminal/CLI, ChatGPT, Gemini) alongside an explicit proficiency statement.
- **Activities & Journey Record**: Highlights early sprint milestones, including participation in Hacktoberfest 2026 and current B.Tech undergraduate coursework.
- **Beyond the Code**: Editorial cards covering personal interests outside of software engineering (Cricket and Music).
- **Direct Communication & Dynamic Year**: Dedicated contact section with direct `mailto:` link, verified social links, and automated calendar-year synchronization via vanilla JavaScript with static HTML fallback.
- **Motion System & Responsive Layout**: Fluid responsive design across mobile, tablet, and desktop screens with an accessible sliding navigation drawer, custom scroll spy, and full compliance with `prefers-reduced-motion`.

---

## Tech Stack

- **Markup**: [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) — Semantic structure, accessible landmarks, and meta tags.
- **Styling**: [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) — Modular design tokens (CSS custom properties), CSS Grid, Flexbox, keyframe animations, and responsive media queries.
- **Typography**: [Google Fonts](https://fonts.google.com/) — Space Grotesk (editorial headings) and JetBrains Mono (monospace metadata and HUD plates).
- **Interactions**: [Vanilla JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (ES6+) — Lightweight progressive enhancement, `IntersectionObserver` scroll reveals, active section scroll spy, and RAF tilt physics.

---

## Project Structure

```text
Portfolio/
├── index.html              # Primary semantic HTML document containing all portfolio sections
├── README.md               # Project documentation and local setup guide
├── LICENSE                 # MIT License
├── css/
│   └── style.css           # Modular CSS design system (tokens, resets, layout, animations & media queries)
├── js/
│   └── main.js             # Vanilla JS motion engine (scroll reveal, scroll spy, drawer, tilt & dynamic year)
└── assets/
    ├── images/             # Directory for future project screenshots and visual assets
    └── icons/              # Directory for custom icons and graphics
```

---

## Running Locally

Because this project is built entirely with vanilla web standards, it requires no package managers, build steps, or external installations.

### Option 1: Python Built-in HTTP Server (Recommended)

Python 3 comes pre-installed on macOS and most Linux distributions.

1. Open your terminal and navigate to the project root directory:
   ```bash
   cd /path/to/Portfolio
   ```
2. Start the local HTTP server on port 8000:
   ```bash
   python3 -m http.server 8000
   ```
3. Open your browser and visit:
   ```text
   http://localhost:8000
   ```
4. Press `Ctrl + C` in the terminal to stop the server when finished.

### Option 2: Visual Studio Code Live Server

If you use VS Code or a compatible IDE:
1. Install the **Live Server** extension (by Ritwick Dey).
2. Right-click on `index.html` in the file explorer.
3. Select **Open with Live Server**.

### Option 3: Direct File Opening

You can also open the `index.html` file directly in any modern browser:

- **macOS**:
  ```bash
  open index.html
  ```
- **Linux**:
  ```bash
  xdg-open index.html
  ```
- **Windows**:
  ```cmd
  start index.html
  ```

---

## Future Roadmap

The website is architected to scale as projects and credentials are created:

- [ ] **Vacation Projects Showcase**: Build and add interactive case study cards with live preview links, source code repositories, and technical breakdowns once vacation development sprints are complete.
- [ ] **Resume Integration**: Upload finalized PDF resume to `assets/` and link the currently reserved `DOWNLOAD RESUME [COMING SOON]` button.
- [ ] **Expanded Experience**: Document future hackathons, collaborative coding events, and open-source contributions.

---

## Contact & Links

- **Name**: Dhruv Jagtap
- **Email**: [dhruvjagtap269@gmail.com](mailto:dhruvjagtap269@gmail.com)
- **GitHub**: [github.com/Dhruv269](https://github.com/Dhruv269)
- **LinkedIn**: [linkedin.com/in/dhruv-g-jagtap](https://www.linkedin.com/in/dhruv-g-jagtap/)
- **Location**: Pune, India &bull; IST (UTC+5:30)

---

## License

This project is licensed under the [MIT License](LICENSE).
