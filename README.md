# HTML & CSS & JS
---
## HTML
---
### 一、基础介绍
>---
####  基础介绍：
标签：`<html></html>`。
* 自闭和标签：`<code/>` 斜杠在后。
* 换行标签：`<hr/>`。

注释：`<!--这里填写注释-->`。<br>
元素：标签中间的成为元素。<br>
属性：顺序不重要。
* class 和 id 是全局属性。
* 布尔属性是没有值得属性，例如 disable。

结构体：外部结构：DOCTYPE, html。<br>
嵌套。<br>
元数据：
* title：元素设置文档的标题。
* base：设置基本 URL，局限属性，href 和 target。
* meta：文档的元数据。
* 名称/值元数据对：name="autor"。
* 字符集：用 meta 声明。
* 字符编码：UTF-8。
* http-equiv：用途是覆盖：HTTP （超文本传输协议）头之一的值。
* http-equivalent：属性值refresh，default-style，content-type。

样式：
* style 元素内联定义css样式。
* 局限属性：type，media，scoped。

资源链接：link。<br>
局限属性：href，rel, hreflang, media, type, sizes。<br>
图标：link。<br>
脚本：script。
* 局限属性：type, src, defer, async, charset。
* 外部脚本：`<script src="simple.js">`</script>`
* async 和 defer：控制脚本执行。
* 异步脚本。
* noscript：向其显示为内容已禁止 JS，或正在使用浏览器的用户不支持它。

---
### 二、基本标签
>---
#### 基本标签

标题 H1-H6。<br>
组标题 `<hgroup>`，允许处理多个标头元素作为单个项目。*（idea 不推荐使用这个）*。<br>
`<hr/>` 表示水平规则，一天横跨页面的线。<br>
`<div>` 不具有特殊的含义，创建结构，是 `<span>` 元素的 block。	`<span>` 本身没有意义，使用它将一个全局属性应用于内容区域。<br>
块元素开始新行，行内元素保持同一行。<br>
`<p>` 段落，包含一个或多个相关句子的文本块。<br>
`<pre>` 预格式化内容，空格不会折叠，并保留格式。显示代码有用。<br>
`<blockquote>` 表示从另一个来源引用的块内容。类似于 `<q>`，但通常适用于较大数量的引用内容。可以使用 cite 属性以提供内容的原始源 URL。
>---
#### 页面内容：（还是搞不懂这是不是有点多余）
？`<article>`表示自包含HTML文档中的内容。<br>
？`<section>`， HTML5，表示文档的一部分。<br>
`<nav>`元素表示文档的一个部分包含到其他页面或同一页面的其他部分的链接。导航。<br>
？`<details>` 创建一个节，用户可以展开该节一获取有关主题的更多详细信息。<br>
`<header>` 表示节的标题。<br>
`<footer>` 表示部分的页脚。<br>
？`<aside>` 表示仅与周围元素相关的内容。类似于侧边栏。<br>
>---
#### 超链接
`<a>` 元素具有局部属性：href，hreflang，media，rel，target，type。
* href：指定 a 元素引用的资源的 URL。
* hreflang：指定链接资源的语言。
* media：指定链接内容用于的设备。
* rel：指定文档和链接资源之间的关系类型。
* target：指定应在其中打开链接资源的浏览上下文。
* type：指定链接资源的 MIME 类型，例如 text/html。

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
#### ？figure
figure 和 figcaption 创建数字。
>---
#### 图像
`<img>` 允许将图像嵌入到 HTML 文档中。<br>
局部属性：src, alt, height, width, usemap, ismap。<br>
HTML5 中，borde, longesc,  name, align, hspace, vspace 属性已过时。<br>
……
>---
#### iframe
现有元素中嵌入另一个 HTML 文档。<br>
局部属性：src, srcdoc, name, width, height, sandbox, seamless。<br>
HTML5 中的 sandbox， seamless 属性是新增的。还有一些过时的。<br>
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