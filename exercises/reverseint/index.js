// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // toString() turns number into a string, split creates an array, reverse changes order of array, join changes array to string
    const reversed = n.toString().split('').reverse().join('');
    // parseInt() -> changes string to number, Math.sign() checks if result is '-' or '+'
    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
