const arr = [2, 3, 5, 6, 7, 9];
const target = 4;

function findFloorNum(arr, target) {
    if(target < arr[0]) {
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
    // console.log(start, end);
    return arr[end];
};


console.log(findFloorNum(arr, target));