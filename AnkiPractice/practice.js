function isItAPalindrome (string) {

	
	let newString = string.split('').reverse().join('') 
	
	if (string === newString) {
		return 'it is a palindrome'
	} else {
		return 'it is not a palindome'
	}
}