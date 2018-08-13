// 生成随机数
// 生成数组
// 比较大小
class oneClass {
    constructor(oneInput) {
        this.oneInput = document.getElementById("js-one-input").innerHTML;
    }
// 随机数
    oneRandom(min, max) {
        let range, rand, num;
        range = max -min;
        rand = Math.random();
        num = min + Math.round(rand * range);
        return num;
    }

    oneArray() {
        let oneArr = [];  // 声明数组
        for (let i=0; i < 5; i++) {
            let aa = oneRandom(oneInput - 10, oneInput + 10);  // 依次让随机数等于 aa
            oneArr.push(aa);  // 依次将 aa 写入数组
        }
        return oneArr;
    }

    oneCompare() {
        let oneCom;
        if (Math.abs(Math.min(...Arr) - oneInput) >= Math.abs(Math.max(...Arr) - oneInput)) {
            oneCom = Math.min(...Arr) - oneInput;
        } else {
            oneCom = Math.max(...Arr) - oneInput;
        }
        return oneCom;
    }
}
