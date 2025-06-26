// JS Types
// Type inference
let firstName = 'John';
let isAdmin = false;
let age = 30;
// This is a type safety that typescript adds by setting a particular variable name within scope to one type only
// age = '30'

let duties = ['write code', 'fix bugs'];

let car = null;
let bicycle = undefined;

let work = () => {
    console.log('working...')
}

let salary = 50n;
let logo = Symbol('emerald')

let all = [firstName, isAdmin, age, car, bicycle, duties, work, salary, logo];

for (let item of all) {
    console.log(String(item) + ' is ' + typeof item)
}

/*
TS Types:
any
unknown
never
arrays
tuples
Enums
*/