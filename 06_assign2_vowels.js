var str= "Hard work always pays back"
var str ="Soon i will be Angular IT Champ "
    function reverseString(str) {
    var lenStr=str.length-1;
var reverseString="";
  for (let index =lenStr; index >=0; index--) {
    reverseString=reverseString+str.charAt(index);
  }  
  return reverseString;
    
}
console.log(`Reverse of the string si:${reverseString("Hard work always pays back")}`);
console.log(`Reverse of the string si:${reverseString("Soon i will be angular IT Champ")}`);