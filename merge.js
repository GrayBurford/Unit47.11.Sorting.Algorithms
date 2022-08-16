// Joins 2 already sorted arrays into 1 array. Helper function for mergeSort
function merge(arr1, arr2) {
    const sortedArr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            sortedArr.push(arr1[i]);
            i++;
        } else {
            sortedArr.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        sortedArr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        sortedArr.push(arr2[j]);
        j++;
    }
    return sortedArr;
}


// sort arr using recursion and helper merge function
// merge
function mergeSort(arr) {
    // base case keeps us from getting stuck in an infinite loop
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length/2);
    const leftArr = mergeSort(arr.slice(0, mid));
    const rightArr = mergeSort(arr.slice(mid));
    return merge(leftArr, rightArr)
}

let arr1 = [1,3,4,7];
let arr2 = [6, 8, 10, 12, 15];


// module.exports = { merge, mergeSort};