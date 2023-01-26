// LeetCode - 1295. Find Numbers with Even Number of Digits
const nums = [-12, 345, 2, -60, 7896];
var findNumbers = function (nums) {
  let evenNumberCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (digits_way2(nums[i]) % 2 === 0) {
      evenNumberCount++; 
    }
  }
  return evenNumberCount;
};

function digits(num) {
    if (num === 0) return 1; // zero length is 1
    if (num < 0) num = num * -1; // negative *  -1 means positive
    let evenNumberCount = 0;
    while(Math.floor(num) > 0) {
        evenNumberCount++;
        num = num / 10  
    }
    return evenNumberCount;
}

function digits_way2(num) {
    if (num === 0) return 1; // zero length is 1
    if (num < 0) num = num * -1; // negative *  -1 means positive
    return Math.floor(Math.log10(num) + 1);
}
console.log(findNumbers(nums));