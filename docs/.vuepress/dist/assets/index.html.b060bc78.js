import{r as e,o as p,c as o,a as s,b as t,F as l,d as n,e as r}from"./app.699fa9f7.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=s("h2",{id:"\u95DC\u65BC",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u95DC\u65BC","aria-hidden":"true"},"#"),n(" \u95DC\u65BC")],-1),d=s("p",null,"Learning CSS with Anime",-1),g=n("\u7DB2\u5740: "),m={href:"https://dpes8693.github.io/ani-css/zh-tw/",target:"_blank",rel:"noopener noreferrer"},k=n("https://dpes8693.github.io/ani-css/zh-tw/"),h=r('<h2 id="blog-\u5EFA\u7F6E\u7B46\u8A18" tabindex="-1"><a class="header-anchor" href="#blog-\u5EFA\u7F6E\u7B46\u8A18" aria-hidden="true">#</a> blog \u5EFA\u7F6E\u7B46\u8A18</h2><ol start="0"><li>\u8981\u6709 nodejs</li><li>\u4F9D\u7167\u5B98\u7DB2\u6B65\u9A5F\u5B89\u88DDvuepress</li><li>\u8A2D\u5B9A <code>docs/.vupress/config.js</code></li><li>\u5B78\u7FD2\u6307\u4EE4 <code>docs:dev</code> <code>docs:build</code></li><li>push\u5230github</li><li>\u90E8\u7F72</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\u9EDE <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Actions</span><span class="token template-punctuation string">`</span></span> \u9032\u5165 Github Action\n    <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">New workflow</span><span class="token template-punctuation string">`</span></span> \u9078\u64C7 <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">set up a workflow yourself</span><span class="token template-punctuation string">`</span></span>\n        \u5C07\u9023\u7D50\u7684yml\u8907\u88FD\u904E\u53BB <span class="token comment">// https://github.com/dpes8693/ani-css/blob/main/.github/workflows/main.yml</span>\n            \u5B8C\u6210\u5F8C <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Start commit</span><span class="token template-punctuation string">`</span></span> \u78BA\u8A8D\u5F8C\u63A8\u4E0A\u53BB<span class="token operator">!</span>\n\u6700\u5F8C\u5230 <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Settings</span><span class="token template-punctuation string">`</span></span>\u5DE6\u908A <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Pages</span><span class="token template-punctuation string">`</span></span>\n    \u8A2D\u5B9A <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Source</span><span class="token template-punctuation string">`</span></span> <span class="token literal-property property">Branch</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">gh-pages</span><span class="token template-punctuation string">`</span></span>\uFF0C<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/(root)</span><span class="token template-punctuation string">`</span></span> \u5B58\u6A94\n        \u904E\u4E00\u6BB5\u6642\u9593\u5C31\u6703\u62FF\u5230\u7DB2\u5740\u56C9\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="6"><li>\u8A2D\u5B9A\u5B8C\u4E00\u8F2A\uFF0C\u4EE5\u5F8C\u53EA\u8981 build \u63A8\u4E0A\u53BB\u5C31\u6703\u81EA\u52D5\u90E8\u7F72\u4E86!</li><li><code>docs/.vupress/config.js</code>\u52A0\u4E0Aicon</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span> <span class="token string">&quot;link&quot;</span><span class="token punctuation">,</span> \n      <span class="token punctuation">{</span> \n        <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">&quot;icon&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&quot;https://drive.google.com/uc?export=download&amp;id=136DzvY7s_CwmlgWtjqY7V_xEc7PQRZ0U&quot;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="tech" tabindex="-1"><a class="header-anchor" href="#tech" aria-hidden="true">#</a> Tech.</h2><p>Vupress v2.0.0-beta.25</p>',7),b={href:"https://v2.vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},_=n("https://v2.vuepress.vuejs.org/");function v(f,x){const a=e("ExternalLinkIcon");return p(),o(l,null,[u,d,s("p",null,[g,s("a",m,[k,t(a)])]),h,s("p",null,[s("a",b,[_,t(a)])])],64)}var y=c(i,[["render",v]]);export{y as default};