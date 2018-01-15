'use strict';

//Ad.1
var sayHello = function sayHello() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';
    var name1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'World';
    return console.log(name + ' ' + name1);
};
sayHello();

//Ad.2
var multiply = function multiply(x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return x * y;
};
console.log(multiply(2, 5));
console.log(multiply(6, 6));
console.log(multiply(5));

//Ad.3
var average = function average() {
    for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
        numbers[_key] = arguments[_key];
    }

    var sum = 0;
    numbers.forEach(function (number) {
        return sum += number;
    });
    return sum / numbers.length;
};
console.log(average(5, 5, 10, 50));
console.log(average(6, 1, 34, 2));

//Ad.3 with reduce()
var avg = [5, 5, 10, 50].reduce(function (acc, cur, index, array) {
    return acc + cur / array.length;
}, 0);
console.log(avg);

//Ad.4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades));

//Ad.5
var data = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = data[2],
    secondName = data[4];

console.log(firstName, secondName);
