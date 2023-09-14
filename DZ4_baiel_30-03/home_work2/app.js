function applyFunctionToArray(arr, mathFunction) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(mathFunction(arr[i]));
    }
    return result;
}
function square(x) {
    return x * x;
}

const myArray = [1, 2, 3, 4, 5];
const squaredArray = applyFunctionToArray(myArray, square);
console.log(squaredArray);
