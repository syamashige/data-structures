// SELECTION SORT

// Divides the input list into two parts: 
// 1. The sublist of items already sorted 
// 2. The sublist of items remaining to be sorted that occupy the rest of the list

// Initially the sorted list is empty
// Find the smallest element in the unsorted sublist 
// Then exchanges it with the left most unsorted element 
// Then moves the sublist boundaries one element to the right 

let sortThisArray = [2, 5, 7, 8, 10, 3, 1, 9, 4, 6]
let sortThisOtherArray = [4, 10, 90, 2, 50, 2, 5, 6, 7, 22]

function swapperHelper(arr, i, j) {                     // Helper Function 
    let temp = arr[i];                                  // set "temp" to equal the targeted value
    arr[i] = arr[j];                                    // set the targeted value to be the value to the right
    arr[j] = temp;                                      // set the next value to be back at original targeted value
};                                                      // swapping the two values using a temporary storage

function selectionSortThis(arr) {
    for (let i = 0; i < arr.length; i++) {              // loop through the length of the array
        let min = i;                                    // set the minimum to be the index of the targeted value
        for (let j = i + 1; j < arr.length; j++) {      // "j" is equal to the targed index plus 1 
            if (arr[j] < arr[min]) {                    // if the value next to the target is less than the target value
                min = j;                                // set the new index to the current next index 
            }                                           // changes the current index to the next index
        }
        if (i !== min) {                                // if the target index is not equal to the "min" value 
            swapperHelper(arr, i, min);                 // swap the target value with the next value
        }   
    }
    return arr;                                         // return the sorted array
}

console.log(selectionSortThis(sortThisArray));          // Should return: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(selectionSortThis(sortThisOtherArray));     // Should return: [2, 2, 4, 5, 6, 7, 10, 22, 50, 90]