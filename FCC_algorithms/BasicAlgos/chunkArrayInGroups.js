// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    // Firstly, we create two empty arrays called temp and result, which we will eventually return.
    let temp = [];
    let result = [];
    // Our for loop loops until 'i' is equal to or more than the length of the array in our test.
    // Inside our loop, we push to temp using temp.push(arr[i]); if the remainder of i / size is not equal to size - 1.
    for (let i = 0; i < arr.length; i++) {
        if (i % size !== size - 1)
            temp.push(arr[i])
        else {
    // Otherwise, we push to temp, push temp to the result variable and reset temp to an empty array.
            temp.push(arr[i]);
            result.push(temp);
            temp = [];
        }
    }
    // Next, if temp isn’t an empty array, we push it to result. Finally, we return the value of result.
    if (temp.length !== 0)
        result.push(temp)
    return result
}

// ALTERNATIVE SOLUTION:

/*
function chunkArrayInGroups(arr, size) {
// Firstly, we create two variables. newArr is an empty array which we will push to. We also have the count variable set to zero, for use in our while loop.
    let newArr = [];
    let count = 0;

// Our while loop loops until count is equal to or more than the length of the array in our test.

    while (count < arr.length) {

// Inside our loop, we push to the newArr array using arr.slice(count, count+size). For the first time it loops, it will look something like: 'newArr.push(arr.slice(1, 1+2))'

      newArr.push(arr.slice(count, count+size));
      
// After we push to newArr, we add the variable of size onto count.
      count += size;
    }
// Finally, we return the value of newArr.
    return newArr;
  }
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
  */