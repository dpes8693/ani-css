# position <結界師>(未完)

### 參考資料

[CSS relative? absolute? 傻傻分不清楚](https://ithelp.ithome.com.tw/articles/10212202)

[developer參考](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)



## position value

- static
- relative
- absolute
- fixed
- sticky

預設是 static 不能移動

relative 可移動

absolute 可移動 新圖層

fixed 可移動 釘死在畫面 top 按鈕

sticky 可移動 黏住 導航 nav

先往外層的元素找，否則定位點在左上角

### 動畫

[![](https://res.cloudinary.com/marcomontalbano/image/upload/v1647784794/video_to_markdown/images/youtube--Qqz485Z-TzQ-c05b58ac6eb4c4700831b2b3070cd403.jpg)](https://youtu.be/Qqz485Z-TzQ)

[結界師wiki](https://zh.wikipedia.org/wiki/%E7%B5%90%E7%95%8C%E5%B8%AB)

### 生活例子

absolute就是使用繪圖軟體新開一個圖層

### code

:::: code-group
::: code-group-item HTML

```html
<body>
  <div class="box-before">box-before</div>
  <div class="box-1">
    box-1
    <div class="box-2">box-2</div>
  </div>
  <div class="box-after">box-after</div>
</body>
```

:::
::: code-group-item CSS

```css

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
```

:::
::::

---

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

  <div class="box-before">box-before</div>
  <div class="box-1">
    box-1
    <div class="box-2">box-2</div>
  </div>
  <div class="box-after">box-after</div>



