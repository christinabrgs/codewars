/* 03-14
The goal of this exercise is to convert a string to a new string where each character in the new string is 
"(" if that character appears only once in the original string, or ")" 
if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate. */

function duplicateEncode(str){

    let word = str.toLowerCase();

    let unique = '';
      for (let i = 0; i < word.length; i++) {
        if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) {
          unique += '(';
        } else
        unique += ')';
      }
      return unique;
    }

    console.log(duplicateEncode('Christina'));

/* 03-15
Consider an array/list of sheep where some sheep may be missing from their place. 
We need a function that counts the number of sheep present in the array (true means present). */


function countSheeps(arrayOfSheep) {
    let present = 0
    for (i = 0; i < arrayOfSheep.length; i++) {
      console.log(arrayOfSheep[i]) 
        if (arrayOfSheep[i] === true) {
         present ++
         console.log(present)
        }
      }
    return present
    }
    
    
/* 3-16
Make a function that will return a greeting statement that uses an input; 
your program should return, */
    
    function greet(name){
  return `Hello, ${name} how are you doing today?`
}

greet (console.log('What is your name?'))
    


/* 3-17
Complete the square sum function so that it squares each number 
passed into it and then sums the results together.
For example, for [1, 2, 2] it should return 9 because */


function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}


/* 3-19
Write a function that takes an array of numbers and returns the sum of the numbers. 
The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0. */


function sum(numbers) {
  
  let total = 0
  
  for (i=0; i < numbers.length; i++) {
    
    if (typeof numbers[i] !== `number`)  {return 0}   
    
    total += numbers[i] 
  }
  return total
}

/* 3-19 
Create a function with two arguments that will return an array of the first n multiples of x.
Assume both the given number and the number of times to count will be positive numbers greater than 0.
Return the results as an array or list ( depending on language ). */


function countBy(x, n) {
  let z = [x];
  z.length = n
      for (i = 1; i < z.length; i++) {
        z[i] = z[i-1] + x
      }
  return z;
}

