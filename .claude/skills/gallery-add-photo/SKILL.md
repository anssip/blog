---
name: gallery-add-photo
description: Add one or more images to an existing photo gallery on the blog. Use when the user wants to import a photo (or set of photos) into an existing gallery — e.g. "add this image to the lapland gallery", "import these into landscapes".
---

# Add a photo to an existing gallery

The blog has photo galleries listed in `src/_11ty/_data/galleries.js`. Each gallery has an `id` and a folder at `src/images/photos/<id>/`. This skill imports new images into one of those existing galleries.

## Inputs you need from the user

1. **Source file(s)** — absolute path(s) to image(s) (usually under `~/Downloads/`).
2. **Target gallery** — gallery `id` (e.g. `lapland`, `landscapes`, `sunsets`, `architecture`, `edinburgh`, `favorites`). If ambiguous, read `src/_11ty/_data/galleries.js` and ask which gallery.

## Steps

1. **Inspect target gallery** — read `src/_11ty/_data/galleries.js` to confirm the gallery `id` exists and to see existing filenames (so the new entries can be inserted in a sensible position, and so you don't collide on a slug).

2. **Slugify** each source filename:
   - lowercase
   - strip diacritics (`ä` → `a`, `é` → `e`, etc.)
   - remove `'` and `'`
   - replace any run of non-`[a-z0-9.]` characters with `-`
   - trim leading/trailing `-`
   - keep the original extension lowercased
   - if the slug collides with an existing photo in the gallery, append `-2`, `-3`, …

3. **Copy** each file into `src/images/photos/<id>/<slug>.<ext>` (use `cp`, not move — leave the source intact unless the user said otherwise).

4. **Update `src/_11ty/_data/galleries.js`** — append entries to the gallery's `photos` array:
   ```js
   { src: "/images/photos/<id>/<slug>.<ext>", cap: "<Original filename without extension>" }
   ```
   The `cap` value is the original filename (preserving original case, spaces, and punctuation) with the extension stripped — e.g. `"Aitta Canyon"` for `Aitta Canyon.jpg`.

   Preserve the surrounding formatting of the data file (it is hand-edited, not generated). Use the Edit tool, not Write.

5. **Verify** with `node -e "console.log(require('./src/_11ty/_data/galleries.js').find(g => g.id === '<id>').photos.length)"` to confirm the new photo count.

6. **Remind the user to run `pnpm photos:push`** so the new originals get uploaded to S3 (`s3://anssipiirainen.com/photos-src/`). The CI build pulls from there. Do not run `photos:push` yourself unless the user asks — it touches production.

## Notes

- Gallery folders are git-ignored (`src/images/photos/` in `.gitignore`); only `galleries.js` ends up in git.
- The build pipeline (`pnpm build`) generates responsive AVIF/WebP/JPEG variants from the originals into `public/img/` via `@11ty/eleventy-img`. You do not need to pre-generate anything.
- If the user wants the new photo to be the gallery cover, also update the `cover:` field in the gallery's object in `galleries.js`.
