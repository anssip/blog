module.exports = {
  eleventyComputed: {
    tag: (data) => {
      if (data.tag) return data.tag;
      if (Array.isArray(data.tags)) {
        return data.tags.find((t) => t !== "post" && t !== "posts");
      }
      return null;
    },
    excerpt: (data) => data.excerpt || data.description,
  },
};
