# 一些遇到的问题

1. 网页中的网址 *href='//simbaping.github.io/a/b.txt'*，前面两个 `//`，后面没有东西。

    如果是延伸的网址，直接前面 `..` 就可以了。

2. 导航在头标签里垂直居中 li {line-height: 头部高度;}。

3. 导航栏（navigation bar）。

    * ul 删除外边距和内边距，将前面的标志去掉。整个块浮动到右边。
    * li 是块元素，将其转换为内联元素，从而都放入一行内。
    * a 链接设置为行内块元素，设置好宽度后可以点击整个区域。

4. `<div>` 里添加 **display: block**；有用吗？

    对所有的块元素都没有意义，块元素的 display 属性默认值为 block，没必要再显式定义——除非你之前对块元素的 display 属性重新定义过。

5. **body {margin: 0; padding: 0;}** 可以使页面周围与浏览器没有间隙。

6. **.row:after {content: ""; clear: both; display: block;}**

    如果有一个DIV作为外部容器，内部的DIV如果设置了 float 样式，则外部的容器 DIV 因为内部没有 clear，

    导致不能被撑开。这个 row 的 CSS 使用了after这个伪对象，它将在应用 row 的元素的结尾添加content中的内容。

    在这里添加了一个句号""，并且把它的 display 设置成 block；clear 设为 both。这样就达到了撑开容器的目的啦。

7. **body,p,h1,h2,h3,h4,h5,h6{margin:0; ~~padding:0;~~}**

    对于body,p,h1~6这些标签，本身的padding值就是0，所以只需要margin:0就可以了。

    把 ul，ol 独立出来，因为 ul，ol 还要独立设置 list-style 样式，而且常用的标签就 ul，ol 列表元素有默认的 padding 值，所以高效的写法应该是：**ul,ol{list-type:none; margin:0; padding:0;}**

8. 错误用法。

    **div{~~width:auto; height:auto;~~}**

    **li{~~display:block;~~ padding:4px 0;}**，li 本身就是块元素。

    **span{~~display:inline;~~ float:left; margin-left:3px;}**，span 本身就是行内元素。

9. 顺序：

    css优先级的顺序是：“元素上的style” > “文件头上的style元素” >“外部样式文件”。

    样式优先级的顺序是：id选择器指定的样式 > 类选择器指定的样式 > 元素类型选择器指定的样式。

    一个选择器中有多种样式，样式表中越靠后的优先级越高。

    想让优先级变高，**.class1 {color: black *!important;*}** 。*!important*的样式属性不被覆盖。
