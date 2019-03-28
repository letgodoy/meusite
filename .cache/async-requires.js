// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("D:\\letgo\\Documents\\learnreact\\build-personal-website-starter\\.cache\\dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-index-js": () => import("D:\\letgo\\Documents\\learnreact\\build-personal-website-starter\\src\\pages\\index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-projects-js": () => import("D:\\letgo\\Documents\\learnreact\\build-personal-website-starter\\src\\pages\\projects.js" /* webpackChunkName: "component---src-pages-projects-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "D:\\letgo\\Documents\\learnreact\\build-personal-website-starter\\.cache\\data.json")

