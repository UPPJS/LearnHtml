// 1. 显示列表，并能自己添加内容
// 2. 点击随机出现列表中的内容
// 解决问题，Argument type number is not assignable to parameter type string，计算公式后面 .toString()

eat_food = ["蒸熊掌", "米饭", "香肠", "腊肉", "叉烧包"];

function food_num() {
    return parseInt((Math.random() * 5).toString());
}

function eat() {
    document.getElementById("food-0").innerHTML = eat_food[food_num()];
}

console.log(eat_food[food_num()]);
