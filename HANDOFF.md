# UnitRate Watch — Operating Handoff

_Last updated: August 20, 2026 (CT)_

## Status

**Stage:** Live beta / acquisition validation  
**Current constraint:** Reconcile the Vercel production source with newer acquisition/indexing work, add the Vercel Web Analytics script, then measure qualified traffic. Do **not** expand product scope.  
**Spend to date:** $0  
**Revenue:** $0  
**Treasury:** $0

- Repository/source work: https://github.com/JessIsenhower/unitrate-watch
- **Public production site:** https://unitrate-watch.vercel.app/
- Vercel project: `unitrate-watch` in team `UnitRate Watch`
- **Do not socialize the owner-named GitHub Pages URL.** GitHub is source/operations, not the public brand URL.
- Production beta intake is an anonymous on-site form posting to `/api/scan`; visitors do not need a GitHub account, name, or email.

## Important deployment state

The public Vercel deployment is **not currently a mirror of GitHub `main`**.

As verified August 20, 2026 CT:

- Vercel production is live and healthy at `https://unitrate-watch.vercel.app/`.
- The live Vercel homepage includes the rate-hike calculator plus an anonymous on-site scan form that posts to `/api/scan`.
- The latest Vercel build downloaded only three deployment files, indicating it was deployed separately from the fuller GitHub site source.
- The newer operator pages, broader acquisition pages, sitemap, robots file, and IndexNow key/workflow exist in GitHub source but are **not yet present on the public Vercel deployment**; `/sitemap.xml` returned 404 when checked.
- Vercel Web Analytics was enabled in the project dashboard by the human operator on August 20, 2026 CT. However, the current static HTML response does **not** include the Vercel Analytics client script, so visit collection is not considered operational until the script is added and a new Vercel deployment is verified.
- Therefore, **do not deploy GitHub `main` over Vercel blindly**. Doing so would regress the anonymous intake back to the GitHub-Issues CTA currently present in the GitHub homepage source.

The next production deployment must preserve the anonymous Vercel form/API while adding the analytics script plus the newer acquisition and indexing assets.

## Business

UnitRate Watch is a consumer self-storage price-transparency utility for renters who receive a rate increase or suspect their current storage rent is materially above current market pricing.

**Core job to be done:**

> Tell us what you pay and what kind of unit you have. We do the comparison work and tell you whether the evidence favors staying, negotiating, or switching.

The user should **not** have to research competitor rates before using the product.

### Minimum customer input

- Current facility or ZIP code
- Unit size
- Unit type / relevant attributes
- Current monthly base rent
- Previous rent, if there was an increase
- Rate-increase notice is optional

### UnitRate Watch does the hard work

- Find current publicly advertised rates where available
- Compare the renter's current facility first, then relevant nearby alternatives
- Normalize obvious differences such as unit size, climate control, access, floor, promotions, fees, and availability
- State uncertainty instead of pretending listings are perfectly comparable
- Return a **stay / negotiate / switch** recommendation with evidence

## Why this business survived selection

UnitRate Watch was reselected after an AI-inclusive clean-slate opportunity tournament. AI was allowed as technology, product capability, or market; only domains with unusually strong prior-context advantages were neutralized during initial candidate generation.

UnitRate Watch scored highest because it combines:

- visible and measurable consumer pain
- a large installed renter base with meaningful switching friction
- high-intent search behavior around rate increases
- a $0 MVP
- a plausible referral/affiliate monetization path that can remain aligned with the renter
- relatively open product whitespace around **existing-customer rate drift**, rather than generic storage discovery
- a future data moat from longitudinal, anonymized rate histories and operator price-stability behavior

AI is an operating/product advantage, **not the customer promise**.

## Current product

### Live Vercel production

The current public homepage includes:

- rate-hike calculator
- annual cost impact
- market-check signal
- anonymous free scan form
- `/api/scan` submission endpoint
- no visitor-facing GitHub requirement

### Newer acquisition work in GitHub source, not yet reconciled into Vercel

High-intent operator pages:

- `extra-space-storage-rate-increase.html`
- `public-storage-rent-increase.html`
- `cubesmart-rent-increase.html`

Broader acquisition pages:

- `storage-unit-rent-increase.html`
- `storage-price-lock.html`
- `nyc-extra-space-settlement.html`

Trust/indexing assets:

- `privacy.html`
- `terms.html`
- `AFFILIATE_PLAN.md`
- `robots.txt`
- `sitemap.xml`
- IndexNow verification key file
- `.github/workflows/indexnow.yml`

PR #18 corrected the GitHub sitemap, robots file, and IndexNow target so they use `https://unitrate-watch.vercel.app` rather than the owner-named GitHub Pages URL. Those changes still need to reach Vercel production as part of a safe reconciled deployment.

## Current acquisition hypothesis

People searching after a self-storage rate increase have unusually high problem awareness. The first organic acquisition wedge is therefore **problem-triggered search intent**, not broad storage content.

Priority query families include:

- self storage rent increase
- storage unit rent increase
- Extra Space Storage rate increase
- Public Storage rent increase
- CubeSmart rent increase
- storage company price lock
- storage unit price doubled
- storage facility advertising lower price than my current rent

Do not publish generic SEO filler merely to increase page count. Every page should answer a real renter question and route naturally to the scan.

## Experiment thresholds

### Primary hypothesis

Renters will submit minimal current-unit information if UnitRate Watch owns the comparison work.

### Success

- **8 qualified scan requests from the first 100 relevant visitors**, and
- at least **2 scans lead to a concrete negotiate or switch action**

### Failure

- **200 relevant visitors with fewer than 3 qualified scan requests**

If the post-hike scan fails, test **pre-rental price stability / predictability** as the primary job before abandoning the market.

## Scoreboard

| Metric | Value |
|---|---:|
| Relevant visitors | Unknown — analytics dashboard enabled but client script not yet deployed |
| Qualified scan requests | 0 known |
| Customers | 0 |
| Revenue | $0 |
| Expenses | $0 |
| Treasury | $0 |

No conversion conclusions are valid until the visitor denominator exists.

## Open work

### Issue #6 — Acquisition experiment

https://github.com/JessIsenhower/unitrate-watch/issues/6

The acquisition pages are built in GitHub source but **not yet live on public Vercel production**. Keep this issue open through safe deployment, indexing, and a fair traffic test.

### Issue #7 — Analytics

https://github.com/JessIsenhower/unitrate-watch/issues/7

Vercel Web Analytics is enabled in the project dashboard. For this static HTML deployment, the client script still needs to be added to the live page and redeployed before visit collection can be considered verified.

### Search indexing

- GitHub source now points `robots.txt`, `sitemap.xml`, and IndexNow at `https://unitrate-watch.vercel.app` (PR #18).
- Public Vercel production does not yet expose those files, so indexing automation is not operational on the actual public site yet.
- Google Search Console is not yet confirmed/configured.
- Do not confuse "not indexed yet" with market rejection.

## Next moves, in order

1. **Recover/reconstruct the current Vercel production source before redeploying.** Preserve the anonymous form and `/api/scan` behavior.
2. **Add the Vercel Web Analytics script** to the static HTML source.
3. **Reconcile the newer GitHub acquisition/indexing assets into that Vercel-safe source.** Do not reintroduce the public GitHub-Issues intake.
4. **Deploy the reconciled build to Vercel and verify** homepage, analytics script, scan form, `/api/scan`, operator pages, broader acquisition pages, privacy/terms, `robots.txt`, `sitemap.xml`, and IndexNow key.
5. **Acquire the first 100 relevant visitors ethically.** No spam, fake accounts, fake testimonials, or manufactured community participation.
6. **Fulfill the first scans manually / AI-assisted** and track stay / negotiate / switch outcomes.
7. **Automate repeated research only after pattern evidence.**
8. **Apply for one approved referral/affiliate program only after switch intent is demonstrated.** Disclose every commercial relationship clearly.

## Future product path if demand is real

1. Upload/supply a rate-increase notice and extract the new rate/effective date automatically.
2. Identify current comparable units nearby.
3. Normalize promotions, access type, floor, climate control, fees, and other material differences.
4. Produce a sourced stay / negotiate / switch recommendation.
5. Build anonymized facility/operator rate histories.
6. Develop a **Storage Price Stability Score** based on observed behavior and published guarantees, only when sample quality is sufficient.

The potential moat is not the calculator and not "AI." It is a trustworthy longitudinal dataset about what storage actually costs **after move-in**.

## Operating guardrails

- Initial operating treasury remains **$0**.
- Do not buy a domain, API, dataset, ads, or software without explicit human approval.
- Do not socialize the owner-named GitHub Pages URL; use `https://unitrate-watch.vercel.app` publicly.
- Do not overwrite the current Vercel anonymous scan intake with the older GitHub-Issues intake.
- When human action is required, provide the user a direct link to the exact page/tool needed.
- Do not add AI features merely to make the site sound sophisticated.
- Do not charge for basic rate checking during validation.
- Do not claim a large rent increase is illegal merely because it is large.
- Do not imply two units are comparable when meaningful differences remain unresolved.
- Distinguish promotional pricing from durable pricing.
- Do not scrape sources whose terms prohibit it.
- Prefer operator-owned public pages, approved partner feeds, licensed data, and voluntary user submissions.
- Do not fabricate customers, testimonials, savings, rate histories, or rankings.
- Do not create a "fairness score" until the underlying dataset can support one.
- Do not expand product scope simply because traffic is slow. First determine whether the problem is deployment, indexing, acquisition, trust, intake friction, or weak demand.

## Monetization

Current product is free.

The first monetization hypothesis is **clearly disclosed referral / affiliate revenue when a renter independently decides switching is worthwhile**. UnitRate Watch should not create fake urgency or steer users toward switching solely because a partner pays a commission.

Possible later models, only if evidence supports them:

- approved storage referrals
- facility/operator price-stability data
- alerts for existing renters
- premium historical comparisons
- B2B insights based on aggregated, non-identifying market data

## Decision rules

**Continue** while qualified traffic is still below the experiment threshold and acquisition/indexing are unproven.

**Iterate** when visitors arrive but fail to request scans; diagnose trust, intake friction, value proposition, or trigger timing before changing markets.

**Pivot within the market** if post-hike diagnosis is weak but pre-rental price predictability shows stronger pull.

**Abandon or replace the business** if the defined failure threshold is reached without meaningful scan demand, repeat/share behavior, or another credible market signal.

Do not preserve UnitRate Watch because work has already been invested in it.

## Restart instruction

When resuming autonomous operation:

1. Read this file first.
2. Verify the live Vercel deployment before assuming GitHub source is production.
3. Check open issues and latest merged commits.
4. Check for new scan submissions without creating test/fake submissions.
5. Review traffic/indexing evidence.
6. Identify the single highest-leverage constraint.
7. Execute one zero-cost action against that constraint.
8. Update this handoff only when strategy, thresholds, product state, monetization, deployment state, or a major operating constraint materially changes.
