<template><h1 id="position-結界師-未完" tabindex="-1"><a class="header-anchor" href="#position-結界師-未完" aria-hidden="true">#</a> position &lt;結界師&gt;(未完)</h1>
<h3 id="參考資料" tabindex="-1"><a class="header-anchor" href="#參考資料" aria-hidden="true">#</a> 參考資料</h3>
<p><a href="https://ithelp.ithome.com.tw/articles/10212202" target="_blank" rel="noopener noreferrer">CSS relative? absolute? 傻傻分不清楚<ExternalLinkIcon/></a></p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/position" target="_blank" rel="noopener noreferrer">developer參考<ExternalLinkIcon/></a></p>
<h2 id="position-value" tabindex="-1"><a class="header-anchor" href="#position-value" aria-hidden="true">#</a> position value</h2>
<ul>
<li>static</li>
<li>relative</li>
<li>absolute</li>
<li>fixed</li>
<li>sticky</li>
</ul>
<p>預設是 static 不能移動</p>
<p>relative 可移動</p>
<p>absolute 可移動 新圖層</p>
<p>fixed 可移動 釘死在畫面 top 按鈕</p>
<p>sticky 可移動 黏住 導航 nav</p>
<p>先往外層的元素找，否則定位點在左上角</p>
<h3 id="動畫" tabindex="-1"><a class="header-anchor" href="#動畫" aria-hidden="true">#</a> 動畫</h3>
<p><a href="https://youtu.be/Qqz485Z-TzQ" target="_blank" rel="noopener noreferrer"><img src="https://res.cloudinary.com/marcomontalbano/image/upload/v1647784794/video_to_markdown/images/youtube--Qqz485Z-TzQ-c05b58ac6eb4c4700831b2b3070cd403.jpg" alt=""><ExternalLinkIcon/></a></p>
<p><a href="https://zh.wikipedia.org/wiki/%E7%B5%90%E7%95%8C%E5%B8%AB" target="_blank" rel="noopener noreferrer">結界師wiki<ExternalLinkIcon/></a></p>
<h3 id="生活例子" tabindex="-1"><a class="header-anchor" href="#生活例子" aria-hidden="true">#</a> 生活例子</h3>
<p>absolute就是使用繪圖軟體新開一個圖層</p>
<h3 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> code</h3>
<CodeGroup>
<CodeGroupItem title="HTML">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box-before<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>box-before<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    box-1
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>box-2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box-after<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>box-after<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="CSS">
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>
<span class="token selector">.box-before</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #2e5ec0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box-1</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fd3c40<span class="token punctuation">;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box-2</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #8c4fb6<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box-after</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #faaa20<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div></CodeGroupItem>
</CodeGroup>
<hr>
  <div class="box-before">box-before</div>
  <div class="box-1">
    box-1
    <div class="box-2">box-2</div>
  </div>
  <div class="box-after">box-after</div>
</template>

<style>

.box-before {
  width: 300px;
  height: 50px;
  color: white;
  font-size: 20px;
  background-color: #2e5ec0;
}

.box-1 {
  width: 300px;
  padding: 10px;
  color: white;
  font-size: 20px;
  background-color: #fd3c40;
  box-sizing: border-box;
  position: relative;
  top: 30px;
  left: 20px;
}

.box-2 {
  height: 50px;
  color: white;
  font-size: 20px;
  background-color: #8c4fb6;
}

.box-after {
  width: 300px;
  height: 50px;
  color: white;
  font-size: 20px;
  background-color: #faaa20;
}
</style>
