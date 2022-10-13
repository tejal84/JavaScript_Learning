

console.log("Q-1");

function isEvenOdd(number) {
    if (number % 2 == 0) {
        return `${number} is even`;
    }
    else {
        return `${number} is odd`;
    }
}
console.log(isEvenOdd(45));
console.log(isEvenOdd(70));
console.log(isEvenOdd(67));
console.log(isEvenOdd(98));
console.log("===============================================");

console.log("Q-2");
function eligibleVote(age) {
    if (age >= 18) {
        return `${age} age is eligible for vote`;
    } else {
        return `${age} age is not eligible for vote`;

    }
}
console.log(eligibleVote(18));
console.log(eligibleVote(20));
console.log(eligibleVote(17));
console.log(eligibleVote(40));
console.log("=======================================================");

console.log("Q-3");
function stringContains(str) {
    if (str.length > 10) {
        return `${str} contains more than 10 character`;
    } else {
        return `${str} does not contains more than 10 character`;

    }
}
console.log(stringContains("JavaScript-ES6"));
console.log("==========================================================");
console.log("Q-4");
function isStringStart(str) {
    if (str.startsWith("Java")) {
        return `${str} is start with Java`;
    } else {
        return `${str} is not start with Java`;

    }
}
console.log(isStringStart("JavaScript Language"));
