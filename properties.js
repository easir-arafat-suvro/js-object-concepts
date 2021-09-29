/* const objectName = {key: Value}; */

const bottle = { color: ' yellow', hold: 'water', price: 50, height: 20, isCleaned: true };
const jug = { color: ' yellow', hold: 'water', price: 500, height: 200, isCleaned: true };

// getting all properties name (Keys)
const keys = Object.keys(bottle)
// console.log(keys);

// get all Values
const values = Object.values(bottle);
// console.log(values);

// ----
const pairs = Object.entries(bottle);
// console.log(pairs);

// 'seal' to protect delete or add new property, only able to edit/update property  
Object.seal(jug);
jug.price = 1050;
jug.height = 150;

delete jug.height; // unable to delete
console.log(jug);

// 'freeze' to protect delete or add new property, unable to edit/update property  
Object.freeze(bottle);
bottle.price = 100;
bottle.height = 16;

delete bottle.hold; // unable to delete
console.log(bottle);

// Delete property within array if "seal" and "freeze" are not available for the object
// delete bottle.hold;
// console.log(bottle);

