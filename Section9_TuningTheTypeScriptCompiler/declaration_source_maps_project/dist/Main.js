"use strict";
function doStuffTimes(times) {
    for (let index = 0; index < times; index++) {
        console.log('Doing something' + index);
    }
}
function printPerson(person) {
    console.log(`${person.name} is ${person.age} years old`);
}
doStuffTimes(3);
printPerson({
    name: 'John',
    age: 30
});
//# sourceMappingURL=Main.js.map