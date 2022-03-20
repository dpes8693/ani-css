export const siteData = {
  "base": "/ani-css/",
  "lang": "zh-tw",
  "title": "用動漫例子學CSS ",
  "description": "VuePress",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "https://drive.google.com/uc?export=download&id=136DzvY7s_CwmlgWtjqY7V_xEc7PQRZ0U"
      }
    ]
  ],
  "locales": {
    "/zh-tw/": {
      "lang": "zh-tw",
      "title": "AniCSS",
      "description": ""
    },
    "/en/": {
      "lang": "en-US",
      "title": "AniCSS",
      "description": ""
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
