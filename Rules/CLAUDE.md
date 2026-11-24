# CLAUDE.md
# Instructions for Claude — Nikhil Shah Portfolio

---

## Who this is for

Nikhil Shah — interaction design student, Anant University Ahmedabad.
Portfolio targets game studios, UX agencies, web design roles.

---

## Code Rules

- **Stack:** plain HTML + CSS + vanilla JS only. No React, no Tailwind, no jQuery.
- Nikhil has written much of this code himself — preserve his structure so he can edit it
- All CSS lives in `Styles/style.css` — do not inline styles unless asked
- JS lives in `Fn.js` — shared across pages
- Do not restructure or rename existing classes without being asked
- When adding new CSS, append at the bottom with a comment header

## File Paths

Always use relative paths:
- Images: `Images/FolderName/filename.ext`
- CSS: `Styles/style.css`
- JS: `Fn.js`
- Pages link to each other by filename: `Gharjohumpichechhodaaye.html`, `Zupto.html` etc.

**Never use:** `/nikhilshahportolio.github.io/Images/...` (breaks on GitHub Pages)

## Folder Structure

```
root/
├── Images/
│   ├── Gharjohumpichechhodaaye/
│   ├── Ministryofmisconduct/
│   ├── zupto/
│   └── me.jpg, signature.png
├── Styles/style.css
├── Fn.js
├── index.html
├── Gharjohumpichechhodaaye.html
├── Ministryofmisconduct.html
├── Zupto.html
├── aechlabs.html
└── projects.html
```

---

## Writing Rules

- **Preserve lowercase style** — Nikhil writes in lowercase. Fix grammar, keep tone.
- Do not add formal headers like "The Mechanics of X" or "Conclusion"
- One idea per paragraph, 3–4 lines max
- When asked to write copy, write rough in his voice — do not over-polish

---

## Design Rules

- Refer to `DESIGN_SYSTEM.md` for colors, spacing, fonts
- Do not add animations or transitions unless explicitly asked
- Do not add JS interactivity unless explicitly asked
- Keep pages fast — no heavy libraries, no unnecessary embeds

---

## What not to do

- Do not refactor working code unprompted
- Do not suggest frameworks
- Do not add features that weren't asked for
- Do not change class names that already exist in the CSS
- Do not use `/nikhilshahportolio.github.io/` in image paths
