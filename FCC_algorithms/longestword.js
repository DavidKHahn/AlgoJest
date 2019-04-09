function longestWord(str) {
    let maxWord = 0;
    let words = str.split(' '); // splits each word into array
    // runs for loop checking each word's character count
    for (let i = 0; i < words.length; i++) {
        // if current index of word character count > maxWord's then replace with new count
        if (words[i].length > maxWord) {
            maxWord = words[i].length;
        }
    }
    // return highest count
    return maxWord;
}

