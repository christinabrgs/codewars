
// 04-05

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
  return birds.filter(bird => !geese.includes(bird))
};


// 04-04

function updateLight(current) {
  if(current === 'green') {
    return 'yellow'
  }
  else if (current === 'yellow') {
    return 'red'
  }
  else {return 'green'}
}

// 04-03

function digitize(n) {
  let array = n + ""
  let newArray = array.split('')
  let backwards = newArray.reverse().map((num) => { 
    return Number(num)
  })
  
  return backwards

}