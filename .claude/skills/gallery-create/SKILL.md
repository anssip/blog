---
name: gallery-create
description: Create a new photo gallery on the blog from a directory of images. Use when the user wants to add a whole new gallery — e.g. "create a gallery from ~/Downloads/Iceland/", "make a new gallery out of these photos".
---

# Create a new gallery from a directory

The blog's photo galleries are listed in `src/_11ty/_data/galleries.js` and rendered on `/photos/` (index) and `/photos/<id>/` (single gallery). Each gallery is one object in that array with images stored under `src/images/photos/<id>/`.

## Inputs you need from the user

1. **Source directory** — absolute path to a folder of images (typically under `~/Downloads/`).
2. **Title** — human-facing name (e.g. `"Iceland"`, `"Late Summer in Porvoo"`). If not given, derive from the directory name and confirm.
3. **Subtitle** — short uppercase-style caption (e.g. `"From the Westfjords"`). Optional; pick a reasonable default and let the user redirect.
4. **Position** — where in the gallery list it should appear. Default: prepend (so it shows first/top-left). Confirm if unclear.

## Steps

1. **Pick the gallery `id`** — slugified title (lowercase, hyphens). Check `src/_11ty/_data/galleries.js` to make sure it isn't already taken; if it is, ask the user for an alternate.

2. **List the source directory** — accept only image extensions (`.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`). Ignore hidden files (`.DS_Store` etc.). Sort alphabetically unless the user specifies an order.

3. **Slugify** each filename using the same rules as `gallery-add-photo`:
   - lowercase, strip diacritics, drop `'`/`'`
   - replace non-`[a-z0-9.]` runs with `-`
   - trim leading/trailing `-`
   - on collision, append `-2`, `-3`, …

4. **Copy** all images into `src/images/photos/<id>/<slug>.<ext>` (with `cp`, leaving the source intact).

5. **Add a new entry** to `src/_11ty/_data/galleries.js`:
   ```js
   {
     id: "<id>",
     title: "<Title>",
     subtitle: "<Subtitle>",
     cover: "/images/photos/<id>/<first-slug>.<ext>",
     photos: [
       { src: "/images/photos/<id>/<slug>.<ext>", cap: "<Original filename without extension>" },
       ...
     ],
   },
   ```
   Position it according to the user's request (default: first element of the array).

   The data file is hand-edited — use the Edit tool to insert into the existing array, preserving the file's formatting. Do not regenerate the whole file with Write unless the user asks.

6. **Verify** by running `node -e "const g = require('./src/_11ty/_data/galleries.js'); console.log(g.map(x => x.id + ' (' + x.photos.length + ')').join(', '))"` — should list the new gallery with the expected photo count.

7. **Remind the user to run `pnpm photos:push`** so the originals get uploaded to `s3://anssipiirainen.com/photos-src/`. CI pulls from there at build time. Do not run `photos:push` yourself unless asked.

## Notes

- Captions default to the original filename (sans extension), preserving case and spaces — e.g. `"Aitta Canyon"`, `"Sun never sets on this one"`. These render under each photo on the gallery page.
- Cover image defaults to the first photo alphabetically; ask the user if they want to pick a different one (a strong cover matters — it's what appears on `/photos/`).
- Empty source folders should be skipped with a notice. Folders with a single image still work but make a thin gallery — confirm with the user.
- Gallery folders are git-ignored; only `galleries.js` is committed. The build (`pnpm build`) generates responsive variants from the originals.
