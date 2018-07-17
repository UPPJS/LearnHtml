# Javascript

目录

## 导论

### 概述

JavaScript 是轻量级脚本语言，嵌入式语言。

核心语法只包括两个部分：基本语法结构和标准库。

宿主环境：浏览器和服务器。各种宿主环境提供额外 API：浏览器控制类、DOM 类和 Web 类。

### JS 历史

占坑，想一下怎么简单的说一下。

### 基本语法

行（line），语句（statement）。

变量名区分大小写。
变量只声明而没有赋值，该变量的值为 undefined，表示无意义。
变量提升。

标识符（Identity）：第一个字符任意 Unicode 字母，以及 `$` 和 `_`。第二个字符以及后面的字符，除了之前那些再添加数字。

注释：单行 `//`，多行 `/*` 和 `*/`。只用于行首的注释 `<!-- -->`。

大括号，区块（block）。区块不构成单独的作用域（scope）。

## 数据类型

### 简介

数值（number）：整数和小数。

- 所有数字都是以64位浮点数形式存储，1 == 1.0
- 数值精度。
- 数值的进制。
- parseInt() 转为整数，parseFloat() 转为浮点数，isNaN() 是否为 NaN，isFinite() 返回一个布尔值。

字符串（string）：文本。

布尔值（Boolean）：表示真伪的两个特殊值。

- 值为 false：undefined, null, false, 0, NaN, ""（即空字符串）。
- 空数组 `[]`，空对象 `{}` 对应的布尔值，都是 true。
- NaN：Not a Number。用于将字符串解析成数字出错的场合。

undefined：表示无意义或不存在，此处暂时没有任何值。

null：表示空值，即此处的值为空。

对象（object）：各种值组成的集合。

- 狭义的对象（object）
- 数组（array）
- 函数（function）

### 确定类型

三种方法可以确定一个值到底是什么类型：

- typeof 运算符
- instanceof 运算符
- Object.prototype.toString 方法

typeof null;  // object

### 数值

### 数组

### 函数

### 运算符

### 编码风格

## 标准库

### Object 对象

### Array 对象

### 包装对象

### Number 对象

### String 对象

### Math 对象

### Date 对象

### RegExp 对象

### JSON 对象

### console 对象

### 属性描述对象

## 面向对象编程

### 概述

### this 关键字

### prototype 对象

### Object 对象与继承

### 面向对象编程的模式

## 语法专题

### 异步操作概述

### 定时器

### Promise 对象

### 严格模式

## DOM 模型

## 浏览器环境
