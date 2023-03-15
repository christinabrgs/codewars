/* 03-14
The goal of this exercise is to convert a string to a new string where each character in the new string is 
"(" if that character appears only once in the original string, or ")" 
if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate. */

function duplicateEncode(str){

    var word = str.toLowerCase();

    var unique = '';
      for (var i = 0; i < word.length; i++) {
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
    
    
    /* Make a function that will return a greeting statement that uses an input; 
    your program should return, */
    
    function greet(name){
  return `Hello, ${name} how are you doing today?`
}

greet (console.log('What is your name?'))
    