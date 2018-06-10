// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/home/jon/workspace/homepage/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/jon/workspace/homepage/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/jon/workspace/homepage/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/jon/workspace/homepage/src/pages/index.js")),
  "component---src-pages-interimctoservices-js": preferDefault(require("/home/jon/workspace/homepage/src/pages/interimctoservices.js")),
  "component---src-pages-softwarearchitecture-js": preferDefault(require("/home/jon/workspace/homepage/src/pages/softwarearchitecture.js"))
}

exports.json = {
  "layout-index.json": require("/home/jon/workspace/homepage/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/home/jon/workspace/homepage/.cache/json/dev-404-page.json"),
  "404.json": require("/home/jon/workspace/homepage/.cache/json/404.json"),
  "index.json": require("/home/jon/workspace/homepage/.cache/json/index.json"),
  "interimctoservices.json": require("/home/jon/workspace/homepage/.cache/json/interimctoservices.json"),
  "softwarearchitecture.json": require("/home/jon/workspace/homepage/.cache/json/softwarearchitecture.json"),
  "404-html.json": require("/home/jon/workspace/homepage/.cache/json/404-html.json")
}