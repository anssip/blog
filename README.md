# anssipiirainen.com

## Deployment

This blog is deployed to S3 using github actions workflow.

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
