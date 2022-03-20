export const data = {
  "key": "v-2d0a870d",
  "path": "/en/",
  "title": "About",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Tech.",
      "slug": "tech",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1647769854000,
    "contributors": [
      {
        "name": "Richard Lin",
        "email": "33016870+dpes8693@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "en/README.md"
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
