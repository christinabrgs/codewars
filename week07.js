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
