// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charMap = {};
    let max = 0;
    let maxChar = '';

    // for every character of string add into charMap object
    for (let char of str) {
        // if character does not exist then place into obj with a value of 1
        if (!charMap[char]) {
            charMap[char] = 1
        } else {
        // if character exists then increment by one
            charMap[char]++
        }
    }
    // runs through object to check which has most value using 'for in loop'
    for (let char in charMap) {
        // if value of current character inside object is greater than max then set it to become the new max
        if (charMap[char] > max) {
            max = charMap[char];
        // key of the highest value becomes new character key
            maxChar=char;
        }
    }
        // return key of Max character
        return maxChar;
}

module.exports = maxChar;
