// 解释：
// firstone: a-h


// 随机数生成
function ahFunction(min, max) {
    let range, rand, num;
    range = max -min;
    rand = Math.random();
    num = min + Math.round(rand * range);
    return num;
}

let Arr = [];  // 声明数组
let firstone = document.getElementById("a-h").value;
for (let i = 0; i < 5; i++) {
    let aa = ahFunction(firstone - 10, firstone + 10);  // 依次让随机数等于 aa
    Arr.push(aa);  // 依次将 aa 写入数组
}

let arra;
if (Math.abs(Math.min(...Arr) - firstone) >= Math.abs(Math.max(...Arr) - firstone)) {
    arra = Math.min(...Arr) - firstone;
} else {
    arra = Math.max(...Arr) - firstone;
}

function ahArr() {
    // return Arr;

    document.getElementById("a-h0").innerHTML = firstone;
    document.getElementById("a-h1").innerHTML = Arr[0];
    document.getElementById("a-h2").innerHTML = Arr[1];
    document.getElementById("a-h3").innerHTML = Arr[2];
    document.getElementById("a-h4").innerHTML = Arr[3];
    document.getElementById("a-h5").innerHTML = Arr[4];
    document.getElementById('a-a').innerHTML = arra;
}

// function ahA() {

    // ahArr();

// document.getElementById("a-a").innerHTML = arra;
// }