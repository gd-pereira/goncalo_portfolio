# Terminum Featured Project — Design Spec

**Date:** 2026-08-20  
**Status:** Approved for planning  
**Scope:** Elevate Terminum in the projects section without changing the portfolio’s clean, lowkey visual language.

## Goal

Make Terminum clearly the primary project for visitors, while Global Scale and Le Baromètre stay in the existing quiet list treatment.

## Non-goals

- No “Featured” badge, chip, or sticker
- No new accent color, glow, or card chrome beyond what already exists
- No new page sections, routes, or dependencies
- No rewrite of secondary project rows

## Structure

Projects section keeps the heading “Ausgewählte Projekte”.

1. **Featured block (Terminum only)**  
   - Desktop: ~60/40 split — always-visible preview left, title / description / tech icons / year right  
   - Mobile: preview on top, text below (same rhythm as current mobile project cards)  
   - Whole featured block is one link to `https://terminum.ch`

2. **Divider**  
   - Existing thin `border-white/5` and/or spacing only  
   - No “More work” / “Other projects” label

3. **Secondary list**  
   - Remaining items rendered with the current hover-reveal list row pattern, unchanged in behavior and styling

## Visual & interaction

| Element | Spec |
|---|---|
| Featured preview | Always visible (not hover-gated on desktop) |
| Featured hover | Soft brightness lift on the image (same language as existing hover previews) |
| Featured title | One step larger than list titles (~48px vs ~40px desktop); same font weight/tracking family |
| Copy / tech / year | Same muted styles as today (`#A1A1AA`, white/60 icons, white/30 year) |
| Secondary rows | Keep current hover preview, transforms, borders, padding |
| Motion | Reuse existing durations/easing; honor `prefers-reduced-motion` |

## Content / data

- Keep Terminum’s existing copy, image, technologies, and year
- Add a content flag, e.g. `featured: true`, on the Terminum item in `portfolioContent.js`
- Featured item is excluded from the secondary list map (single source of truth; no duplicated content objects)

## Implementation outline

- `app/content/portfolioContent.js` — add `featured: true` to Terminum
- `app/components/Projects.jsx` — split into featured block + secondary list from the same `projects.items` array
- No changes to `page.js`, Hero, About, Contact, or global theme tokens unless needed for shared spacing consistency

## Success criteria

- A first-time visitor can tell Terminum is the main project within a glance at the projects section
- Secondary projects still feel intentional, not demoted into clutter
- Overall site still reads as the same dark, restrained portfolio
