var obj = {
    p1: 123,
    p2: 456
};

console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));

var a = ['hello', 'world'];
console.log(Object.keys(a));
console.log(Object.getOwnPropertyNames(a));
console.log(Object.keys(a).length);
console.log(Object.getOwnPropertyNames(a).length);

var b = {};
console.log(b.toString());

var arr = new Array(2);
console.log(arr.length);
console.log(arr);

var arr0 = [1, 2, 3];
console.log(typeof arr0);
console.log(Array.isArray(arr0));

var v1 = Number(123);
var v2 = String('abc');
var v3 = Boolean(true);
console.log(typeof v1);
console.log(v1 === 123 && v2 === 'abc' && v3 === true);

console.log('***************');

console.log(Date());

var today = Date();
console.log(today);
console.log(Date.parse('1992-1-25'));
console.log(Date.UTC(1992, 0, 1, 0, 0, 0, 0));

console.log(Math.E);

var regex0 = /xyz/;
var regex1 = new RegExp('xyz');
var regex2 = new RegExp('xyz', 'i');
var regex3 = /xyz/i;

console.log(regex0.ignoreCase);

console.log(JSON.stringify({p1: 1, p2: 2}, null, 2));