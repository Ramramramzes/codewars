// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// For example, the score of abad is 8 (1 + 2 + 1 + 4).
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

function high(x){
  let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  mainArr = x.split(" "),
  max = 0
  myObj = {};
  for (let i = 0; i < mainArr.length; i++) {
    let wordWeigh = 0;
    for (let j = 0; j < mainArr[i].length; j++) {
      wordWeigh += arr_en.indexOf(mainArr[i][j])+1
    }
    wordWeigh > max ? max = wordWeigh : false;
    myObj[mainArr[i]] = wordWeigh;
  }
  for (key in myObj) {
    if(myObj[key] == max){
      return key;
    }
  }
}