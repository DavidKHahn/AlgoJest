// Remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function removeFalsy(arr){
    return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);