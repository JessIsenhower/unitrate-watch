# UnitRate Watch — Operating Handoff

_Last updated: August 21, 2026 (CT)_

## Status

**Stage:** Live beta / acquisition validation  
**Current constraint:** Discovery and qualified traffic. Product intake, analytics, database persistence, public deployment, SEO foundation, and answer-engine discovery assets are operational.  
**Spend to date:** $0  
**Revenue:** $0  
**Treasury:** $0

- Repository/source: https://github.com/JessIsenhower/unitrate-watch
- **Public production site:** https://unitrate-watch.vercel.app/
- Vercel project: `unitrate-watch` in team `UnitRate Watch`
- Neon project: `UnitRate Watch`, database `neondb`
- **Do not socialize the owner-named GitHub Pages URL.** GitHub is source/operations, not the public brand URL.
- Production beta intake is an anonymous on-site form posting to `/api/scan`; visitors do not need a GitHub account, name, or email.

## Verified production state

As verified August 21, 2026 CT:

- Vercel production is live at `https://unitrate-watch.vercel.app/`.
- Homepage includes rate-hike calculator, anonymous scan intake, operator guides, FAQ navigation, WebSite/Organization structured data, and Vercel Web Analytics.
- Scan requests persist to Neon Postgres through the restricted `unitrate_app` role using a sensitive Vercel `DATABASE_URL` targeted to Production and Preview.
- Each scan receives an unguessable private status token and URL; no email is required.
- Private status pages are `noindex,nofollow` and deliberately exclude analytics so secret token URLs are not transmitted.
- `/api/status` reaches Neon correctly. A non-existent UUID returns 404 `Scan request not found`, which is the current non-destructive health check.
- Current known real scan requests: **0**.
- High-intent operator pages and broader acquisition pages are live on Vercel.
- `robots.txt`, `sitemap.xml`, `llms.txt`, and the IndexNow verification key are live on the public Vercel host.
- Canonical URLs point to Vercel, not the owner-named GitHub Pages address.
- Production FAQ page is live at `storage-rent-increase-faq.html` with FAQ structured data.
- `llms.txt` is live and identifies the best canonical pages to cite plus interpretation/sourcing guardrails.

### AI / answer-engine crawler policy

`robots.txt` explicitly allows search or user-directed retrieval crawlers including:

- `OAI-SearchBot`
- `ChatGPT-User`
- `PerplexityBot`
- `Claude-SearchBot`
- `Claude-User`

It explicitly blocks general model-training crawlers `GPTBot` and `ClaudeBot`. The intent is answer-engine visibility without automatically opting the site into model-training crawls.

### Deployment caveat

The GitHub repository has been connected to the Vercel project, but verified later pushes to `main` did **not** create a Vercel deployment or GitHub Vercel status check. Treat GitHub-to-Vercel auto-deployment as unreliable until proven otherwise.

Current reliable production process is direct Vercel deployment followed by explicit verification of `unitrate-watch.vercel.app`. Do not assume a merged PR is live.

The current public answer-engine bundle was deployed directly after preview validation. Production FAQ, `llms.txt`, `robots.txt`, and Neon connectivity were all verified afterward.

A Vercel runtime health check showed one Node `url.parse()` deprecation warning associated with the Neon/serverless stack, but no observed functional failure. Do not prioritize this warning over acquisition unless it becomes an actual runtime error.

## Business

UnitRate Watch is a consumer self-storage price-transparency utility for renters who receive a rate increase or suspect their current storage rent is materially above current market pricing.

**Core job to be done:**

> Tell us what you pay and what kind of unit you have. We do the comparison work and tell you whether the evidence favors staying, negotiating, or switching.

The renter should **not** have to research competitor rates before using the product.

## Current acquisition / discovery assets

### Main utility

- `/` — calculator + anonymous scan

### Answer-engine / broad-intent hub

- `storage-rent-increase-faq.html`
  - Is a storage rent increase normal?
  - Why did it jump after only a few months?
  - Is a 50%, 100%, or larger increase illegal?
  - Why is the new-customer rate lower?
  - Can I negotiate?
  - Should I switch?
  - How can I reduce surprise increases next time?

### High-intent operator pages

- `extra-space-storage-rate-increase.html`
- `public-storage-rent-increase.html`
- `cubesmart-rent-increase.html`

### Broader acquisition pages

- `storage-unit-rent-increase.html`
- `storage-price-lock.html`
- `nyc-extra-space-settlement.html`

### Machine discovery

- `sitemap.xml` includes current public pages and `lastmod` dates.
- `llms.txt` lists canonical citation pages and interpretation/sourcing rules.
- `robots.txt` supports normal search plus answer-engine retrieval while separating training crawler access.
- IndexNow verification key is live.
- `.github/workflows/indexnow.yml` is configured, but push-triggered execution could not be independently confirmed through the available GitHub connector. Do not report IndexNow submission as verified.
- Google Search Console is not yet confirmed/configured.

## Acquisition policy

Use an **inbound-first / lead-them-to-water** strategy.

Do not:

- cold text consumers
- cold call consumers
- send mass unsolicited DMs
- scrape people who complain publicly and privately pitch them
- create fake accounts or manufactured community participation
- publish thin keyword pages simply to increase page count

Potentially acceptable acquisition:

- genuinely useful public replies where community rules allow relevant self-reference
- useful searchable answers to problem-triggered queries
- earned citations/links from consumer, finance, storage, moving, housing, or local-information publishers
- official/search indexing channels
- organic public posts that transparently identify the tool when the human operator chooses to publish them

Unsolicited commercial email is not automatically prohibited in the U.S., but CAN-SPAM compliance and reputation/operational overhead make cold consumer email a poor first channel for this experiment. Calls and texts carry materially more regulatory risk. Prefer inbound discovery unless evidence later justifies a carefully reviewed outbound channel.

## Experiment thresholds

**Success:** 8 qualified scan requests from the first 100 relevant visitors, and at least 2 scans lead to a concrete negotiate or switch action.

**Failure:** 200 relevant visitors with fewer than 3 qualified scan requests.

If the post-hike scan fails, test pre-rental price stability / predictability before abandoning the market.

## Scoreboard

| Metric | Value |
|---|---:|
| Relevant visitors | Vercel Analytics operational; baseline still needs reading |
| Qualified scan requests | 0 known |
| Customers | 0 |
| Revenue | $0 |
| Expenses | $0 |
| Treasury | $0 |

## Issues / work state

### Issue #6 — Acquisition experiment

https://github.com/JessIsenhower/unitrate-watch/issues/6

Keep open until discovery/indexing has had a fair chance and relevant traffic reaches a meaningful denominator.

### Completed

- Issue #7 analytics: complete
- Issue #21 Vercel database environment: complete
- PR #19 durable anonymous Vercel source
- PR #20 canonical Vercel rewrite
- PR #22 sitemap freshness
- PR #23 answer-engine discovery layer
- PR #24 AI search crawler policy

## Next moves, in order

1. Read the first real Vercel Analytics baseline and track relevant traffic from this point forward.
2. Check conventional search and answer-engine discovery for the Vercel pages; do not interpret early non-indexing as market rejection.
3. Improve only pages/internal links/metadata supported by observed query intent. Avoid content-volume theater.
4. Acquire the first 100 relevant visitors ethically using inbound/public discovery channels.
5. Query Neon for new scan submissions without creating fake requests.
6. Fulfill first scans manually / AI-assisted and write the result to the private status page.
7. Track outcome: stay, negotiate, or switch, and what evidence changed the decision.
8. Automate repeated research only after recurring patterns are visible.
9. Apply for one approved referral/affiliate program only after real switch intent is demonstrated.

## Operating guardrails

- Initial operating treasury remains $0.
- Do not buy a domain, API, dataset, ads, or software without explicit human approval.
- Use `https://unitrate-watch.vercel.app` publicly. Do not socialize the owner-named GitHub Pages URL.
- Keep database credentials only in secure environment-variable storage; never commit them or place them in public HTML.
- Do not create fake/test customer submissions in production. Prefer read-only health checks.
- When human action is required, provide a direct link to the exact page/tool needed.
- Do not add AI features merely to make the site sound sophisticated.
- Do not charge for basic rate checking during validation.
- Do not claim a large rent increase is illegal merely because it is large.
- Do not imply two units are comparable when meaningful differences remain unresolved.
- Distinguish promotional pricing from durable pricing.
- Do not scrape sources whose terms prohibit it.
- Prefer operator-owned public pages, official government sources, approved partner feeds, licensed data, and voluntary user submissions.
- Do not fabricate customers, testimonials, savings, rate histories, or rankings.
- Do not create a price-stability/fairness score until the dataset can support it.

## Monetization

Current product is free. First monetization hypothesis is clearly disclosed referral / affiliate revenue only when a renter independently decides switching is worthwhile.

## Restart instruction

When resuming autonomous operation:

1. Read this file first.
2. Verify the live Vercel deployment before assuming GitHub `main` is production.
3. Check open issues and latest merged commits.
4. Query Neon for new scan submissions without creating test/fake submissions.
5. Review Vercel Analytics and search/answer-engine discovery evidence.
6. Identify the single highest-leverage constraint.
7. Execute one zero-cost action against that constraint.
8. Update this handoff only when strategy, thresholds, product state, monetization, deployment state, or a major operating constraint materially changes.
