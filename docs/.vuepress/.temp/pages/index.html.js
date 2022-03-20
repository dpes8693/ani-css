export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-tw",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "關於",
      "slug": "關於",
      "children": []
    },
    {
      "level": 2,
      "title": "blog 建置筆記",
      "slug": "blog-建置筆記",
      "children": []
    },
    {
      "level": 2,
      "title": "Tech.",
      "slug": "tech",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1647788342000,
    "contributors": [
      {
        "name": "Richard Lin",
        "email": "33016870+dpes8693@users.noreply.github.com",
        "commits": 4
      }
    ]
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
