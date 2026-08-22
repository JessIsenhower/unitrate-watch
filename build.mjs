import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const out = path.join(root, 'dist');
await fs.rm(out, { recursive: true, force: true });
await fs.mkdir(out, { recursive: true });

const entries = await fs.readdir(root, { withFileTypes: true });
const analytics = `<script>window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments);};</script><script defer src="/_vercel/insights/script.js"></script>`;
const homepageSchema = `<script type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"WebSite","name":"UnitRate Watch","url":"https://unitrate-watch.vercel.app/","description":"Independent self-storage price-transparency utility for renters evaluating storage rent increases."},{"@type":"Organization","name":"UnitRate Watch","url":"https://unitrate-watch.vercel.app/","description":"Independent consumer self-storage price-transparency project."}]}</script>`;
const googleVerification = `<meta name="google-site-verification" content="F22GblgskEVTowZtpIzbvoCyvRp4Gf5NTyn3bYo3pHs" />`;
const oldScanUrl = 'https://github.com/JessIsenhower/unitrate-watch/issues/new?template=rate-scan.yml';
const oldPublicBase = 'https://jessisenhower.github.io/unitrate-watch/';
const publicBase = 'https://unitrate-watch.vercel.app/';

for (const entry of entries) {
  if (!entry.isFile()) continue;
  if (!entry.name.endsWith('.html') && !['robots.txt','sitemap.xml','llms.txt','4327a3aa889847194db4263502660a44.txt'].includes(entry.name)) continue;
  const src = path.join(root, entry.name);
  const dest = path.join(out, entry.name);
  let text = await fs.readFile(src, 'utf8');
  if (entry.name.endsWith('.html')) {
    text = text.replaceAll(oldPublicBase, publicBase);
    text = text.replaceAll(oldScanUrl, '/#scan');
    text = text.replaceAll('Beta intake is public through GitHub Issues. Do not include your name, account number, unit number, gate code, payment details, or other private information.', 'Scan requests stay on UnitRate Watch. Do not include your name, account number, unit number, gate code, payment details, or other private information.');
    text = text.replaceAll('Temporary beta intake uses GitHub Issues, so a free GitHub account is required. Requests are public. This is intentionally a zero-cost validation path, not the permanent customer experience.', 'Scan requests stay on UnitRate Watch. No GitHub account or email address is required.');

    if (entry.name !== 'status.html' && !text.includes('rel="canonical"') && !text.includes("rel='canonical'")) {
      const canonicalUrl = entry.name === 'index.html' ? publicBase : `${publicBase}${entry.name}`;
      text = text.replace('</head>', `<link rel="canonical" href="${canonicalUrl}"></head>`);
    }

    if (entry.name === 'index.html') {
      text = text.replace('<a href="#policies">Policies</a>', '<a href="storage-rent-increase-faq.html">FAQ</a><a href="#policies">Policies</a>');
      if (!text.includes('"@type":"WebSite"')) text = text.replace('</head>', `${homepageSchema}</head>`);
      if (!text.includes('google-site-verification')) text = text.replace('</head>', `${googleVerification}</head>`);
    }
    if (entry.name !== 'status.html' && !text.includes('/_vercel/insights/script.js')) text = text.replace('</body>', `${analytics}</body>`);
  }
  await fs.writeFile(dest, text);
}

console.log('Built UnitRate Watch public and answer-engine assets in dist/');
