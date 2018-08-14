// 最后一遍了，不在修改

// var xFirst = document.getElementById("xInput").value;
// var xFirst = 2700;

function xxFirst() {
    const xFirst = document.getElementById("xInput").value;
    return xFirst;
}
// 随机数生成
function aRandom(min, max) {
    let range, rand, num;
    range = max -min;
    rand = Math.random();
    num = min + Math.round(rand * range);
    return num;
}

// console.log(aRandom(xFirst - 10, xFirst + 10));

// 列表生成
function xList() {
    let xArr = [];  // 声明数组

    for (var i = 0; i < 5; i++) {
        var xx = aRandom(xxFirst() - 10, xxFirst() + 10);  // 依次让随机数等于 aa
        xArr.push(xx);  // 依次将 aa 写入数组
    }
    return xArr;
}
// var xxlist = xList();
// console.log(xxlist[0]);
// console.log(xList());

// 比较大小
function xCompare() {
    let xxCompare;
    if (Math.abs(Math.min(...xList()) - xxFirst()) >= Math.abs(Math.max(...xList()) - xxFirst())) {
        xxCompare = Math.min(...xList()) - xxFirst();
    } else {
        xxCompare = Math.max(...xList()) - xxFirst();
    }
    return xxCompare;
}

// console.log(xCompare());

function xEnd() {
    let xout1, xout2;
    console.log(xList()[0]);
    console.log(xCompare());
    xout1 = xList()[0];
    xout2 = xCompare();
    document.getElementById("xout00").innerHTML = xxFirst();
    document.getElementById("xout01").innerHTML = xout1;
    document.getElementById("xout02").innerHTML = xout2;
}
// xEnd();

