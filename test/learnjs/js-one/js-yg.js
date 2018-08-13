// 最后一遍了，不在修改

// var xFirst = document.getElementById("xInput").value;
var xFirst = 2700;
// 随机数生成
function aRandom(min, max) {
    var range, rand, num;
    range = max -min;
    rand = Math.random();
    num = min + Math.round(rand * range);
    return num;
}

// console.log(aRandom(xFirst - 10, xFirst + 10));

// 列表生成
function xList() {
    var xArr = [];  // 声明数组

    for (var i = 0; i < 5; i++) {
        var xx = aRandom(xFirst - 10, xFirst + 10);  // 依次让随机数等于 aa
        xArr.push(xx);  // 依次将 aa 写入数组
    }
    return xArr;
}
// var xxlist = xList();
// console.log(xxlist[0]);
console.log(xList());

// 比较大小
function xCompare() {
    let xxCompare;
    if (Math.abs(Math.min(...xList()) - xFirst) >= Math.abs(Math.max(...xList()) - xFirst)) {
        xxCompare = Math.min(...xList()) - xFirst;
    } else {
        xxCompare = Math.max(...xList()) - xFirst;
    }
    return xxCompare;
}

console.log(xCompare());

function xEnd() {
    var xout1, xout2;
    console.log(xList()[0]);
    console.log(xCompare());
    xout1 = xList()[0];
    xout2 = xCompare();
    document.getElementById("xout01").innerHTML = xout1;
    document.getElementById("xout02").innerHTML = xout2;
}
xEnd();

