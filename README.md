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

The download buttons on the home page always point to the same two files on the `app-latest` GitHub Release of this repo:

- `riches-latest.apk`
- `riches-latest.ipa` (unsigned, installed by users with [Sideloadly](https://sideloadly.io))

For each new version:

1. Copy the build outputs under those fixed names.
2. Replace the files on the release (the old ones are overwritten, links never change):
   ```bash
   gh release upload app-latest riches-latest.apk riches-latest.ipa --clobber --repo andangcharisma/getriches
   gh release edit app-latest --notes "Latest build of the Riches app: v<version>." --repo andangcharisma/getriches
   ```
3. Update `src/data/release.json` (`version`, `date`). This is the version shown on the site.
4. Add the release post (`v<version>` with dots as dashes, e.g. `v0-5-0.md`) so the "Release notes" link works.
5. Commit and push to `main`. GitHub Actions deploys the site.
