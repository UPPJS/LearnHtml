## CSS 目录
* [一、简介](#简介)
* [二、值](#值)
* [三、基本样式](#基本样式)
    * [选择器](#选择器)
    * [背景](#背景)
    * [文本](#文本)
    * [字体](#字体)
    * [链接](#链接)
    * [列表](#列表)
    * [表格](#表格)
    * [盒模型 Box Model](#盒模型BoxModel)
    * [轮廓 Outline](#轮廓-Outline)
    * [外边距 Margin](#外边距-Margin)
    * [边框 Border](#边框-Border)
    * [填充 Padding](#填充-Padding)
    * [尺寸 Size](#尺寸-size)
* [四、布局 Layout](#布局-Layout)
    * [显示 Display](#显示-Display)
    * [定位 Position](#定位-Position)
    * [浮动 Float](#浮动-Float)
* [五、媒体类型](#媒体类型)

---
### 一、简介
>---
层叠样式表，(Cascading Style Sheets)。<br>
定义如何显示 HTML 元素。<br>
样式：
* 内联，嵌入式，外部样式表。
* 使用 @import 语句将样式从一个样式表导入到另一个样式表。`@import "styles.css";`

语法：一个选择器和一个或多个声明。
* h1 是选择器。
* {color:red;front-size:12px;} 是声明。
* color是属性名称。
* red是属性值。
* color:red; 被称为一个声明。

CSS 注释以“ /* ”开头，以“ */ ”结尾，`/*This is comment*/`<br>
字符编码：`@charset  "UTF-8";`<br>
样式级别：
* 内联样式 - 使用元素上的style全局属性定义的样式。
* 嵌入式样式 - 在样式元素中定义的样式。
* 外部样式 - 使用链接元素导入的样式。
* 用户样式 - 已由用户定义的样式。
* 浏览器样式 - 浏览器应用的默认样式。

通过对声明附加`!important` ，可以将单个值标记为重,`a{color:black!important;}`<br>
如果浏览器找不到一个可用样式中的值，它将使用继承。<br>
你可以通过使用 `inherit` 在样式中强制继承，`span {border: inherit;}`<br>
>---
### 二、值
>---
颜色：
* 名称：`black`。
* 十六进制（HEXCOLOR）：`#000000`。
* RGB 颜色：`rgb(0,0,0)`。

两种长度单位：
* absolute：in，cm，pt……
* relative：em，ex，px，%……

单位计算。<br>
角度单位。<br>
时间单位。
>---
### 三、基本样式
>---
#### 选择器
CSS选择器可以基于其id，类，类型，属性，属性值等选择HTML元素。<br>
选择器效率排序：
* id选择器（#myid）。
* 类选择器（.myclassname），最常用的选择器。
* 元素选择器（div,h1,p）。
* 相邻选择器（h1+p）。
* 子选择器（ul > li）。
* 后代选择器（li a）。
* 通配符选择器（*）。
* 属性选择器（a[rel="external"]）。
* 伪类选择器（a:hover, li:nth-child）。

分组和嵌套选择器。

>---
#### 背景
background-color 设置元素的背景颜色。颜色在任何图像后面绘制。<br>
background-image 设置元素的背景图像。
* 如果指定了多个图像，则每个后续图像都绘制在其前面的图像之后。<br>
* 默认情况下，此属性会在页面的水平或垂直方向平铺。

background-repeat 设置图像的重复样式。
* repeat-x - 水平重复图像; 图像可能会碎片化。
* repeat-y - 垂直重复图像; 图像可能会碎片化。
* repeat - 在两个方向重复图像; 图像可能会碎片化。
* space - 图像被重复以填充空间而不产生碎片，并且剩余区域被均匀地分配在图像周围。
* round - 图像被缩放，以便它可以重复而不创建碎片。
* no-repeat - 图像不重复。

background-size 设置背景图像的大小。<br>
background-position 定位背景图像。<br>
background-attachment 设置具有视口的元素中的图像的附件样式。<br>
background-clip 指定图像的剪裁样式。<br>
background-origin 定位背景图像。<br>
background 简写元素。<br>
>---
#### 文本
>---
颜色。<br>
对齐方式 text-align。
* 它的值：start, end, left, right, center, justify。

文本修饰 text-decoration。
* 它的值：none, underline, overline, line-through, blink。
* 默认值为 none。

文本变换 text-transform。
* 它的值：none, capitalize, uppercase, lowercase。
* 默认值为 none。

还有更多……<br>
>---
#### 字体
font-family 字体系列。按照首选项的顺序指定字体。浏览器以第一个字体开始。<br>
font-size 字体大小。浏览器默认的文字大小是“16px”，16px == 1em。推荐使用`em`。<br>
font-weight 权重。类似于颜色深浅。<br>
font-style 斜体字。<br>
还有更多……<br>
>---
#### 链接
四种链接状态。
* a:link - 未访问的链接
* a:visited - 已访问的链接
* a:hover - 一个悬停（mouses over it）链接。
* a:active - 链接正在点击。

>---
#### 伪类
除了链接的四种伪类之外，还有几种。
* focus	        input:focus	选择元素输入后具有焦点。
* first-letter	p:first-letter	选择每个<p> 元素的第一个字母。
* first-line	p:first-line	选择每个<p> 元素的第一行。
* first-child	p:first-child	选择器匹配属于任意元素的第一个子元素的 <p> 元素。
* before	    p:before	在每个<p>元素之前插入内容。
* after	        p:after	在每个<p>元素之后插入内容。
* lang(language)	p:lang(it)	为<p>元素的lang属性选择一个开始值

>---
#### 列表
列表分三种：有序、无序、自定义。<br>
list-style-type 列表标记。（点，十字或字母之类的）。<br>
list-style-image 图像标记样式。<br>
list-style-position 相对于 `<li>` 元素的内容框位置。
* inside，不包括标记。
* outside，全包括。

list-style 简写属性。后面直接跟相关值。<br>
>---
#### 表格
表格边框：`border: 1px solid black;`<br>
表边框折叠：border-collapse，一般默认是中空型的，这个是正常的意思。<br>
宽度和高度：width，height。<br>
表文本对齐：
* text-align 水平对齐。
* vertical-align 垂直对齐。

>---
#### 盒模型 Box Model
每个 HTML 元素都带有边框，边距，填充，内容的矩形框。
* Margin：边界外的透明区域。
* Border：边框在填充和内容的周围。
* padding：内容周围的透明区域。
* Content：实际文本和图像。

![盒模型](/simbaping.github.io/pic/box-model.gif)<br>
>---
#### 轮廓 Outline
是最外的边界线。不是元素尺寸的一部分。<br>
轮廓不被视为页面的一部分，因此咋应用他们时不会导致页面布局被调整。<br>
outline-color 将颜色设置为轮廓。Value: color<br>
outline-offset 设置轮廓的偏移量。Value:length<br>
outline-style 设置轮廓的样式。此值与border-style属性的值相同。<br>
outline-width 设置轮廓的宽度。Value:thin or medium or thick or length<br>
outline 简写属性在单个声明中设置轮廓。Value: color style width<br>

>---
#### 外边距 Margin
Margin外边距是元素边界与其周围之间的距离。这包括其他元素和父元素。
* margin-top 设置顶边的边距。Value: auto length %
* margin-right 设置右边的边距。Value: auto length %
* margin-bottom 设置底边的页边距。Value: auto length %
* margin-left 设置左边的边距。Value: auto length %
* margin 此简写属性在单个声明中设置所有边的边距。Value: 1 - 4 auto length %

百分比值始终从包含块的宽度导出，即使用于填充顶部和底部边缘。<br>
对于内联元素，其边距不会显示在顶部和底部边缘。<br>
>---
#### 边框 Border
border-width：设置边框的**宽度**。<br>
border-style：设置用于绘制边框的**样式**。实线虚线之类的有好多。<br>
border-color：设置边框的**颜色**。<br>
还可以设置单边边框：border-top-width，等等……<br>
简写属性。<br>
>---
#### 填充 Padding
添加元素的内容和其边框之间的空间。<br>
padding-top 设置顶边的填充。Value: length or %<br>
padding-right 设置右边的填充。Value: length or %<br>
padding-bottom 设置底边的填充。Value: length or %<br>
padding-left 设置左边的填充。Value: length or %<br>
padding 此简写属性在单个声明中设置所有边的填充。<br>
当使用 % 指定填充时，% 始终从包含块的宽度导出。<br>
四个边都有数值。<br>
>---
#### 尺寸 Size
width，height：设置元素的宽度和高度。Value: auto or length or %<br>
min-width，min-height：设置元素的最小可接受宽度或高度。Value: auto or length or %<br>
max-width，max-height：设置元素的最大可接受宽度或高度。Value: auto length %<br>
box-sizing：设置元素框的哪个部分用于大小调整。Value: content-box or padding-box or border-box or margin-box<br>
所有这些属性的默认值都是 auto，浏览器会找出元素的宽度和高度。

>---
#### 水平对齐
块元素对齐，块元素是一个元素，占用了全宽，前后都是换行符。<br>
中心对齐，使用 `margin：auto`。<br>
position 属性设置左右对齐。<br>
float 属性设置左右对齐。<br>
---
### 四、布局 Layout
>---
#### 显示 Display
显示 `display`，隐藏 `visibility`。<br>
隐藏元素：
* `display: none` ，但是元素仍然占据空间并影响布局。
* `visibility: hidden` ，并从布局中删除元素。

块元素 block，内联元素 inline。<br>
inline-block 值混合块和内联特性。
* 盒子的外部被视为内联元素。不会为元素创建新行。
* 盒子的内部被视为块元素，并应用诸如宽度，高度和边距到底属性。

>---
#### 定位 Position
元素的位置有顶部，右侧，底部，左侧属性控制。<br>
除非先设置 position 属性，否则这些属性将不起作用。<br>
它的值：
* static：布局正常。 这是默认值。
* relative：相对于其正常位置定位。
* absolute：相对于其具有非静态位置值的其第一祖先定位。
* fixed：相对于浏览器窗口定位。

可以使用 top，bottom，left，right 属性，将元素从 position 属性指定的元素中移除。<br>
**静态定位**：
* 默认 HTML 元素处于静态。
* 根据页面的正常流动定位。
* 不受上右下左属性的影响。

**固定定位**
* 相对于浏览器的窗口放置，占据相同的位置，即使内容的其余部分向上或向下滚动。
* 固定元素从正常流中移除。
* 固定定位的元素可以与其他元素重叠。
* 具有固定位置的元素始终相对于浏览器的视口定位，而不是在文档的结构中。
* 具有固定位置的元素保持在原位，即使文档被滚动。

**相对定位**
* 相对于其正常位置定位。
* 相对于静态值下的位置。
* 相对定位的元素通常用作绝对定位的元素的容器块。

**绝对定位**
* 相对于将元素相对于具有非静态位置值得最近父亲定位。如果没有这样的元素，则元素相对于主体元素定位。
* 绝对定位从正常流中移除。其他元素的行为就像没有绝对定位元素。
* 绝对定位的元素可以与其他元素重叠。

**重叠**
`z-index` 在重叠期间控制图层的顺序。值为1、2之类的数字。

>---
#### 浮动 Float
**Float**
创建浮动框，将其移动到一边，直到左边缘或右边缘触及包含块或另一个浮动框的边缘。<br>
它的值：
* left：使左边缘接触包含块的左边缘或另一浮动块的右边缘。
* right：使右边缘接触包含块的右边缘或另一浮动块的左边缘。
* none：元素不浮动。

**Clear**
默认情况下，浮动元素将堆叠在一起。clear 属性清除堆叠。<br>
它指定浮动元素的一个或两个边缘必须不与另一个浮动元素的边缘邻接。<br>
它的值：
* left：元素的左边缘可能不与另一个浮动元素邻接。
* right：元素的右边缘可能不与另一个浮动元素邻接。
* both：两边都不能与另一个浮动元素邻接。
* none：元素不被清除，并且任一边缘可以邻接另一个浮动元素。

>---
### 五、媒体类型
>---
指定文件将如何在不同媒体呈现。<br>
`@media` 规则。相同样式表在不同媒体设置不同的样式。<br>
例如：
* all：用于所有的媒体设备。
* aural：用于语音和音频合成器。
* braille：用于盲人用点字法触觉回馈设备。
* embossed：用于分页的盲人用点字法打印机。
* handheld：用于小的手持的设备。
* print：用于打印机。
* projection：用于方案展示，比如幻灯片。
* screen：用于电脑显示器。
* tty：用于使用固定密度字母栅格的媒体，比如电传打字机和终端。
* tv：用于电视机类型的设备。
>---
### 六、响应式设计
>---
#### Viewport 视区
Viewport 是用户网页的可视区域。
翻译为中文可以叫做“视区”。
手机浏览器是把页面放在一个虚拟的“视区”中。
设置：
width：控制 viewport 的大小，可以指定的一个值，如果 600，或者特殊的值，如 device-width 为设备的宽度（单位为缩放为 100% 时的 CSS 的像素）。
height：和 width 相对应，指定高度。
initial-scale：初始缩放比例，也即是当页面第一次 load 的时候缩放比例。
maximum-scale：允许用户缩放到的最大比例。
minimum-scale：允许用户缩放到的最小比例。
user-scalable：用户是否可以手动缩放。
>---
#### 网格视图
网格视图通常为12列，宽度为100%，在浏览器窗口大小调整时会自动伸缩。
确保`* {box-sizing: border-box;}`。
```css
.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-5 {width: 41.66%;}
.col-6 {width: 50%;}
.col-7 {width: 58.33%;}
.col-8 {width: 66.66%;}
.col-9 {width: 75%;}
.col-10 {width: 83.33%;}
.col-11 {width: 91.66%;}
.col-12 {width: 100%;}

[class*="col-"] {
    float: left;
    padding: 15px;
    border: 1px solid red;
}
```
>---
#### @media 媒体查询
添加断点，不同的断点有不同的效果。
```css
/*当屏幕尺寸小于768px时，每一列的宽度为100%。*/
/* For desktop: */
.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-5 {width: 41.66%;}
.col-6 {width: 50%;}
.col-7 {width: 58.33%;}
.col-8 {width: 66.66%;}
.col-9 {width: 75%;}
.col-10 {width: 83.33%;}
.col-11 {width: 91.66%;}
.col-12 {width: 100%;}

@media only screen and (max-width: 768px) {
    /* For mobile phones: */
    [class*="col-"] {
        width: 100%;
    }
}
```
方向：
* `orientation：portrait | landscape`
* 竖屏-portrait：指定输出设备中的页面可见区域高度大于或等于宽度。
* 横屏-landscape： 除portrait值情况外，都是landscape。
```css
/*如果是横屏背景色为浅蓝色。*/
@media only screen and (orientation: landscape) {
    body {
        background-color: lightblue;
    }
}
```
>---
#### 图片
width 属性，如果 width 属性设置为 100%，图片会根据上下范围实现响应式功能。img {width: 100%; height: auto;}<br>
max-width 属性，如果 max-width 属性设置为 100%, 图片永远不会大于其原始大小。img {max-width:100%; height: auto;}<br>
背景图片，响应调整大小或缩放的三种方法。
* 如果 background-size 属性设置为 "contain", 背景图片将按比例自适应内容区域。图片保持其比例不变。
* 如果 background-size 属性设置为 "100% 100%" ，背景图片将延展覆盖整个区域。
* 如果 background-size 属性设置为 "cover"，则会把背景图像扩展至足够大，以使背景图像完全覆盖背景区域。注意该属性保持了图片的比例因此 背景图像的某些部分无法显示在背景定位区域中。

不同设备显示不同的图片。
* @media only screen and (min-width: 400px) { }，达到宽度即更换图片。
* @media only screen and (min-device-width: 400px) { }，检测到设备宽度不是浏览器宽度时，不更换图片。

`<picture>` 元素可以设置多张图片。类似于 `<video>` 和 `<audio>`。
>---
#### Video 视频
`video {width: 100%;height: auto;}` 根据屏幕大小自动调整比例。<br>
`video {max-width: 100%;height: auto;}` 根据屏幕调整比例，但不会超过其原始大小。<br>
在网页中添加视频。
>---
#### 框架
web 设计框架 bootstrap。<br>
Bootstrap 是基于 HTML、CSS、JAVASCRIPT 的。
---
