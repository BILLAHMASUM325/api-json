class Person{
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const heroPerson = new Person("Billah", 'Masum', 50000);
console.log(heroPerson);
const newPerson = new Person('bond', 'james', 007);
console.log(newPerson);

// before ES6
function Person1(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}
const oldPerson = new Person1('Grand', 'Papa', 1200);
console.log(oldPerson)