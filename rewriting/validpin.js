// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

function validPin (pin) {
    let length = pin.length 

    if (length === 4 || length === 6) return /^\d+$/.test(pin)
    else {return false}

}

function isValidPIN(pin) {
    let pinNumber = Number(pin);
    return (pin.length === 4 || pin.length === 6) && !Number.isNaN(pinNumber);
}

// !Number.isNaN(pinNumber) checks if pinNumber is not NaN. This ensures that pin is a numeric string.

// The function returns true only if pin is a string of exactly 4 or 6 digits. Otherwise, it returns false.


functino isValidPIN(pin) {
    let pinNumber = Number(pin)

    return (pin.length === 4 || pin.lenth === 6) && !Number.isNaN(pinNumber);
}