# Athletic Intelligence — Brand Guidelines

Version 1 · November 2026 (app palette updated to black, white and orange). Converted from `Athletic-Intelligence-Brand-Guidelines.pdf`.
Code tokens for the colours below live in `apps/web/src/app/globals.css`.

Logo, colour, type, voice and layout for the Athletic Intelligence platform.

---

## 01 · The brand

### A private performance lab

Athletic Intelligence is one place to plan, log and adapt your training. It starts with an interview: an AI coach learns your athletic history, your schedule and how you recover. It then designs your workouts from your own data, connects you with a human coach when you want one, and keeps every session in a single log.

It launches for marathon training, with bodybuilding and triathlon to follow.

The brand should feel like a premium service built around one athlete: dark, quiet and exact. Athletes should feel their training is being designed for them, not generated for everyone.

**Black is the room. White is the information. Orange is the energy.**

### What premium means here

- **Dark by default.** The app, the website and the app icon all live on near-black. The light theme is for printed plans, PDFs and email.
- **Restraint over decoration.** No gradients, glows, textures or stock-photo heroes. Quality shows in spacing, type and precise numbers.
- **Space is the luxury.** Give each screen one job and room around it. Fewer cards, larger numbers, generous margins.
- **Colour is earned.** Most screens are black and white only. Orange runs through the whole app: buttons, rings, charts, active states and icons.
- **Personal, not generic.** Always name what the plan was built from: "Built from your last 6 weeks and last night's HRV."

---

## 02 · Voice — talk like a private coach

- Talk like a coach, not a dashboard. "Take today easy. Your HRV is down 12%." beats "Recovery score: low."
- Lead with the number, then the reason. Paces, distances and heart rates are the content. Say what changed and why.
- Short sentences, second person, active voice. "You ran 18.4 km" rather than "18.4 km was completed".
- Calm confidence. No exclamation marks, no "crush it", no emoji, no streak confetti.
- Never shame a missed day. Adjust the plan and move on.
- Units are real. Write `4:52 /km`, `142 bpm`, `Z2`, `HRV 61 ms`. Never mix km and mi on one screen.

**Write this**

> Missed Tuesday? Thursday's tempo moves to Friday. Your long run stays on Sunday.

> Your HRV is down 12% from your 7-day average, so today's intervals become an easy 45 minutes.

**Not this**

> Oh no, you broke your streak! Get back out there and crush it! 💪

> Recovery score: Low. Workout modified.

---

## 03 · Logo

### The A and the heartbeat

The mark is a capital A with square-cut strides rising to a sharp peak. Its crossbar is a heartbeat in red: the moment the app reads your body and adjusts the plan.

The heartbeat is not placed on top of the A. It is drawn as part of the same form, growing out of each leg through small filleted joints, with the red meeting the white along the legs' inner edges. In one colour, the A and the heartbeat become a single solid shape.

The A is white on a black tile with 4-on-64 corners and a 1px graphite edge, so the icon stays visible on black.

The wordmark is set in Archivo: ATHLETIC at 800 and INTELLIGENCE at 400 with wide tracking, both lines the same width. On dark, INTELLIGENCE is light blue (`#7C9BFF`). On light, it is brand blue (`#1E46D6`).

### Which logo, where

| File | Use |
|---|---|
| `ai-lockup-on-dark.svg` | Primary: app, web, social |
| `ai-lockup-on-light.svg` | Print, documents, white grounds |
| `ai-stacked-on-dark.svg` | Avatars, splash, merch |
| `ai-stacked-on-light.svg` | Square spaces on white |
| `ai-mark.svg` | App icon, favicon, watch complication |
| `ai-mark-mono-light.svg` | One colour on dark, apparel |
| `ai-mark-mono-dark.svg` | One colour on light, engraving |

> The SVG files are not in this repo yet. Add them when available.

**Sizes**

- Mark: 20 px min
- Lockup: 120 px wide min
- Stacked: 96 px wide min
- Clear space: ¼ mark height

**Don't**

- Swap the red and blue, or recolour the heartbeat.
- Place the mark on red or blue grounds, or add shadows, glows, gradients or outlines.
- Round the tile further, stretch it, or set the wordmark in another typeface.

---

## 04 · Colour — black and white do the work

| Colour | Hex | RGB |
|---|---|---|
| Black | `#000000` | 0 0 0 |
| White | `#FFFFFF` | 255 255 255 |
| Orange | `#FF5722` | 255 87 34 |

### Tokens

| Token | Dark | Light | Use |
|---|---|---|---|
| `surface-100` | `#000000` | `#FFFFFF` | Page background |
| `surface-200` | `#1A1A1A` | `#F2F2F2` | Cards: workouts, plan weeks, stat tiles |
| `surface-300` | `#262626` | `#E6E6E6` | Sheets, modals, pressed states |
| `line` | `#2E2E2E` | `#D9D9D9` | Hairlines, borders, gridlines. Separate with lines, never shadows |
| `ink` | `#FFFFFF` | `#0A0A0A` | Primary text |
| `ink-muted` | `#A0A0A0` | `#5C5C5C` | Secondary text, captions, labels |
| `accent` | `#FF5722` | `#FF5722` | The brand colour: buttons, rings, chart lines, selected states, active tab, key icons |
| `accent-text` | `#FF6A3D` | `#C2410C` | Orange words: links, positive changes, eyebrow labels, "Show all" |

White text on `accent` is about 3.3:1, so keep it to 16 px semibold or larger.

Never let colour alone carry meaning: pair it with a label, an icon, an arrow or a line style.

---

## 05 · Typography — three faces, three jobs

| Style | Face · weight | Size / line | Example |
|---|---|---|---|
| `display-xl` | Archivo 800 | 56/56 | Your training, engineered. |
| `display-l` | Archivo 800 | 36/40 | Week 9 of 18 |
| `title` | Public Sans 600 | 20/28 | Tempo run: 8 km with 5 km at threshold |
| `body` | Public Sans 400 | 16/24 | Your HRV is down 12% from your 7-day average, so today's intervals become an easy 45 minutes. |
| `label` | Public Sans 600, caps | 12/16 | READINESS |
| `metric` | JetBrains Mono 500 | 28/32 | 4:52 /km |
| `data` | JetBrains Mono 500 | 14/20 | Z2 · 142 bpm · 18.4 km |

Archivo for titles. Public Sans for coach messages and UI. JetBrains Mono for every metric, so splits never jump while a run is live. All three are free Google Fonts.

---

## 06 · Layout, data and icons

Large white numbers on black. Example stat tiles: `READINESS 82`, `WEEKLY KM 48.6`, `AVG PACE 4:52`, with the footer "Week 9 of 18 · Built from your last 6 weeks and last night's HRV". A workout card reads "Tempo run — 8 km · 5 km at 4:35 /km" with a **Start workout** button. Orange marks action, progress and the coach.

### Spacing

| Token | px | Use |
|---|---|---|
| `space-1` | 4 | Icon-to-label gaps |
| `space-2` | 8 | Label to number inside a stat |
| `space-4` | 16 | Card padding on phone; gaps between cards |
| `space-6` | 24 | Card padding on tablet and web |
| `space-8` | 32 | Screen margins on web |

### Corners

| Token | px | Use |
|---|---|---|
| `radius-sm` | 2 | Inputs, chips, zone tags |
| `radius-md` | 4 | Buttons and cards (matches the logo tile) |
| `radius-lg` | 8 | Sheets and modals only. No pills |

### Icons

Line icons, 1.5 px strokes, square or mitred corners to match the mark. Draw them in `ink-muted`; the active tab takes `ink`, and only a live workout takes orange.
