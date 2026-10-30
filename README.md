# Developer Portfolio

A modern, minimal, and polished personal developer portfolio website built from scratch with clean semantic HTML5, modern CSS3 custom properties, and vanilla JavaScript.

Designed specifically for student developers to showcase technical projects, hackathon achievements, open-source contributions, and engineering skills.

---

## Tech Stack

- **Markup**: Semantic HTML5 (strict heading hierarchy, accessible landmarks, skip link)
- **Styling**: CSS3 (Modular design system with CSS custom properties, responsive layout, dark navy theme)
- **Interactions**: Vanilla JavaScript (ES6+, progressive enhancement, zero external libraries)

---

## Project Structure

```text
Portfolio/
├── index.html              # Core semantic HTML document with all portfolio sections
├── README.md               # Project documentation and local setup guide
├── LICENSE                 # MIT License
├── css/
│   └── style.css           # CSS design system (tokens, reset, accessibility & base layout)
├── js/
│   └── main.js             # Progressive enhancement (mobile drawer toggle & keyboard accessibility)
└── assets/
    ├── images/             # Project screenshots and avatar placeholders
    └── icons/              # Custom SVG icons and emblems
```

---

## Planned Website Sections

1. **Navigation Bar** — Brand title and accessible jump navigation links.
2. **Hero Section** — Introduction, professional headline, and primary call-to-action buttons.
3. **About Me** — Background, study focus, and technical interests.
4. **Skills & Technologies** — Categorized technical competencies (Languages, Frameworks, Tools, Fundamentals).
5. **Featured Projects** — Project cards with descriptions, tech tags, and links to source code and live demos.
6. **Hackathons & Contributions** — Records of hackathons, awards, and open-source contributions.
7. **Contact Section** — Direct email CTA and professional social links.
8. **Footer** — Copyright notice and quick back-to-top shortcut.

---

## How to Preview the Project Locally

You can preview the portfolio using any of the following methods:

### Method 1: Using Python's Built-in HTTP Server (Recommended)
Mac comes with Python 3 pre-installed. Run this command inside the `Portfolio` directory:

```bash
python3 -m http.server 8000
```

Then open your browser and navigate to:
```text
http://localhost:8000
```
*(Press `Ctrl + C` in your terminal to stop the server when done).*

### Method 2: Using VS Code / IDE Live Server
If you use Visual Studio Code:
1. Install the **Live Server** extension (by Ritwick Dey).
2. Right-click on `index.html` in the file explorer.
3. Select **Open with Live Server**.

### Method 3: Direct Browser File Opening
Double-click `index.html` or open it directly in any browser:
```text
open index.html
```

---

## Design System Overview

All visual tokens are defined in [`css/style.css`](file:///Users/dhruvjagtap269/Portfolio/css/style.css) under the `:root` selector:

- **Colors**: Dark navy surfaces (`--bg-primary: #0a0f1d`, `--bg-secondary: #0f172a`), high-contrast text (`--text-primary: #f8fafc`, `--text-secondary: #94a3b8`), and refined blue accents (`--accent-primary: #3b82f6`).
- **Typography**: Native system font stack (`--font-sans`) and monospace font stack (`--font-mono`) with a responsive type scale.
- **Spacing**: 8-point based scale from `--space-1` (4px) to `--space-24` (96px).
- **Accessibility**: Includes a skip-to-content link, high-visibility `:focus-visible` outlines, semantic landmarks, and full usability when JavaScript is disabled.

---

## License

This project is licensed under the terms of the [MIT License](LICENSE).

