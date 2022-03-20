module.exports = {
  base: "/ani-css/",
  lang: "zh-tw",
  title: "Hi！",
//   dest: "page",
  description: "VuePress",
  docsDir: "docs",
  locales: {
    "/zh-tw/": {
      lang: "zh-tw",
      title: "VuePress",
      description: "",
    },
    // "/en/": {
    //   lang: "en-US",
    //   title: "VuePress",
    //   description: "",
    // },
  },
  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
    locales: {
      "/zh-tw/": {
        selectLanguageName: "中文",
        selectLanguageText: "語言",
        selectLanguageAriaLabel: "語言",
        // navbar: [
        //   {
        //     text: "中文",
        //     link: "/foo/",
        //   },
        // ],
        sidebar: [
          {
            text: "中文",
            link: "/foo/",
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
          {
            text: "Foo",
            link: "/foo/",
          },
        ],
      },
    },
  },
};
