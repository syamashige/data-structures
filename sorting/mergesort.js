// MERGE SORT: Divide and Conquer

// Divide the unsorted list into n sublists, each containing 1 element 
// A list of only 1 element is considered to be sorted
// Repeatedly merge sublists to produce new sorted sublits until there is only 1 sublist remaining 

let sortThisThing = [3, 8, 10, 2, 1, 6, 5, 7, 4, 9];
let sortThisOtherThing = [20, 34, 5, 7, 91, 10, 0, 4]

function mergeSortThis(arr) {
    // console.log("Original Array: ", arr)
    if (arr.length === 1) {                              // recursion base case 
    // base case can also be (arr.length < 2)
        return arr;                                      // when it the array only has 1 item left --> return 
    }
    
    let middle = Math.floor(arr.length / 2);            // there are 9 items in the sortThisThing array -> returns 4
    // can also use Math.ceil (round upwards -> ex: 2.5 = 3)
    // console.log("Middle: ", middle);
    let left = arr.slice(0, middle);                    // sets everything from the first index to the middle index as the left 
    // console.log("Left: ", left);
    let right = arr.slice(middle);                      // sets everything from the middle index and onward as the right 
    // console.log("Right: ", right)

    return mergeThis(mergeSortThis(left), mergeSortThis(right)); 
}

function mergeThis(left, right) {                         // define the function mergeThis 
    let mergedArr = [];                                   // empty array to push the bits and pieces to    
    // console.log("Merged Arr: ", mergedArr)

    while (left.length && right.length) {                 // while the left and the right still have a length 
        if (left[0] < right[0]) {                         // if the first value in the left array is less than the first value of the right 
            mergedArr.push(left.shift());                 // extract the left first value and push it into the empty mergeArr array
        } 
        else {                                            // else - the first value of the left array must be greater than the right
            mergedArr.push(right.shift());                // then, extract the first value from the right and push it into the empty array
        }
    }
    console.log("Pushed Here: ", mergedArr)
    return mergedArr.concat(left).concat(right)           // concatinate everything together
}

console.log("Sorted Array: ", mergeSortThis(sortThisThing)); // returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("Sorted Other Thing: ", mergeSortThis(sortThisOtherThing)); // returns [0, 4, 5, 7, 10, 20, 34, 91]