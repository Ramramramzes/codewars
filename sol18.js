// Your task is to sort a given string. Each word in the string will contain a single number. 
// This number is the position the word should have in the result.
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""


function order(words){
  let count = 0,arr = [];
  while(count < words.split(' ').length){
    count++
    for(let i = 0; i < words.split(' ').length; i++){
      words.split(' ')[i].includes(count) ? arr.push(words.split(' ')[i]):false;
    }
  }
  return arr.join(' ');
}