
// 05-15

function mostLikely(prob1,prob2){
  let x = prob1.split(':')
  let y = prob2.split(':')

  console.log(x, y)
      

  return (x[0] / x[1]) > (y[0] / y[1]) ? true : false

}