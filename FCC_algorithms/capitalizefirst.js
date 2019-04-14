// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case. For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str){
// We are making entire string lowercase and then converting it into array. 
    let convertStr = str.toLowerCase().split(" ");
//Then we are using map function to replace the lowercase character with uppercase.
    let result = convertStr.map(val => {
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase())
    });
// Finally, we are returning the string using join method.
    return result.join(" ");
}

titleCase("I'm a little tea pot");