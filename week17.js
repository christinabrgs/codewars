// 06-01

// Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

// Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).

// Examples
// [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
// [0, 1, 2, 3, 4, 5]  



function duplicates(arr) {
 let seen = new Set();
  let duplicates = [];

  for (let element of arr) {
    if (seen.has(element) && !duplicates.includes(element)) {
      duplicates.push(element);
    }
    seen.add(element);
  }

  return duplicates;
  
}


// 06-06 

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8


function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}

function rowSumOddNumbers(n) {
 return n*n*n
}








function minAndMax(arr) {
 sorted = arr.sort((a, b) => a-b)

const min = sorted[0]
const max = sorted[sorted.length - 0]

return min, max
}