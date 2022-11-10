console.log("==============================Q-1- print the array element with its index value==================================");
const array_numbers=[1,-7,40,502,-77,91,0,108,89,-601];
array_numbers.forEach(function(currentValue,index){
    console.log("Element:",currentValue, "      index value:",index);
});
console.log("==============================Q-2-positive numbers from array==================================");
array_numbers.forEach((currentValue,index)=>{
    if (currentValue>0) {
        console.log("Element:",currentValue, "      index value:",index);
    }
})
console.log("==============================Q-3-Negative Numbers from array==================================");
array_numbers.forEach((currentValue,index)=>{
    if (currentValue<0) {
        console.log("Element:",currentValue, "       index value:",index);
    }
});
console.log("==============================Q-4-Even numbers from array==================================");
array_numbers.forEach((currentValue,index)=>{
    if (currentValue%2==0) {
        console.log("Element:",currentValue);
    }
    });
 console.log("==============================Q-5-sum of all the numbers from array==================================");
 let sum=0;
    for (let index = 0; index < array_numbers.length; index++) {
         sum=sum+array_numbers[index];
        // return sum;
        console.log("Sum of elements:",sum);
    }
    console.log("==============================Q-6-Even positioned array values from given array==================================");
    array_numbers.forEach((currentValue,index)=>{
        if ( index%2==0) {
            console.log("Element:",currentValue);
        }
     
    });
    console.log("==============================Q-7- Odd positioned array values from given array==================================");
    array_numbers.forEach((currentValue,index)=>{
        if (index%2!==0) {
            console.log("Element:",currentValue);
        }
    });