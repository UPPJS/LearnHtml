var Student = {
    name: 'Robot',
    height: 1.6,
    run: function () {
        console.log(this.name + ' is running.')
    }
};

var Bird = {
    fly: function () {
        console.log(this.name + ' is flying.')
    }
};

function createStudent(name) {
    var s = Object.create(Student);
    s.name = name;
    return s;
}

var xiaoming = {
    name: '小明'
};

var wang = {
    name: '小王'
};

var zhang = createStudent('小张');

xiaoming.__proto__ = Student;
wang.__proto__ = Bird;
console.log(xiaoming.name);
xiaoming.run();
wang.fly();
zhang.run();