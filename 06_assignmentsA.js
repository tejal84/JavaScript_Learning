

console.log("===========================Q-1=======================");


function maleMarriageEligibility(gender, age, boyName) {
    var eligibility = gender == "male" && age >= 21 ? `Hey ${boyName} You are eligible for marriage` : `Hey ${boyName} you are not eligible for marriage`;
    console.log(eligibility);
}
maleMarriageEligibility("male", 25, "Billgates");
maleMarriageEligibility("male", 17, "Stew Jobs");

console.log("=========================Q-2==========================");
function femaleMarriageEligibility(gender, age, girlName) {
    if (gender == "Female" && age >= 18) {
        return `Hey ${girlName} You are eligible for marriage`;
    }
    else {
        return `Hey ${girlName} you are not eligible for marriage`;
    }
    // var eligibility=gender=="female" && age>=18?`Hey ${girlName} You are eligible for marriage`:`Hey ${girlName} you are not eligible for marriage`;
    // console.log(eligibility);
}
console.log(femaleMarriageEligibility("Female", 16, "Jenifer"));
console.log(femaleMarriageEligibility("Female", 27, "Malinda Gates"));


