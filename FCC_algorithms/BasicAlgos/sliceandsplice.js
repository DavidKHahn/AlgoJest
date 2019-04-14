/*You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs. */

function frankenSplice(arr1, arr2, n){
// Our goal is to take all of the elements from arr1 and insert them into arr2 starting with index position n. At the same time we must ensurethat neither arr or arr2 have been mutated.
    let replicaArr = arr2.slice();
// Using the slice() function we can create an exact replica of arr2 and assign the result of the operation to a variable, replicaArr.
// Now that we have an array that we can mutate on, we can iterate through every item in the first array. For each item in the first array we can use the splice() function to insert the item into index n of replicaArr.
    for(let i = 0; i<arr1.length; i++){
        replicaArr.splice(n, 0, arr1[i]);
        n++
// We increment the index n by one. This will ensure that every item from the arr1 is inserted into localArray in the proper index position.
    }
    return replicaArr;
// Then return replicaArr containing newly combined array
}

frankenSplice([1, 2, 3], [4, 5], 1);