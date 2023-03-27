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

/* 03-22
After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).
*/


function rentalCarCost(d) {
  let total = d * 40
    if (d >= 7) {
      total -= 50
      }
    else if (d >= 3 && d < 7) {
      total -= 20
    }
  return total
}



/* 03-23
Area or Perimeter
*/
const areaOrPerimeter = function(l , w) {
  let perimeter = 2*(l + w)
  
  if (l === w) {
    let area = l **2
    return area
  }
  return perimeter
     
};

/* 03-24
he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
*/


String.prototype.toJadenCase = function () {
 const words = this.split(" ")
 
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1)
    }
  
return words.join(" ")
  
};



/* 03-26 
Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. The string can contain any char.
*/


function XO(str) {
  let xCount = 0
  let oCount = 0
      for (i = 0; i < str.length; i++) {
        if (str[i] === 'x' || str[i] === 'X') xCount += 1
        else if (str[i] === 'o' || str[i] === 'O') oCount += 1 
  }
    if (xCount === oCount) {
    return true
  } else { return false}
}

