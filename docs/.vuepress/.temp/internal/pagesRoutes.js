import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-2d0a870d","/en/",{"title":"About"},["/en/index.html","/en/README.md"]],
  ["v-56fc034c","/zh-tw/main.html",{"title":"觀念&名詞"},["/zh-tw/main","/zh-tw/main.md"]],
  ["v-c0c7d9b4","/zh-tw/",{"title":"簡介"},["/zh-tw/index.html","/zh-tw/README.md"]],
  ["v-4add6d0f","/zh-tw/selectors/position.html",{"title":"position <結界師>(未完)"},["/zh-tw/selectors/position","/zh-tw/selectors/position.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
