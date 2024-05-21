const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const socialImages = require("@11tyrocks/eleventy-plugin-social-images");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const readingTime = require("eleventy-plugin-reading-time");
const imageShortcode = require("./src/_11ty/shortcodes/image.js");

const htmlmin = require("html-minifier");
const {DateTime} = require("luxon");

module.exports = function (eleventyConfig) {
    eleventyConfig.setBrowserSyncConfig({open: true});

    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(socialImages);
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(readingTime);

    eleventyConfig.ignores.delete("src/_11ty/_social/**/*.*");

    eleventyConfig
        .addPassthroughCopy({"src/_11ty/_static/app/*.*": "/"})
        .addPassthroughCopy({"src/_11ty/_static/favicon": "favicon"})
        .addPassthroughCopy({"src/_11ty/_static/img": "img"});

    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    eleventyConfig.addShortcode("image", imageShortcode);

    eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
        if (outputPath.endsWith(".html")) {
            return htmlmin.minify(content, {
                collapseWhitespace: true,
                removeComments: true,
                useShortDoctype: true,
            });
        }
        return content;
    });

    eleventyConfig.addFilter("buildDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj, {zone: "utc"}).toFormat(
            "dd LLL yyyy"
        );
    });

    eleventyConfig.addLiquidFilter("dateToRfc3339", pluginRss.dateToRfc3339);

    return {
        passthroughFileCopy: true,
        dir: {
            input: "./src/",
            includes: "/_11ty/_includes/",
            layouts: "/_11ty/_layouts/",
            data: "/_11ty/_data/",
            output: "./public/",
        },
    };
};
