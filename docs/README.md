## 關於

Learning CSS with Anime

網址:
https://dpes8693.github.io/ani-css/zh-tw/

## blog 建置筆記

0. 要有 nodejs 
1. 依照官網步驟安裝vuepress
2. 設定docs/.vupress/config.js
3. 學習指令 `docs:dev` `docs:build`
4. push到github
5. 部署
```js
點 `Actions` 進入 Github Action
    `New workflow` 選擇 `set up a workflow yourself`
        將連結的yml複製過去 // https://github.com/dpes8693/ani-css/blob/main/.github/workflows/main.yml
            完成後 `Start commit` 確認後推上去!
最後到 `Settings`左邊 `Pages`
    設定 `Source` Branch:`gh-pages`，`/(root)` 存檔
        過一段時間就會拿到網址囉
```
6. 設定完一輪，以後只要 build 推上去就會自動部署了!


## Tech.

Vupress v2.0.0-beta.25

[https://v2.vuepress.vuejs.org/](https://v2.vuepress.vuejs.org/)
