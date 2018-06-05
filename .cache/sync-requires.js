// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/jon/workspace-mango/homepage/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/jon/workspace-mango/homepage/src/pages/index.js")),
  "component---src-pages-interimctoservices-js": preferDefault(require("/Users/jon/workspace-mango/homepage/src/pages/interimctoservices.js")),
  "component---src-pages-softwarearchitecture-js": preferDefault(require("/Users/jon/workspace-mango/homepage/src/pages/softwarearchitecture.js"))
}

exports.json = {
  "layout-index.json": require("/Users/jon/workspace-mango/homepage/.cache/json/layout-index.json"),
  "404.json": require("/Users/jon/workspace-mango/homepage/.cache/json/404.json"),
  "layout-index.json": require("/Users/jon/workspace-mango/homepage/.cache/json/layout-index.json"),
  "index.json": require("/Users/jon/workspace-mango/homepage/.cache/json/index.json"),
  "layout-index.json": require("/Users/jon/workspace-mango/homepage/.cache/json/layout-index.json"),
  "interimctoservices.json": require("/Users/jon/workspace-mango/homepage/.cache/json/interimctoservices.json"),
  "layout-index.json": require("/Users/jon/workspace-mango/homepage/.cache/json/layout-index.json"),
  "softwarearchitecture.json": require("/Users/jon/workspace-mango/homepage/.cache/json/softwarearchitecture.json"),
  "layout-index.json": require("/Users/jon/workspace-mango/homepage/.cache/json/layout-index.json"),
  "404-html.json": require("/Users/jon/workspace-mango/homepage/.cache/json/404-html.json")
}

exports.layouts = {
  "component---src-layouts-index-js": preferDefault(require("/Users/jon/workspace-mango/homepage/.cache/layouts/index.js"))
}