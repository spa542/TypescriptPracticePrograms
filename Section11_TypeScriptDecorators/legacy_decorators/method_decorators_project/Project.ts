class Project {
    budget: number = 900
    writeTests() {
        console.log('Tests are important!')
    }

    @logDecoratorInternals2 
    @logDecoratorInternals1
    fixBugInProduction() {
        console.log('Fixing bug in production')
    } 
}

const project = new Project()
project.fixBugInProduction()

function logDecoratorInternals1(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(`target: ${target}`)
    console.log(`propertyKey: ${propertyKey}`)
    console.log(`descriptor: ${descriptor}`)
}

function logDecoratorInternals2(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value
    descriptor.value = function(...args: any[]) {
        console.log('what is this???')
        console.log(this)
        originalMethod.apply(this, args) 
    }
}