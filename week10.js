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

// 04-20

function getCount(str) {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u')
    count += 1
  }
  
  return count;
}