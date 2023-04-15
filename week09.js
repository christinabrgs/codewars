// 04-10
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.



function sortByLength (array) {
    return array.sort((a, b) => a.length - b.length)
  };


// 04-11

function isPowerOfTwo(n){
  return Number.isInteger(Math.log2(n));
  
}


// 04 - 12

function fixTheMeerkat(arr) {
  let newArr = arr[0]
  arr[0] = arr[2]
  arr[2] = newArr
  
  return arr
} 


//04 - 13 

var countSheep = function(num) {
  let arr = Array(num).fill(0);
  const newArr = arr.map((_, i) => (i+1) + ' sheep...');
  return newArr.join('');
}

// 04 - 14

function greet () {
  return "hello world!"
}