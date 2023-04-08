function upperCase (str) {
str.split(' ').map(word => word[0].toUpperCase() + word.splice(1))

console.log(str.join(' '))

}

upperCase("How can mirrors be real if our eyes aren't real")