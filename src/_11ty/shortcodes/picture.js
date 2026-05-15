const Image = require("@11ty/eleventy-img");

async function pictureShortcode(src, alt, widths, sizes, className = "") {
  const inputPath = src.startsWith("/") ? `./src${src}` : src;

  const metadata = await Image(inputPath, {
    widths,
    formats: ["avif", "webp", "jpeg"],
    outputDir: "./public/img/",
    urlPath: "/img/",
  });

  const attrs = {
    alt: alt || "",
    sizes,
    loading: "lazy",
    decoding: "async",
  };
  if (className) attrs.class = className;

  return Image.generateHTML(metadata, attrs);
}

module.exports = pictureShortcode;
