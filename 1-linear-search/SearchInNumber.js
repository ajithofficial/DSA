// search in the array

const linearSearch = function(array = [], target = null) {
    if(array.length === 0) {
        return -1;
    }

    for(let i = 0; i < array.length; i++) {
        if(array[i] === target) {
            return i;
        };
    };
    return -1;
};
const array = [1, 2, 3, 4, 5, 6];
const target = 4;
const result = linearSearch(array, target);
console.log(result);