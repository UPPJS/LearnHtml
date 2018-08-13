// 生成随机数
// 生成数组
// 比较大小

// var oneInput = document.getElementById("js-one-in").value;
var oneInput = 2700;
// 随机数
function oneRandom(min, max) {
    var range, rand, num;
    range = max -min;
    rand = Math.random();
    num = min + Math.round(rand * range);
    return num;
}



function oneArray() {
    var oneArr = [];  // 声明数组
    for (var i=0; i < 5; i++) {
        var aa = oneRandom(oneInput - 10, oneInput + 10);  // 依次让随机数等于 aa
        oneArr.push(aa);  // 依次将 aa 写入数组
    }
    return oneArr;
    // document.getElementById("one-array").innerHTML = oneArr[0];
}

// console.log(oneArr);
var oneay = oneArray();
console.log(oneay[0]);

// function oneCompare() {
//     var oneCom;
//     if (Math.abs(Math.min(...Arr) - oneInput) >= Math.abs(Math.max(...Arr) - oneInput)) {
//         oneCom = Math.min(...Arr) - oneInput;
//     } else {
//         oneCom = Math.max(...Arr) - oneInput;
//     }
//     document.getElementById("one-compare").innerHTML = oneCom;
// }