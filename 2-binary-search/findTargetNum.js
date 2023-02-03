const array = [0, 1, 2, 3, 4, 5, 6];
const target = 4;

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = start + (end - start) / 2;
    
    if(target < arr[mid]) {
      end = mid - 1;
    } else if(target > arr[mid]) {
      start = mid + 1;
    } else {
      // ans found
      return mid;
    } 
  }
  return -1;
}
console.log('Output', binarySearch(array, target));
