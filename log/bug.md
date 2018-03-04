1. 网页中的网址 *href='//simbaping.github.io/a/b.txt'*,前面两个`//`,后面没有东西。
如果是延伸的网址，直接前面`..`就可以了。

2. 导航在头标签里垂直居中 li {line-height: 头部高度;}。

3. 导航栏（navigation bar）。
* ul 删除外边距和内边距，将前面的标志去掉。整个块浮动到右边。
* li 是块元素，将其转换为内联元素，从而都放入一行内。
* a 链接设置为行内块元素，设置好宽度后可以点击整个区域。

4. `<div>` 里添加 **display: block**;有用吗？<br>

对所有的块元素都没有意义，块元素的display属性默认值为block，没必要再显式定义——除非你之前对块元素的display属性重新定义过。

5. **body {margin: 0; padding: 0;}** 可以使页面周围与浏览器没有间隙。

6. **.row:after {content: ""; clear: both; display: block;}** <br/>
如果有一个DIV作为外部容器，内部的DIV如果设置了float样式，则外部的容器DIV因为内部没有clear，<br>
导致不能被撑开。这个row的CSS使用了after这个伪对象，它将在应用row的元素的结尾添加content中的内容。<br>
在这里添加了一个句号""，并且把它的display设置成block；clear设为both。这样就达到了撑开容器的目的啦。

7. **body,p,h1,h2,h3,h4,h5,h6{margin:0; ~~padding:0;~~}**<br>
对于body,p,h1~6这些标签，本身的padding值就是0，所以只需要margin:0就可以了。<br>
把ul,ol独立出来，因为ul,ol还要独立设置list-style样式，而且常用的标签就ul,ol列表元素有默认的padding值，所以高效的写法应该是：<br>
**ul,ol{list-type:none; margin:0; padding:0;}**

8. 错误用法：<br>
**div{~~width:auto; height:auto;~~}**<br>
**li{~~display:block;~~ padding:4px 0;}**，li 本身就是块元素。<br>
**span{~~display:inline;~~ float:left; margin-left:3px;}**，span 本身就是行内元素。<br>

9. 顺序：<br>
css优先级的顺序是：“元素上的style” > “文件头上的style元素” >“外部样式文件”。<br>
样式优先级的顺序是：id选择器指定的样式 > 类选择器指定的样式 > 元素类型选择器指定的样式。
一个选择器中有多种样式，样式表中越靠后的优先级越高。
想让优先级变高，**.class1 {color: black *!important;*}** 。*!important*的样式属性不被覆盖。