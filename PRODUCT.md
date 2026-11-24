# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The main reader is an internship recruiter or hiring designer at a game studio, UX agency or web design team. They're shortlisting student interns, skimming quickly across many portfolios, often on a phone or a slow connection, and decide in seconds whether to open a case study. Full-time hiring leads are a possible later audience but are not the focus now.

## Product Purpose

This is Nikhil Shah's personal portfolio. Nikhil is an interaction design student at Anant National University, Ahmedabad. The site exists to get him design internships. Success is a recruiter remembering his point of view and emailing him.

## Positioning

He does critical, satirical design: work that makes people uncomfortable in a useful way, about power, hierarchy and social systems. Games, VR, apps and video are the means; the critique is the point. Another student portfolio can show range, but it can't honestly claim this body of work or this angle.

## Operating Context

- Three in-depth case studies, each on its own page: `Ministryofmisconduct.html` (a p5.js satire game about moral choices), `Gharjohumpichechhodaaye.html` (a VR and multisensory piece about the 1947 partition, seen from a child's point of view) and `Zupto.html` (a satirical delivery app about high AQI and gig workers' health).
- `aechlabs.html` is a lab grid of smaller and side works (films, sound, motion, experiments) that open in a project window.
- The home page (`index.html`) shows an intro, a short about section and project cards linking to the case studies.
- Hosted on GitHub Pages.

## Capabilities and Constraints

- Plain HTML, CSS and vanilla JS only, with no frameworks or libraries. All CSS lives in `Styles/style.css` (new rules are appended at the bottom under a comment header). Shared JS lives in `Fn.js`.
- Nikhil writes and edits this code himself, so keep his structure and class names, and don't refactor without being asked.
- Use relative paths only. Never `/nikhilshahportolio.github.io/...`.
- No animations, transitions or added JS interactivity unless explicitly asked. Pages must stay light and fast.
- **Undecided:** the contact email address. Email is meant to be the main call to action, but the site has no address yet, so LinkedIn is the only contact link.

## Brand Commitments

- The name is Nikhil Shah. "Aech" / Aech Labs is the name for the side-work collection.
- The voice is lowercase, plain and a little wry. Keep his tone, fix grammar, and write one idea per paragraph, three or four lines at most. Avoid formal headings like "The Mechanics of X" or "Conclusion".
- Project titles stay in their original Hindi/Urdu where they are written that way, for example "ghar jo hum piche chhod aaye" and "hum panchi umukt gagan k".

## Evidence on Hand

- The case-study pages and images are under `Images/Gharjohumpichechhodaaye/`, `Images/Ministryofmisconduct/` and `Images/zupto/`.
- The Aech Labs entries are in `aechlabs.html`, with assets under `Projects/` and `Images/`.
- His portrait is `Images/me.jpg` and his signature is `Images/signature.png`.
- His LinkedIn profile is linked from the home page.
- The "do you believe in your political party" card on the home page still has lorem ipsum, and one Aech Labs entry has no name. Placeholders like these need real copy from Nikhil. Never invent copy for them.
- There are no testimonials, awards, client names or press. Don't invent any.

## Product Principles

1. **The critique leads.** Every project is framed by what it questions, not just by what tools it used.
2. **The work does the talking.** The interface stays out of the way of the projects.
3. **Readable in a few seconds.** A recruiter skimming a card should get the project and the angle without opening it.
4. **Keep it his.** Code and copy stay in a form Nikhil can keep writing and editing himself.
5. **Contact should be easy.** Reaching him by email should take one obvious step from anywhere convincing.

## Accessibility & Inclusion

Visitors are often on a slow Indian mobile connection, so pages must load fast without heavy assets. No formal accessibility standard has been set yet. The known gap is that grey metadata text on cream doesn't have enough contrast (see DESIGN.md).
