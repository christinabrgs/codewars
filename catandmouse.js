// You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

// You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

// C.....m returns 'Escaped!' <-- more than three characters between

// C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.

function catMouse(x){
    const arr = x.split('')
    console.log(arr)
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'C' && (arr[i + 4] === 'm' || arr[i + 3] === 'm' || arr[i + 2] === 'm' || arr[i + 1] === 'm')) {
          return 'Caught!'
        }
        else return 'Escaped!'
      }
    }