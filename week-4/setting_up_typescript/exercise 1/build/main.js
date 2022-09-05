"use strict";
function sum(arr) {
    let sum = 0;
    arr.forEach(a => sum += a);
    return sum;
}
let arr = [2, 3, 4];
let res = sum(arr);
console.log(res);
function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
let num = 5;
console.log(isEven(num));
