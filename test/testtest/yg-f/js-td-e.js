function eh() {
    const ah0 = document.getElementById("e-h").value;
    return ah0;
}

function ehRandom() {
    var min = eh() - Math.round(Math.random() * 7) + 2;
    var aArr = [];
    for (var i = 0; i < 5; i++) {
        var rand, num;
        rand = Math.random();
        num = min + Math.round(rand * 20);
        aArr.push(num);
    }
    return aArr;
}

function ehEnd() {
    if (eh() > 0) {
        var ah1, ah2, ah3, ah4, ah5, aaCompare, aamin, aamax, aaji;
        var aa = ehRandom();
        ah1 = aa[0];
        ah2 = aa[1];
        ah3 = aa[2];
        ah4 = aa[3];
        ah5 = aa[4];
        aamin = eval("Math.min(" + aa.toString() + ")");
        aamax = eval("Math.max(" + aa.toString() + ")");
        // aaCompare = Math.PI;
        if (Math.abs(aamin) >= Math.abs(aamax)) {
            aaCompare = aamin - eh();
        } else {
            aaCompare = aamax - eh();
        }
        aaji = aamax - aamin;
        document.getElementById("e-h0").innerHTML = eh();
        document.getElementById("e-h1").innerHTML = ah1;
        document.getElementById("e-h2").innerHTML = ah2;
        document.getElementById("e-h3").innerHTML = ah3;
        document.getElementById("e-h4").innerHTML = ah4;
        document.getElementById("e-h5").innerHTML = ah5;
        document.getElementById("e-a").innerHTML = aaCompare;
        document.getElementById("e-b").innerHTML = aaji;
    } else {
        return null;
    }

}

function ek() {
    const ak0 = document.getElementById("e-k").value;
    return ak0;
}

function ekRandom() {
    var min = ek() - Math.round(Math.random() * 7) + 2;
    var aArr = [];
    for (var i = 0; i < 2; i++) {
        var rand, num;
        rand = Math.random();
        num = min + Math.round(rand * 20);
        aArr.push(num);
    }
    return aArr;
}

function ekEnd() {
    if (ek() > 0) {
        var ak1, ak2, aamin, aamax, aaji;
        var aa = ekRandom();
        ak1 = aa[0];
        ak2 = aa[1];
        aamin = eval("Math.min(" + aa.toString() + ")");
        aamax = eval("Math.max(" + aa.toString() + ")");

        aaji = aamax - aamin;

        document.getElementById("e-l1").innerHTML = ak1;
        document.getElementById("e-l2").innerHTML = ak2;
        document.getElementById("e-c").innerHTML = aaji;
    } else {
        return null;
    }

}

function ej() {
    const aj0 = document.getElementById("e-j").value;
    return aj0;
}

function ejRandom() {
    var min = ej() - Math.round(Math.random() * 7) + 2;
    var aArr = [];
    for (var i = 0; i < 2; i++) {
        var rand, num;
        rand = Math.random();
        num = min + Math.round(rand * 20);
        aArr.push(num);
    }
    return aArr;
}

function ejEnd() {
    if (ej() > 0) {
        var aj1, aj2, aamin, aamax, aaji;
        var aa = ejRandom();
        aj1 = aa[0];
        aj2 = aa[1];
        aamin = eval("Math.min(" + aa.toString() + ")");
        aamax = eval("Math.max(" + aa.toString() + ")");

        aaji = aamax - aamin;

        document.getElementById("e-l3").innerHTML = aj1;
        document.getElementById("e-l4").innerHTML = aj2;
        document.getElementById("e-d").innerHTML = aaji;
    } else {
        return null;
    }

}