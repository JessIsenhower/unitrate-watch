# UnitRate Watch — Operating Handoff

_Last updated: August 20, 2026 (CT)_

## Status

**Stage:** Live beta / acquisition validation  
**Current constraint:** Qualified traffic and measurement, not product development.  
**Spend to date:** $0  
**Revenue:** $0  
**Treasury:** $0

- Repository: https://github.com/JessIsenhower/unitrate-watch
- Live site: https://jessisenhower.github.io/unitrate-watch/
- Beta intake: public GitHub Issues via `.github/ISSUE_TEMPLATE/rate-scan.yml`

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
- a $0 static-site MVP
- a plausible referral/affiliate monetization path that can remain aligned with the renter
- relatively open product whitespace around **existing-customer rate drift**, rather than generic storage discovery
- a future data moat from longitudinal, anonymized rate histories and operator price-stability behavior

AI is an operating/product advantage, **not the customer promise**.

## Current product

### Homepage

`index.html`

Includes:

- rate-hike calculator
- annual cost impact
- market-check signal
- free concierge scan CTA
- operator policy summaries

### High-intent operator pages

- `extra-space-storage-rate-increase.html`
- `public-storage-rent-increase.html`
- `cubesmart-rent-increase.html`

These target renters already searching after a specific operator raises their rent. Claims are tied to operator-published policy sources and avoid legal conclusions.

### Broader acquisition pages

- `storage-unit-rent-increase.html`
- `storage-price-lock.html`
- `nyc-extra-space-settlement.html`

These widen discovery around the underlying problem, price predictability, and the July 2026 NYC / Extra Space settlement.

### Trust / operating assets

- `privacy.html`
- `terms.html`
- `AFFILIATE_PLAN.md`
- `robots.txt`
- `sitemap.xml`
- `.nojekyll`
- IndexNow verification key file at site root

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

As of this handoff:

| Metric | Value |
|---|---:|
| Relevant visitors | Unknown — analytics not instrumented yet |
| Qualified scan requests | 0 |
| Customers | 0 |
| Revenue | $0 |
| Expenses | $0 |
| Treasury | $0 |

No conversion conclusions are valid until the visitor denominator exists.

## Open work

### Issue #6 — Acquisition experiment

https://github.com/JessIsenhower/unitrate-watch/issues/6

Broader rate-hike, price-stability, and NYC settlement pages are now live. Keep this experiment open until discovery/indexing has had a fair chance and there is measurable traffic.

### Issue #7 — Analytics

https://github.com/JessIsenhower/unitrate-watch/issues/7

Need privacy-first traffic measurement. Cloudflare Web Analytics is the preferred current option because it is free, cookie-free, and can be added to a GitHub Pages site without moving DNS.

### Search indexing

- Sitemap is live and referenced in `robots.txt`.
- IndexNow verification key is live at site root.
- Automated IndexNow submissions are **not** currently configured.
- Google Search Console is not yet confirmed/configured.

Do not confuse "not indexed yet" with market rejection. New pages need time and actual discovery signals.

## Next moves, in order

1. **Instrument traffic measurement.** We need a real visitor denominator before evaluating conversion.
2. **Improve discovery, not product scope.** Ensure sitemap/indexing works and strengthen useful internal links between related pages.
3. **Acquire the first 100 relevant visitors ethically.** No spam, fake accounts, fake testimonials, or manufactured community participation.
4. **Fulfill the first scans manually / AI-assisted.** Learn which research steps are actually hard before automating them.
5. **Track scan outcomes.** Did the renter stay, negotiate, or switch? What evidence changed the decision?
6. **Automate repeated work only after pattern evidence.** Likely candidates: notice parsing, comparable-unit matching, promotion/fee normalization, and policy monitoring.
7. **Apply for one approved referral/affiliate program only after switch intent is demonstrated.** Disclose every commercial relationship clearly.

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
- Do not add AI features merely to make the site sound sophisticated.
- Do not charge for basic rate checking during validation.
- Do not claim a large rent increase is illegal merely because it is large.
- Do not imply two units are comparable when meaningful differences remain unresolved.
- Distinguish promotional pricing from durable pricing.
- Do not scrape sources whose terms prohibit it.
- Prefer operator-owned public pages, approved partner feeds, licensed data, and voluntary user submissions.
- Do not fabricate customers, testimonials, savings, rate histories, or rankings.
- Do not create a "fairness score" until the underlying dataset can support one.
- Do not expand product scope simply because traffic is slow. First determine whether the problem is indexing, acquisition, trust, intake friction, or weak demand.

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
2. Check open issues and latest merged commits.
3. Check for new rate-scan issues before building anything.
4. Review available traffic/indexing evidence.
5. Identify the single highest-leverage constraint.
6. Execute one zero-cost action against that constraint.
7. Update this handoff only when strategy, thresholds, product state, monetization, or a major operating constraint materially changes.
