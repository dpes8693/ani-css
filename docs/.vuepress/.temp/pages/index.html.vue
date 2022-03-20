<template><h2 id="關於" tabindex="-1"><a class="header-anchor" href="#關於" aria-hidden="true">#</a> 關於</h2>
<p>Learning CSS with Anime</p>
<p>網址:
<a href="https://dpes8693.github.io/ani-css/zh-tw/" target="_blank" rel="noopener noreferrer">https://dpes8693.github.io/ani-css/zh-tw/<ExternalLinkIcon/></a></p>
<h2 id="blog-建置筆記" tabindex="-1"><a class="header-anchor" href="#blog-建置筆記" aria-hidden="true">#</a> blog 建置筆記</h2>
<ol start="0">
<li>要有 nodejs</li>
<li>依照官網步驟安裝vuepress</li>
<li>設定docs/.vupress/config.js</li>
<li>學習指令 <code>docs:dev</code> <code>docs:build</code></li>
<li>push到github</li>
<li>部署</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>點 <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Actions</span><span class="token template-punctuation string">`</span></span> 進入 Github Action
    <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">New workflow</span><span class="token template-punctuation string">`</span></span> 選擇 <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">set up a workflow yourself</span><span class="token template-punctuation string">`</span></span>
        將連結的yml複製過去 <span class="token comment">// https://github.com/dpes8693/ani-css/blob/main/.github/workflows/main.yml</span>
            完成後 <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Start commit</span><span class="token template-punctuation string">`</span></span> 確認後推上去<span class="token operator">!</span>
最後到 <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Settings</span><span class="token template-punctuation string">`</span></span>左邊 <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Pages</span><span class="token template-punctuation string">`</span></span>
    設定 <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Source</span><span class="token template-punctuation string">`</span></span> <span class="token literal-property property">Branch</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">gh-pages</span><span class="token template-punctuation string">`</span></span>，<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/(root)</span><span class="token template-punctuation string">`</span></span> 存檔
        過一段時間就會拿到網址囉
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="6">
<li>設定完一輪，以後只要 build 推上去就會自動部署了!</li>
</ol>
<h2 id="tech" tabindex="-1"><a class="header-anchor" href="#tech" aria-hidden="true">#</a> Tech.</h2>
<p>Vupress v2.0.0-beta.25</p>
<p><a href="https://v2.vuepress.vuejs.org/" target="_blank" rel="noopener noreferrer">https://v2.vuepress.vuejs.org/<ExternalLinkIcon/></a></p>
</template>
