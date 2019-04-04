// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Solution #1
// function chunk(array, size) {
//     // array that holds all the different chunks
//     const chunked = [];
//     // iterate through 'for of' loop
//     for (let x of array){
//         // chunk currently working with starts checking index from the end of array ([chunked.length - 1])
//         const last = chunked[chunked.length - 1];
//         // if index does not exist or the 'chunked' array equals the size then push new element into chunked array
//         if (!last || last.length === size) {
//             chunked.push([x]);
//         } else {
//         // otherwise add chunk to current element since it is not full or equivalent to the size
//             last.push(x);
//         }
//     }
//     return chunked;
// }

// Solution #2

function chunk(array, size) {
    const chunked = [];
    let index = 0;
    // run while index is still less than number of items in array
    while (index < array.length) {
        // slice takes a chunk out of the original array and creates array to be pushed into chunked
        chunked.push(array.slice(index, index + size));
        // move to next array by incrementing with value of size
        index += size;
    }
    return chunked;
}

module.exports = chunk;
