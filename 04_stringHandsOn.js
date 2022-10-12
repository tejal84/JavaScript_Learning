var stringHandsOn =function (){
    console.log("Given string is : Hey you are doing good, keep it up");  
}
stringHandsOn();
var string = " Hey you are doing good, keep it up";
console.log("Length of string is:",string.length);

var trimResult= string.trim();
console.log("remove all the leading and trailing spaces:", trimResult.length);
var extraSpaces=string.length-string.trim();

var txt = " Hey you are doing good, keep it up";
console.log("first character of string is:", txt.charAt(1));
console.log("last character of string is:", txt.charAt(34));
console.log("Index of word good is:", txt.indexOf("good"));
console.log("substring starting from index 22:", txt.slice(22));
console.log("Is string ends with word up:",txt.includes("up"));
console.log("Is string start with word Hey:",txt.includes("Hey"));