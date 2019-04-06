// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Solution #1:
// function steps(n) {
//     // run a for loop for each 'row'
//     for (let row = 0; row < n; row++) {
//     // create empty string 
//         let stair = '';
//     // run through each column
//         for (let column = 0; column < n; column++) {
//     // checks each column and row if they're equal or less
//             if (column <= row) {
//     // adds in '#' to stair if equal or less
//                 stair += '#';
//             } else {
//     // adds in ' ' to stair if equal or less
//                 stair += ' ';
//             }
//         }
//     // logs each stair inside 'row' for loop so iteration can run through 'n' rows
//          console.log(stair);
//     }
// }

// Solution #2:
// set up 'row=0' and stair as empty string as default arguments
function steps(n, row=0, stair=''){
    if(n===row){
        return;
    }
    // checks if 'n' value is equal to length inside stair 
    if (n === stair.length) {
        console.log(stair);
        // runs next row in the steps function
        // 'stair' argument left out to default ''
        return steps(n, row + 1);
    }
    // if characters in stair is less than row then add '#' otherwise add ' ' 
    if (stair.length <= row){
        stair+= '#'
    } else {
        stair+= ' '
    }
    // call steps again to run back function for next char
    steps(n, row, stair);
}

module.exports = steps;
