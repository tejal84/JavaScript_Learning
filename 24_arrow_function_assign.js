console.log("***********************Assignment 01- Arrow Assignment*****************************");
console.log("Tejal Rathod");

console.log("============================Q-1=============================");
let show = () => {
    console.log("Good Evening, Today is sunday");
}
show();

console.log("==============================Q-2=============================");
let add =  (n1, n2, n3 = 1)=>{
    console.log("Multiplication of three values:-", n1 * n2 * n3);
}
add(5, 5, 2);

let Multiplication =  (n1, n2, n3 = 1)=>{
    console.log("Multiplication of three values:-", n1 * n2 * n3);
}
add(10, 4, 1);

console.log("============================Q-3===============================");
let addition = (n1, n2, n3, n4, n5)=>{
   return n1+n2+n3+n4+n5;
}
console.log("Addition of five numbers is- ", 100+100+200+349+756);

console.log("Concatenation of string :-", "I", "am", "learning", "E6", "feature", "in depth");

