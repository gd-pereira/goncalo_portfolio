# Terminum Featured Project Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Feature Terminum as an always-visible split block above the existing projects list, without changing the portfolio’s clean visual language.

**Architecture:** Keep a single `projects.items` array in content. Flag Terminum with `featured: true`. `Projects.jsx` derives `featured` and `secondary` from that array and renders a dedicated featured layout, then the existing list row for the rest. No new dependencies, routes, or page structure.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, existing `react-icons` tech map.

**Spec:** `docs/superpowers/specs/2026-08-20-terminum-featured-project-design.md`

---

## File structure

| File | Responsibility |
|---|---|
| `app/content/portfolioContent.js` | Add `featured: true` on Terminum only |
| `app/components/Projects.jsx` | Split featured vs secondary rendering; keep `getTechIcon` shared |

No new component file required unless `Projects.jsx` becomes hard to read after the featured block (prefer keeping one file for this small change).

---

### Task 1: Mark Terminum as featured in content

**Files:**
- Modify: `app/content/portfolioContent.js`

- [ ] **Step 1: Add `featured: true` to Terminum**

In `projects.items[0]` (Terminum), add the flag after `year` (or after `title` — either is fine; keep it next to other metadata):

```js
{
  title: "Terminum",
  url: "https://terminum.ch",
  previewLabel: "Projektvorschau",
  image: "/projects/terminum_preview.png",
  description:
    "Eine vollständige SaaS-Management-Plattform für Barbershops. Inklusive integriertem Website-Builder für Kundenbuchungen und zentralem Admin-Dashboard.",
  technologies: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Stripe"],
  year: "2026",
  featured: true,
},
```

Do not add `featured` to the other items (absence = false).

- [ ] **Step 2: Commit**

```bash
git add app/content/portfolioContent.js
git commit -m "Mark Terminum as the featured portfolio project"
```

---

### Task 2: Render featured block + secondary list in Projects

**Files:**
- Modify: `app/components/Projects.jsx`

- [ ] **Step 1: Derive featured and secondary from content**

At the top of `Projects()`, replace the single list map with:

```jsx
export default function Projects() {
  const { projects } = portfolioContent;
  const featured = projects.items.find((item) => item.featured);
  const secondary = projects.items.filter((item) => !item.featured);
```

- [ ] **Step 2: Insert featured block above the list**

Keep the section shell, glow, and heading unchanged. Replace the “Project List” inner content so structure is:

1. Featured block (only if `featured` exists)
2. Secondary list (`secondary.map(...)` using the **existing** row markup)

Featured block markup (paste inside the content column, before the secondary list wrapper):

```jsx
{featured && (
  <a
    href={featured.url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`${featured.title} ${featured.previewLabel}`}
    className="group w-full flex flex-col md:flex-row md:items-center gap-8 md:gap-12 pb-12 md:pb-16 border-b border-[rgba(255,255,255,0.05)] transition-colors duration-500 hover:bg-[rgba(255,255,255,0.02)] md:px-[80px] md:-mx-[80px] md:rounded-3xl"
  >
    {/* Always-visible preview (~60%) */}
    <div className="relative w-full md:w-[60%] aspect-video rounded-xl overflow-hidden shadow-[0_24px_40px_rgba(0,0,0,0.6)] bg-[#111] shrink-0">
      <img
        src={featured.image}
        alt={`${featured.title} ${featured.previewLabel}`}
        className="w-full h-full object-cover object-center brightness-[0.6] contrast-110 transition-all duration-500 group-hover:brightness-[0.8] group-hover:contrast-125"
      />
      <div className="pointer-events-none absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/10" />
    </div>

    {/* Copy (~40%) */}
    <div className="flex flex-col gap-6 md:gap-5 w-full md:w-[40%] md:pr-4">
      <div className="text-[28px] sm:text-[32px] md:text-[48px] text-white font-light tracking-[-0.5px] md:tracking-[-1px] leading-tight">
        {featured.title}
      </div>
      <p className="text-[15px] md:text-[16px] text-[#A1A1AA] leading-[1.8] md:leading-[2] font-light max-w-full md:max-w-[380px]">
        {featured.description}
      </p>
      <div className="flex flex-col md:items-start gap-6 md:gap-8">
        <div className="flex gap-[12px] flex-wrap text-white/60">
          {featured.technologies.map((tech) => (
            <div key={tech} className="group/icon relative cursor-default" title={tech}>
              {getTechIcon(tech)}
            </div>
          ))}
        </div>
        <span className="text-[14px] text-white/30 font-light tracking-widest">
          {featured.year}
        </span>
      </div>
    </div>
  </a>
)}
```

- [ ] **Step 3: Point the existing list at `secondary` only**

Change:

```jsx
{projects.items.map((project, idx) => (
```

to:

```jsx
{secondary.map((project, idx) => (
```

Keep the rest of the row markup identical (mobile image, content, desktop hover image). Use `project.title` as `key` instead of `idx` if convenient:

```jsx
key={project.title}
```

- [ ] **Step 4: Visual check in the running dev server**

Dev is already on (`npm run dev`). Open the projects section and verify:

- Terminum shows always-visible preview (desktop + mobile)
- Title is slightly larger than secondary titles
- Whole featured block links to terminum.ch
- Global Scale + Baromètre still use hover-reveal on desktop
- No “Featured” badge; borders/type still match the site
- Hover brightness lift works on featured image

- [ ] **Step 5: Lint**

```bash
npm run lint
```

Expected: no new errors in `Projects.jsx` / content file.

- [ ] **Step 6: Commit**

```bash
git add app/components/Projects.jsx
git commit -m "Feature Terminum with always-visible project preview"
```

---

### Task 3: Final verification

**Files:** none (verify only)

- [ ] **Step 1: Build**

```bash
npm run build
```

Expected: build succeeds.

- [ ] **Step 2: Spec checklist**

Confirm against `docs/superpowers/specs/2026-08-20-terminum-featured-project-design.md`:

- [ ] Featured ~60/40 split on desktop
- [ ] Always-visible preview
- [ ] Quiet border divider, no “More work” label
- [ ] Secondary list unchanged in behavior
- [ ] No new accent color / badge / deps
- [ ] `featured: true` is single source of truth

---

## Spec coverage (self-review)

| Spec requirement | Task |
|---|---|
| Featured Terminum above list | Task 2 |
| Always-visible preview | Task 2 Step 2 |
| ~60/40 split | Task 2 Step 2 (`md:w-[60%]` / `md:w-[40%]`) |
| Title ~48px desktop | Task 2 Step 2 (`md:text-[48px]`) |
| Whole block links out | Task 2 Step 2 (wrapping `<a>`) |
| Soft brightness hover | Task 2 Step 2 (`group-hover:brightness-[0.8]`) |
| No badge / accent | Task 2 (omitted by design) |
| Secondary rows unchanged | Task 2 Step 3 |
| `featured: true` in content | Task 1 |
| Prefer-reduced-motion: no new motion beyond existing transitions | Task 2 (CSS transitions only; site already disables enter animations under PRM) |
