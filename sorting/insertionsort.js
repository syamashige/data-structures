// INSERTION SORT

// Iterates, consuming one input element each repetition and growing a sorted output list
// Each iteration removes one element from the input data, finds the location it belong within the sorted list and inserts it there
// Repeats until no input elements remain

let sortThisArray = [2, 9, 8, 10, 4, 1, 3, 6, 7, 5];
let sortThisOtherArray = [4, 7, 10, 90, 2, 40, 22, 5];

function insertSortThis(arr) {                  
    console.log("arr", arr)                     
    for (let i = 0; i < arr.length; i++) {   // Loop through the length of the array
        let temp = arr[i];                   // Temporary storage for the value at the particular index
        console.log("Temp", temp)
        let j = i - 1;                       // The "j" will be what is before the particular "i" index
        console.log("J", j)
        while (j >= 0 && arr[j] > temp) {    // While the index before is greater than or equal to 0 and the value is greater than the arr[i];
            arr[j + 1] = arr[j];             // Set the next index to be equal to the original value 
            j--;                             // Decrement the index 
        }                                                                                                                                                            
        arr[j + 1] = temp;                  // The value at the index "j" + 1 will equal to the original value of arr[i]
    }
    console.log("return arr", arr)
    return arr;
}
console.log(insertSortThis(sortThisArray));   // Returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(insertSortThis(sortThisOtherArray)); // Should Return: [2, 4, 5, 7, 10, 22, 40, 90]