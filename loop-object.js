/* 
Types of for loop:
1. for (let i=0; i<10; i++){};
2. for (const num of numbers){};    // use to loop array or array like object,
3. for (const prop in students){};   // use to loop object,
*/

/* 
Get value from an object
1. objectName.property;
    exam : bottle.colot;
2. objectName["property name"];
    exam : bottle["color"]
3. objectName[variableName]; // after loop throw
    exam : bottle[props]

Note : console.log(prop);
    will give you propertise of object 
*/



const bottle = { color: ' yellow', hold: 'water', price: 50, height: 20, isCleaned: true };

// no : 1
for (const prop in bottle) {
    // console.log(prop, bottle[prop]);
}

// no : 2
const keys = Object.keys(bottle); // return an array
// console.log(keys);
for (const prop of keys) {
    // console.log(prop, bottle[prop]);
}

// no : 4 (advance)

// const entries = Object.entries(bottle);
// console.log(entries);   // get array within array

// const [key, value] = ['color', 'yellow'];   // destructuring

for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}