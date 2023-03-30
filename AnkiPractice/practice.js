function atmPin (str) {
   const pin = str.split('')
   for (let digit of pin) {
    let check = Number(digit)
    if (check >= 0 && check <= 9) {
        return true
    }
   }
}