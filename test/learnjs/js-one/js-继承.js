// for-in 继承
function Person() {
    this.name = "水煮鱼";
    this.age = 18;
}

function Son() {
    // this.name = "草鱼";
}

let p = new Person();
let s = new Son();

for (const k in p) {
    s[k] = p[k];
}

console.log(s.name);

// 原型继承
function Human() {
    this.name = "香辣虾";
    this.age = 21;
}

function Man() {
}

Man.prototype = new Human();
let m = new Man();
console.log(m.name);
console.log(m.age);

// 经典继承

let animal = {
   name: "阿咪",
    type: "猫科"
};

let a = Object.create(animal);
console.log(a.name);