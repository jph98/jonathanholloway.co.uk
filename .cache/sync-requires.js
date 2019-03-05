const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/jon/workspace/jonathanholloway.co.uk/src/templates/blog-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jon/workspace/jonathanholloway.co.uk/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/jon/workspace/jonathanholloway.co.uk/src/pages/404.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/jon/workspace/jonathanholloway.co.uk/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jon/workspace/jonathanholloway.co.uk/src/pages/index.js")))
}

