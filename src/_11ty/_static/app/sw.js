importScripts("https://cdn.ampproject.org/sw/amp-sw.js");

AMP_SW.init({
  assetCachingOptions: [
    {
      regexp: /\.(png|jpg|jpeg|webp|avif|woff2|woff|pdf|vcf)/,
      cachingStrategy: "CACHE_FIRST",
    },
  ],
  offlinePageOptions: {
    url: "/offline.html",
    assets: ["/css/tokens.css", "/css/blog.css"],
  },
});
