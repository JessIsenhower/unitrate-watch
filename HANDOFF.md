# UnitRate Watch — Operating Handoff

_Last updated: August 21, 2026 (CT)_

## Status

**Stage:** Live beta / acquisition validation  
**Current constraint:** Discovery and qualified traffic. Product intake, analytics, Neon persistence, SEO/AEO assets, and public deployment are operational.  
**Spend / revenue / treasury:** $0 / $0 / $0

- Source: https://github.com/JessIsenhower/unitrate-watch
- **Public production:** https://unitrate-watch.vercel.app/
- Vercel project: `unitrate-watch`
- Neon project: `UnitRate Watch`, database `neondb`
- Do **not** socialize the owner-named GitHub Pages URL.

## Verified production state

Verified August 21, 2026 CT after the latest deployment:

- Styled homepage, calculator, anonymous scan form, FAQ navigation, structured data, and Vercel Analytics are live.
- `/api/scan` writes to Neon through the restricted `unitrate_app` role using Vercel `DATABASE_URL`.
- Each real scan receives an unguessable private status URL. No email is required.
- Private status pages are `noindex,nofollow` and exclude analytics.
- Read-only health check `/api/status?token=00000000-0000-0000-0000-000000000000` returns 404 `Scan request not found`, confirming Neon connectivity without creating fake customer data.
- Current known real scan requests: **0**.
- `robots.txt`, `sitemap.xml`, `llms.txt`, and the IndexNow key are live on Vercel.
- Canonical metadata is rewritten to `unitrate-watch.vercel.app` at build time.
- AI search/user-retrieval crawlers are explicitly allowed; `GPTBot` and `ClaudeBot` training crawlers are blocked.

### Deployment caveat

GitHub is connected to Vercel, but verified `main` pushes still do **not** create Vercel deployments or GitHub Vercel status checks. Treat auto-deploy as unreliable. Current reliable process is direct Vercel deployment with the **exact full GitHub source tree**, followed by explicit production verification.

During publication of PR #25, a stripped manual bundle briefly replaced the styled homepage. The regression was detected immediately and production was rebuilt from the complete current GitHub source. Full styling, guides, analytics, crawler files, and Neon APIs are verified restored. **Never use stripped/minimal deployment bundles.**

## Business

UnitRate Watch helps self-storage renters decide whether evidence favors **stay / negotiate / switch** after a rent increase or suspected above-market rate. The renter supplies facility/ZIP, unit size/type, current rent, and optional previous rent; UnitRate Watch owns the comparison work.

AI is operating leverage, not the customer promise.

## Live acquisition / discovery assets

- `/` — calculator + anonymous scan
- `storage-rent-increase-faq.html` — answer-first FAQ with FAQ structured data
- `storage-rent-increase-examples-2026.html` — **sourced 2026 public rate-increase examples**, added in PR #25
- `storage-unit-rent-increase.html` — broad rent-increase guide
- `storage-price-lock.html` — price stability / predictability
- `nyc-extra-space-settlement.html` — timely official-settlement explainer
- operator guides for Extra Space, Public Storage, CubeSmart
- `llms.txt`, canonical URLs, sitemap, analytics, AI crawler policy

### Sourced examples page

PR #25 uses recent public examples found on storage operators’ own facility/review pages, including reported changes such as $65→$130 after about two months and $109→$189 after about six months. It prominently states that these are **examples, not a representative sample or universal average**. No reviewer names or personal details are reproduced, and the page does not infer illegality. It is intended as a useful evidence/citation asset for renters, search engines, answer engines, journalists, and consumer-information publishers.

## Acquisition policy

Use an **inbound-first / lead-them-to-water** strategy.

Do not cold text, cold call, mass DM, scrape public complainers for private outreach, create fake accounts, manufacture community participation, or post promotional links where rules prohibit them. `r/selfstorage` explicitly bans business/service self-promotion unless moderators approve educational content first, so do not force Reddit.

Preferred $0 channels:
1. Search and answer-engine discovery.
2. Helpful public participation only where rules permit it and the answer stands on its own.
3. Timely/data-led consumer information tied to real questions or official developments.
4. Earned links/citations from consumer, local, storage-industry, moving, housing, or personal-finance sources.

Cold commercial email is not automatically prohibited in the U.S., but CAN-SPAM compliance and reputation/operational overhead make it a poor first channel. Calls and texts carry materially more regulatory risk.

## Experiment thresholds

**Success:** 8 qualified scans from first 100 relevant visitors, with at least 2 leading to concrete negotiate/switch action.  
**Failure:** 200 relevant visitors with fewer than 3 qualified scans.

If post-hike diagnosis fails, test pre-rental price stability/predictability before abandoning the market. Do not interpret zero scans before measurable relevant traffic as rejection.

## Scoreboard

| Metric | Value |
|---|---:|
| Relevant visitors | Vercel Analytics operational; baseline still needs reading |
| Qualified scan requests | 0 known |
| Customers | 0 |
| Revenue | $0 |
| Expenses | $0 |
| Treasury | $0 |

## Work state

- Issue #6: **Acquisition experiment: first 100 relevant visitors** — open
- Issue #7 analytics — complete
- Issue #21 Vercel database environment — complete
- PR #19 durable anonymous Vercel source — merged
- PR #20 Vercel canonical rewrite — merged
- PR #22 sitemap freshness — merged
- PR #23 answer-engine discovery layer — merged and live
- PR #24 AI crawler policy — merged and live
- PR #25 sourced 2026 rate-increase examples — merged and live

### Indexing

- Production sitemap, robots, llms, canonical URLs, and IndexNow key are live.
- `.github/workflows/indexnow.yml` exists, but push-triggered execution cannot be independently confirmed with the current GitHub connector. Do not report IndexNow submission as verified.
- Google Search Console is not yet confirmed/configured.
- No visible UnitRate Watch search footprint was observed immediately before the latest AEO/data-led additions. Allow a fair crawl window before drawing conclusions.

## Next moves

1. Read the first useful Vercel Analytics baseline and track relevant visitors.
2. Establish Google Search Console indexing/query visibility if the human setup is worth the friction.
3. Monitor conventional search and answer-engine discovery for the FAQ and sourced-examples page.
4. Pursue earned/public distribution where channel rules permit it; do not spam.
5. Query Neon for new scan submissions without creating fake requests.
6. Fulfill first scans manually/AI-assisted and write results to private status pages.
7. Track stay/negotiate/switch outcomes and what evidence changed the decision.
8. Automate repeated research only after recurring patterns appear.
9. Apply for one approved affiliate/referral program only after real switch intent is demonstrated.

## Operating guardrails

- Treasury stays $0 unless human explicitly approves spending.
- Do not buy a domain, API, dataset, ads, or software without approval.
- Use `https://unitrate-watch.vercel.app` publicly; never socialize owner-named GitHub Pages.
- Never commit database credentials or expose them in HTML.
- No fake/test customer submissions in production; prefer read-only health checks.
- When human action is required, provide a direct link to the exact page/tool.
- No fake testimonials, customers, savings, histories, or rankings.
- No legal claims based solely on increase size.
- Distinguish promotions from durable pricing and normalize material unit/fee differences.
- Do not scrape sources whose terms prohibit it; prefer operator-owned public pages, official government sources, approved feeds, licensed data, and voluntary submissions.
- Do not create a price-stability/fairness score until the data supports it.

## Monetization

Current product is free. First monetization hypothesis is clearly disclosed referral/affiliate revenue only when a renter independently decides switching is worthwhile.

## Restart instruction

1. Read this file first.
2. Verify live Vercel production before assuming GitHub `main` is deployed.
3. Check Issue #6 and latest merged commits.
4. Query Neon for new scans without creating fake submissions.
5. Review Vercel Analytics plus search/AEO evidence.
6. Identify the single highest-leverage constraint.
7. Execute one zero-cost action.
8. Update this handoff only when strategy, thresholds, product/deployment state, monetization, or a major constraint materially changes.
