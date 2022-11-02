const arrayOfNames=['kamat','Menon','Nashpati','Taimur','Menon','Kamat','Andy','Taimur'];
console.log(`Original array:${arrayOfNames}`);
console.log(`Total length of array is:${arrayOfNames.length}`);
var length=arrayOfNames.length;

console.log("================ removing duplicate elements=================");
let groupOfNames=new Set(arrayOfNames);
console.log("After removing the duplicate elements:",groupOfNames);
let len=groupOfNames.size;
console.log("Length of given array after removing duplicate elements:",len);

console.log("==============================================");
var count=length-len;
console.log("Removed elements from given groupOfNames:",count);
console.log("=================================================");
console.log("total no. of element after removing duplicates:",len);



