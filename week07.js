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