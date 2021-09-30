/* 
 A method within a object can be used from other object using "bind method"
*/

const Kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',

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

const heroRaj = {
    id: 103,
    money: 8000,
    name: 'Hero Raj',
}

// call who has a own method
Kibria.treatDay(100);

// bind method
const heroTreatDay = Kibria.treatDay.bind(heroBalam);

heroTreatDay(500);
heroTreatDay(400);
Kibria.treatDay(550);

// Mind method
const RajTreatDay = Kibria.treatDay.bind(heroRaj);
RajTreatDay(6000);


