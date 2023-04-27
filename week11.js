
// 04-24

function factorial(n){
  let result = n
  if (n=== 0 || n === 1) 
    return 1; 
  while (n> 1) { 
    n--;
    result *= n
  }
  return result;
}

// 04-25

function century(year) {
return Math.ceil(year/100)
}


// 04-26

function chain(start, functions) {
  return functions.reduce((result, fn) => fn(result), start);
}

function add(num) {
  return num + 1;
}

function mult(num) {
  return num * 30;
}


// 04/28

function outed(meet, boss){
  let bossScore = meet[boss]
  let totalScore = Object.values(meet).reduce((acc, curr) => acc + curr, 0) 
  
  let numOfEmployees = 0 
  
  for (let key in meet) { 
    ++numOfEmployees
  }
  
  return (totalScore + bossScore) / numOfEmployees <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'


  
}

 //  simple 

function outed(meet, boss) {
  let names = Object.keys(meet)
  let score = names.reduce((s,v) => s + meet[v], 0) + meet[boss]
  return score / names.length > 5 ? 'Nice Work Champ!' : 'Get Out Now!'
}