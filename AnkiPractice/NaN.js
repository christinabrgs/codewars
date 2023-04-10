// RegEx validatePin
//  My function
function validPin (pin) {
    let num = pin.split('')
    if (num.length === 4 || num.length === 6) {
        num.forEach(char => {
            Number(char)
            return 
        })
        }
    return false
}

// other functions

function validatePIN (pin) {
    //return true or false
      var n = pin.length;
    if( n != 4 && n != 6)
            return false;
    for (var i in pin)
            if (pin[i] > '9' || pin[i] < '0')
                return false;
    return true;
  }

// 

function validatePIN (pin) {
    pin = pin.split('')
   const findNaN = pin.find(character => !(parseInt(character) >= 0))
    if ((pin.length === 4 || pin.length === 6) && !findNaN) {
      return true
    } else {
      return false
    }
  
  }
  
// 

  function validatePIN(pin) {
    if (pin.length == 4 || pin.length == 6) {

  
        if (isNaN(pin) == true) {
            return false
        }
        else if (pin < 0) { return false }
        else if (pin.startsWith('+', '-', ' ', '.')) { return false }
        else if (pin.includes('.', "'", "+", " ")) { return false }
        else if(pin.endsWith('\n')){return false}
        else {
            return true
        }
    } else { return false }
}

//   NaN = Not a Number... should come in as a number not a string, 
// should test to see if pin is NaN and if it is not, return false, each number must
//  be >0 and <9 and have no special characters. (. ' - +)