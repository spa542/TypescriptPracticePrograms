// NOTE: Not used in modern TS!
// Very limit use cases
class Project {

    budget: number = 900;

    // Parameter decorator
    addToBudget(@logParamDec amount: number) {
        this.budget += amount
    }
   
    writeTests() {
        console.log('Tests are important!')
    }

    fixBugInProduction() {
        console.log('Fixing bug in production')
    }
}

const project = new Project()
project.addToBudget(300)
project.addToBudget(300)


function report(target: Object, propertyKey: string, parameterIndex: number) {
    console.log(`${propertyKey} was called with param at index ${parameterIndex}`)
}

function logParamDec(target: Object, propertyKey: string, parameterIndex: number) {
    console.log(`target: ${target}`)
    console.log(`propertyKey: ${propertyKey}`)
    console.log(`parameterIndex: ${parameterIndex}`)
}
