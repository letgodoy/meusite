const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\letgo\\Documents\\learnreact\\build-personal-website-starter\\.cache\\dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\letgo\\Documents\\learnreact\\build-personal-website-starter\\src\\pages\\index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("D:\\letgo\\Documents\\learnreact\\build-personal-website-starter\\src\\pages\\projects.js")))
}

