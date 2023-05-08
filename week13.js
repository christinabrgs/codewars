
// 04 - 18

function findMultiples(integer, limit) {
  // taking an integer and returning an array of its multiples up to the limit
  // if the limit is a mulitple, it should be included in the array
  // define an empty array
  let array = []
  
  // for loop, iterating over each element in an array 
  for (let i = 1; i <= limit; i++) {
    if (i % integer === 0) {
      array.push(i)
      
    }
  }
  return array
}
