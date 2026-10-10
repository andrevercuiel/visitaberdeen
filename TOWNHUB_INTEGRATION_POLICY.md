# ATA ↔ TownHub: visitor-safe integration policy

The websites are independent. TownHub's community reporting, complaint records, issue statistics, accountability dashboards, resident submissions, security incidents, and municipal performance data MUST NOT be imported or linked from the Visit Aberdeen tourism experience.

## Public data allowlist
An eventual TownHub → ATA read-only feed may include **only explicitly approved and published** records in five categories:
- accommodation
- dining
- attractions
- events
- tourism_businesses

Approve both the category and each record before publishing. Do not rely on hiding fields in the frontend. The upstream feed must use a server-side allowlist and separate public credentials/permissions, so ATA cannot fetch restricted TownHub records. Do not expose internal record identifiers, complainant details, unmoderated photos, private contact data or municipal reporting URLs.

## Current status
No live TownHub data integration is configured. ATA currently uses local curated accommodation and Discovery Route data. Direct navigation from ATA to TownHub's general home page has been removed to avoid introducing community-reporting content into the visitor journey.

## Visitor safety exception
Publish verified, actionable travel advisories through a separately moderated visitor-safety workflow when genuinely necessary (for instance severe weather, a road closure, or a closed attraction). Do not copy complaints or internal incident statistics.

## Next phase
Only after a dedicated public tourism feed is available, implement a server-side adapter that validates its origin, enforces an exact field and category allowlist, checks approved and published statuses, and fails closed. Never query TownHub's unrestricted reporting database from ATA.
