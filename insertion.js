
// DOESN'T WORK YET!
function insertionSort(arr) {
    let temp;
    let swapped = false;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i-1]) {
            temp = arr[i-1];
            arr[i-1] = arr[i];
            arr[i] = temp;
            swapped = true;
        }
    }
    if (swapped = false) {
        insertionSort(arr);
    }

    return arr;
}


// module.exports = insertionSort;