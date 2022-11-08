console.log("===================Q-1====================");
const bank_sbi ={
    name: "State Bank of India",
    Branch:"Islampur",
    account_number:9876543210, 
    account_type: "Saving"
}
console.log(bank_sbi);
console.log("===================Q-2====================");
const bank_location={
    street:"ninai nagar,islampur",
    city:"Islampur",
    pin_code:415409
}
console.log(bank_location);
console.log("===================Q-3 - using object assign====================");
const cloned_bank_sbi=Object.assign({},bank_sbi);
console.log("Cloned object:-",cloned_bank_sbi);
const cloned_bank_location=Object.assign({},bank_location);
console.log("Cloned object:-",cloned_bank_location);
console.log("===================Q-3 - using spread operator====================");
const bank_name = {bank_sbi};
console.log("Cloned object:-",bank_name);
const sbi_bank_location={bank_location};
console.log("Cloned object:-",sbi_bank_location);
console.log("===================Q-4====================");
const rate_of_interest={
    home_loan_interest:"xyz%%",
    personal_loan_interest:"pqr%",
    due_interest:"abc%"
}
console.log(rate_of_interest);
console.log("===================Q-5- after merging====================");
const sbi_details=Object.assign(bank_sbi,bank_location,rate_of_interest);
console.table(sbi_details);

