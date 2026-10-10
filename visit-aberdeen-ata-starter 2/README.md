# Visit Aberdeen — ATA starter

Separate Next.js site for the Aberdeen Tourism Association. **Does not modify TownHub or the Odoo site.**

## Run
- `npm install`
- `npm run dev`
- Open http://localhost:3000

## Included
- Home and navigation
- `/stay`: 13 initial directory entries, external site/listing links and supplied available photo URLs
- `/discovery-route`: 8 functioning English MP3 audio tracks, written transcripts and local browser progress tracking

## Production checklist
- Historical transcripts, names and fact claims require editorial checking.
- Obtain photography permission / replace third-party image URLs with owner-provided assets.
- Obtain or generate Afrikaans narrations, then verify pronunciation.
- GPS check-ins, formal rewards and verified member status are not yet implemented.
- Deploy to dedicated ATA GitHub/Vercel projects.
- Prefer dedicated ATA Supabase project before creating private/member data. Integrate TownHub through deliberate read-only data interface rather than modifying existing TownHub schema.
- Keep Odoo published until migration approved.
