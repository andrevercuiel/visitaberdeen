# Aberdeen Self Catering – Full Multi-page Website (Next.js 15)

This directory is the *separate* Aberdeen Self Catering application in the existing `andrevercuiel/visitaberdeen` repository. It must be deployed on the existing Vercel project named `aberdeenselfcatering` with **Root Directory** set to `aberdeen-self-catering`. The repository root contains a separate Visit Aberdeen / ATA application; do not deploy that root for this project.

## Project contents
- Dedicated routes for all seven accommodation types using original WordPress legacy slugs.
- Complete accommodation galleries drawn from the original site (82 gallery images).
- Activities and October 2026 Full Moon Walk, historic 101km Challenge archive, event venue and café.
- Complete article pages at the five original blog URLs.
- Responsive navigation and footer with direct NightsBridge booking.
- Canonical, per-page SEO metadata, robots policy, sitemap and 301 legacy redirects.
- No separate Our Story menu; introduction and community story integrated on the homepage.

## Important migration blockers before domain cutover
1. The content currently references source images hosted at `www.aberdeenselfcatering.co.za/wp-content/uploads` and one Odoo Moonwalk poster. **This is deliberate for the development preview only.** Transfer the images into this project's `public/images` directory (or an independent configured media storage/CMS) and replace their URLs before cancelling the old hosting. Verify files and alt text.
2. The café hours, current menu prices, 15% biker discount, accommodation capacities, pool access, shared bathroom arrangements and current event dates need confirmation by the operator.
3. The old WordPress blog content has been recovered and adapted into the five legacy URLs; review before going live. Verify original private farm routes and guide availability.
4. Site previews default to **noindex,nofollow** and robots disallow. After the domain DNS, HTTPS, canonical and 301 redirects are correctly working on the intended domain, set the `SITE_LAUNCHED=true` environment variable in production. Set `NEXT_PUBLIC_SITE_URL=https://www.aberdeenselfcatering.co.za` to the correct canonical domain.
5. Check that the Vercel project root directory is `aberdeen-self-catering` (not the repository root).
6. The shared content currently lives in `lib/content.ts`; replace or connect a staff-friendly CMS before treating self-service content editing as complete.
7. The user asked to retain Activities on the homepage and **not** add a separate top-level Events navigation item.

## Install and run
```bash
npm install
npm run build
npm run dev
```

## Test checklist
- Routes: /, /accommodation, seven property slugs, /activities, /event-venue, /checkmate-coffee-cafe, /blog, five article slugs, /contact-us and /101km-camdeboo-challenge.
- Old /contact and /our-story paths redirect; /things-to-do redirects to /activities.
- Test main menu and mobile toggle; booking links open NightsBridge; WhatsApp links and email actions.
- Inspect all images for missing assets or wrong property attribution.
- Check headings, structured content, metadata, sitemap, robots.
- Keep the current live WordPress domain unchanged until the new site is approved.

