/* 03-27 
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain 
anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false. */

function validatePIN (pin) {
  let length = pin.length
    if (length === 4 || length === 6) return /^\d+$/.test(pin)
  else {return false}

}

// function validatePIN (pin) {
//   let length = pin.length
//     if (length === 4 || length === 6) {
//       for (i=0; i < pin.length; i++) {
//         pin.forEach[i] 
        
//         }
//     }




/* 03-28 

Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
*/




function paperwork(n, m) {
  if (n < 0 || m < 0) return 0
  else {
    return n * m
  }
}


/* 03 - 29 Add Length
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
*/

function addLength(str) {
  const words = str.split(" ")
  const newArray = []
  
  for (let word of words) {
    newArray.push(`${word} ${word.length}`)
  }
  return newArray
}


/* 03 - 31
This kata is about multiplying a given number by 
eight if it is an even number and by nine otherwise.
*/

function simpleMultiplication(number) {
  let newNumber = 0
  if (number % 2 === 0) {
    newNumber = number * 8
  }
  else {
    newNumber = number * 9
  }
  return newNumber
}

/* 04-01
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

function bmi(weight, height) {
  let bmi = weight / height**2
  if (bmi <= 18.5) {
    return 'Underweight'
  }
  else if (bmi <= 25.0) {
    return 'Normal'
  }
  else if (bmi <= 30.0) {
    return 'Overweight'
  }
  else {
    return 'Obese'
  }
}