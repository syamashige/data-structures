// BUBBLE SORT

// Bubble sort is a simple sorting algorithm that repeatedl steps through the list to be sorted
// Compared each pair of adjacent items and swaps them if they are in the wrong order
// This process is repeated until no swaps are needed 


// Method 1: Using a nested for loop
// Array to sort through
let sortThisThing = [6, 2, 10, 34, 8, 5, 1, 3, 4];
let sortThisOtherThing = [20, 32, 4, 6, 10, 9, 89, 1];
let arrayOfAnotherSort = [2, 4, 7, 10, 9, 0, 1]

// Helper Function
function swapperHelper(arr, i, j) { // doesn't work the same to have all of this inside of the if statement
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Sort Function
function bubbleSortThis(arr) {
    // console.log("This is the array: ", arr)
    for (let i = 0; i < arr.length; i++) {
        // console.log("This is i: ", i)
        for (let j = 1; j < arr.length; j++) {
            // console.log("This is j: ", j)
            if (arr[j - 1] > arr[j]) {                      //i f the value in the previous position is greater 
                // console.log("Previous arr: ", arr[j - 1]);
                // console.log("Current arr: ", arr[j]);
                // let temp = arr[i];                       // didn't work outside of the helper function 
                // arr[i] = arr[j];
                // arr[j] = temp;
                swapperHelper(arr, j - 1, j)                // then swap the values 
            }
        }
    }
    console.log("This should be the sorted array: ", arr)
    return arr;
}

// console.log(bubbleSortThis(sortThisThing));                 // returns [1, 2, 3, 4, 5, 6, 8, 10, 34]
// console.log(bubbleSortThis(sortThisOtherThing));            // returns [1, 4, 6, 9, 10, 20, 32, 89]
console.log(bubbleSortThis(arrayOfAnotherSort));               // returns [0, 1, 2, 4, 7, 9, 10]


// Method 2: Using do ... while
// do ... while: 
// * This loop will always be executed at least once 
// * Even if the condition is false
// * The code block is executed before the condition is tested 

function doTheBubbleSorting(arr) {
    let swapped;                                                    // check swap status

    do {
        swapped = false;
        console.log("Array: ", arr)                                          // currently not swapped
        for (let i = 0; i < arr.length; i++) {
            console.log("I hit my for loop at least");
            console.log("BEFORE IF The arr[i]: ", arr[i]);
            console.log("BEFORE IF Next arr[i +1]: ", arr[i + 1]);
            console.log("BEFORE IF Is my argument true?", arr[i] > arr[i + 1]);                     // loop through the length of the array
            if (arr[i] && arr[i + 1] && arr[i] > arr[i + 1]) {
                console.log("Just hit the if");
                console.log("The arr[i]: ", arr[i]);
                console.log("Next arr[i +1]: ", arr[i + 1]);
                console.log("Is my argument true?", arr[i] > arr[i + 1]);
                swapperHelper(arr, i, i + 1);
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

// console.log(doTheBubbleSorting(sortThisThing));
// console.log(doTheBubbleSorting(sortThisOtherThing));
console.log(doTheBubbleSorting(arrayOfAnotherSort));             // doesn't sort if there is a 0