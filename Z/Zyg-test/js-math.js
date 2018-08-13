console.log(Math.PI);
console.log(Math.sqrt(8));
const firststart = 2700;

// 生成一个区间的随机数
function RandomNumBoth(min, max) {
    let range, rand, num;
    range = max -min;
    rand = Math.random();
    num = min + Math.round(rand * range);
    return num;
}

// for 循环
let Arr = [];  // 声明数组
// firststart = document.getElementById("a-h").innerHTML;
for (let i=0; i < 5; i++) {
    let aa = RandomNumBoth(firststart - 10, firststart + 10);  // 依次让随机数等于 aa
    Arr.push(aa);  // 依次将 aa 写入数组
}
console.log(Arr);
console.log(Arr[0]);
console.log(Math.max(...Arr));  // 为什么要放三个点
console.log(Math.min(...Arr));

// if
let arra;
if (Math.abs(Math.min(...Arr) - firststart) >= Math.abs(Math.max(...Arr) - firststart)) {
    arra = Math.min(...Arr) - firststart;
} else {
    arra = Math.max(...Arr) - firststart;
}

console.log(arra);