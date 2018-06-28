# HTML 目录

- [一、基础介绍](#一基础介绍)
- [二、基本标签](#二基本标签)
  - [基本标签](#基本标签)
  - [颜色](#颜色，三种值)
  - [页面内容](#页面内容（还是搞不懂这是不是有点多余）)
  - [`<head>`中的元素](#head-中的元素)
  - [区块 `<span>` `<div>`](#区块-span-div)
  - [框架 `<iframe>`](#框架-iframe)
  - [超链接](#超链接)
  - [图片](#图片)
  - [格式化](#格式化)
  - [列表](#列表)
  - [`<iframe>`](#？figure)
- [三、表格](#三、表格)
- [四、表单](#四、表单)
  - [基本](#基本)
  - [表单编码](#？表单编码)
  - [表单标签](#表单标签)
  - [表单元素分组](#表单元素分组)
  - [表单按钮](#表单按钮)
  - [表单输入](#表单输入)
  - [表单输入类型](#表单输入类型)
  - [表单选择](#表单选择)
  - [表单文本域](#表单文本域)
  - [表单输出](#表单输出)
  - [表单验证](#表单验证)
- [五、对象](#对象)
  - [`<object>`](#object)
  - [`<progress>`](#progress)
  - [`<meter>`](#meter)

## 一、基础介绍

## 基础介绍：

标签：`<html></html>`。

- 自闭和标签：`<code/>` 斜杠在后。
- 换行标签：`<br/>`。

注释：`<!--这里填写注释-->`。

元素：标签中间的成为元素。

属性：顺序不重要。

- class 和 id 是全局属性。
- 布尔属性是没有值得属性，例如 disable。

`<!DOCTYPE html>` 声明，不区分大小写。

嵌套。

### 二、基本标签

#### 基本标签

标题 H1-H6。

组标题 `<hgroup>`，允许处理多个标头元素作为单个项目。_（idea 不推荐使用这个）_。

`<hr/>` 表示水平规则，一天横跨页面的线。

`<p>` 段落，包含一个或多个相关句子的文本块。

`<pre>` 预格式化内容，空格不会折叠，并保留格式。显示代码有用。

`<blockquote>` 表示从另一个来源引用的块内容。类似于 `<q>`，但通常适用于较大数量的引用内容。可以使用 cite 属性以提供内容的原始源 URL。

#### 颜色，三种值

颜色名，`red`。

十六进制，color hex,`#000000`。

颜色 RGB，`rgb(0,0,0)`。

#### 页面内容（还是搞不懂这是不是有点多余）

？`<article>`表示自包含 HTML 文档中的内容。

？`<section>`， HTML5，表示文档的一部分。

`<nav>`元素表示文档的一个部分包含到其他页面或同一页面的其他部分的链接。导航。

？`<details>` 创建一个节，用户可以展开该节一获取有关主题的更多详细信息。

`<header>` 表示节的标题。

`<footer>` 表示部分的页脚。

？`<aside>` 表示仅与周围元素相关的内容。类似于侧边栏。

#### `<head>` 中的元素

`<title>`：文档的标题。

`<style>`：内嵌的样式引用地址-CSS。

`<meta>`：

- 元数据，不会显示，但是会被解析。
- 为搜索引擎定义关键字。`<meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript">`
- 为网页定义描述内容。`<meta name="description" content="Free Web tutorials on HTML and CSS">`
- 定义网页作者。`<meta name="author" content="Hege Refsnes">`
- 每三十秒刷新当前页面。`<meta http-equiv="refresh" content="30">`
- 编码，默认这个。`<meta charset="UTF-8">`

`<link>`：

- 在标题里面加图片，`<link rel="shortcut icon" type="image/x-icon" href="图片位置.ico" />`
- 链接外部样式表，`<link rel="stylesheet" type="text/css" href="mystyle.css">`

`<script>`：

- 用于加载脚本文件。
- ` <script src="simple.js">``</script> `

`<noscript>`：向其显示为内容已禁止 JS，或正在使用浏览器的用户不支持它。

`<base>` : 用来定义整个文件中的链接跳转属性 `<base target="_blank"/>`。必须放在 `<head></head>` 里面。

#### 区块 `<span>` `<div>`

块级元素：

- block。
- 以新行开始。
- 它是可用于组合其他 HTML 元素的容器。
- 如果与 CSS 一同使用，`<div>` 元素可用于对大的内容块设置样式属性。
- 进行文档布局。
- 使用 `<table>` 元素进行文档布局不是表格的正确用法。

内联元素：

- inline。
- 通常不会以新行开始。
- 可用作文本的容器。

#### 框架 `<iframe>`

内联框架。
一个内联框架被用来在当前 HTML 文档中嵌入另一个文档。
通过使用框架，你可以在同一个浏览器窗口中显示不止一个页面。
`<iframe src="demo_iframe.htm" width="200" height="200" frameborder="0"></iframe>`

- frameborder="0" 移除边框。

#### 超链接

`<a>` 元素具有局部属性：href，hreflang，media，rel，target，type。

- href：指定 a 元素引用的资源的 URL。
- hreflang：指定链接资源的语言。
- media：指定链接内容用于的设备。
- rel：指定文档和链接资源之间的关系类型。
- target：指定应在其中打开链接资源的浏览上下文。
- type：指定链接资源的 MIME 类型，例如 text/html。

符号 `#` 表示空链接。

？？id, coords, shape, urn, charset, methods, rev 属性已过时。

外部超链接：href。

- http, https, ftp, mailto。
- 如果不以 start 开头识别的协议，视为相对引用。

内部超链接：href，id。

- href 创建一个超链接 #tutorial，点击时，查找 id 属性，找不到就找 name 属性。

target 浏览上下文。

- \_blank: 在新窗口打开。
- \_parent: 打开父框架集中的文档。
- \_self: 默认行为，在当前窗口打开。
- \_top: 在窗口的整个主体中打开文档。
- `<frame>`: 在指定的框架中打开文档。

使用锚点伪类。

- a:link, unvisited.
- a:visited, visited.
- a:hover, mouse over link.
- a:active, selected.
  - a.red:visited {color:#FF0000;}
  - `<a class="red" href="#">`this`</a>`

#### 图片

`<img>` 两个必须的属性：src，alt。

- `<img src="urlpath" alt="some_text" width="100" height="200">`

`<map>` 定义图像地图。

`<area>`定义图像地图中的可点击区域。

#### 格式化

`<abbr>` 元素表示缩写。
`<address>` 元素标记文档或文章元素的联系信息。
`<strong>` 标记重要的文本。加粗。
`<b>` 额外强调或重要性的文本跨度。加粗。
`<bdi>` 标记为了文本方向性而与其他内容隔离的文本。
`<bdo>` 元素指定一个明确的文本方向其内容，覆盖通常应用的自动方向性。
`<br>` `<br/>`换行。
`<cite>` 引用作品的标题，书、文章、电影。
`<code>` 标记一段计算机代码。
`<ins>` 标记添加的文本。

- 两个局部属性，cite：问什么文本被添加，datetime：进行修改的时间。

`<del>` 标记删除的文本。

- 两个局部属性，cite：问什么文本被删除，datetime：进行修改的时间。

`<dfn>` 定义一个术语。它解释了词或短语的意义。

`<em>` 表示具有强调应力的文本跨度。斜体。

`<i>` 表示文本具有与周围内容不同的性质。斜体。

`<kbd>` 表示用户输入。

`<mark>` 是 HTML5 和表示突出显示的文本。

`<ruby>` `<rt>` `<rp>`。

`<s>` 标记文本不再正确或准确。

`<samp>` 表示来自程序或计算机系统的输出。

`<small>` 标记精细打印和经常用于免责声明和澄清。

`<sub>` 下标， `<sup>` 上标。

`<time>` 表示时间和日期。局部属性：datetime，pubdate。

`<u>` 通过添加下划线标记文本。

`<var>` 标记编程上下文的变量。

`<wbr>` HTML5，合适的地方打破内容的指南。

#### 列表

使用 CSS 来控制列表的显示。

list-style-type CSS 属性来控制要是用的项目符号样式。

`<ul>` 无序列表。

- 在 HTML5 中，type 和 compact 属性已过时。

`<ol>` 有序列表。

- 在 HTML5 中添加 reversed 属性，conpact 已过时。
- start 属性，定义列表中第一个项目的序数值。
- type 属性，指示每个项目旁边应显示哪个标记。

去掉下划线： `text-decoration: none`。

自定义列表。

- `<dl>`，开始列表。
- `<dt>`，标头。
- `<dd>`，内容。

#### ？`<figure>`

`<figure>` 和 `<figcaption>` 创建数字。

### 三、表格

## 占坑

### 四、表单

#### 基本

表单是用于从用户收集输入的 HTML 机制。

创建表单三元素：form，input，button。

局部属性表单元素：action，method，enctype，name，accept-charset，novalidata，target，autocomplete。
表单 HTTP 方法：

- method 属性指定将哪个 HTTP 方法将表单数据发送到服务器。
- 值为 get 和 post。默认 get。

#### ？表单编码

enctype 属性指定浏览器如何编码数据并将其呈现给服务器。

- 三个允许值：
  - application/x-www-form-urlencoded 默认，无法上传文件。
  - multipart/form-data 将文件上传给服务器。
  - text/plain 因浏览器而异。

#### 表单属性

？如果不想让浏览器自动填写表单，可以用 autocomplete 属性。

- 两个允许值：
  - on 允许浏览器天子表单，默认。
  - off

默认行为是用响应服务器替换页面。target 属性。跟 `<a>` 的 target 属性相同。

name 属性设置表单的唯一标识符。

- name 属性的值不会发送到服务器，不像输入元素上的属性 name 重要。
- 如果输入元素没有 name，则在提交表单是，用户输入的数据不会发送到服务器。

#### 表单标签

`<label>` 为表单中的每个元素提供了一些上下文。
它的局部属性：

- for
- form

id 属性添加到输入元素，标签使用这些 id 作为标签元素上 for 属性的值。

#### 表单元素分组

`<fieldset>` 将一些元素组合在一起。

它的局部属性：

- name
- form
- disabled

向每个 `<fieldset>` 元素添加 `<legend>` 元素以提供更多信息。

`<legend>` 是 `<fieldset>` 元素的第一个子元素。

通过将 disabled 属性应用于 `<fieldset>` 元素，可以在一个步骤中禁用多个输入元素。

#### 表单按钮

三种方法使用按钮通过设置三个不同的 type 属性。

- submit：提交表单。

  - 默认行为。
  - form：指定与按钮相关联的一个或多个表单。
  - formaction：覆盖表单元素上的操作属性，并指定要提交的新 URL。
  - formenctype：覆盖表单元素上的 enctype 属性，并指定表单数据的编码方案。
  - formmethod：覆盖表单元素上的方法属性。
  - formtarget：覆盖表单元素上的 target 属性。
  - formnovalidate：覆盖表单上的 novalidate 属性以指定是否应执行客户端验证。

- reset：重置表单。

  - 按下将表单中的所有输入元素重置为其初始状态。

- button：通用按钮，没有特定的语义意义。
- 图像按钮。

#### 表单输入

将 type 属性设置为 `<input>` 元素的文本，浏览器将显示单行文本框。

它的属性：

- dirname - 控制文本方向性。
- list - 指定为此元素提供值的 datalist 元素的 ID。
- maxlength - 指定用户可以在文本框中输入的最大字符数。
- pattern - 指定正则表达式模式以用于输入验证。
- placeholder - 指定一个提示，告诉用户您希望输入的种类。
- readonly - 如果存在，此属性使文本框为只读。
- required - 指定用户必须输入值以进行输入验证。
- size - 指定元素在文本框中可见的字符数中的宽度。
- value - 指定文本框的初始值。

#### 表单输入类型

按钮输入。

- 三种类型：

  - submit。
  - reset。
  - button。

- 按钮上显示的标签取自 value 属性。
- 不能使用按钮元素显示标记的文本。

密码输入。

- 将 type 属性设置为 password 会创建用于输入密码的输入元素。
- 用户键入的字符有掩码字符表示。
- 它的属性：
  - maxlength - 设置用户可以在密码框中输入的最大字符数。
  - pattern - 指定用于输入验证的正则表达式模式。
  - placeholder - 指定一个提示，告诉用户您希望输入的种类。
  - readonly - 如果存在，则使密码框为只读，并且用户无法编辑内容。
  - required - 指定用户必须输入值以进行输入验证。
  - size - 指定元素的宽度，以字符数表示。
  - value - 指定密码的初始值。

限制数据项输入。

- HTML5 为输入元素的 type 属性引入新值。
- 新类型值：
  - checkbox - 将输入限制为 true / false 复选框。
  - color - 将输入限制为颜色。
  - date - 将输入限制为日期。
  - datetime - 将输入限制为具有时区的全球日期和时间。
  - datetime-local - 将输入限制为不带时区的全局日期和时间。
  - email - 将输入限制为格式正确的电子邮件地址。
  - month - 将输入限制为年和月。
  - number - 将输入限制为整数或浮点数。
  - radiobutton - 将输入限制为固定的选项集。
  - range - 将输入限制为指定范围。
  - tel - 将输入限制为格式正确的电话号码。
  - time - 将输入限制为一天中的时间。
  - week - 将输入限制为年和周。
  - url - 将输入限制为完全限定的 URL。

数字输入。

- 数字值创建一个只接受数字值的输入框。
- 它的属性：
  - list - 设置为此元素提供值的 datalist 元素的 id。
  - min - 为输入验证目的设置最小值。
  - max - 设置用于输入验证目的的最大值。
  - readonly - 如果存在，则使输入框为只读，并且用户无法编辑内容。
  - required - 用户必须提供用于输入验证目的的值。
  - step - 将增量和减量的步长设置为该值。
  - value - 指定元素的初始值。
- min, max, step, value 属性的值可以是表示为整数或十进制数。

范围输入。

复选框输入。

radio 输入。

电子邮件输入。

tel 输入。

url 输入。

时间日期输入。

颜色输入。

搜索输入。

隐藏输入。

图像输入。

文件上传输入。

#### 表单选择

`<select>` 元素创建用户选择地选项列表。

它的属性：

- label：允许为已分组的选项创建标题。
- name
- disabled：使选项元素不可选。
- form
- size：指定要向用户显示的选项数。
- multiple：允许用户选择多个值。
- autofocus
- required

还可以包含其他元素：

- `<contents>`
- `<option>` ：定义要向用户显示的选项。
- `<optgroup>` ：仅用于结构，用户不能选择这些值作为值。

#### 表单文本域

`<texarea>` 创建一个多行文本框。

它的属性：

- name
- disabled
- form
- readonly
- maxlength
- autofocus
- required
- firname
- rows：文本域的维度。
- warp：控制在提交表单是如何将换行符插入到文本中。
- cols：文本域的维度。

文本内容包裹在开始和结束标签之间。

#### 表单输出

输出元素表示计算的结果。

它的属性：

- name
- form
- for

#### 表单验证

HTML5 引入了对输入验证的支持，通过属性管理输入验证。

- 验证属性：required

  - 确保用户提供一个值，在提供值之前，用户不能提交表单。
  - 元素：textarea, select, input (text, password, checkbox, radio, file, datetime,datetime-local, date, month, time, week, number, email, url, search, 和 tel 类型)

- 验证属性：min, max

  - bounded 输入，确保数值和日期值在特定范围内。
  - 元素：input (datetime, datetime-local, date, month, time, week, number, 和 range 类型)

- 验证属性：pattern
  - 匹配模式，确保值与正则表达式匹配。
  - 该模式确保用户输入两个名称，用空格分隔。
  - 元素：input (text, password, email, url, search, 和 tel 类型)

电子邮件或网址。

- 输入元素的电子邮件类型确保使用输入有效的电子邮件地址。
- 必需属性确保用户提供值。
- pattern 属性确保电子邮件地址属于特定域（mydomain.com）。

禁用验证。

- 将 novalidate 属性应用于表单元素，
- 或将 formnovalidate 属性应用于可以提交表单的按钮和输入元素的类型来禁用表单验证。

### 五、对象

[回到顶端](#html目录)

#### `<object>`

`<object>` 与 `<embed>` 具有相同的结果。

它的属性：

- data：提供内容的位置。
- type
- height
- width
- usemap
- name
- form

`<param>` ：定义要传递给插件的参数。使用属性名称和值。

可以有零个或多个参数元素。

表单元素是 HTML5 中的新属性。

可以包括如果您指定的内容不可用将显示的内容。

嵌入图像。

创建客户端图像映射。

- usemap 属性可用于将 `<map>` 与 `<object>` 相关联。

`<embed>` 局部属性：

- scr：指定内容的位置
- type：指定内容的 MIME 类型
- height：嵌入内容的大小
- width：嵌入内容的大小

#### `<progress>`

可用于指示任务的逐渐完成。它的两个局部属性：value，max。

- value：定义当前进度，它在零和 max 属性的值之间。
- 当省略 max 属性时，比例在 0 和 1 之间。使用浮点数表示进度。

#### `<meter>`

显示在可能值范围的上下文中显示的值。

局部属性：

- value
- form
- min 和 max 属性设置可能值范围的边界。可以使用浮点数来表示。
- low 属性设置值被认为过低的值。
- high 属性设置值被认为过高的值。
- optimum 属性指定“刚好正确”的值。
