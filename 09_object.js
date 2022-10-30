let variable_name = "pune";

let mohit ={


}

let person= {
    "fullName": "Tejal Rathod",
    "city": "islampur",
    "age": 24,
    "isMarried": false,
    address: {
        street: "Ninainagar",
        pin_code : 432561,
        city: "islampur",
        state: "MH"
    },
    eat:function(){
        console.log("I am vegetarian");
    },
    walk:function(){
        console.log("I walk everyday");
    },
    details: function(){
        console.log('${this.fullName}')
    }
}
console.log(typeof person);
console.table(person.address);
console.table(person.address.street);
console.table(person.address.city);
person.address.landmark ="Near Main Road"
person.eat();
person.walk();
person.details();

person.fullName ="Tejal harishchandra Rathod";
person.pinCode= 415409;
person.profession="engineer";

console.table(person);



console.log(person.city);
console.log(person["age"]);

let personfullName = person.fullName;
console.log(personfullName);
console.log(person.fullName);

let collegeabc ={

}
console.log(collegeabc);