const arr = [1, 2];

function findMidInArray(a) {
    let start = 0;
    let end = a.length - 1;

    const mid = Math.round(start + (end - start) / 2);
    return mid;
}

console.log(findMidInArray(arr));