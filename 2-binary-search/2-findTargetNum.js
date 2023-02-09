const array = [0, 3, 11, 20, 31];
const target = 11;

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    
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
