var nb = 11;
var color = 'red';
console.log('%d %s balloons', nb, color);

console.log({foo: 'bar'});
console.log(Date);

console.info('Hello world!')

// console.error('Error: %s (%i)', 'Server is not responding', 500);

// var languages = [
//     {name: "JavaScript", fileExtension: ".js"},
//     {name: "TypeScript", fileExtension: ".ts"},
//     {name: "CoffeeScript", fileExtension: ".coffee"}
// ];
// console.table(languages);

function greet(user) {
    console.count();
    console.log('hi' + user);
}
greet('bob');
greet('alice');

console.dir({f1: 'foo', f2: 'bar'});
console.time('Array initialize');

// for(var i = 0; i < 5; i++) {
//     console.log(i);
//     if (i === 2) debugger;
// }