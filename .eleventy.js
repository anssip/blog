const pluginRss = require("@11ty/eleventy-plugin-rss");
const readingTime = require("eleventy-plugin-reading-time");
const imageShortcode = require("./src/_11ty/shortcodes/image.js");
const pictureShortcode = require("./src/_11ty/shortcodes/picture.js");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const htmlmin = require("html-minifier");
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({ open: true });

  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(readingTime);
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig
    .addPassthroughCopy({ "src/_11ty/_static/app/*.*": "/" })
    .addPassthroughCopy({ "src/_11ty/_static/favicon": "favicon" })
    .addPassthroughCopy({ "src/_11ty/_static/img": "img" })
    .addPassthroughCopy({ "src/images": "images" })
    .addPassthroughCopy({ "src/_11ty/_static/js": "js" })
    .addPassthroughCopy({ "src/css": "css" });

  eleventyConfig.addWatchTarget("src/css/");

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addShortcode("image", imageShortcode);
  eleventyConfig.addNunjucksAsyncShortcode("picture", pictureShortcode);

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
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  eleventyConfig.addLiquidFilter("dateToRfc3339", pluginRss.dateToRfc3339);

  eleventyConfig.addCollection("visiblePosts", function (collectionApi) {
    const posts = collectionApi
      .getFilteredByTag("post")
      .filter((item) => !item.data.hidden);
    console.log("Visible posts:", posts.length);
    return posts;
  });

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
