1. 网页中的网址 `href='//simbaping.github.io/a/b.txt'`,前面两个`//`,后面没有东西。
如果是延伸的网址，直接前面`..`就可以了。

2. 导航在头标签里垂直居中 `li {line-height: 头部高度;}`。

3. 导航栏（navigation bar）。
* ul 删除外边距和内边距，将前面的标志去掉。整个块浮动到右边。
* li 是块元素，将其转换为内联元素，从而都放入一行内。
* a 链接设置为行内块元素，设置好宽度后可以点击整个区域。

4. `<div>` 里添加 `dispaly: block;`有用吗？
对所有的块元素都没有意义，块元素的dispaly属性默认值为block，没必要再显式定义——除非你之前对块元素的display属性重新定义过。

5. `body {margin: 0; padding: 0;}` 可以使页面周围与浏览器没有间隙。

6. `.row:after {content: ""; clear: both; display: block;}`<br>
如果有一个DIV作为外部容器，内部的DIV如果设置了float样式，则外部的容器DIV因为内部没有clear，<br>
导致不能被撑开。这个row的CSS使用了after这个伪对象，它将在应用row的元素的结尾添加content中的内容。<br>
在这里添加了一个句号""，并且把它的display设置成block；clear设为both。这样就达到了撑开容器的目的啦。