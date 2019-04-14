// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

function sumAll(arr) {
// set count variable for range to be added into
    let count = 0;
/* run a for loop starting with the min number of the array (used spread operator to gather array values) all the way up to the max number of array
*/
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
// add range into count through each iteration inside for loop
        count += i;
    }
// return total count of range
    return count;
}