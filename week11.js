
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
