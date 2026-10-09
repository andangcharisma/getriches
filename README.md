# Riches website

Marketing site and dev blog for the Riches app. Built with [Astro](https://astro.build), bilingual (EN default, `/id` for Indonesian), deployed to GitHub Pages at https://andangcharisma.github.io/getriches/.

```bash
npm install
npm run dev      # http://localhost:4321/getriches/
npm run build
```

## Add a blog post

Create the same filename in both `src/content/blog/en/` and `src/content/blog/id/`:

```md
---
title: "..."
date: 2026-10-09
cover: "../../../assets/blog/<slug>.jpg"   # optional, 1440x600 recommended
tag: "Release"
excerpt: "..."
---
```

## Publish a new app version

The download buttons on the home page point to assets of a GitHub Release in this repo.

1. Name the files `riches-v<version>.apk` and `riches-v<version>.ipa`.
2. Create the release and upload both files:
   ```bash
   gh release create v<version> riches-v<version>.apk riches-v<version>.ipa --title "Riches v<version>"
   ```
3. Update `src/data/release.json` (`version`, `date`, `android`, `ios`).
4. Add the release post (`v<version>` with dots as dashes, e.g. `v0-5-0.md`) so the "Release notes" link works.
5. Commit and push to `main`. GitHub Actions deploys the site.

Create the release (step 2) before pushing, otherwise the download links return 404 until the files exist.

iOS users install the IPA with [Sideloadly](https://sideloadly.io).
