class Project {

    budget: number = 900

    @withBudget(10) 
    writeTests() {
        console.log('Tests are important!')
    }

    @withBudget(500)
    fixBugInProduction() {
        console.log('Fixing bug in production')
    } 
}

const project = new Project()
project.fixBugInProduction()
project.fixBugInProduction() // Will trigger else condition in decorator

// Decorator factory
// Ensure that the decorator is only used for a class that has a budget property
function withBudget(budget: number) {
    return function <T extends { budget: number }>(target: T, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod: Function = descriptor.value
        descriptor.value = function(...args: any[]) {
            const instance = this as T
            if (instance.budget > budget) {
                instance.budget = instance.budget - budget
                originalMethod.apply(this, args)
            } else {
                console.log(`Insufficient budget for ${propertyKey}. Required ${budget}, available ${instance.budget}`)
            }
        }
    }
}