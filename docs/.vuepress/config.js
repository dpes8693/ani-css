module.exports = {
  darkMode: true,
  base: "/ani-css/",
  lang: "zh-tw",
  title: "用動漫例子學CSS ",
  head: [
    [ "link", 
      { 
        rel: "icon", href: "https://drive.google.com/uc?export=download&id=136DzvY7s_CwmlgWtjqY7V_xEc7PQRZ0U",
      }
    ]
  ],
  description: "VuePress",
  docsDir: "docs",
  locales: {
    "/zh-tw/": {
      lang: "zh-tw",
      title: "AniCSS",
      description: "",
    },
    "/en/": {
      lang: "en-US",
      title: "AniCSS",
      description: "",
    },
  },
  themeConfig: {
      //https://vuejs.org/images/logo.png
    logo: "",
    locales: {
      "/zh-tw/": {
        selectLanguageName: "中文",
        selectLanguageText: "語言",
        selectLanguageAriaLabel: "語言",
        navbar: [
          {
            text: "首頁",
            link: "/zh-tw/README.md",
          },
        ],
        sidebar: [
          //   {
          //     text: "中文",
          //     link: "/foo/",
          //   },

          {
            text: "觀念&名詞",
            link: "/zh-tw/main.md",
            children: [],
          },
          {
            text: "選擇器(Selector)",
            children: [
              {
                text: "position <結界師>",
                link: "/zh-tw/selectors/position.md",
                children: [],
              },
            ],
          },
        ],
      },
      "/en/": {
        selectLanguageName: "English",
        selectLanguageText: "Languages",
        selectLanguageAriaLabel: "Languages",
        // navbar: [
        //   {
        //     text: "Foo",
        //     link: "/foo/",
        //   },
        // ],
        sidebar: [
          //   {
          //     text: "Foo",
          //     link: "/foo/",
          //   },
        ],
      },
    },
  },
};
