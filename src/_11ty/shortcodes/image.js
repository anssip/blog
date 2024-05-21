const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes = "100vw", classes = "h-96") {
    let metadata = await Image(src, {
        widths: [300, 600, 900, null], // specify the widths you want
        formats: ["avif", "webp", "jpeg", "png", "jpg"], // specify the formats you want
        outputDir: "./public/img/", // where to output the images
        urlPath: "/img/" // URL path to the images
    });

    let imageAttributes = {
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
        class: "block mx-auto max-h-full max-w-full"
    };

    return `<div class="image-container overflow-hidden relative ${classes}">` + Image.generateHTML(metadata, imageAttributes) + "</div>"


}

module.exports = imageShortcode;
