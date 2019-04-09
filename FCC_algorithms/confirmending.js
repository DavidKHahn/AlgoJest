function confirmEnding(str, target) {
    /* First we use the slice method copy the string.
    In order to get the last characters in str equivalent to the target’s length we use the slice method.
    The first parameter inside the slice method is the starting index and the second parameter would be the ending index.
    In this case we only include one parameter which it will copy everything from the starting index.
    We substract the length of str and the length of target, that way, we shall get the last remaining characters equivalent to the target’s length.
    Finally we compare the return result of slice to target and check if they have the same characters.
    */
    return str.slice(str.length - target.length) === target;
}

confirmEnding("Make react app", "app");