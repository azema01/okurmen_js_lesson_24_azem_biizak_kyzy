myFn()
//myFn2()
//myFn3()
// console. log(age); //
// Hoisting - это когда JavaScript "поднимает" объявления переменных и функций наверх кода перед выполнением.

var age = 44
// console. log(age); // 44
// function declaration
function myFn() {
    // Hoisting
    console, log("Hello 1");
}
function myFn() {
    // Hoisting
    console, log("Hello 2");
}

// arrow function
const myFn3 = () => console.log("Hi  3");