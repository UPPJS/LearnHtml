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