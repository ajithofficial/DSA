// search in the array

const linearSearch = function(string = '', target = null) {
    if(string.length === 0) {
        return -1;
    }

    for(let i = 0; i < string.length; i++) {
        if(string.charAt(i) === target) {
            return i;
        };
    };
    return -1;
};
const string = 'Ajith';
const target = 'j';
const result = linearSearch(string, target);
console.log(result);