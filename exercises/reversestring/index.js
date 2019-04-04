// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution #1

// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// Solution #2

// function reverse(str) {
//     let revArr = '';

//     for (let character of str) {
//         revArr = character + revArr ;
//     }

//     return revArr;
// }

// Solution #3

function reverse(str) {
    return str.split('').reduce(rev, char => char + rev, '')
}

module.exports = reverse;
