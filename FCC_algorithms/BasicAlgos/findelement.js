function findElement(arr, func){
//The num variable is being passed into the function, so we set it to each index in our array.
    let num = 0;

    for (let i=0; i<arr.length; i++){
        if(func(arr[i])){
            return arr[i]
        }
    }
    return undefined;
// If none of the numbers in the array pass the function’s test, we return undefined.
}

findElement([1,2,3,4], num => num % 2 === 0);
// The pre-defined function already checks each number for us, so if it is “true”, we return that num.