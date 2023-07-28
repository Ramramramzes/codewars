// In a small town the population is p0 = 1000 at the beginning of a year. 
// The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live 
// in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

function nbYear(p0, percent, aug, p) {
  let year = p0 + (p0 * (percent / 100) + aug ),
  count = 1;
  while(year < p){
    year += Math.floor((year * (percent / 100) + aug ));
    count++;
  }
  return count;
}