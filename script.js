//Ad.1
const sayHello = (name = 'Hello', name1 = 'World') => console.log(`${name} ${name1}`);
sayHello();

//Ad.2
const multiply = (x, y = 1) => x * y;
console.log(multiply(2, 5));
console.log(multiply(6, 6));
console.log(multiply(5));

//Ad.3
const average = (...numbers) => {
    let sum = 0;
    numbers.forEach(number => sum += number);
    return sum / numbers.length
}
console.log(average(5, 5, 10, 50));
console.log(average(6, 1, 34, 2));

//Ad.3 with reduce()
const avg = [5, 5, 10, 50].reduce((acc, cur, index, array) => {
    return acc + (cur / array.length)
}, 0);
console.log(avg);

//Ad.4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));


//Ad.5
const data = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstName, , secondName] = data;
console.log(firstName, secondName);