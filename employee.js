//Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. 
//Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and
// adds an additional property for department. Override the annual salary calculation method to include bonuses for managers.
// Create two instances of the 'Manager' class and calculate their annual salary.

class Employee {
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }
    calculateAnnualSalary(){
        return this.salary * 12;
    }
}
class Manager extends Employee {
    constructor(name, salary, department){
        super(name, salary);
        this.department = department;
    }
    calculateAnnualSalary(){
 // Managers get a 10% bonus
 const bonus = this.salary * 0.1;
 return super.calculateAnnualSalary() + bonus;
    }
}

//creating instances of Manager
const manager1 = new Manager("Lucy", 70000, "Sales");
const manager2 = new Manager("Ricky", 60000, "Marketing");

//calculating annual salary for each manager
const annualSalary1 = manager1.calculateAnnualSalary();
const annualSalary2 = manager2.calculateAnnualSalary();

//displaying annual salary for each manager
console.log(`Annual salary for ${manager1.name} is ${annualSalary1}`);
console.log(`Annual salary for ${manager2.name} is ${annualSalary2}`);


