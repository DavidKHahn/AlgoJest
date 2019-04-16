// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
// creaty empty arr
    let emptyArr = [];
// run through first array to check if elements listed are not in the 2nd array
    for(let i=0; i<arr1.length; i++){
// indexOf runs through each item then if character doesn't exist pushes item into empty Array
        if(arr2.indexOf(arr1[i]) === -1)
        emptyArr.push(arr1[i])
    }
// run through second array to check if elements listed are not in the 1st array
    for(let j=0; j<arr2.length; j++){
// indexOf runs through each item then if character doesn't exist pushes item into empty Array
        if(arr1.indexOf(arr2[j]) === -1)
        emptyArr.push(arr2[j])
    }
// returns items saved 
    return emptyArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

/* ALTERNATIVE SOLUTION:

function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(
          item => !arr1.includes(item) || !arr2.includes(item)
      )
  }

  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); 
  */
