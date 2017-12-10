# HTML & CSS & JS

---
## HTML
---
### 一、基础介绍
>---
####  基础介绍：
	标签：<html></html>。
		自闭和标签：<code/> 斜杠在后。
		换行标签：<hr/>。
	注释：<!--这里填写注释-->。
	元素：标签中间的成为元素。
	属性：顺序不重要。
		class 和 id 是全局属性。
		布尔属性是没有值得属性，例如 disable。
	结构体：外部结构：DOCTYPE, html。
	嵌套。
	元数据：
		title：元素设置文档的标题。
		base：设置基本 URL，局限属性，href 和 target。
		meta：文档的元数据。
		名称/值元数据对：name="autor"。
		字符集：用 meta 声明。
		字符编码：UTF-8。
		http-equiv：用途是覆盖：HTTP （超文本传输协议）头之一的值。
		http-equivalent：属性值refresh，default-style，content-type。
	样式：
		style 元素内联定义css样式。
		局限属性：type，media，scoped。
	资源链接：link。
	局限属性：href，rel, hreflang, media, type, sizes。
	图标：link。
	脚本：script。
		局限属性：type, src, defer, async, charset。
		外部脚本：<script src="simple.js"></script>
		async 和 defer：控制脚本执行。
		异步脚本。
		noscript：向其显示为内容已禁止 JS，或正在使用浏览器的用户不支持它。

---

### 二、基本标签
>---
#### 基本标签：
	标题 H1-H6。
	组标题 <hgroup>，允许处理多个标头元素作为单个项目。*（idea 不推荐使用这个）*。
	<hr/> 表示水平规则，一天横跨页面的线。
	<div> 不具有特殊的含义，创建结构，是 <span> 元素的 block。
	<span> 本身没有意义，使用它将一个全局属性应用于内容区域。
	块元素开始新行，行内元素保持同一行。
	<p> 段落，包含一个或多个相关句子的文本块。
	<pre> 预格式化内容，空格不会折叠，并保留格式。显示代码有用。
	<blockquote> 表示从另一个来源引用的块内容。类似于 <q>，但通常适用于较大数量的引用内容。可以使用 cite 属性以提供内容的原始源 URL。
>---
#### 页面内容：（还是搞不懂这是不是有点多余）
	？<article>表示自包含HTML文档中的内容。
	？<section>， HTML5，表示文档的一部分。
	<nav>元素表示文档的一个部分包含到其他页面或同一页面的其他部分的链接。导航。
	？<details> 创建一个节，用户可以展开该节一获取有关主题的更多详细信息。
	<header> 表示节的标题。
	<footer> 表示部分的页脚。
	？<aside> 表示仅与周围元素相关的内容。类似于侧边栏。
>---
#### 超链接：
	 <a> 元素具有局部属性：href，hreflang，media，rel，target，type。
		href：指定 a 元素引用的资源的 URL。
		hreflang：指定链接资源的语言。
		media：指定链接内容用于的设备。
		rel：指定文档和链接资源之间的关系类型。
		target：指定应在其中打开链接资源的浏览上下文。
		type：指定链接资源的 MIME 类型，例如 text/html。
		？？id, coords, shape, urn, charset, methods, rev 属性已过时。
	外部超链接：href。
		http, https, ftp, mailto。
		如果不以 start 开头识别的协议，视为相对引用。
	内部超链接：href，id。
		href 创建一个超链接 #tutorial，点击时，查找 id 属性，找不到就找 name 属性。
	target 浏览上下文。
		_blank: 在新窗口打开。
		_parent:  打开父框架集中的文档。
		_self: 默认行为，在当前窗口打开。
		_top: 在窗口的整个主体中打开文档。
		<frame>: 在指定的框架中打开文档。
	使用锚点伪类。
		a:link, unvisited.
		a:visited, visited.
		a:hover, mouse over link.
		a:active, selected.
			a.red:visited {color:#FF0000;} 
			<a class="red" href="#">this</a>
>---
	格式化：
		<abbr> 元素表示缩写。
		<address> 元素标记文档或文章元素的联系信息。
		<strong> 标记重要的文本。加粗。
		<b> 额外强调或重要性的文本跨度。加粗。
		<bdi> 标记为了文本方向性而与其他内容隔离的文本。
		<bdo> 元素指定一个明确的文本方向其内容，覆盖通常应用的自动方向性。
		<br> <br/>换行。
		<cite> 引用作品的标题，书、文章、电影。
		<code> 标记一段计算机代码。
		<ins> 标记添加的文本。
			两个局部属性，cite：问什么文本被添加，datetime：进行修改的时间。
		<del> 标记删除的文本。
			两个局部属性，cite：问什么文本被删除，datetime：进行修改的时间。
		<dfn> 定义一个术语。它解释了词或短语的意义。
		<em> 表示具有强调应力的文本跨度。斜体。
		<i> 表示文本具有与周围内容不同的性质。斜体。
		<kbd> 表示用户输入。
		<mark> 是 HTML5 和表示突出显示的文本。
		<ruby> <rt> <rp>。
		<s> 标记文本不再正确或准确。
		<samp> 表示来自程序或计算机系统的输出。
		<small> 标记精细打印和经常用于免责声明和澄清。
		<sub> 下标， <sup> 上标。
		<time> 表示时间和日期。局部属性：datetime，pubdate。
		<u> 通过添加下划线标记文本。
		<var> 标记编程上下文的变量。
		<wbr> HTML5，合适的地方打破内容的指南。
