# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal blog/website for Anssi Piirainen (anssipiirainen.com), built with Eleventy (11ty) v3 and hand-written vanilla CSS. The site is statically generated and deployed to S3 + CloudFront via GitHub Actions on push to `main`.

## Commands

A `pnpm-lock.yaml` is committed, but the deploy workflow currently runs `npm install`. Either package manager works locally.

- `pnpm install` (or `npm install`) — Install dependencies.
- `pnpm dev` — `eleventy --serve --watch` (live-reloads on file changes).
- `pnpm build` — Production build into `public/`.
- `pnpm build:ci` — Clean + build (used in CI).
- `pnpm clean` — Wipes `public/`.

There is no test suite, linter, or formatter configured.

## Architecture

### Build pipeline

Eleventy is configured by `.eleventy.js`. Key points:

- **Input/output directories are overridden**: input is `./src/`, output is `./public/`, with includes/layouts/data under `src/_11ty/` (`_includes/`, `_layouts/`, `_data/`). The unusual `/_11ty/_includes/` etc. paths (with leading slash) in `dir` config are relative to the input dir.
- **Passthrough copies** map `src/_11ty/_static/{app,favicon,img,js}` and `src/images` to the site root — content under `_11ty/_static/app/` is copied to `/`.
- **Custom shortcodes**: `{% image src, alt, sizes, classes %}` (in `src/_11ty/shortcodes/image.js`) and `{% picture src, alt, widths, sizes, class %}` (in `src/_11ty/shortcodes/picture.js`) both use `@11ty/eleventy-img` to generate responsive AVIF/WebP/JPEG variants into `public/img/`. `{% year %}` outputs the current year.
- **HTML minification** runs as a transform on all `.html` outputs.
- **Custom collection `visiblePosts`**: posts tagged `post` with `hidden !== true` — use this in templates rather than the raw `post` collection if filtering hidden drafts.

### Content model

Blog posts live in `src/post/*.md` with frontmatter shape:

```yaml
title: ...
description: ...
date: YYYY-MM-DD
published: true        # not auto-enforced; filtering uses `hidden`
hidden: true           # excludes from visiblePosts collection
tags: ["post", ...]    # must include "post" to surface in the blog
layout: article.njk
permalink: "/post/{{ title | slug }}.html"
cover: /images/...     # used for post-card thumbnails and social previews
```

Layouts in `src/_11ty/_layouts/`: `article.njk` (posts), `blog.njk` (post index), `page.njk` (static pages like `index.md`, `blog.md`), `base.njk` (shared shell).

### Styling

Hand-written vanilla CSS — no Tailwind, no preprocessor. Two stylesheets, both in `src/css/` and copied to `public/css/` via passthrough:

- `tokens.css` — design tokens (colors, type scale, link styling) and global element resets.
- `blog.css` — page/component styles.

Site-wide config is split across `src/_11ty/_data/`: `site.js` (title, nav, social, slashless `url`), `meta.js` (author, theme color, social handles), `galleries.js` (photo gallery data).

### Deployment

`.github/workflows/deploy-s3.yml` runs on push to `main`: syncs gallery originals down from S3 into `src/images/photos/`, builds via `npm run build:ci`, then `aws s3 sync ./public/ s3://anssipiirainen.com --delete --acl public-read` and a CloudFront invalidation. `netlify.toml` exists as an alternate deploy target but S3 is the live one.
