// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.
// For example:
// url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// url = "https://www.cnet.com"                -> domain name = cnet"

//todo ---->   Better version
function domainName(url){
  return url.replace('http://','').replace('https://','').replace('www.','').split('.')[0];
}

// function domainName(url){
//   let dotCheck = 0,domen,from,to;
//   for (let i = 0; i < url.length; i++) {
//     if(url[i] == '.'){
//       dotCheck++
//       if(dotCheck <= 2){
//         from == undefined ? from = i : to = i;
//       }
//     }
//   }
//   if(!url.includes('http') && !url.includes('www')){
//     domen = url.slice(0,url.indexOf('.'));
//   }else{
//     if(url.includes('www')){
//       domen = url.slice(++from,to);
//     }else if(dotCheck <= 2){
//       domen = url.slice((2+url.indexOf('/')),url.indexOf('.'));
//     }
//   }
//   return domen;
// }