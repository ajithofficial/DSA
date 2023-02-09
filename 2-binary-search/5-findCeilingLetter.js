const arr = ["c","f","j"];
const t = 'c';

/* 
    leet code problem
    https://leetcode.com/problems/find-smallest-letter-greater-than-target/ 
*/

/* 
* if t is last in given array, we should return first element 
* only find the smallest letter greater than given target
*/

function findCeilingLetter(letters, target) {
    let start = 0;
    let end = letters.length - 1;
    
    while(start <= end) {
        let mid = Math.round(start + (end - start) / 2);
        if(target >= letters[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return letters[start % letters.length];
}

console.log(findCeilingLetter(arr, t));