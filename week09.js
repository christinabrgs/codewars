// 04-10
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.



function sortByLength (array) {
    return array.sort((a, b) => a.length - b.length)
  };


// 04-11

function isPowerOfTwo(n){
  return Number.isInteger(Math.log2(n));
  
}