@withEmploymentDate
@withEmploymentDateOnPrototype
@printDecoratorData
class Manager {
    task: string = 'Simple Task'
    project: string = 'Simple Project'

    constructor() {
        console.log('Initializing the Manager class')
    }
}

// If using ClassDecoratorContext -> Then the decorator cannot be called outside the context of class level
function printDecoratorData(value: Function, context: ClassDecoratorContext) {
    console.log('value')
    console.log(value)
    console.log('context')
    console.log(context)
    context.addInitializer(() => {
        console.log('Initialized class ' + context.name)
    })
}

function withEmploymentDateOnPrototype(value: Function, context: ClassDecoratorContext) {
    value.prototype.employmentDateOnPrototype = new Date().toISOString()
}

// Inditcating that we want a constructor function type
function withEmploymentDate<T extends { new(...args: any[]): {} }>(baseClass: T, context: ClassDecoratorContext) {
    return class extends baseClass {
        employmentDate = new Date().toISOString()
        constructor(...args: any[]) {
            super(...args)
            console.log('Adding employment date to ' + baseClass.name)
        }
    }
}

const manager = new Manager()
console.log(manager)