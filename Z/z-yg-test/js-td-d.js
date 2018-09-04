function dh() {
    const ah0 = document.getElementById("d-h").value;
    return ah0;
}

function dhRandom() {
    let aArr = [];
    for (let i = 0; i < 5; i++) {
        let num = dh() - 3 + Math.round(Math.random() * 8);
        aArr.push(num);
    }
    return aArr;
}

function dhEnd() {
    if (dh() > 0) {
        let ah1, ah2, ah3, ah4, ah5, aaCompare, aamin, aamax, aaji;
        let aa = dhRandom();
        ah1 = aa[0];
        ah2 = aa[1];
        ah3 = aa[2];
        ah4 = aa[3];
        ah5 = aa[4];
        aamin = eval("Math.min(" + aa.toString() + ")");
        aamax = eval("Math.max(" + aa.toString() + ")");
        // aaCompare = Math.PI;
        if (Math.abs(aamin - dh()) >= Math.abs(aamin - dh())) {
            aaCompare = aamin - dh();
        } else {
            aaCompare = aamax - dh();
        }
        aaji = aamax - aamin;
        document.getElementById("d-h0").innerHTML = dh();
        document.getElementById("d-h1").innerHTML = ah1;
        document.getElementById("d-h2").innerHTML = ah2;
        document.getElementById("d-h3").innerHTML = ah3;
        document.getElementById("d-h4").innerHTML = ah4;
        document.getElementById("d-h5").innerHTML = ah5;
        document.getElementById("d-a").innerHTML = aaCompare;
        document.getElementById("d-b").innerHTML = aaji;
    } else {
        return null;
    }

}

function dk() {
    const ak0 = document.getElementById("d-k").value;
    return ak0;
}

function dkRandom() {
    let aArr = [];
    for (let i = 0; i < 2; i++) {
        let num = dk() - 9 + Math.round(Math.random() * 18);
        aArr.push(num);
    }
    return aArr;
}

function dkEnd() {
    if (dk() > 0) {
        let ak1, ak2, aamin, aamax, aaji;
        let aa = dkRandom();
        ak1 = aa[0];
        ak2 = aa[1];
        aamin = eval("Math.min(" + aa.toString() + ")");
        aamax = eval("Math.max(" + aa.toString() + ")");

        aaji = aamax - aamin;

        document.getElementById("d-l1").innerHTML = ak1;
        document.getElementById("d-l2").innerHTML = ak2;
        document.getElementById("d-c").innerHTML = aaji;
    } else {
        return null;
    }

}

function dj() {
    const aj0 = document.getElementById("d-j").value;
    return aj0;
}

function djRandom() {
    let aArr = [];
    for (let i = 0; i < 2; i++) {
        let num = dj() - 9 + Math.round(Math.random() * 18);
        aArr.push(num);
    }
    return aArr;
}

function djEnd() {
    if (dj() > 0) {
        let aj1, aj2, aamin, aamax, aaji;
        let aa = djRandom();
        aj1 = aa[0];
        aj2 = aa[1];
        aamin = eval("Math.min(" + aa.toString() + ")");
        aamax = eval("Math.max(" + aa.toString() + ")");

        aaji = aamax - aamin;

        document.getElementById("d-l3").innerHTML = aj1;
        document.getElementById("d-l4").innerHTML = aj2;
        document.getElementById("d-d").innerHTML = aaji;
    } else {
        return null;
    }

}