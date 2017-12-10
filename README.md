# HTML & CSS & JS

---

## HTML

---

### 一、基础介绍
>---
* **标签**：<html></html>。
	自闭和标签：<code/> 斜杠在后。
	换行标签：<hr/>。
* 注释：<!--这里填写注释-->。
* **元素**：标签中间的成为元素。
* 属性：顺序不重要。
	class 和 id 是全局属性。
	布尔属性是没有值得属性，例如 disable。
* 结构体：外部结构：DOCTYPE, html。
* 嵌套。
* 元数据：
	title：元素设置文档的标题。
	base：设置基本 URL，局限属性，href 和 target。
	meta：文档的元数据。
	名称/值元数据对：name="autor"。
	字符集：用 meta 声明。
	字符编码：UTF-8。
	http-equiv：用途是覆盖：HTTP （超文本传输协议）头之一的值。
	http-equivalent：属性值refresh，default-style，content-type。
* **样式**：
	style 元素内联定义css样式。
	局限属性：type，media，scoped。
* 资源链接：link。
	局限属性：href，rel, hreflang, media, type, sizes。
* 图标：link。
* **脚本**：script。
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

