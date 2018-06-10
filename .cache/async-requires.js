// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/home/jon/workspace/homepage/.cache/dev-404-page.js"),
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/home/jon/workspace/homepage/src/pages/404.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/home/jon/workspace/homepage/src/pages/index.js"),
  "component---src-pages-interimctoservices-js": require("gatsby-module-loader?name=component---src-pages-interimctoservices-js!/home/jon/workspace/homepage/src/pages/interimctoservices.js"),
  "component---src-pages-softwarearchitecture-js": require("gatsby-module-loader?name=component---src-pages-softwarearchitecture-js!/home/jon/workspace/homepage/src/pages/softwarearchitecture.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/home/jon/workspace/homepage/.cache/json/layout-index.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/home/jon/workspace/homepage/.cache/json/dev-404-page.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/home/jon/workspace/homepage/.cache/json/404.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/home/jon/workspace/homepage/.cache/json/index.json"),
  "interimctoservices.json": require("gatsby-module-loader?name=path---interimctoservices!/home/jon/workspace/homepage/.cache/json/interimctoservices.json"),
  "softwarearchitecture.json": require("gatsby-module-loader?name=path---softwarearchitecture!/home/jon/workspace/homepage/.cache/json/softwarearchitecture.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/home/jon/workspace/homepage/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/home/jon/workspace/homepage/.cache/layouts/index.js")
}