// 04 -17

function otherAngle(a, b) {
  let c = 180 - (a + b);
  return c;
}

// 04-18

var summation = function (num) {
 let sum = 0
 for (let i = 0; i <= num; i++) {
   sum += i
 }
 return sum
}

// 04-19

function stray(numbers) {
  
  const sorted = numbers.sort((a, b) => {return a - b})
  
  return sorted[0] === sorted[1] ? sorted[sorted.length - 1] : sorted[0]
  
}