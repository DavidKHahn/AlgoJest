// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution #1
// function palindrome(str) {
//     const reversed = str
//         .split('')
//         .reverse()
//         .join('');

//     return str === reversed;
// }

// Solution #2
function palindrome(str) {
    // convert str into array and use 'every()' to run through each item 
    // 'char' represents each character received from array, 'i' represents array elements used for iteration
    return str.split('').every((char, i) => {
        // compares each value with opposite side of array: [str.length - i - 1] <--checks from reversed order
        return char === str[str.length - i - 1]
    })
}



module.exports = palindrome;
