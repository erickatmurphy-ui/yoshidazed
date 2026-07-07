# Public Content Audit

Audit date: July 7, 2026

Scope: `volumes/volume_4_companion_site/`

## Separation Confirmed

- Public guest-facing website lives in `volumes/volume_4_companion_site/`.
- Private host-facing materials remain in `volumes/volume_1_operations_manual/` and `volumes/volume_3_production_hq/`.
- Volume 4 was rebuilt without copying private manual or game-engine content.

## Sections Reviewed

| Section/File | Result |
|---|---|
| `index.html` / Welcome | Guest-safe welcome only. |
| `index.html` / Schedule | General weekend flow only; no address, check-in, host setup, or private timing logic. |
| `index.html` / Packing List | Guest-safe packing items only. |
| `index.html` / Public Rules | Guest-safe behavior and safety rules only. |
| `index.html` / Teams | Team names only; no personal notes. |
| `index.html` / Challenges | Public challenge descriptions only. |
| `index.html` / Road Trip | Guest-safe travel prompts only. |
| `index.html` / Backyard Games | Public game names only. |
| `index.html` / Scavenger Hunt | Guest-safe photo prompts only. |
| `index.html` / Confessional | Guest-safe prompts only. |
| `index.html` / Awards | Public award names only. |
| `index.html` / Photo Upload | General photo-sharing instructions only. |
| `index.html` / House Reminders | General shared-space reminders only; no Airbnb address or check-in details. |
| `index.html` / Emergency Info | Basic safety reminder only; no private logistics. |
| `config.json` | Public routes only; no cast list or host notes. |
| `routes.md` | Public routes only. |
| `qr_manifest.csv` | Public routes only. |
| `qr/` | QR images only for public routes. |

## Removed From Public Site

- Cast bios and personal notes
- Ericka host/operator references
- Airbnb street address
- Host setup instructions
- Leaderboard host tool
- Production HQ management content
- Millionaire setup and private mechanics
- Private mission references
- Budget, purchase, and operations language
- Hosting instruction files from the public deploy folder

## Search Confirmation

The public website folder was searched for:

`Ericka`, `purchase`, `budget`, `Google Voice`, `host`, `private mission`, `millionaire mission`, `setup`, `operations`, `Airbnb`, `address`, `internal`, `secret`, `production notes`, `8226`, `Osborn`

No private host notes remain in the rebuilt public guest-facing website content.

## Important Repository History Note

Private or host-facing content was previously published before this cleanup. Even after replacing the current files, it may still exist in GitHub repository history or cached deployments. Recommended options are listed in the final Codex response for this revision.
