// EX 1
function getFirstValue (arr) {
    return arr[0];
}
console.log(getFirstValue([1, 2, 3]));
console.log(getFirstValue([80, 5, 100]));
console.log(getFirstValue([-500, 0, 50]));

// EX 2
function drop (arr, n) {
    return arr.slice(n);
}
console.log(drop([1, 2, 3], 1));
console.log(drop([1, 2, 3], 2));
console.log(drop([1, 2, 3], 5));
console.log(drop([1, 2, 3], 0));

// EX 3
function concat (...arr) {
    return arr.reduce((a, b) => a.concat(b));
}
console.log(concat([1, 2, 3], [4, 5], [6, 7])); 
console.log(concat([1], [2], [3], [4], [5], [6], [7]));
console.log(concat([1, 2], [3, 4]));
console.log(concat([4, 4, 4, 4]));

// EX 4
function arryOfMultiples (num, length) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(num * (i + 1));
    }
    return arr;
}

console.log(arryOfMultiples(7, 5));
console.log(arryOfMultiples(12, 10));
console.log(arryOfMultiples(17, 6));

// EX 5 
function sevenBoom (arr) {
    return (arr.toString().includes('7') ? "BOOM!" : "there is no 7 in the array");
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
console.log(sevenBoom([8, 6, 33, 100]));
console.log(sevenBoom([2, 55 , 60 , 97, 86]));

// EX 6
function getLenght (arr) {
    var newArr = [];
    return arr.reduce((a, b) => Array.isArray(b) ? getLenght(b) : a);
}

console.log(getLenght([1, [2, 3]]));
console.log(getLenght([1, [2, [3, 4]]]));
console.log(getLenght([1, [2, [3, [4, [5, 6]]]]]));
console.log(getLenght([1, [2], 1, [2], 1]));
console.log(zeroesToEnd([]));




// EX 7

// getValue([[[[[[[[[[[[[[[["Bazinga"]]]]]]]]][]]]]]]]]) // "Bazinga"

// getValue([[[][[[[[[[["God, what is happening"]]]]]]]]]) // "God, what is happening"

// getValue([[[[[[[[[[[]]]]]]]]]]]) // "What... why did you make this?"

// getValue([[][][][][][][][[][][[[[[[["I have no idea what i'm doing"]]]]]]]]]) // "I have no idea what i'm doing"


//EX 8

function zeroesToEnd (arr) {
   for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        arr.splice(i, 1);
        arr.push(0);
    } 
   }
    return arr;
}
console.log(zeroesToEnd([1, 2, 0, 3, 0, 4, 0, 5]));
console.log(zeroesToEnd([0, 0, 2, 0, 5]));
console.log(zeroesToEnd([4, 4, 5]));
console.log(zeroesToEnd([0, 0]));

// EX 9

var array = [1, 2, 3];
console.log(array.fill("a"));
console.log(Array(3).fill(2));
console.log([4, 6, 8, 10].fill("*",1,3));

