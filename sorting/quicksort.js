// QUICK SORT

// array to sort through
let quickArr = [9, 4, 65, 6, 7, 2, 10, 23, 76, 65];
let anotherThing = [23, 5, 6, 7, 20, 100, 60, 30, 33];

// sorting function that takes in the array
function sortThisThing(arr) {
    if (arr.length === 0) {                 // if the array is empty, then return 
        return arr;
    };

    let pivot = arr[0];                     // set the pivot value to be the first number in the array
    let left = [];                          // set left to be an empty array
    let right = [];                         // set right to be an empty array

    //loop through the length of the array
    console.log("array", arr)
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {               // if the item at index "i" is less than the pivot value
            console.log("pivot", pivot) 
            left.push(arr[i]);              // if true - push into the "left" array 
            console.log("left", left);
        } 
        else {                              // if the value is not less than the pivot value 
            right.push(arr[i]);             // then it must be greater or equal to - so push into the "right" array
            console.log("right", right)
        }

    }

    // Recursion
    // Uses the function within itself to then loop through the new arrays of sorted values 
    return sortThisThing(left).concat(pivot, sortThisThing(right))
}

console.log(sortThisThing(quickArr))
console.log(sortThisThing(anotherThing));

module.exports = sortThisThing;