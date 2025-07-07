
// Es6 node syntax
export const concatenate = (arg1, arg2) => {
    return arg1 + arg2
}

export const concatenateWithSpace = (arg1, arg2) => {
    return arg1 + ' ' + arg2
}

// exports.const concatenateWithSpace = (arg1, arg2) => {
//     return arg1 + ' ' + arg2
// }

// Below is cleaner! but only for node.js
// Making these functions available outside the current file
// module.exports = {
//     concatenate,
//     concatenateWithSpace
// }

export default class Person {
    name;
    position;
}
