let number = [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50]
let newArray = [];
for ( let i = 0; i < number.length; i++) {
    const numberString = number[i].toString()
    if (numberString[0] === '2' || numberString[0] === '5') {
        newArray.push(number[i]);
    }
}
console.log(newArray)