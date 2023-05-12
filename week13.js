
// 05-08

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


// 05-09

function span(arr, predicate) {
  let first = [];
  let rest = [];
  let foundFailure = false;

  for (let i = 0; i < arr.length; i++) {
    if (!foundFailure && predicate(arr[i])) {
      first.push(arr[i]);
    } else {
      foundFailure = true;
      rest.push(arr[i]);
    }
  }

  return [first, rest]
}

// 05-10

function accum(s) {
  let array = s.toLowerCase().split('')

 let map = array.map((letter, i, arr) => {
      return letter.charAt(0).toUpperCase() + letter.repeat(i) + '-'
  }).join('')
  return map.substring(0, map.length - 1)
}

// 05-11

function toAcronym(inp){
  return inp.toUpperCase().split(' ').map(word => word.charAt(0)).join('')
//     .split(' ').toUpperCase()
}