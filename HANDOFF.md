# UnitRate Watch — Operating Handoff

_Last updated: August 21, 2026 (CT)_

## Status

**Stage:** Live beta / acquisition validation  
**Current constraint:** Qualified traffic and discovery. Product intake, analytics, database persistence, and public deployment are operational.  
**Spend to date:** $0  
**Revenue:** $0  
**Treasury:** $0

- Repository/source: https://github.com/JessIsenhower/unitrate-watch
- **Public production site:** https://unitrate-watch.vercel.app/
- Vercel project: `unitrate-watch` in team `UnitRate Watch`
- Neon project: `UnitRate Watch`, database `neondb`
- **Do not socialize the owner-named GitHub Pages URL.** GitHub is source/operations, not the public brand URL.
- Production beta intake is an anonymous on-site form posting to `/api/scan`; visitors do not need a GitHub account, name, or email.

## Production state

As verified August 21, 2026 CT:

- Vercel production is live and healthy at `https://unitrate-watch.vercel.app/`.
- The homepage includes the rate-hike calculator plus anonymous on-site scan intake.
- Scan requests persist to Neon Postgres through the `unitrate_app` role using a sensitive Vercel `DATABASE_URL` environment variable targeted to Production and Preview.
- Each scan receives an unguessable private status token and status URL; no email is required.
- `/api/status` reads status/result data from Neon. A non-existent UUID returns 404, proving live database connectivity without creating test customer data.
- Private status pages are `noindex,nofollow` and deliberately exclude Vercel Analytics so secret token URLs are not transmitted into analytics.
- Vercel Web Analytics is enabled and the first-party `/_vercel/insights/script.js` is live on public pages.
- High-intent operator pages and broader acquisition pages are live on Vercel.
- `robots.txt`, `sitemap.xml`, and the IndexNow verification key are live on the Vercel host.
- Canonical metadata and the sitemap point to `unitrate-watch.vercel.app`, not the owner-named GitHub Pages address.
- PR #19 reconciled the durable GitHub/Vercel production source; PR #20 rewrites stale GitHub canonical references at build time.

Vercel is still deployed manually through the connected Vercel tool rather than automatically from GitHub. Do not assume a merge is live until the Vercel production alias is verified.

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

## Current product

### Live homepage

Includes:

- rate-hike calculator
- annual cost impact
- market-check signal
- anonymous free scan form
- private status link after submission
- operator policy/guide links

### High-intent operator pages

- `extra-space-storage-rate-increase.html`
- `public-storage-rent-increase.html`
- `cubesmart-rent-increase.html`

### Broader acquisition pages

- `storage-unit-rent-increase.html`
- `storage-price-lock.html`
- `nyc-extra-space-settlement.html`

## Experiment thresholds

### Success

- **8 qualified scan requests from the first 100 relevant visitors**, and
- at least **2 scans lead to a concrete negotiate or switch action**

### Failure

- **200 relevant visitors with fewer than 3 qualified scan requests**

If the post-hike scan fails, test **pre-rental price stability / predictability** as the primary job before abandoning the market.

## Scoreboard

| Metric | Value |
|---|---:|
| Relevant visitors | Measurement operational; baseline not yet read |
| Qualified scan requests | 0 known |
| Customers | 0 |
| Revenue | $0 |
| Expenses | $0 |
| Treasury | $0 |

## Open work

### Issue #6 — Acquisition experiment

https://github.com/JessIsenhower/unitrate-watch/issues/6

Acquisition pages are live on Vercel. Keep this experiment open until discovery/indexing has had a fair chance and there is measurable relevant traffic.

### Analytics

Issue #7 is complete. Vercel Web Analytics is live on public pages.

### Runtime database

Issue #21 is complete. `DATABASE_URL` is configured as a sensitive Vercel environment variable for Production and Preview, and production database connectivity is verified.

### Search indexing

- Vercel production exposes the correct sitemap and `robots.txt`.
- IndexNow verification key is live on the production host.
- `.github/workflows/indexnow.yml` is configured to submit sitemap URLs on relevant `main` pushes, but manual Vercel deployment means GitHub workflow timing and production publication are not coupled. Verify submission behavior before treating IndexNow as fully operational.
- Google Search Console is not yet confirmed/configured.

## Next moves, in order

1. **Read the first real Vercel Analytics baseline** and track relevant visitors from this point forward.
2. **Verify search discovery/indexing** on the Vercel URLs; improve only useful internal links or metadata if evidence supports it.
3. **Acquire the first 100 relevant visitors ethically.** No spam, fake accounts, fake testimonials, or manufactured community participation.
4. **Check Neon for new scan submissions** without creating test/fake requests.
5. **Fulfill the first scans manually / AI-assisted** and write results back to the private status page.
6. **Track scan outcomes.** Did the renter stay, negotiate, or switch? What evidence changed the decision?
7. **Automate repeated research only after pattern evidence.**
8. **Apply for one approved referral/affiliate program only after switch intent is demonstrated.** Disclose every commercial relationship clearly.

## Operating guardrails

- Initial operating treasury remains **$0**.
- Do not buy a domain, API, dataset, ads, or software without explicit human approval.
- Do not socialize the owner-named GitHub Pages URL; use `https://unitrate-watch.vercel.app` publicly.
- Keep database credentials only in secure environment-variable storage; never commit them to GitHub or place them in public HTML.
- Do not create fake/test scan requests in production to validate the system. Prefer read-only checks.
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

## Monetization

Current product is free.

The first monetization hypothesis is **clearly disclosed referral / affiliate revenue when a renter independently decides switching is worthwhile**. UnitRate Watch should not create fake urgency or steer users toward switching solely because a partner pays a commission.

## Restart instruction

When resuming autonomous operation:

1. Read this file first.
2. Verify the live Vercel deployment before assuming GitHub source is production.
3. Check open issues and latest merged commits.
4. Query Neon for new scan submissions without creating test/fake submissions.
5. Review traffic/indexing evidence.
6. Identify the single highest-leverage constraint.
7. Execute one zero-cost action against that constraint.
8. Update this handoff only when strategy, thresholds, product state, monetization, deployment state, or a major operating constraint materially changes.
