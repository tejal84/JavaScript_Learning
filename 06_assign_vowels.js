
console.log("==========================Q-1===========================");
var givenString = "Good Morning IT Champ";
var count = 0;

var strLowerCase = givenString.toLowerCase();
for (let index = 0; index < givenString.length; index++) {
    var char = strLowerCase.charAt(index);
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
        if (givenString.includes(char)) {
            
        count++;
    }
}
}
    console.log(`Total no of vowels using include()are: ${count}`);
console.log("==================================Q-2==============================");


//WAP to count total no of vowels  using function
var str = "I Love JavaScript";
function countVowels(str1) {
    count = 0;
    var strLowerCase = str1.toLowerCase();
    for (let index = 0; index < str.length; index++) {
       var char = strLowerCase.charAt(index);
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {

            count++;
        }
    }

    return count;
}


var result = countVowels(str);
console.log(`The total number of vowels in given string are : ${result}`);
console.log(`The total number of vowels in given string are : ${countVowels("asvbxcnmbEEEEEEsgahqjMZXBDGHSJ")}`);

console.log("===================================Q-3===============================");

var sum1To10=function(){
    var sum=0;
    for (let index = 1; index <= 10; index++) {
        sum=sum+index;
    }
    console.log(`Sum of first 10 numbers is:${sum}`);
}
sum1To10();
console.log("====================Q-4+===========================");

function sumSquare()
{
    var sum = 0;
    for (let index = 1; index <= 5; index++) {
       
        var square= index * index;
        sum=sum+square;
    }
    return sum;
}
var sumResult =sumSquare();
console.log(`sum of square of num from 1 to 5 = ${sumResult}`);
console.log("====================Q-5================================");
var str1 = "Hard work always pays back";
var str2 = "Soon I will be Angular IT Champ"; 
function evenPositionedChar(str){
    var result= " ";
    for (let index = 0; index < str.length; index++) {
        
        if(index %2 ==0 && str.charAt(index) != " ")
        {
            result = result + str.charAt(index);
        }
        
    }
    return result;
}
var ans =evenPositionedChar(str1);
var result1 =evenPositionedChar(str2);
console.log(ans);
console.log(result1);
console.log("====================Q-6================================");
var str1 = "Hard work always pays back";
var str2 = "Soon I will be Angular IT Champ"; 
function oddPositionedChar(str){
    var result= " ";
    for (let index = 0; index < str.length; index++) {
        
        if(index%2!=0 && str.charAt(index) != " ")
        {
            result = result + str.charAt(index);
        }
        
    }
    return result;
}
var ans =oddPositionedChar(str1);
var result1 =oddPositionedChar(str2);
console.log(ans);
console.log(result1);