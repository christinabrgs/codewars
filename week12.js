
// 05-02

function validParentheses(parens){
  var result = 0;
  
  for (var i = 0 ; i < parens.length && result>= 0; i++) {
    result+= (parens[i] == '(') ? 1 : -1;    
  }
  
  return (result == 0);
}


// 05-03

function toCamelCase(str){
  let newStr = "";
  if(str){
    let wordArr = str.split(/[-_]/g);
    for (let i in wordArr){
      if(i > 0){
        newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
      }else{
        newStr += wordArr[i]
      }
    }
  }else{
    return newStr
  }
  return newStr;
}
