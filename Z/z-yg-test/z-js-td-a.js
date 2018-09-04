// 解释：
// firstone: a-h

const firstone = document.getElementById("a-h").value;


// 随机数生成
function ahFunction(min, max) {
    let range, rand, num;
    range = max -min;
    rand = Math.random();
    num = min + Math.round(rand * range);
    return num;
}
function ahArr() {
    const firstone = document.getElementById("a-h").value;

    let Arr = [];  // 声明数组
    for (let i = 0; i < 5; i++) {
        let aa = ahFunction(firstone - 10, firstone + 10);  // 依次让随机数等于 aa
        Arr.push(aa);  // 依次将 aa 写入数组
    }
    return Arr;
}

function ahArra() {
    const firstone = document.getElementById("a-h").value;

    let arra;
    if (Math.abs(Math.min(...ahArr()) - firstone) >= Math.abs(Math.max(...ahArr()) - firstone)) {
        arra = Math.min(...ahArr()) - firstone;
    } else {
        arra = Math.max(...ahArr()) - firstone;
    }
    return arra;
}

function ahEnd() {
    // let firstone = document.getElementById("a-h").value;
    const firstone = document.getElementById("a-h").value;
    document.getElementById("a-h0").innerHTML = firstone;
    document.getElementById("a-h1").innerHTML = ahArr()[0];
    document.getElementById("a-h2").innerHTML = ahArr()[1];
    document.getElementById("a-h3").innerHTML = ahArr()[2];
    document.getElementById("a-h4").innerHTML = ahArr()[3];
    document.getElementById("a-h5").innerHTML = ahArr()[4];
    document.getElementById('a-a').innerHTML = ahArra();
}

// function ahA() {

    // ahArr();

// document.getElementById("a-a").innerHTML = arra;
// }