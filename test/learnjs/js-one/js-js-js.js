function aRandom(min, max) {
    var aArr = [];
    for (var i = 0; i < 5; i++) {
        var range, rand, num;
        range = max -min;
        rand = Math.random();
        num = min + Math.round(rand * range);
        aArr.push(num);
    }
    return aArr;
}
console.log(aRandom(2690, 2710)[0]);

console.log("test");
function aaRandom(min, max) {
    let range, rand, num;
    range = max -min;
    rand = Math.random();
    num = min + Math.round(rand * range);
    return num;
}

aaRandom(110, 120);

var arr = [3,12,23,18,25,33,22,30,1];

console.log(eval("Math.min(" + arr.toString() + ")"));