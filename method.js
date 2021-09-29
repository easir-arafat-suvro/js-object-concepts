/*
A function within object is called Method 
Object proparty can be accessed within object by using "this.propertyName"
*/

const student = {
    id: 101,
    name: 'RJ Kibrira',
    money: 5000,
    major: 'mathematics',
    isRish: false,
    subjects: ['english', 'economics', 'math 101', 'calculas'],
    bestFriend: {
        name: 'khan',
        major: 'mathmatics'
    },
    takeExam: function () { // Method
        console.log(this.name, 'Taking exam.');
    },
    treatDey: function (expense, bokshis = 50) { // Method
        this.money = this.money - expense - bokshis;
        return this.money;
    },
}

student.takeExam()
const remaining1 = student.treatDey(950);
const remaining2 = student.treatDey(500, 200);
console.log(remaining1, remaining2);