/* Ceiling Number means Smallest number in given array,
that is Greater than or = to the Target number */

const arr = [0, 5, 7, 9, 11, 12, 16];
const target = 10;

function findCeilingNum(arr, target) {
    if(target > arr[arr.length - 1]) {
        return -1;
    }
    let start = 0;
    let end = arr.length - 1;
    while(start <= end) {
        let mid = Math.round(start + (end - start) / 2);
        if(target > arr[mid]) {
            start = mid + 1;
        } else if(target < arr[mid]) {
            end = mid - 1;
        }
    }
    return arr[start];
};

console.log(findCeilingNum(arr, target));