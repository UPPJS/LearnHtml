function Student(name) {
    this.name = name;
}

Student.prototype.hello = function () {
    alert('hello, ' + name + "!");
};


