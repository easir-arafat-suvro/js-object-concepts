// 1. using object literal or innitialization
const student = { name: 'Sakib Al Hasan', age: 35, job: 'crickter' }

// 2. object constructor
const person = new Object();
// console.log(person);

// 3. object inherit (উত্তরাধিকারসূত্রে পাত্তয়া)
// const human = Object.create(null);
const human = Object.create(student);
console.log(human.job);

// 4. creat object using constructor (called - Syntactic sugar)
class Pepole {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new Pepole('Manus', 12)
// console.log(peop);

// 5. creat object using function (used before ES6 class)
function Manus(name, business) {
    this.name = name;
    this.business = business;
}
const man = new Manus('Faruk', 'business');
// console.log(man);