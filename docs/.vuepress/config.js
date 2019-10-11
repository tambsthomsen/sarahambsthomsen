module.exports = {
  title: "Sarah Ambs-Thomsen",
  description: "Autoriseret erhvervspsykolog",
  base: "/",
  themeConfig: {
    activeHeaderLinks: true,
    nav: [
      { text: "Forside", link: "/" },
      { text: "Erhvervspsykolog", link: "/om/erhvervspsykolog" },
      { text: "Fredrag Og Kurser", link: "/om/fredrag-og-kurser" },
      { text: "Personsamtaler", link: "/om/personsamtaler" },
      { text: "Om Sarah", link: "/om/sarah" },
    ],
    repo: "vladpazych/sandboxtagpage",
    editLinks: "tree",
    docsBranch: "source/docs",
    docsRepo: "vladpazych/sandboxtagpage"
  },
  head: [
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1,maximum-scale=6,maximum-scale=1"
      }
    ],
    ["link", { rel: "icon", type: "image/png", href: "/favicon.ico" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "Jeg er uddannet psykolog fra Københavns Universitet, med speciale i arbejds-og organisationspsykologi. Jeg er autoriseret af Psykolognævnet (cand.psych. aut) og er medlem af Dansk Psykologforening (DP) og modtager løbende supervision."
      }
    ],
    ["meta", { property: "og:url", content: "https://sarahambs.dk" }],
    [
      "meta",
      {
        property: "og:image",
        content: "https://sarahambs.dk/logo-dark.png"
      }
    ]
  ],
  markdown: {
    anchor: { permalink: false, permalinkBefore: false, permalinkSymbol: "" },
    externalLinks: { target: "_blank", rel: "noopener noreferrer nofollow" }
  },
  configureWebpack: (config, isServer) => {
    config.output.globalObject = "this";
  }
};
