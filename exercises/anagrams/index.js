// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution #1:
// function anagrams(stringA, stringB) {
//     const aCharMap = buildCharMap(stringA);
//     const bCharMap = buildCharMap(stringB);
// // Object.keys -> returns keys inside object and adding '.length' counts the total # of keys inside
//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//         return false;
//     }
// // for.. in checks objects
//     for (let char in aCharMap) {
//         if (aCharMap[char] !== bCharMap[char]){
//             return false;
//         }
//     }
// // if both cases succeed for this problem: return true
//     return true;
// }


// function buildCharMap(str) {
//     const charMap = {};
//     // runs a loop through each character string using regex + lowercase method and checks if char exists if not includes into object
//     for(let char of str.replace(/[^w]/g, '').toLowerCase()){
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
// }

// Solution #2:
function anagrams(stringA, stringB){
    // checks if both strings are anagrams
    return cleanStr(stringA) === cleanStr(stringB);
}

// helper function
// sort() -> array method which set characters in alphabetical or numerical order based on JS runtime environment
// use 'split('')' to turn into array first and then '.sort()' then 'join('')' to return back into string
function cleanStr(str){
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
