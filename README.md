# anssipiirainen.com

## Deployment

This blog is deployed to S3 using github actions workflow.

## Photo galleries

Gallery originals live under `src/images/photos/<gallery-id>/` and are **not**
committed to git — they are mirrored to `s3://anssipiirainen.com/photos-src/`
and pulled down by CI before each build. Gallery metadata (titles, captions,
ordering) lives in `src/_11ty/_data/galleries.js`, which is committed.

- `pnpm photos:push` — upload local originals to S3 (uses AWS profile
  `anssipiirainen.com`, syncs with `--delete`).
- `pnpm photos:pull` — fetch originals from S3 into the local working tree.

### Claude Code skills

Two project skills (under `.claude/skills/`) automate the editorial side:

- `/gallery-create` — turn a directory of images into a new gallery: copies
  files into `src/images/photos/<id>/`, slugifies filenames, and adds a new
  entry to `galleries.js`.
- `/gallery-add-photo` — import one or more images into an existing gallery
  and append them to that gallery's `photos` array.

Both skills leave the upload step to you: after running, push the new
originals with `pnpm photos:push`.

## Folders

```bash
Minimalism
|   .eleventy.js
|   .gitattributes
|   .gitignore
|   LICENSE
|   logo.png                          # Sostituisci questo file con il tuo logo
|   netlify.toml
|   package-lock.json
|   package.json
|   README.md
|   SECURITY.md
|   tailwind.config.js
|
+---.github
|   \---workflows
|           codeql-analysis.yml
|
+---.vscode
|       tasks.json
|
\---src
    |   ...                           # Aggiungi le pagine che vuoi
    |   blog.md                       # Pagina del tuo Blog (modifica da qui la intro)
    |   index.md                      # La Prima pagina del tuo sito (essenziale)
    |
    +---blog
    |       ...                       # Inserisci qui i tuoi post per il blog
    |
    \---_11ty
        +---_data
        |       meta.js               # MODIFICA QUESTO FILE!
        |
        +---_generate
        |       404.njk
        |       feed.njk
        |       manifest.njk
        |       offline.njk           # Pagina mostrata dall'app se offline
        |       pagesjson.njk
        |       robot.njk
        |       sitemap.njk
        |       socialtemplate.njk    # Modifica se vuoi cambiare l'immagine social
        |
        +---_includes
        |       favicon.njk
        |       footer.njk
        |       head-article.njk
        |       head-website.njk
        |       head.njk
        |       nav.njk               # Header sito (Titolo e Nav Bar)
        |
        +---_layouts                  # Layouts:
        |       article.njk           # Articoli del Blog
        |       blog.njk              # Pagina del Blog
        |       page.njk              # Pagine generiche
        |
        +---_social                   # File generati per l'immagine social
        |       pages.json
        |       social.css
        |       template.html
        |
        +---_static
        |   +---app                   # Risorse statiche
        |   |       .htaccess
        |   |       sw.js
        |   |
        |   +---favicon
        |   |       ...               # Favicon Generate a partire dal file logo.png
        |   |
        |   \---img
        |           ...
        |
        \---_tailwindCSS
                raw-social.css        # CSS del tuo sito
                raw-website.css       # Modifica se vuoi cambiare l'immagine social
```
