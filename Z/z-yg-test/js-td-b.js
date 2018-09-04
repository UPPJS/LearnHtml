function bh() {
    const ah0 = document.getElementById("b-h").value;
    return ah0;
}

function bhRandom() {
    let aArr = [];
    for (let i = 0; i < 5; i++) {
        let num = bh() - 6 + Math.round(Math.random() * 16);
        aArr.push(num);
    }
    return aArr;
}

function bhEnd() {
    if (bh() > 0) {
        let ah1, ah2, ah3, ah4, ah5, aaCompare, aamin, aamax, aaji;
        let aa = bhRandom();
        ah1 = aa[0];
        ah2 = aa[1];
        ah3 = aa[2];
        ah4 = aa[3];
        ah5 = aa[4];
        aamin = eval("Math.min(" + aa.toString() + ")");
        aamax = eval("Math.max(" + aa.toString() + ")");
        // aaCompare = Math.PI;
        if (Math.abs(aamin - bh()) >= Math.abs(aamax - bh())) {
            aaCompare = aamin - bh();
        } else {
            aaCompare = aamax - bh();
        }
        aaji = aamax - aamin;
        document.getElementById("b-h0").innerHTML = bh();
        document.getElementById("b-h1").innerHTML = ah1;
        document.getElementById("b-h2").innerHTML = ah2;
        document.getElementById("b-h3").innerHTML = ah3;
        document.getElementById("b-h4").innerHTML = ah4;
        document.getElementById("b-h5").innerHTML = ah5;
        document.getElementById("b-a").innerHTML = aaCompare;
        document.getElementById("b-b").innerHTML = aaji;
    } else {
        return null;
    }
}

function bk() {
    const ak0 = document.getElementById("b-k").value;
    return ak0;
}

function bkRandom() {
    let aArr = [];
    for (let i = 0; i < 2; i++) {
        let num = bk() - 9 + Math.round(Math.random() * 18);
        aArr.push(num);
    }
    return aArr;
}

function bkEnd() {
    if (bk() > 0) {
        let ak1, ak2, aamin, aamax, aaji;
        let aa = bkRandom();
        ak1 = aa[0];
        ak2 = aa[1];
        aamin = eval("Math.min(" + aa.toString() + ")");
        aamax = eval("Math.max(" + aa.toString() + ")");

        aaji = aamax - aamin;

        document.getElementById("b-l1").innerHTML = ak1;
        document.getElementById("b-l2").innerHTML = ak2;
        document.getElementById("b-c").innerHTML = aaji;
    } else {
        return null;
    }
}

function bj() {
    const aj0 = document.getElementById("b-j").value;
    return aj0;
}

function bjRandom() {
    let aArr = [];
    for (let i = 0; i < 2; i++) {
        let num = bj() - 9 + Math.round(Math.random() * 18);
        aArr.push(num);
    }
    return aArr;
}

function bjEnd() {
    if (bj() > 0) {
        let aj1, aj2, aamin, aamax, aaji;
        let aa = bjRandom();
        aj1 = aa[0];
        aj2 = aa[1];
        aamin = eval("Math.min(" + aa.toString() + ")");
        aamax = eval("Math.max(" + aa.toString() + ")");

        aaji = aamax - aamin;

        document.getElementById("b-l3").innerHTML = aj1;
        document.getElementById("b-l4").innerHTML = aj2;
        document.getElementById("b-d").innerHTML = aaji;
    } else {
        return null;
    }
}