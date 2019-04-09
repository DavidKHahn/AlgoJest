function repeatStringNumTimes(str, num) {
    // Create an empty string variable to store the repeated word.
    let strNum = '';
    // While loop to repeat code as many times as needed according to num
    // Then we just have to add the string to the variable created on step one, and decrease num.
    while (num > 0) {
        strNum += str;
        num--;
    }
    // return the strNum variable
    return strNum;
}

repeatStringNumTimes("nba", 3);