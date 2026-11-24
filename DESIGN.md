---
name: Nikhil Shah — Portfolio
description: Interaction design work, filed as quiet cream sheets on a white desk.
colors:
  archive-cream: "#fff8e6"
  desk-white: "#ffffff"
  carbon-ink: "#2d2822"
  faded-ribbon: "#4A4238"
  redaction-navy: "#1E212B"
  filing-grey: "#6e6558"
  carbon-haze: "#d7d8e4"
  scrim: "rgba(45, 40, 34, .45)"
  placeholder-wash: "rgba(45, 40, 34, .08)"
typography:
  display:
    fontFamily: '"Courier New", Courier, monospace'
    fontSize: "34px"
    fontWeight: 700
    lineHeight: 1.1
  headline:
    fontFamily: '"Courier New", Courier, monospace'
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.15
  title:
    fontFamily: '"Courier New", Courier, monospace'
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: '"Courier New", Courier, monospace'
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "-0.02em"
  body-casestudy:
    fontFamily: '"Courier New", Courier, monospace'
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "-0.02em"
  typed:
    fontFamily: '"Courier New", Courier, monospace'
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.6
  meta:
    fontFamily: '"Courier New", Courier, monospace'
    fontSize: "11px"
    fontWeight: 400
  label:
    fontFamily: "Open Sans, sans-serif"
    fontSize: "12px"
    fontWeight: 600
  interface:
    fontFamily: "Open Sans, sans-serif"
    fontSize: "12px"
    fontWeight: 400
  caption:
    fontFamily: '"Courier New", Courier, monospace'
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.6
  meta-mono:
    fontFamily: '"Courier New", Courier, monospace'
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.7
rounded:
  none: "0px"
spacing:
  card-pad: "45px"
  card-pad-tablet: "28px"
  card-pad-mobile: "20px"
  card-gap: "50px"
  gutter: "140px"
  gap: "24px"
  section: "120px"
  section-mobile: "72px"
components:
  paper-card:
    backgroundColor: "{colors.archive-cream}"
    textColor: "{colors.faded-ribbon}"
    rounded: "{rounded.none}"
    padding: "0 45px"
    width: "550px"
  paper-card-casestudy:
    backgroundColor: "{colors.archive-cream}"
    textColor: "{colors.carbon-ink}"
    rounded: "{rounded.none}"
    padding: "0 45px 50px"
    width: "800px"
  text-link:
    textColor: "{colors.faded-ribbon}"
    typography: "{typography.label}"
  control-bordered:
    backgroundColor: "{colors.archive-cream}"
    textColor: "{colors.carbon-ink}"
    rounded: "{rounded.none}"
    padding: "5px 12px"
  control-bordered-hover:
    backgroundColor: "{colors.carbon-ink}"
    textColor: "{colors.archive-cream}"
  highlight-bar:
    backgroundColor: "{colors.redaction-navy}"
    textColor: "{colors.archive-cream}"
    typography: "{typography.meta-mono}"
    padding: "8px 12px"
  project-window:
    backgroundColor: "{colors.archive-cream}"
    textColor: "{colors.carbon-ink}"
    rounded: "{rounded.none}"
    width: "960px"
    height: "560px"
---

# Design System: Nikhil Shah — Portfolio

## Overview

**Creative North Star: "The Filed Dossier"**

Every page is a sheet of Archive Cream paper on a plain white desk, holding a case file: typed captions, margin headings, a perforated tear line under the masthead, and one line per section blacked out by a redaction bar. It reads like a government file put together by someone with an editor's eye. Minimal, detailed, and seriously playful: the playfulness lives in the details (the redaction bar, the stamped controls, the dotted leaders from heading to margin label), never in motion or spectacle.

Type is small and dense, set lowercase, and the page is mostly paper. Hierarchy comes from weight and position (bold headings in a left gutter, grey meta to the right), not from size jumps or colour. The work carries the page: images run full column width, text sits quietly around them, and the interface stays out of the way.

The system is flat and still on purpose. Nothing animates, nothing floats, and depth is the cream sheet against the white page and nothing else. It has to load fast on a slow mobile connection, so it uses one web font (Open Sans, for the interface), the installed Courier New for everything on paper, and no frameworks.

**Key Characteristics:**
- Cream sheets (Archive Cream) on a white desk, square corners, no shadows
- Courier New for everything on paper, as if typed onto the sheet; Open Sans for anything you click or navigate with
- Lowercase copy, compact sizes (11–13px for most paper text), generous line-height (1.6–1.7). Hierarchy comes from tone (ink vs. Filing Grey), not size steps: Courier is wide, so every size step costs a lot of room
- Margin-gutter headings on case studies, with one redaction-bar highlight per section
- Controls are 1px ink outlines that invert to solid ink, with no transitions
- A faint blue-grey text-shadow on paper, like ink bleeding into the sheet

## Colors

Two colours do almost all the work, warm cream paper and warm near-black ink, with one cold blue-black kept for the redaction bar.

### Primary
- **Carbon Ink** (#2d2822): the main ink on case studies and Aech Labs: titles, margin headings, the 1px control borders, and the solid fill of an inverted control.
- **Faded Ribbon** (#4A4238): the older, softer ink. Body text on the home page cards, text links ("view full casestudy > >"), and the base `body` colour.

### Secondary
- **Redaction Navy** (#1E212B): only for the highlight bar (one key line per case-study section, set in Archive Cream monospace). It's the one cold colour in a warm system, so it reads as a mark on the file, not decoration.

### Neutral
- **Archive Cream** (#fff8e6): every sheet (`.paper`, `.project-card`, `.project-card-casestudy`, the Aech Labs page and project window), plus the text colour on inverted controls and the redaction bar.
- **Desk White** (#ffffff): the page behind the sheets. On mobile, the 14px side margins let it show around each card.
- **Filing Grey** (#6e6558): metadata only: dates, tags, captions, inactive margin nav labels, and dotted leaders. A warm grey pulled from the ink, not a neutral one, at 5.4:1 on cream. Applied site-wide through `--ink-meta` and `--muted`.
- **Carbon Haze** (#d7d8e4): only used as `text-shadow: 1px 1px 1px` on text set on paper, for the ink-bleed effect. Typed elements (captions, tags, the redaction bar, controls) turn it off.
- **Scrim** (rgba(45, 40, 34, .45)): the backdrop behind the project window.
- **Placeholder Wash** (rgba(45, 40, 34, .08)): the empty-image box, visible only when an image is missing.

### Named Rules
**The Two Inks Rule.** Text is Carbon Ink or Faded Ribbon, and everything else is paper. No accent colours, no coloured links, no tinted panels.

**The One Redaction Rule.** Redaction Navy appears once per case-study section, as the highlight bar, and nowhere else. It only works because it's rare.

**The Grey Is Metadata Rule.** Filing Grey is for dates, tags, captions and inactive nav, never for body copy. Use the warm #6e6558, never a neutral grey: #808080 on cream is only 3.7:1 and fails AA for small text.

## Typography

**Paper Font:** Courier New (with Courier, monospace), the installed system face, no web font
**Interface Font:** Open Sans (with sans-serif), loaded from Google Fonts, weights 300–800 with italics
**Control Mono:** the system `monospace` stack, kept only for the Aech Labs project-window controls and lab tags

**Character:** everything printed on a sheet is typed, so the dossier reads as one typewritten file. Everything you click or steer with (top nav, margin nav, text links, contact links, the clock, the footer) stays in Open Sans, the desk's voice rather than the file's. The split tells you what is content and what is interface without any colour or box.

### Hierarchy
- **Display** (Courier New 700, 34px, line-height 1.1): the case-study title (`.cs-title`). Lowercase.
- **Headline** (Courier New 700, 24px, line-height 1.15, balanced wrap; 20px on mobile): project titles on the home cards. The home "about me" heading is 16px.
- **Title** (700, 12–16px, line-height 1.3–1.4): margin headings on case studies (Courier, 14px), Aech Labs card names (Open Sans 12px bold, balanced wrap, because the whole card is a link), project window title (16px).
- **Body** (Courier New 400, 13px, line-height 1.65, -0.02em tracking, pretty wrap): home card descriptions, the about text and the Aech Labs intro (max 62ch).
- **Body, case study** (Courier New 400, 13px, line-height 1.65, -0.02em tracking): running text on case studies and in the project window. Long text (more than two paragraphs) runs in two magazine columns with a 32px gap.
- **Typed intro** (Courier New 400, 12px, line-height 1.6; 11px on mobile): the home intro lines, set like a typewritten form with underscored lines, a `****` / `++++` rule and an indented sign-off.
- **Meta** (Courier New 400, 11px, Filing Grey): home card tags (italic) and dates (tabular figures). Case-study date, credits, tags and Aech Labs years and tags use 11px too. Filing Grey (5.4:1 on cream) keeps 11px legible while letting it step back.
- **Label** (Open Sans 600, 12px): text links such as "view full casestudy > >". Contact links are 13px 500.
- **Interface** (Open Sans 400, 10–12px): top nav (12px), clock, margin nav and footer (10px).
- **Caption** (Courier New italic, 11px, line-height 1.6, Filing Grey): figure captions. The redaction bar is 12px, not italic.

### Named Rules
**The Lowercase Rule.** Copy is written in lowercase, including titles and tags. Don't title-case or uppercase anything for emphasis.

**The Typed Paper Rule.** If it is printed on a sheet, it is Courier New. If you can click it, or it belongs to the browser frame around the sheets (nav, clock, footer), it is Open Sans. The CSS enforces this with one override: links, buttons and the navbar inside a sheet switch back to Open Sans.

**The Courier Floor Rule.** Courier New runs small (low x-height, thin strokes, plus the ink-bleed text-shadow), so set it one step larger than a sans would need. No paper text on any page goes below 11px; metadata sits at the 11px floor and recedes by tone (Filing Grey), never by shrinking further.

## Layout

A single centred column of sheets on a white page, stacked with 50px between them (30px at ≤768px, 16px at ≤480px).

- **Sheet widths:** 550px for the home page (`.paper`, `.project-card`), 800px for case studies, 1100px for Aech Labs. Side padding is 45px, dropping to 28px at ≤768px and 20px at ≤480px. On mobile the sheets get 14px side margins so the white desk shows through.
- **Case-study rows:** a two-column grid with a 140px left gutter for the heading and a 24px gap. Content sits in the right column. Sections are separated by 120px of empty paper, no rules or dividers (72px on mobile, where the gutter folds above the content).
- **Header block:** title on the left, date and credits under it, tags right-aligned and baseline-matched to the date row (44px top, 64px bottom).
- **Image grids:** 2-up (50/50) and 3-up (33/33/33) with 10px gaps, collapsing to one column on mobile (3-up becomes 2-up on tablet). Hero images are 16:9 or 3:2 with `object-fit: cover`.
- **Aech Labs grid:** 3 columns with 44px × 32px gaps, 2 at ≤700px, 1 at ≤480px. Thumbnails are 16:9.
- **Margin nav:** on screens wider than 1100px, section labels sit fixed in the left margin beside their headings, joined by a dotted leader, and stack at the top as you scroll past. Hidden at ≤1100px.
- **Breakpoints in use:** 480, 600, 700, 768, 900, 1100px.

**The Empty Paper Rule.** Sections are separated by whitespace, never by lines, boxes or background changes. If two sections feel like they run together, add space.

## Elevation & Depth

Fully flat. The only depth is the cream sheet against the white page. Cards have no shadow, no border and no radius. The faint Carbon Haze text-shadow gives the type a printed feel; it doesn't lift anything. The project window is the one layered surface, and it gets a Scrim backdrop and a 1px Carbon Ink border, no shadow.

**The Flat File Rule.** Nothing casts a shadow. Separation is paper against desk, a 1px ink line, or a scrim.

## Shapes

Every corner is square (0px). Edges are 1px Carbon Ink solid lines on controls and the project window, or 1px Filing Grey dotted lines for leaders. The one ornament is the perforated tear line under the navbar on every sheet: a row of 3px punched holes every 8px (desk white showing through, a faint ink shadow on each hole's top lip), running the full width of the sheet and ending in two 10px half-round notches bitten out of its left and right edges, like a tear-off stub.

**The Square Corner Rule.** No border-radius anywhere. A rounded corner would read as app UI, not paper.

## Components

### Buttons
Quiet and exact: they hardly look like buttons until you hover or focus them.
- **Shape:** square, 1px solid Carbon Ink border (0px radius).
- **Bordered control** (close, window link, slide arrows): Archive Cream or transparent background, Carbon Ink text at 10px, padding 2–5px × 10–12px. Slide arrows are 32px squares.
- **Hover / Focus:** an instant swap to a Carbon Ink fill with Archive Cream text. No transition, no transform.
- **Text link** (the main CTA, e.g. "view full casestudy > >"): Faded Ribbon, Open Sans 12px 600. At rest a faint dotted Filing Grey rule sits under it; on hover or focus a 1px ink line draws in left to right (0.35s, expo ease-out), the text darkens to Carbon Ink and the trailing `> >` nudges 3px forward. No button shape. Contact links share the same treatment; navbar links skip the resting rule and only draw the line on hover.

### Cards / Containers
- **Paper card:** Archive Cream, square corners, no shadow or border, 45px side padding, a min-height of 600–680px on the home page. Holds a Courier title, then tags and date on one row (11px Filing Grey), a hero image, a 13px Courier description and an Open Sans text link.
- **Lab card:** no container. A 16:9 image, then the name (Open Sans 12px bold) with the year (11px Filing Grey) on one baseline, then monospace italic tags. Hovering underlines the name. Focus shows a 1px dotted ink outline, 4px offset.

### Navigation
- **Top nav:** Filing Grey links in a single justified row at 12px (11px and wrapping on mobile), no decoration at rest (on hover the ink stroke draws in and the link darkens to Carbon Ink), injected from `Fn.js`.
- **Margin nav:** fixed labels at 10px Filing Grey in the left margin, Carbon Ink when active, underlined on hover. Sub-items are indented 10px. Each label is tied to its heading by a dotted leader that turns ink when active and disappears once the label pins to the top.

### Highlight Bar (signature)
The redaction bar: a full-width Redaction Navy band holding one key sentence per section, in 12px Archive Cream Courier New with 8px × 12px padding and no text-shadow. It's the dossier's stamp: one per section, never decorative.

### Figure + Caption (signature)
An image, GIF or iframe at full column width, with an 11px Courier New italic caption in Filing Grey under it (6px top padding, no text-shadow). It reads like an evidence label.

**Margin variant** (`.fig.cs-margin-fig`): a long exhibit pinned on the desk to the right of the sheet, like a receipt clipped to the file. On screens 1200px and wider it sits 32px outside the sheet, up to 240px wide, with its bottom flush with its section's last line of text and the caption above it. Below 1200px it drops back into the text column at up to 240px. Used once, for the Zupto health-tax bill.

### Project Window
A native `<dialog>` at a fixed 960 × 560px (capped at 94vw / 86vh). Media takes 3/5 (contained, never cropped) and text 2/5 (scrolls if long). 1px Carbon Ink border, Archive Cream background, Scrim behind it. The close button sits top-right in an Archive Cream box, slide arrows sit on the image edges and the count sits top-left. It stacks into one column on mobile. It opens and closes with no animation.

## Do's and Don'ts

### Do:
- **Do** put every surface on Archive Cream (#fff8e6) over Desk White (#ffffff), with square corners and no shadow.
- **Do** set text in Carbon Ink (#2d2822) or Faded Ribbon (#4A4238), and keep Filing Grey (#6e6558) for metadata.
- **Do** set everything printed on a sheet in Courier New, and everything clickable or part of the frame (nav, links, buttons, clock, footer) in Open Sans.
- **Do** separate case-study sections with 120px of empty paper and put the section heading in the 140px left gutter.
- **Do** give each case-study section at most one Redaction Navy (#1E212B) highlight bar.
- **Do** make controls 1px Carbon Ink outlines that invert to a solid ink fill on hover and focus.
- **Do** write in lowercase.

### Don't:
- **Don't** add animations, scroll effects, loading screens or interactive toys. The page stays still.
- **Don't** use border-radius, drop shadows, gradients or coloured accents.
- **Don't** use generic SaaS layouts, like hero sections with gradient blobs.
- **Don't** add heavy JS frameworks or extra web fonts. Open Sans plus the installed Courier New (and system monospace for lab controls) is the whole type budget.
- **Don't** use Filing Grey for body copy, and don't set Courier metadata below 11px.
- **Don't** separate sections with horizontal rules or boxed panels. Use empty space.
