function ah() {
    const ah0 = document.getElementById("a-h").value;
    return ah0;
}

function ahRandom() {
    var min = ah() - Math.round(Math.random() * 7) + 2;
    var aArr = [];
    for (var i = 0; i < 5; i++) {
        var rand, num;
        rand = Math.random();
        num = min + Math.round(rand * 20);
        aArr.push(num);
    }
    return aArr;
}

function ahEnd() {
    if (ah() > 0) {
        var ah1, ah2, ah3, ah4, ah5, aaCompare, aamin, aamax, aaji;
        var aa = ahRandom();
        ah1 = aa[0];
        ah2 = aa[1];
        ah3 = aa[2];
        ah4 = aa[3];
        ah5 = aa[4];
        aamin = eval("Math.min(" + aa.toString() + ")");
        aamax = eval("Math.max(" + aa.toString() + ")");
        // aaCompare = Math.PI;
        if (Math.abs(aamin) >= Math.abs(aamax)) {
            aaCompare = aamin - ah();
        } else {
            aaCompare = aamax - ah();
        }
        aaji = aamax - aamin;
        document.getElementById("a-h0").innerHTML = ah();
        document.getElementById("a-h1").innerHTML = ah1;
        document.getElementById("a-h2").innerHTML = ah2;
        document.getElementById("a-h3").innerHTML = ah3;
        document.getElementById("a-h4").innerHTML = ah4;
        document.getElementById("a-h5").innerHTML = ah5;
        document.getElementById("a-a").innerHTML = aaCompare;
        document.getElementById("a-b").innerHTML = aaji;
    } else {
        return null;
    }
}

function ak() {
    const ak0 = document.getElementById("a-k").value;
    return ak0;
}

function akRandom() {
    var min = ak() - Math.round(Math.random() * 7) + 2;
    var aArr = [];
    for (var i = 0; i < 2; i++) {
        var rand, num;
        rand = Math.random();
        num = min + Math.round(rand * 20);
        aArr.push(num);
    }
    return aArr;
}

function akEnd() {
    if (ak() > 0) {
        var ak1, ak2, aamin, aamax, aaji;
        var aa = akRandom();
        ak1 = aa[0];
        ak2 = aa[1];
        aamin = eval("Math.min(" + aa.toString() + ")");
        aamax = eval("Math.max(" + aa.toString() + ")");

        aaji = aamax - aamin;

        document.getElementById("a-l1").innerHTML = ak1;
        document.getElementById("a-l2").innerHTML = ak2;

        document.getElementById("a-c").innerHTML = aaji;
    } else {
        return null;
    }
}

function aj() {
    const aj0 = document.getElementById("a-j").value;
    return aj0;
}

function ajRandom() {
    var min = aj() - Math.round(Math.random() * 7) + 2;
    var aArr = [];
    for (var i = 0; i < 2; i++) {
        var rand, num;
        rand = Math.random();
        num = min + Math.round(rand * 20);
        aArr.push(num);
    }
    return aArr;
}

function ajEnd() {
    if (aj() > 0) {
        var aj1, aj2, aamin, aamax, aaji;
        var aa = ajRandom();
        aj1 = aa[0];
        aj2 = aa[1];
        aamin = eval("Math.min(" + aa.toString() + ")");
        aamax = eval("Math.max(" + aa.toString() + ")");

        aaji = aamax - aamin;

        document.getElementById("a-l3").innerHTML = aj1;
        document.getElementById("a-l4").innerHTML = aj2;

        document.getElementById("a-d").innerHTML = aaji;
    } else {
        return null;
    }
}