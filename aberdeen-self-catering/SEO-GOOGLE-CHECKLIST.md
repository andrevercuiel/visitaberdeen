# Aberdeen Self Catering — Google SEO release checklist

Last implementation: 14 October 2026. Repository `andrevercuiel/visitaberdeen`, app root `aberdeen-self-catering`.

## Implemented in code
- Unique Google-oriented page titles, factual meta descriptions and self-referencing canonical URLs on the final www domain.
- Structured data: `LodgingBusiness`, `WebSite`, `Accommodation` for individual rooms, `CafeOrCoffeeShop`, `BlogPosting`, `BreadcrumbList`; a date-limited `Event` for the Oct 24 Full Moon Walk.
- Official business name, verified website phone, street address and contact email. No fabricated review stars, room prices, business hours or awards in JSON-LD.
- Official-logo-based square Google favicon and Apple touch icon.
- Unique pages for all seven accommodation types and five legacy blog articles.
- Image-inclusive XML sitemap and indexable robots for production; previews remain noindex and robots-blocked.
- Mobile-readable navigational breadcrumbs, more descriptive homepage headline and internal cross-links.
- Original image assets hosted as local, compressed WebP. Long-lived cache headers for static media.
- 308 redirects for obsolete Contact, Our Story and Things to Do URL paths.
- The historical October Moon Walk Event schema stops appearing after its scheduled end. Activities page automatically replaces the old event announcement with a request to contact the organiser (ISR revalidation hourly).

## Before announcing the domain migration
1. The public `www.aberdeenselfcatering.co.za` DNS **must** point to Vercel. Previous checks showed DNS still pointing to `129.232.251.198`. Do **not** change mail records / nameservers / MX during the website switch.
2. Confirm that `http://`, apex and old WordPress URLs forward to HTTPS canonical www pages with HTTP 301/308. Check links from Google search and external listings.
3. Use Google Search Console for the canonical domain; verify ownership, submit `https://www.aberdeenselfcatering.co.za/sitemap.xml`, check indexing, CWV, rich results and search queries.
4. Google Business Profile: verify that company name, phone, address, opening contact hours, photos and the *new canonical website address* are accurate. Do not create a duplicate profile.
5. Ask Aberdeen Tourism Association and appropriate local tourism sources to link to useful accommodation and activity pages; avoid paid or manipulative backlink schemes.
6. Remove or noindex duplicate old Odoo and WordPress website pages once www points to the replacement. DNS/hosting shutoff is separate from SEO.
7. Have the accommodation owner confirm room occupancies, bathroom descriptions, café operating hours, any special discounts and the monthly Moon Walk schedule.
8. Test structured-data output using https://search.google.com/test/rich-results and https://validator.schema.org/ and inspect pages with Search Console after DNS migration.
9. Review pages on mobile including image lazy loading, modal gallery behaviour, WhatsApp and online booking links. Lighthouse/PageSpeed can identify remaining Web Vitals changes.

## SEO targeting (natural, not repeated artificially)
| Page | Intent |
| --- | --- |
| / | Aberdeen Self Catering + accommodation Aberdeen Eastern Cape |
| /accommodation | self-catering cottages / glamping / biker accommodation in Aberdeen |
| /klein-karoo-cottage | family self-catering cottage Aberdeen |
| /tanqua-cottage-new | cosy cottage Aberdeen |
| /namib-cottage | Namib Cottage Aberdeen |
| /camdeboo-cottage | Camdeboo Cottage three-bedroom Aberdeen |
| /glamping-accommodation | luxury glamping Karoo Aberdeen |
| /bikers-paradise | motorcycle accommodation Aberdeen |
| /gs-retreat-bikers-glamping | biker-friendly group accommodation Aberdeen |
| /activities | Aberdeen Full Moon Walk, cycling, hiking |
| /event-venue | intimate events venue Aberdeen Eastern Cape |
| /checkmate-coffee-cafe | Checkmate Coffee Café Aberdeen |
| /blog | Karoo travel guides |
| /contact-us | Aberdeen Self Catering contact and bookings |

Google's guidance: https://developers.google.com/search/docs/fundamentals/get-started-developers, https://developers.google.com/search/docs/appearance/structured-data/local-business, https://developers.google.com/search/docs/appearance/title-link

No ranking guarantee: results depend on competition, citations, backlinks, Google Business Profile accuracy, site reputation, content, and traffic.
