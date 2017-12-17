# [HTML](#HTML目录)[CSS](#CSS目录)[JavaScript](#HTML目录)
---
## HTML 目录
* [一、基础介绍](#基础介绍)
* [二、基本标签](#基本标签)
    * [基本标签](#基本标签)
    * [颜色](#颜色三种值)
    * [页面内容](#页面内容还是搞不懂这是不是有点多余)
    * [`<head>`中的元素](#head-中的元素)
    * [区块 `<span>` `<div>`](#区块-span-div)
    * [框架 `<iframe>`](#区块-iframe)
    * [超链接](#超链接)
    * [图片](#图片)
    * [格式化](#格式化)
    * [列表](#列表)
    * [`<iframe>`](#iframe)
* [三、表格](#表格)
* [四、表单](#表单)
    * [基本](#基本)
    * [表单编码](#表单编码)
    * [表单标签](#表单标签)
    * [表单元素分组](#表单元素分组)
    * [表单按钮](#表单按钮)
    * [表单输入](#表单输入)
    * [表单输入类型](#表单输入类型)
    * [表单选择](#表单选择)
    * [表单文本域](#表单文本域)
    * [表单输出](#表单输出)
    * [表单验证](#表单验证)
* [五、对象](#对象)
    * [`<object>`](#object)
    * [`<progress>`](#progress)
    * [`<meter>`](#meter)
    
---
### 一、基础介绍
>---
####  基础介绍：
标签：`<html></html>`。
* 自闭和标签：`<code/>` 斜杠在后。
* 换行标签：`<br/>`。
  注释：`<!--这里填写注释-->`。<br>
  元素：标签中间的成为元素。<br>

属性：顺序不重要。
* class 和 id 是全局属性。
* 布尔属性是没有值得属性，例如 disable。

`<!DOCTYPE HTML>` 声明，不区分大小写。<br>
嵌套。

---
### 二、基本标签
>---
#### 基本标签
标题 H1-H6。<br>
组标题 `<hgroup>`，允许处理多个标头元素作为单个项目。*（idea 不推荐使用这个）*。<br>
`<hr/>` 表示水平规则，一天横跨页面的线。<br>
`<p>` 段落，包含一个或多个相关句子的文本块。<br>
`<pre>` 预格式化内容，空格不会折叠，并保留格式。显示代码有用。<br>
`<blockquote>` 表示从另一个来源引用的块内容。类似于 `<q>`，但通常适用于较大数量的引用内容。可以使用 cite 属性以提供内容的原始源 URL。<br>
>---
#### 颜色，三种值
颜色名，`red`。<br>
十六进制，color hex,`#000000`。<br>
颜色RGB，`rgb(0,0,0)`。<br>
>---
#### 页面内容（还是搞不懂这是不是有点多余）
？`<article>`表示自包含HTML文档中的内容。<br>
？`<section>`， HTML5，表示文档的一部分。<br>
`<nav>`元素表示文档的一个部分包含到其他页面或同一页面的其他部分的链接。导航。<br>
？`<details>` 创建一个节，用户可以展开该节一获取有关主题的更多详细信息。<br>
`<header>` 表示节的标题。<br>
`<footer>` 表示部分的页脚。<br>
？`<aside>` 表示仅与周围元素相关的内容。类似于侧边栏。<br>
>---
#### `<head>` 中的元素
`<title>`：文档的标题。
`<style>`：内嵌的样式引用地址-CSS。
`<meta>`
* 元数据，不会显示，但是会被解析。
* 为搜索引擎定义关键字。`<meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript">`
* 为网页定义描述内容。`<meta name="description" content="Free Web tutorials on HTML and CSS">`
* 定义网页作者。`<meta name="author" content="Hege Refsnes">`
* 每三十秒刷新当前页面。`<meta http-equiv="refresh" content="30">`
* 编码，默认这个。`<meta charset="UTF-8">`

`<link>`：
* 在标题里面加图片，`<link rel="shortcut icon" type="image/x-icon" href="图片位置.ico" />`
* 链接外部样式表，`<link rel="stylesheet" type="text/css" href="mystyle.css">`

`<script>`：
* 用于加载脚本文件。
* `<script src="simple.js">``</script>`

`<noscript>`：向其显示为内容已禁止 JS，或正在使用浏览器的用户不支持它。<br>
`<base>` : 用来定义整个文件中的链接跳转属性。必须放在 `<head></head>` 里面。<br>
>---
#### 区块 `<span>` `<div>`
块级元素：
* block。
* 以新行开始。
* 它是可用于组合其他 HTML 元素的容器。
* 如果与 CSS 一同使用，`<div>` 元素可用于对大的内容块设置样式属性。
* 进行文档布局。
* 使用 `<table>` 元素进行文档布局不是表格的正确用法。

内联元素：
* inline。
* 通常不会以新行开始。
* 可用作文本的容器。

>---
#### 框架 `<iframe>`
内联框架。<br>
一个内联框架被用来在当前 HTML 文档中嵌入另一个文档。<br>
通过使用框架，你可以在同一个浏览器窗口中显示不止一个页面。<br>
`<iframe src="demo_iframe.htm" width="200" height="200" frameborder="0"></iframe>`
* frameborder="0" 移除边框。

>---
#### 超链接
`<a>` 元素具有局部属性：href，hreflang，media，rel，target，type。
* href：指定 a 元素引用的资源的 URL。
* hreflang：指定链接资源的语言。
* media：指定链接内容用于的设备。
* rel：指定文档和链接资源之间的关系类型。
* target：指定应在其中打开链接资源的浏览上下文。
* type：指定链接资源的 MIME 类型，例如 text/html。

符号 `#` 表示空链接。<br>
？？id, coords, shape, urn, charset, methods, rev 属性已过时。<br>
外部超链接：href。
* http, https, ftp, mailto。
* 如果不以 start 开头识别的协议，视为相对引用。

内部超链接：href，id。
* href 创建一个超链接 #tutorial，点击时，查找 id 属性，找不到就找 name 属性。

target 浏览上下文。
* _blank: 在新窗口打开。
* _parent:  打开父框架集中的文档。
* _self: 默认行为，在当前窗口打开。
* _top: 在窗口的整个主体中打开文档。
* `<frame>`: 在指定的框架中打开文档。

使用锚点伪类。
* a:link, unvisited.
* a:visited, visited.
* a:hover, mouse over link.
* a:active, selected.
  * a.red:visited {color:#FF0000;} 
  * `<a class="red" href="#">`this`</a>`

>---
####  图片
`<img>` 两个必须的属性：src，alt。
* `<img src="urlpath" alt="some_text" width="100" height="200">`

`<map>` 定义图像地图。<br>
`<area>`定义图像地图中的可点击区域。<br>
>---
#### 格式化
`<abbr>` 元素表示缩写。<br>
`<address>` 元素标记文档或文章元素的联系信息。<br>
`<strong>` 标记重要的文本。加粗。<br>
`<b>` 额外强调或重要性的文本跨度。加粗。<br>
`<bdi>` 标记为了文本方向性而与其他内容隔离的文本。<br>
`<bdo>` 元素指定一个明确的文本方向其内容，覆盖通常应用的自动方向性。<br>
`<br>` `<br/>`换行。<br>
`<cite>` 引用作品的标题，书、文章、电影。<br>
`<code>` 标记一段计算机代码。<br>
`<ins>` 标记添加的文本。
* 两个局部属性，cite：问什么文本被添加，datetime：进行修改的时间。

`<del>` 标记删除的文本。
* 两个局部属性，cite：问什么文本被删除，datetime：进行修改的时间。

`<dfn>` 定义一个术语。它解释了词或短语的意义。<br>
`<em>` 表示具有强调应力的文本跨度。斜体。<br>
`<i>` 表示文本具有与周围内容不同的性质。斜体。<br>
`<kbd>` 表示用户输入。<br>
`<mark>` 是 HTML5 和表示突出显示的文本。<br>
`<ruby>` `<rt>` `<rp>`。<br>
`<s>` 标记文本不再正确或准确。<br>
`<samp>` 表示来自程序或计算机系统的输出。<br>
`<small>` 标记精细打印和经常用于免责声明和澄清。<br>
`<sub>` 下标， `<sup>` 上标。<br>
`<time>` 表示时间和日期。局部属性：datetime，pubdate。<br>
`<u>` 通过添加下划线标记文本。<br>
`<var>` 标记编程上下文的变量。<br>
`<wbr>` HTML5，合适的地方打破内容的指南。<br>
>---
#### 列表
使用 CSS 来控制列表的显示。<br>
list-style-type CSS属性来控制要是用的项目符号样式。<br>
`<ul>` 无序列表。
* 在 HTML5 中，type 和 compact 属性已过时。

`<ol>` 有序列表。
* 在 HTML5 中添加 reversed 属性，conpact 已过时。
* start 属性，定义列表中第一个项目的序数值。
* type 属性，指示每个项目旁边应显示哪个标记。

自定义列表。
* `<dl>`，开始列表。
* `<dt>`，标头。
* `<dd>`，内容。

>---
#### ？`<figure>`
`<figure>` 和 `<figcaption>` 创建数字。<br>
>---
### 三、表格
---
占坑
>---
### 四、表单
>---
#### 基本

表单是用于从用户收集输入的 HTML 机制。<br>
创建表单三元素：form，input，button。<br>
局部属性表单元素：action，method，enctype，name，accept-charset，novalidata，target，autocomplete。<br>
表单 HTTP 方法：
* method 属性指定将哪个 HTTP 方法将表单数据发送到服务器。	
* 值为 get 和 post。默认 get。

>---
#### ？表单编码
enctype 属性指定浏览器如何编码数据并将其呈现给服务器。
* 三个允许值：
  * application/x-www-form-urlencoded 默认，无法上传文件。
  * multipart/form-data 将文件上传给服务器。
  * text/plain 因浏览器而异。

>---
#### 表单属性
？如果不想让浏览器自动填写表单，可以用 autocomplete 属性。
* 两个允许值：
  * on 允许浏览器天子表单，默认。
  * off 

默认行为是用响应服务器替换页面。target 属性。跟 `<a>` 的 target 属性相同。<br>
name 属性设置表单的唯一标识符。
* name 属性的值不会发送到服务器，不像输入元素上的属性name重要。
* 如果输入元素没有 name，则在提交表单是，用户输入的数据不会发送到服务器。

>---
#### 表单标签
`<label>` 为表单中的每个元素提供了一些上下文。<br>
它的局部属性：
* for
* form

id 属性添加到输入元素，标签使用这些 id 作为标签元素上 for 属性的值。
>---
#### 表单元素分组
`<fieldset>` 将一些元素组合在一起。<br>
它的局部属性：
* name
* form
* disabled

向每个 `<fieldset>` 元素添加 `<legend>` 元素以提供更多信息。<br>
`<legend>` 是 `<fieldset>` 元素的第一个子元素。<br>
通过将 disabled 属性应用于 `<fieldset>` 元素，可以在一个步骤中禁用多个输入元素。<br>
>---
#### 表单按钮
三种方法使用按钮通过设置三个不同的 type 属性。
* submit：提交表单。
    * 默认行为。
    * form：指定与按钮相关联的一个或多个表单。
    * formaction：覆盖表单元素上的操作属性，并指定要提交的新URL。
    * formenctype：覆盖表单元素上的enctype属性，并指定表单数据的编码方案。
    * formmethod：覆盖表单元素上的方法属性。
    * formtarget：覆盖表单元素上的target属性。
    * formnovalidate：覆盖表单上的novalidate属性以指定是否应执行客户端验证。

* reset：重置表单。
    * 按下将表单中的所有输入元素重置为其初始状态。

* button：通用按钮，没有特定的语义意义。
* 图像按钮。

>---
#### 表单输入
将 type 属性设置为 `<input>` 元素的文本，浏览器将显示单行文本框。<br>
它的属性：
* dirname - 控制文本方向性。
* list - 指定为此元素提供值的datalist元素的ID。
* maxlength - 指定用户可以在文本框中输入的最大字符数。
* pattern - 指定正则表达式模式以用于输入验证。
* placeholder - 指定一个提示，告诉用户您希望输入的种类。
* readonly - 如果存在，此属性使文本框为只读。
* required - 指定用户必须输入值以进行输入验证。
* size - 指定元素在文本框中可见的字符数中的宽度。
* value - 指定文本框的初始值。

>---
#### 表单输入类型
按钮输入。<br>
* 三种类型:
    * submit。
    * reset。
    * button。
* 按钮上显示的标签取自 value 属性。
* 不能使用按钮元素显示标记的文本。

密码输入。<br>
* 将 type 属性设置为 password 会创建用于输入密码的输入元素。
* 用户键入的字符有掩码字符表示。
* 它的属性：
    * maxlength - 设置用户可以在密码框中输入的最大字符数。
    * pattern - 指定用于输入验证的正则表达式模式。
    * placeholder - 指定一个提示，告诉用户您希望输入的种类。
    * readonly - 如果存在，则使密码框为只读，并且用户无法编辑内容。
    * required - 指定用户必须输入值以进行输入验证。
    * size - 指定元素的宽度，以字符数表示。
    * value - 指定密码的初始值。

限制数据项输入。<br>
* HTML5 为输入元素的 type 属性引入新值。
* 新类型值：
    * checkbox - 将输入限制为true / false复选框。
    * color - 将输入限制为颜色。
    * date - 将输入限制为日期。
    * datetime - 将输入限制为具有时区的全球日期和时间。
    * datetime-local - 将输入限制为不带时区的全局日期和时间。
    * email - 将输入限制为格式正确的电子邮件地址。
    * month - 将输入限制为年和月。
    * number - 将输入限制为整数或浮点数。
    * radiobutton - 将输入限制为固定的选项集。
    * range - 将输入限制为指定范围。
    * tel - 将输入限制为格式正确的电话号码。
    * time - 将输入限制为一天中的时间。
    * week - 将输入限制为年和周。
    * url - 将输入限制为完全限定的URL。

数字输入。<br>
* 数字值创建一个只接受数字值的输入框。
* 它的属性：
    * list - 设置为此元素提供值的datalist元素的id。
    * min - 为输入验证目的设置最小值。
    * max - 设置用于输入验证目的的最大值。
    * readonly - 如果存在，则使输入框为只读，并且用户无法编辑内容。
    * required - 用户必须提供用于输入验证目的的值。
    * step - 将增量和减量的步长设置为该值。
    * value - 指定元素的初始值。
* min, max, step, value 属性的值可以是表示为整数或十进制数。

范围输入。<br>
复选框输入。<br>
radio输入。<br>
电子邮件输入。<br>
tel 输入。<br>
url 输入。<br>
时间日期输入。<br>
颜色输入。<br>
搜索输入。<br>
隐藏输入。<br>
图像输入。<br>
文件上传输入。<br>
>---
#### 表单选择
`<select>` 元素创建用户选择地选项列表。<br>
它的属性：
* label：允许为已分组的选项创建标题。
* name
* disabled：使选项元素不可选。
* form
* size：指定要向用户显示的选项数。
* multiple：允许用户选择多个值。
* autofocus
* required

还可以包含其他元素：
* `<contents>`
* `<option>` ：定义要向用户显示的选项。
* `<optgroup>` ：仅用于结构，用户不能选择这些值作为值。

>---
#### 表单文本域
`<texarea>` 创建一个多行文本框。
它的属性：
* name
* disabled
* form
* readonly
* maxlength
* autofocus
* required
* firname
* rows：文本域的维度。
* warp：控制在提交表单是如何将换行符插入到文本中。
* cols：文本域的维度。

文本内容包裹在开始和结束标签之间。<br>
>---
#### 表单输出
输出元素表示计算的结果。
它的属性：
* name
* form
* for

>---
#### 表单验证
HTML5 引入了对输入验证的支持，通过属性管理输入验证。
* 验证属性: required
    * 确保用户提供一个值，在提供值之前，用户不能提交表单。
    * 元素: textarea, select, input (text, password, checkbox, radio, file, datetime,datetime-local, date, month, time, week, number, email, url, search, 和 tel 类型)

* 验证属性: min, max
    * bounded 输入，确保数值和日期值在特定范围内。
    * 元素: input (datetime, datetime-local, date, month, time, week, number, 和 range 类型)

* 验证属性: pattern
    * 匹配模式，确保值与正则表达式匹配。
    * 该模式确保用户输入两个名称，用空格分隔。
    * 元素: input (text, password, email, url, search, 和 tel 类型)

电子邮件或网址。
* 输入元素的电子邮件类型确保使用输入有效的电子邮件地址。
* 必需属性确保用户提供值。
* pattern属性确保电子邮件地址属于特定域（mydomain.com）。

禁用验证。
* 将 novalidate 属性应用于表单元素，
* 或将 formnovalidate 属性应用于可以提交表单的按钮和输入元素的类型来禁用表单验证。

>---
### 五、对象
>---
#### `<object>`
`<object>` 与 `<embed>` 具有相同的结果。
它的属性：
* data：提供内容的位置。
* type
* height
* width
* usemap
* name
* form

`<param>` ：定义要传递给插件的参数。使用属性名称和值。<br>
可以有零个或多个参数元素。<br>
表单元素是 HTML5 中的新属性。<br>
可以包括如果您指定的内容不可用将显示的内容。<br>
嵌入图像。<br>
创建客户端图像映射。
* usemap 属性可用于将 `<map>` 与 `<object>` 相关联。

`<embed>` 局部属性：
* scr：指定内容的位置。
* type: 指定内容的 MIME 类型。
* height：嵌入内容的大小。
* width：嵌入内容的大小。

>---
#### `<progress>`
可用于指示任务的逐渐完成。它的两个局部属性：value，max。
* value：定义当前进度，它在零和 max 属性的值之间。
* 当省略 max 属性时，比例在0和1之间。使用浮点数表示进度。

> ---
#### `<meter>`
显示在可能值范围的上下文中显示的值。<br>
局部属性：
* value
* form
* min 和 max 属性设置可能值范围的边界。可以使用浮点数来表示。
* low 属性设置值被认为过低的值。
* high 属性设置值被认为过高的值。
* optimum 属性指定“刚好正确”的值。

---
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
    * [盒模型](#盒模型)
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

>---
#### 背景
background-color 设置元素的背景颜色。颜色在任何图像后面绘制。<br>
background-image 设置元素的背景图像。如果指定了多个图像，则每个后续图像都绘制在其前面的图像之后。<br>
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
>颜色。<br>
>对齐方式 text-align。
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
font-size 字体大小。<br>
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
#### 盒模型
每个 HTML 元素都带有边框，边距，填充，内容的矩形框。
* Margin：边界外的透明区域。
* Border：边框在填充和内容的周围。
* padding：内容周围的透明区域。
* Content：实际文本和图像。

![盒模型](https://github.com/SimbaPing/simbaping.github.io/test/testpic/box-model.gif)<br>
>---
#### 轮廓 Outline
是最外的边界线。不是元素尺寸的一部分。
轮廓不被视为页面的一部分，因此咋应用他们时不会导致页面布局被调整。
outline-color 将颜色设置为轮廓。Value: color
outline-offset 设置轮廓的偏移量。Value:length
outline-style 设置轮廓的样式。此值与border-style属性的值相同。
outline-width 设置轮廓的宽度。Value:thin or medium or thick or length
outline 简写属性在单个声明中设置轮廓。Value: color style width<br>
>---
#### 外边距 Margin
Margin外边距是元素边界与其周围之间的距离。这包括其他元素和父元素。
* margin-top 设置顶边的边距。Value: auto length %
* margin-right 设置右边的边距。Value: auto length %
* margin-bottom 设置底边的页边距。Value: auto length %
* margin-left 设置左边的边距。Value: auto length %
* margin 此简写属性在单个声明中设置所有边的边距。Value: 1 - 4 auto length %

百分比值始终从包含块的宽度导出，即使用于填充顶部和底部边缘。
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
