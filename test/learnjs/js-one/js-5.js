function Student(name) {
    this.name = name;
}

Student.prototype.hello = function () {
    alert('hello, ' + name + "!");
};

class StudentA {
    constructor(name) {
        this.name = name;
    }
    hello() {
        alert('hello, ' + this.name + '!');
    }
}
