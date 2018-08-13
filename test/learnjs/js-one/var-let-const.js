// 练习，有点乱
// var
var foo = 3;
console.log(foo);

for (var i = 0; i < 9; i++) {
    var j = i;
}

console.log(i);
console.log(j);

// let

let letfoo = 3;
console.log(letfoo);

for (let i = 0; i < 9; i++) {
    let j = i;
}

console.log(i);
console.log(j);

//

function hoistVariable() {
    console.log("afoo: ", afoo);
    var afoo = 3;
}
hoistVariable();

function aHoistVariable() {
    var aafoo;
    console.log("aafoo: ", aafoo);
    aafoo = 3;
}
aHoistVariable();

var cfoo = 4;

function cHoistingFunc() {
    let cfoo = 3;
    console.log("cfoo: ", cfoo);
}
cHoistingFunc();

console.log(cfoo);