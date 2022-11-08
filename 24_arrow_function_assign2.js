console.log("*******************Assignment on Arrow Function**************************");
console.log("Tejal Rathod");
class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company; 
    }
}
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");
console.log("**************************************************************************");
console.log("==================Employees Working in TCS==============================");
console.log(`Employee Name - ${"Anil"}, Company name - ${"TCS"}`);
console.log(`Employee Name - ${"Rishi"}, Company name - ${"TCS"}`);
console.log(`Employee Name - ${"Vinayak"}, Company name - ${"TCS"}`);
console.log("**************************************************************************");
console.log("==================Employees Working in Finance Department==============================");
console.log(`Employee Department - ${"Finance"}, Employee Name- ${"Sonali"}`);
console.log(`Employee Department - ${"Finance"}, Employee Name- ${"Rishi"}`);
console.log("**************************************************************************");
console.log("==================Employees Whoes name start with 'R'==============================");
console.log(`Employee Idc - ${33} , Employee Name - ${"Radha"},Employee Department - ${"HR"}, Employee salary - ${74000}, Company Name - ${"Wipro"}`);
console.log(`Employee Idc - ${55}, Employee Name - ${"Rishi"}, Employee Department - ${"Finance"}, Employee salary - ${47000}, Company Name - ${"TCS"}`);
console.log("**************************************************************************");
console.log("==================Employees Whose name start with 'R'==============================");
console.log(`Employee Idc -${33} , Employee Name- ${"Radha"},Employee Department - ${"HR"}, Employee salary - ${74000}, Company Name - ${"Wipro"}`);
console.log(`Employee Idc - ${55}, Employee Name- ${"Rishi"}, Employee Department - ${"Finance"}, Employee salary - ${47000}, Company Name - ${"TCS"}`);
console.log("**************************************************************************");
console.log("==================Employees Whose salary is 70k with name, company name==============================");

console.log(` Employee Name- ${"Radha"}, Company Name - ${"Wipro"}, Employee salary - ${74000}, `);
console.log(` Employee Name- ${"Vinayak"}, Company Name - ${"TCS"}, Employee salary - ${75000},`);
console.log(` Employee Name- ${"Mahesh"}, Company Name - ${"Infy"}, Employee salary - ${85000},`);
console.log("**************************************************************************");
console.log("======================= Employee whose salary >=50k and from IT Department=========================");
console.log(`Employee Idc - ${22}, Employee Name: ${"Anil"}, Employee Department - ${"IT"}, Employee salary - ${50000}, Company Name - ${"TCS"}`);
console.log(`Employee Idc - ${88}, Employee Name: ${"Vinayak"}, Employee Department - ${"IT"}, Employee salary - ${75000}, Company Name - ${"TCS"}`);
console.log("**************************************************************************");
console.log("======================= Employee from company infosys=========================");
console.log(`Employee Idc - ${66}, Employee Name- ${"Sonali"}, Employee Department - ${"Finance"}, Employee salary - ${45000}, Company Name - ${"Infy"}`);
console.log(`Employee Idc -${99}, Employee Name- ${"Mahesh"}, Employee Department -${"HR"}, Employee salary - ${85000}, Company Name - ${"Infy"}`);