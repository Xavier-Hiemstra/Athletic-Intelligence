# Athletic Intelligence: Team Brief

**KU x Techstars Startup Weekend 2026 · Nov 13–15 · Capitol Federal Hall**
**Source:** founder interview with Xavier Hiemstra, Friday Nov 13, plus the existing pitch deck
**Status:** living document. If something here is wrong or out of date, fix it in this repo.

This is the single source of truth for what we are building and why. Developers, business and marketing should all work from it. Anything marked **OPEN** is undecided and needs an owner. Anything marked **Suggestion** did not come from the founder and is up for debate.

---

## 1. The idea in one breath

**Athletic Intelligence is one place where an athlete's data from every device comes together and gets turned into training built for them.**

- **Tagline (from the deck):** Professional level training for a fraction of the cost.
- **Core premise (founder's words):** athletes create new workouts unique to them and their situation, using their data collected from a variety of different places.

Three things the product does:

1. **Data hub:** see all your health and training data in one dashboard, no matter which device collected it.
2. **AI coach:** plans workouts from that data, then adjusts based on how each workout actually felt.
3. **Human coach marketplace:** when an athlete wants a person, the AI helps them find the right coach.

---

## 2. The problem

Athletes collect a lot of data and can't use it together.

- People wear a Garmin, an Apple Watch, an Oura ring, a Fitbit, often more than one. Each has its own app. The data never meets.
- Today there is a place to plan workouts (Runna, Run with Hal), a place to view data (each device's app), and a place to find a coach. They are three separate ecosystems.
- Athletes who want AI planning go to Claude or ChatGPT, which don't have their data, so the plans aren't specific to them.
- The workaround is spreadsheets.

**Result:** the athlete has paid for the hardware and done the tracking, but their training plan still ignores most of what they know about their own body.

---

## 3. Who it's for

**First user:** a hobbyist athlete who has run a race before but is still new to competing and structured training.

- Uses Runna, Run with Hal, or a general AI chatbot to plan workouts today.
- Owns at least one tracking device.
- **OPEN:** target age range. The deck cites Gen Z participation growth, and our immediate access is KU students, so college-age runners are the natural starting assumption. Validate Saturday.

**Launch sport:** marathon and distance running.
**Later:** bodybuilding, triathlon, other fitness challenges.

**Second customer:** human coaches, who get athletes sent to them through the marketplace.

---

## 4. Why Xavier, why now

**Founder story.** Xavier has run 2 marathons and 16 half marathons, completed 75 Hard, and is starting triathlon training. He hit this problem himself, saw it in friends who train, and tried to build his own software to combine his data before deciding to start a company around it. Being on a college campus gives the team fast access to athletes for feedback.

**Market (from the deck, sources need re-checking before they go on a slide):**

- Global endurance sports market valued at $35.2B in 2022, projected 7.8% CAGR 2023–2030 (worldmetrics.org).
- Gen Z participation up 33% year over year (Haku, endurance industry trends 2026).

---

## 5. How the product works (the athlete's view)

**Day one: the interview.** An AI agent interviews the new athlete about:

- Health and athletic history, past sports
- What they are training for (a specific event, or general health)
- Their goals
- Past injuries and anything that limits how they can train

The athlete also connects their devices so their data flows in.

**A typical week.**

1. The athlete asks the AI coach for a plan that fits their goals and current trajectory.
2. The AI builds the workouts.
3. After each workout, the AI checks in: how did it feel, too hard, too easy, what should change?
4. The plan is strengthened or dialed back based on that feedback and the data.
5. All of it is visible in one dashboard.

**What gets documented.** Anything that helps the AI build a better workout:

- Height, weight
- Resting heart rate, working heart rate zones
- VO2
- Calories burned and consumed
- Sleep and recovery
- Completed workouts
- The athlete's post-workout feedback

**What the athlete gets back:** workouts that keep getting more tailored to them.

**Human coaches.** The athlete can ask for a human coach at any time. The AI recommends coaches based on the athlete's preferences. Sessions are over the phone.

---

## 6. This weekend's scope

We are building a **prototype to show judges and investors**, not the full product.

**The demo must show two things:**

1. **A week of planned workouts** for one athlete.
2. **A data hub** where that athlete sees all their data in one place.

**Out of scope this weekend:** everything else in full form. Live device integrations, the coach marketplace, payments and additional sports can be shown as mockups or described, not built.

**Suggestion:** build the demo around one fictional athlete with a believable profile (for example, a KU junior training for a first marathon, wearing a Garmin and an Oura ring), so the plan visibly reacts to their data. A judge should be able to point at a workout and see which data caused it.

Technical approach is the developers' call.

---

## 7. Business model

| Revenue stream | Who pays | Price |
|---|---|---|
| Athlete subscription | Athletes | $20 per month |
| Coaching override | Taken from each coaching session booked through the marketplace | **OPEN:** percentage |

**Current projections (from the deck):**

| | Year 1 | Year 2 | Year 3 |
|---|---|---|---|
| Revenue | $2,000 | $10,000 | $70,000 |
| Expenses | $10,000 | $20,000 | $70,000 |
| Net | ($8,000) | ($10,000) | $0 |

Largest expected expenses: AI token costs for users, AI token costs for development, advertising and marketing, sponsorship and partnership costs.

**Things for the business team to work on:**

- At $20 per month, $2,000 in Year 1 is roughly 8 subscribers paying for a full year. Decide whether that is deliberately conservative or needs rebuilding from a user-count assumption.
- The rubric's top score needs "multiple revenue streams." We have two. **Suggestions** to evaluate: a free tier with paid upgrade, annual plans, race or run-club partnerships, coach-side subscription for tools or lead flow.
- **OPEN:** is $20 the right price? Ask in Saturday's interviews what people pay today.
- **OPEN:** the override percentage, and what a coaching session costs.

---

## 8. Go-to-market

**First 100 users:**

- Marketing through run clubs
- Tabling at the start and finish lines of smaller local marathons, starting with partnerships with those races
- Using those conversations to collect as much feedback as possible

**Suggestions for the marketing team:** list the specific Lawrence and Kansas City run clubs and upcoming local races; KU itself (club running, rec center, campus races) is the closest channel we have.

---

## 9. Competition

**What athletes use now:** Runna, Run with Hal, device apps (Garmin, Apple, Oura, Fitbit), Claude or ChatGPT, spreadsheets, human coaches.

**Threats the founder is most worried about:**

1. **General AI assistants** (Claude, ChatGPT). People already have them, and they could add health-data connectors.
2. **Device makers** (Google, Garmin and others). They already own the hardware and the data and could add an AI coach on top.

**Our position:** device makers are built around their own device. General AI is built around no athlete in particular. We are device-neutral and athlete-specific: every source in, one plan out, with a human coach available.

**OPEN, and the question judges are most likely to ask:** "Why won't Garmin or a chatbot just do this?" The research team should check what each competitor actually offers today and write a one-sentence answer. Starting points to test:

- Neutrality: a device maker is unlikely to give a rival's hardware equal treatment.
- The feedback loop: the post-workout interview builds a history of how this athlete responds to training, which grows more valuable the longer they stay.
- The coach marketplace: neither a chatbot nor a watch company connects athletes to human coaches.

---

## 10. Impact

- Brings training quality that used to require a paid coach within reach of hobbyists.
- Makes use of data people already paid to collect.
- Asks about injuries and limitations up front and adjusts load from feedback, which supports safer training for newer athletes.
- **OPEN:** the 3 to 5 year vision. The founder hasn't settled this. The natural direction from what exists: expand sport by sport until it is the training home for any hobbyist athlete. The team should agree on one sentence for the pitch.

---

## 11. Team

**OPEN: this section is incomplete. Add names.**

The team has three parts:

| Group | Who | Responsibilities |
|---|---|---|
| Founder | Xavier Hiemstra | Idea originator. Manages the team, researches the product, keeps development on track, keeps business and dev informed about each other's work. |
| Developers | *add names* | Build the prototype. |
| Business and marketing | *add names* | Customer validation, business model, go-to-market, pitch deck. |

**OPEN:** who presents which part of the pitch. See section 12; this is scored.

---

## 12. How we get judged

Final pitch: **3 minutes, hard stop**, then 2 minutes of judge feedback. Five criteria, each scored 1 to 5.

| Criterion | What a 5 looks like | Where we stand |
|---|---|---|
| **Customer Validation** | Outstanding, distinctive solution with a clear competitive advantage; shows what we learned from customers and data | **Weakest area.** 5 to 7 informal conversations with friends, all positive, none structured. Fix Saturday. |
| **Team Dynamic** | Whole team engaged, presentation shared evenly, everyone ready for Q&A | Roles not assigned. One person presenting scores a 1. |
| **Business Model** | Strong, sustainable, multiple revenue streams | Two streams, thin projections. Needs work. |
| **Execution and Design** | Complete, well-prepared pitch showing what we built and how feedback shaped it | Depends on the demo and on having feedback to point to. |
| **Impact** | Significant, wide-ranging benefits | Good story, needs one clear sentence and a number. |

**Pitch rules that can sink us:**

- Slides **must be built in Google Slides**. Do not build in Canva, Figma or PowerPoint and convert. The existing deck is a .pptx, so rebuild it natively.
- One Google Slides link is due **Saturday**.
- Slides lock **Sunday 4:30 PM**. No edits after.
- Any live demo must live **inside the slides**. **Suggestion:** embed a screen recording so nothing depends on wifi.
- Tech check by **Sunday 1:00 PM**.

**Key times:**

| When | What |
|---|---|
| Sat 9:15 AM | Workshop: Lean business and customer discovery |
| Sat 1:00 PM | Workshop: Building an MVP |
| Sat 2:30–5:00 PM | Mentor 1:1s (two 30-minute sessions per team) |
| Sat 7:00 PM | Mentor office hour |
| Sun 9:10 AM | Workshop: Pitching 101 |
| Sun 11:00 AM | Mentor office hour |
| Sun 1:00 PM | Tech check and pitch practice |
| Sun 4:30 PM | Slides locked |
| Sun 6:30 PM | Final pitches |

---

## 13. Saturday priorities

1. **Talk to real users (business team, start in the morning).** Target 20 or more runners and at least 2 or 3 coaches by end of day. Ask what devices they own, how they plan training now, what frustrates them, what they pay, and whether they would pay $20 per month. Record numbers and direct quotes. This is the single biggest lever on our score, and "how customer feedback shaped it" is also part of Execution.
2. **Lock the demo athlete and the two demo screens (devs and founder).** Weekly plan and data hub.
3. **Research competitors and write the one-sentence answer** to "why won't Garmin or a chatbot do this?"
4. **Strengthen the business model:** price, override percentage, additional streams, projections built from a user count.
5. **Start the Google Slides deck and submit the link.**
6. **Assign every team member a speaking part** and rehearse to 3 minutes.
7. **Bring the hard questions to mentors:** defensibility, pricing, and how to verify the market numbers.

---

## 14. Open questions, all in one place

- [ ] Target age range for the first user
- [ ] Team member names, roles and pitch speaking parts
- [ ] Coaching override percentage and session price
- [ ] Whether $20 per month is the right price
- [ ] Additional revenue streams
- [ ] Our defensible advantage against device makers and general AI
- [ ] What coaches want from the marketplace (none interviewed yet)
- [ ] The 3 to 5 year vision in one sentence
- [ ] Re-verify the market statistics and their sources
- [ ] Specific run clubs and races for launch

---

## Brand notes

Serious, performance-focused look. Colors: black, white, red and blue.
