
const Kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',

    treatDay: function (expense, bokshis, tax) { // Method
        this.money = this.money - expense - bokshis - tax;
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

// call method
Kibria.treatDay.call(heroBalam, 400, 150, 50);
Kibria.treatDay.call(heroBalam, 300, 50, 50);

// apply method
Kibria.treatDay.apply(heroBalam, [300, 50, 50]);
Kibria.treatDay.apply(heroRaj, [300, 50, 50]);