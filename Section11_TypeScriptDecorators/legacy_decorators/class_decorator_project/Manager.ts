export {}

// Decorators are applied bottom to top just like in python
@sealed // Will not cause an issue do to it being the last decorator being applied
@withEmploymentDate
@withEmploymentDateOnPrototype
class Manager {
    task: string = 'Simple task'
    project: string = 'Simple project'
    
    constructor() {
        console.log('Initializing the Manager class')
    }
}


console.log(new Manager())


// Class decorator
function withEmploymentDateOnPrototype(arg: Function) {
    arg.prototype.employmentDateOnPrototype = new Date().toISOString()
}

// This is basically saing our decorator excepts a constructor function argument
function withEmploymentDate<T extends { new(...args: any[]): {} }>(baseClass: T) {
    console.log('Invoking decorator!!!!')
    return class extends baseClass {
        employmentDate = new Date().toISOString()
        constructor(...args: any[]) {
            super(...args)
            console.log('Adding employment date to ' + baseClass.name)
        }
    }
}

function sealed(constructor: Function) {
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}
