/* 03-12 
We need a function that can transform a string into a number. What ways of achieving this do you know? */   

const stringToNumber = function(str){
    number = Number(str)
   return number;
 }
 
 /* 03-21  
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative? */

function makeNegative(num) {
  if (num > 0) { 
    return 0 - num  
  }
  else if (num == 0) {
      return 0
}
  else {return num}
}
