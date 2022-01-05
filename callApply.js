const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddit',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
        },
    chargeBill: function(amount){
        console.log(this)
        this.salary = this.salary - amount;
        return this.salary;
    }
}
// normalPerson.chargeBill(140);
// console.log(normalPerson.salary);
 const heroPerson = {
     firstName: "Billah",
     lastName: "Masum",
     salary: 2500
 }

 const friendlyPerson ={
     firstName: 'MD',
     lastName: "Mohammad",
     salary: 25000
 }
// Bind function

//  normalPerson.chargeBill();
//  const heroChargeBill = normalPerson.chargeBill.bind(heroPerson)
//  heroChargeBill(2000);
//  heroChargeBill(1000);
//  heroChargeBill(100);
        // const friendBill = normalPerson.chargeBill.bind(friendlyPerson);
        // friendBill(100);
        // friendBill(300);

// call function
normalPerson.chargeBill.call(heroPerson, 300)
console.log(heroPerson.salary);
normalPerson.chargeBill.call(friendlyPerson, 300)
console.log(friendlyPerson.salary)
