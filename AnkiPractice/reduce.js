let num = [1, 2, 2]
function sumOfSquares () {
	return this.reduce((total, num) => total + num**2, 0) 
}