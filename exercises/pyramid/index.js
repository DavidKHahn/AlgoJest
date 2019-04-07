// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//   const midpoint = Math.floor(((n * 2) - 1) / 2)

//   for (var row = 0; row < n; row++) {
//     let result = ''
//     let minusrange = midpoint - row
//     let plusrange = midpoint + row

//     for (var column = 0; column < n * 2 - 1; column++) {
//         // result += (column < minusrange || column > plusrange) ? ' ' : '#' 
//         // if (column < minusrange || column > plusrange) {
//         //     result += ' '
//         // } else {
//         //     result += '#'
//         // }
//       if (column >= minusrange && column <= plusrange) {
//         result += '#'
//       } else {
//           result += ' '
//       }
//     }   
//     console.log(result)
//   }
// }

// Solution #2:
// Set up default value: row=0, level=''
function pyramid(n, row = 0, level = '') {
    // set up midpoint
    const midpoint = Math.floor((n * 2 - 1) / 2);
    // once the number of rows equals n stop function
    if (n === row) {
        return;
    }
    // if the number of char is equivalent to the number of columns then log the values and start next row
    if (level.length === n * 2 - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    }
    // set up range below midpoint and above midpoint
    let lowerRange = midpoint - row;
    let higherRange = midpoint + row;
    // if the current position of level is less than lower range or greater than higher range add empty space into 'level'
    if (level.length < lowerRange || level.length > higherRange) {
        level += ' '
    } else {
        level += '#'
    }
    // recursion to keep running until it reaches base case or next row
    pyramid(n, row, level);
}

module.exports = pyramid;
