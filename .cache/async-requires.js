// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": () => import("/Users/jon/workspace/jonathanholloway.co.uk/node_modules/gatsby-plugin-offline/app-shell.js" /* webpackChunkName: "component---node-modules-gatsby-plugin-offline-app-shell-js" */),
  "component---src-templates-blog-post-js": () => import("/Users/jon/workspace/jonathanholloway.co.uk/src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---src-pages-contact-js": () => import("/Users/jon/workspace/jonathanholloway.co.uk/src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-404-js": () => import("/Users/jon/workspace/jonathanholloway.co.uk/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/jon/workspace/jonathanholloway.co.uk/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/jon/workspace/jonathanholloway.co.uk/.cache/data.json")

