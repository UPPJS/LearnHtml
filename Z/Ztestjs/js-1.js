var a = 1;
console.log(a);
console.log('*****');

foo: {
    console.log(1);
    break foo;
    console.log('本行不会输出');
}

console.log(2);
console.log('*****');
console.log(typeof '11a');
console.log(typeof null);
console.log(Math.pow(2, 1024));

var x = 0.5;
for(var i = 0; i < 25; i++) {
    x = x * x
}
console.log(x);

console.log(Number.MAX_VALUE);
console.log(parseInt('1234'));
console.log(parseInt('abc'));
console.log(parseInt('1000', 10));
console.log(parseInt('1000', 2));

var obj0 = {
    foo: 'Hello',
    bar: 'World'
};

var obj0 = {a: 1, b: 2, c: 3};
for(var i in obj0) {
    console.log('键名：', i);
    console.log('键值：', obj0[i]);
}

console.log(1 === true);
console.log(1 === false);
console.log(true ? 'T' : 'F');
console.log(x = 5);
void(x = 5);
console.log(void(x = 5));
console.log(123 + 'abc');

if (!undefined && !null && !0 && !NaN && !'') {
    console.log('true');
}

var print = function x() {
    console.log(typeof x);
};
print();

function fib(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;
    return fib(num - 2) + fib(num - 1);
}
console.log(fib(8));

// function add(x, y) {
//     return x + y;
// }
// var operator = add;
// function a(op) {
//     return op;
// }
// console.log(a(add)(1, 1));

var f = function () {
    console.log('1');
};
function f() {
    console.log('2');
}
console.log(f());

function f1() {}
console.log(f1.name);

console.log('*************');

var p = 2;
function f2(p) {
    p = 3;
}
console.log(f2(p));

Object.print = function (o) {console.log(o)};
Object.prototype.print = function () {
    console.log(this);
};
var obj1 = {};
obj1.print();

