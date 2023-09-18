const inputArray = ['frontend', 3, 34, 45, null, undefined, null, 45, 'text', 'text', true, false, 23, null, 'qwerty', '456'];
const typeArrays = {};

inputArray.forEach(item => {
    const itemType = typeof item;
    if (typeArrays[itemType]) {
        typeArrays[itemType].push(item);
    } else {
        typeArrays[itemType] = [item];
    }
});
const resultArray = Object.values(typeArrays);
resultArray.sort((a, b) => b.length - a.length);

const filteredArray = resultArray.filter(arr => {
    if (typeof arr[0] === 'string') {
        return arr.every(item => item.length > 3);
    }
    return true;
});

console.log(filteredArray);
