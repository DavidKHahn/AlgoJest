/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/

function getIndexToIns(arr, num) {
//We use method-chaining to invoke one method after another to solve the problem in a single line. First we merge arr and num by invoking the arr.concat(num) method
    return arr.concat(num).sort((a, b) => a - b).indexOf(num);
//Then we use sort() with the callback arrow function (a, b) => return a-b to sort the numbers in ascending order. Lastly we return the postion or index of num in the array with the indexOf() method
}

getIndexToIns([1, 3, 4], 2);

/* Alternative Solution:

function getIndexToIns(arr, num) {
    arr.sort(function(a, b) {
      return a - b;
    });
  
    for (var a = 0; a < arr.length; a++) {
      if (arr[a] >= num)
        return a;
    }
  
    return arr.length;
  }
  */