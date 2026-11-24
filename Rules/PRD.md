# PRD.md
# Nikhil Shah — Portfolio Product Requirements

---

## 1. Purpose

A portfolio site for internship and job applications targeting:
- Game design studios
- UX/interaction design agencies
- Design studios with internet-reliant work
- Web designer roles

**One thing a recruiter should remember:** the kind of work Nikhil wants to do — systems-first, provocative, human.

---

## 2. Pages

| File | Status | Notes |
|---|---|---|
| `index.html` | Live | Homepage — intro + project cards + about |
| `Ministryofmisconduct.html` | Live (WIP) | p5.js game case study |
| `Gharjohumpichechhodaaye.html` | Live | VR installation case study |
| `Zupto.html` | Live | AQI / provocation app case study |
| `aechlabs.html` | Live | Separate section |
| `projects.html` | Exists | Not in main nav yet |

**Projects confirmed in:**
- Ministry of Misconduct
- Ghar jo hum piche chhod aaye
- Zupto

**May add later:** new projects as they're completed

---

## 3. Homepage Structure (index.html)

1. Nav
2. Intro card — photo + short bio
3. Project cards (one per project) — title, tags, date, hero image, description, link
4. About section — bio, contact links, signature image
5. Footer

**About section stays at bottom of homepage** — no separate About page.

---

## 4. Case Study Structure

Each case study page follows:
1. Title + medium/type (protitle grid)
2. Content sections — text, images, grids, iframes
3. Credits + next case study link

---

## 5. Navigation

Shared via `Fn.js` — injected into every page.
Links: Home (`index.html`), Aechlabs (`aechlabs.html`), Are.na (external)

---

## 6. Content Rules

- Writing in Nikhil's voice — lowercase, direct, no jargon
- Grammar fixed but tone preserved
- One idea per paragraph, max 3–4 lines
- No explanatory headers like "The Mechanics of X"
- Project descriptions: what it is + why it exists, not just what it looks like

---

## 7. Assets Folder Structure

```
nikhilshahportolio.github.io/
├── Images/
│   ├── Gharjohumpichechhodaaye/
│   ├── Ministryofmisconduct/
│   ├── zupto/
│   └── me.jpg, signature.png
├── Styles/
│   └── style.css
├── Projects/
├── discarded/
├── Fn.js
├── index.html
├── Gharjohumpichechhodaaye.html
├── Ministryofmisconduct.html
├── Zupto.html
├── aechlabs.html
└── projects.html
```
