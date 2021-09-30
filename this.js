/* 
1. "this" is a excution context, which depends on of which it will excute
    lesson for summary : 12m (video - 35-8)
2. for regular context catch the value of its right variable;
3. if has no right variable it will catch the 'windows';
4. arrow function catch the upper lable constext
5. if click on DOM element & it creat an event it will execute the event (tag);
6. If connected with an click handeler and execute later, when the function execute;  
*/

// console.log(this);

const Kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',

    treatDayArrow: () => { // arrow function unable to hold its own 'this' value catch the immediate upper context value;
        console.log(this);
    },

    treatDayInside: function () {
        const myArrow = () => console.log(this);
        myArrow();
    },

    treatDay: function (expense) { // Method
        this.money = this.money - expense;
        console.log('Call from kibrai-', this)
        return this.money;
    },
}

const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam',
}

function add() {
    console.log(this)
}
