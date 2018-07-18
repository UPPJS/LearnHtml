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

var obj = {
    foo: 'Hello',
    bar: 'World'
};

var obj = {a: 1, b: 2, c: 3};
for(var i in obj) {
    console.log('键名：', i);
    console.log('键值：', obj[i]);
}

console.log(1 == true);
console.log(1 == false);
console.log(true ? 'T' : 'F');
console.log(x = 5);
void(x = 5);
console.log(void(x = 5));
console.log(123 + 'abc');

if (!undefined && !null && !0 && !NaN && !'') {
    console.log('true');
}