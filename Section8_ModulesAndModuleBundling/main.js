
// Available only inside node.js
//const Utils = require('./utils');
// Used for Es6 node syntax
// Es6 format will work within a browser! Unlike regular node.js format
import { concatenate, concatenateWithSpace } from './utils.js';
//import * as utils from './utils.js';
//import { concatenate as concat, concatenateWithSpace as concatWithSpace } from './utils.js';
// Will take the default export here
import Personz from './utils.js';

// Using old syntax for node only
// const nameAndFunction = Utils.concatenate('Hello', 'World');

// const nameAndFunctionWithSpace = Utils.concatenateWithSpace('Hello', 'World');

const nameAndFunction = concatenate('Hello', 'World');

const nameAndFunctionWithSpace = concatenateWithSpace('Hello', 'World');

console.log(nameAndFunction);
console.log(nameAndFunctionWithSpace);

// npm i -g serve
// Serve HTML as a server to browser

const somePerson = new Personz();
somePerson.name = 'John';
somePerson.position = 'Programmer';
console.log(somePerson);

// CommonJS
// Using require dynamically!
// if (process.argv[2] === 'John') {
//     const crypto = require('crypto');
//     const uuid = crypto.randomUUID();
//     console.log(uuid);
// }

// Es6
if (process.argv[2] === 'John') {
    const crypto = await import('crypto');
    const uuid = crypto.randomUUID();
    console.log(uuid);
}
