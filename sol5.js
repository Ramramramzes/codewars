// A pangram is a sentence that contains every single letter of the alphabet at least once.
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
// because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is,
// False if not. Ignore numbers and punctuation.

function isPangram(string){
    let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for(let i = 0;i < string.length; i++){
        for(let j = 0; j < arr_EN.length; j++){
            string[i].toUpperCase() == arr_EN[j] ? delete arr_EN[arr_EN.indexOf(arr_EN[j])] : false;
        }
    }
    return arr_EN.filter(Boolean).length != 0 ? true : false;
}
