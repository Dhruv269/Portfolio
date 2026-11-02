# Dhruv Jagtap — Personal Developer Portfolio

A personal developer portfolio built with semantic HTML5, modern CSS3, and vanilla JavaScript. Designed with a **Dark Experimental Editorial** aesthetic, featuring zero runtime dependencies, frameworks, or build configurations.

---

## 1. Project Overview

This repository contains the source code for the personal developer portfolio of **Dhruv Jagtap**. 

- **Role**: Aspiring developer exploring Web Development and Artificial Intelligence.
- **Education**: Computer Science undergraduate student specializing in AI/ML at Newton School of Technology – ADYPU, Pune.
- **Purpose**: Showcases academic background, practical skills, active learning pursuits, and direct contact channels through a deliberate, high-contrast digital experience.

---

## 2. Features

- **Dark Experimental Editorial Design**: Bespoke INK / ACID visual palette (`#101010` ink canvas, `#D6FF3F` acid lime, `#FF5C35` signal orange, and `#F1EFE8` paper white) paired with Space Grotesk and JetBrains Mono typography.
- **Cinematic PROJECT: GENESIS Preloader**: Multi-stage loading choreography featuring a central beacon awakening, polygonal fragment convergence, identity reveal, progress track, and camera-expansion reveal into the homepage. Includes session-storage caching and graceful bypass for `prefers-reduced-motion`.
- **Custom Geometric D Monogram**: Precision 45-degree architectural monogram implemented across SVG favicon, Apple touch icon (`180x180`), web app icons (`32x32`, `192x192`), and the sticky navbar brand mark.
- **Animated Interactions & Transitions**: Keyframe-driven masked text reveals, active section scroll spy, smooth anchor scrolling, and a restrained 3D parallax tilt construct on the hero plate.
- **Responsive Layout**: Designed and tested across desktop (1440px), small laptop/landscape (1024px), tablet (768px), and mobile screens down to 320px, featuring an accessible mobile drawer navigation.
- **Core Semantic Sections**:
  - **About**: Personal philosophy, education milestones, and background narrative.
  - **Skills**: Catalog of verified tools and technical exposure alongside an explicit proficiency statement.
  - **Exploring**: Active learning frontiers spanning Python, Web foundations, Full-Stack concepts, and AI/ML.
  - **Experience & Activities**: Early milestones and coursework timeline.
  - **Beyond Code**: Personal pursuits outside software engineering (Cricket and Music).
  - **Contact**: Direct communication channel with automatic dynamic calendar-year footer synchronization.
- **Functional Navigation & Social Links**: Sticky header with verified external profiles (GitHub, LinkedIn, Email).
- **SEO & Social Sharing Metadata**: Meta description, mobile theme-color declaration (`#101010`), Open Graph protocol tags, and Twitter / X Card metadata *(social preview image asset reserved for upcoming deployment)*.

---

## 3. Tech Stack

Built strictly with native web technologies:

- **HTML5**: Semantic landmark elements, accessible ARIA attributes, and metadata tags.
- **CSS3**: Custom properties (design tokens), CSS Grid, Flexbox, keyframe choreographies, and responsive media queries.
- **Vanilla JavaScript (ES6+)**: Progressive enhancement, `IntersectionObserver` scroll listeners, drawer state management, and preloader sequencing.
- **Google Fonts**: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (editorial headings) and [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (technical labels and metadata).
- **Version Control**: Git and [GitHub](https://github.com/Dhruv269/Portfolio).

---

## 4. Project Structure

```text
Portfolio/
├── index.html              # Primary semantic HTML document
├── README.md               # Project documentation and setup guide
├── LICENSE                 # MIT License
├── css/
│   └── style.css           # Modular styling (tokens, layout, animations & responsive breakpoints)
├── js/
│   └── main.js             # Vanilla JS engine (preloader, scroll spy, mobile drawer & dynamic year)
└── assets/
    ├── icons/              # Brand identity icons and favicons
    │   ├── apple-touch-icon.png
    │   ├── favicon-32x32.png
    │   ├── favicon-192x192.png
    │   └── favicon.svg     # Geometric D monogram
    └── images/             # Visual assets directory
```

---

## 5. Run Locally

Because the project relies on native web standards, it requires no build tools or external packages.

1. Clone the repository:
   ```bash
   git clone https://github.com/Dhruv269/Portfolio.git
   ```

2. Navigate into the project folder:
   ```bash
   cd Portfolio
   ```

3. Start a local HTTP server using Python:
   ```bash
   python3 -m http.server 8000
   ```

4. Open `http://localhost:8000` in your browser.

---

## 6. Deployment

This static portfolio can be deployed directly to [Vercel](https://vercel.com/):

1. Push your latest changes to GitHub.
2. Log in to Vercel and select **Add New Project**.
3. Import the `Dhruv269/Portfolio` repository from your GitHub account.
4. Keep the Framework Preset as **Other** (Root Directory `./`) and select **Deploy**.

---

## 7. Author & Contact

- **Dhruv Jagtap**
- **GitHub**: [https://github.com/Dhruv269](https://github.com/Dhruv269)
- **LinkedIn**: [https://www.linkedin.com/in/dhruv-g-jagtap/](https://www.linkedin.com/in/dhruv-g-jagtap/)
- **Email**: [dhruvjagtap269@gmail.com](mailto:dhruvjagtap269@gmail.com)

---

## 8. License

This project is licensed under the [MIT License](LICENSE).
