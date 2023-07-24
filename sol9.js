// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str){
  let res = [],word = '',flag = 0;
  for(let i = 0; i < str.length; i++){
    for(let j = 0; j < str.length; j++){
      if(flag == j && str[j] != " "){
        word += str[j].toUpperCase()
      }else{
        word += str[j];
      }
    }
    flag++;
    res.push(word);
    word = '';
  }
  return res;
}


