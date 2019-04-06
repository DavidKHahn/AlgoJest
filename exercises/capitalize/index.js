// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Solution #1:
// function capitalize(str) {
//     // set up empty array
//     let words = [];
//     // run for of loop while using split(' ') returning an array of spaced out words
//     for (let word of str.split(' ')) {
//     // grab each word starting with 1st char and capitalize first letter
//     // use slice() method to grab each set of words' characters after the 1st letter then combine the capitalized 1st letter
//     // push word back into words array
//          words.push(word[0].toUpperCase() + word.slice(1));
//     }
//     // returns each word back into a string format
//     return words.join(' ');
// }

// Solution #2:
function capitalize(str){
    // automatically make 1st char uppercase
    let result = str[0].toUpperCase();
    // for loop excluding 1st char
    for (let i = 1; i < str.length; i++){
        // if str char to left equals empty space then capitalize current str char and add to result
        if(str[i - 1] === ' ') {
            result += str[i].toUpperCase();
        } else {
        // else if current str does not have empty space to left then add to result as is
            result += str[i];
        }
    }
    // return string
    return result;
}


module.exports = capitalize;
