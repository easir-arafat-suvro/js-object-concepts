/* 
To check between objects JS always check the referencial intregrity (premitive type)
*/

const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };
const third = first;

//---------
if (first == second) {
    // console.log('object are equal');
}
else {
    // console.log('object are diffrent');
}

// check the data place of data storage in the computer memory
if (first == third) {
    // console.log('object are equal');
}
else {
    // console.log('object are diffrent');
}

// stringify (not recommanded)
console.log(JSON.stringify(first));
console.log(JSON.stringify(second));

if (JSON.stringify(first) === JSON.stringify(second)) {
    // console.log('Objects are equal')
};

// position of "keys:value" must be same
const first2 = { a: 1, b: 2 };
const second2 = { b: 2, a: 1 };

// const first2 = { a: 1, b: 2 };
// const second2 = { b: '2', a: 1 };

// const first2 = { a: 1, b: 2 };
// const second2 = { b: 2, a: 1, c: 3 };

if (JSON.stringify(first2) === JSON.stringify(second2)) {
    console.log('Objects are equal')
}
else {
    console.log('Objects are not equal')
};

// -----------
function comparetiveObjects(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return true;
    }

    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }
    return true;
}
const isEqual = comparetiveObjects(first2, second2);
console.log(isEqual);
