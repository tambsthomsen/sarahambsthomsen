const path = require("path");
const moment = require("moment");
const removeMd = require("remove-markdown");

module.exports = {
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-150657991-1"
      }
    ],
    [
      "vuepress-plugin-canonical",
      {
        baseURL: "https://sarahambs.dk",
        stripExtension: true
      }
    ],
    [
      "sitemap",
      {
        hostname: "https://sarahambs.dk",
        exclude: [
          "/meta/cookiepolitik.html",
          "/meta/fortrolighedspolitik.html",
          "/404.html"
        ]
      }
    ],
    [
      "@vuepress/active-header-links",
      {
        sidebarLinkSelector: ".sidebar-link",
        headerAnchorSelector: ".header-anchor"
      }
    ],
    [
      "@vuepress/register-components",
      {
        componentsDir: [path.resolve(__dirname, "components")]
      }
    ]
  ],
  extendPageData($page) {
    const {
      _filePath,
      _computed,
      _content,
      _strippedContent,
      key,
      frontmatter,
      regularPath,
      path
    } = $page;

    // Add dates to blog posts from file names
    if (regularPath.indexOf("/_posts/") !== -1) {
      let docDateString = regularPath.replace("/_posts/", "");
      const dateReg = /(.*)_/gm;
      docDateString = dateReg.exec(docDateString)[1];
      let docDate = Date.parse(docDateString);
      docDate = moment(docDate).format("MMMM DD, YYYY");
      $page.filedate = docDate;
    }
  }
};
