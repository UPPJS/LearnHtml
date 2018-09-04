function ch() {
    const ah0 = document.getElementById("c-h").value;
    return ah0;
}

function chRandom() {
    let aArr = [];
    for (let i = 0; i < 5; i++) {
        let num = ch() - 3 + Math.round(Math.random() * 12);
        aArr.push(num);
    }
    return aArr;
}

function chEnd() {
    if (ch() > 0) {
        let ah1, ah2, ah3, ah4, ah5, aaCompare, aamin, aamax, aaji;
        let aa = chRandom();
        ah1 = aa[0];
        ah2 = aa[1];
        ah3 = aa[2];
        ah4 = aa[3];
        ah5 = aa[4];
        aamin = eval("Math.min(" + aa.toString() + ")");
        aamax = eval("Math.max(" + aa.toString() + ")");
        // aaCompare = Math.PI;
        if (Math.abs(aamin - ch()) >= Math.abs(aamax - ch())) {
            aaCompare = aamin - ch();
        } else {
            aaCompare = aamax - ch();
        }
        aaji = aamax - aamin;
        document.getElementById("c-h0").innerHTML = ch();
        document.getElementById("c-h1").innerHTML = ah1;
        document.getElementById("c-h2").innerHTML = ah2;
        document.getElementById("c-h3").innerHTML = ah3;
        document.getElementById("c-h4").innerHTML = ah4;
        document.getElementById("c-h5").innerHTML = ah5;
        document.getElementById("c-a").innerHTML = aaCompare;
        document.getElementById("c-b").innerHTML = aaji;
    } else {
        return null;
    }
}

function ck() {
    const ak0 = document.getElementById("c-k").value;
    return ak0;
}

function ckRandom() {
    let aArr = [];
    for (let i = 0; i < 2; i++) {
        let num = ck() - 9 + Math.round(Math.random() * 18);
        aArr.push(num);
    }
    return aArr;
}

function ckEnd() {
    if (ck() > 0) {
        let ak1, ak2, aamin, aamax, aaji;
        let aa = ckRandom();
        ak1 = aa[0];
        ak2 = aa[1];
        aamin = eval("Math.min(" + aa.toString() + ")");
        aamax = eval("Math.max(" + aa.toString() + ")");

        aaji = aamax - aamin;

        document.getElementById("c-l1").innerHTML = ak1;
        document.getElementById("c-l2").innerHTML = ak2;
        document.getElementById("c-c").innerHTML = aaji;
    } else {
        return null;
    }
}

function cj() {
    const aj0 = document.getElementById("c-j").value;
    return aj0;
}

function cjRandom() {
    let aArr = [];
    for (let i = 0; i < 2; i++) {
        let num = cj() - 9 + Math.round(Math.random() * 18);
        aArr.push(num);
    }
    return aArr;
}

function cjEnd() {
    if (cj() > 0) {
        let aj1, aj2, aamin, aamax, aaji;
        let aa = cjRandom();
        aj1 = aa[0];
        aj2 = aa[1];
        aamin = eval("Math.min(" + aa.toString() + ")");
        aamax = eval("Math.max(" + aa.toString() + ")");

        aaji = aamax - aamin;

        document.getElementById("c-l3").innerHTML = aj1;
        document.getElementById("c-l4").innerHTML = aj2;
        document.getElementById("c-d").innerHTML = aaji;
    } else {
        return null;
    }

}