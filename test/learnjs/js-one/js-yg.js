// 最后一遍了，不在修改

// var xFirst = document.getElementById("xInput").value;
// var xFirst = 2700;

function xxFirst() {
    const xFirst = document.getElementById("xInput").value;
    return xFirst;
}
// 随机数生成
function aRandom() {
    var min = xxFirst() - 10;
    var aArr = [];
    for (var i = 0; i < 5; i++) {
        var rand, num;
        rand = Math.random();
        num = min + Math.round(rand * 20);
        aArr.push(num);
    }
    return aArr;
}

function xCompare() {
    var x01, x02, x03, x04, x05, xxCompare, xmin, xmax;
    var xx00 = aRandom();
    x01 = xx00[0];
    x02 = xx00[1];
    x03 = xx00[2];
    x04 = xx00[3];
    x05 = xx00[4];
    xmin = eval("Math.min(" + xx00.toString() + ")");
    xmax = eval("Math.max(" + xx00.toString() + ")");
    // xxCompare = Math.PI;
    if (Math.abs(xmin) >= Math.abs(xmax)) {
        xxCompare = xmin;
    } else {
        xxCompare = xmax;
    }
    document.getElementById("xout00").innerHTML = xxFirst();
    document.getElementById("xout01").innerHTML = x01;
    document.getElementById("xout02").innerHTML = xxCompare;
}
