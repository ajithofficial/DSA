const array = [13, 24, -7, 2, 23];
const target = 13;
const range = {
    a: 1,
    b: 4
}

function linearRangeSearch(array, target, start, end) {
    if(array.length === 0) return -1;
    // base case
    for(let i = start; i < end; i++) {
        if(array[i] === target) return i;
    }
    return -1;
}

const result = linearRangeSearch(array, target, range.a, range.b);
console.log(result);