// 解决了随机数不够乱，比较返回值不是负数的问题

function aarr() {
    let aArr = [];
    for (let i = 0; i < 5; i++) {
        // let rand, num;
        // rand = Math.random();
        // num = min + Math.round(rand * 20);
        let min = 2700 - 9 + Math.round(Math.random() * 18);
        aArr.push(min);
    }
    return aArr;
}

console.log(aarr());
console.log(aarr());
console.log(aarr());
console.log(aarr());

let aamin, aamax, aaCompare;
let aa = aarr();
aamin = eval("Math.min(" + aa.toString() + ")");
aamax = eval("Math.max(" + aa.toString() + ")");
if (Math.abs(aamin - 2700)>= Math.abs(aamax - 2700)) {
    aaCompare = aamin - 2700;
} else {
    aaCompare = aamax - 2700;
}
console.log(aamin, aamax, aaCompare);


