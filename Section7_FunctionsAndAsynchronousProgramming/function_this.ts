export {}
// @ts-ignore
//console.log(global)

// In classes, this calls are regulated to the class instance itself
// In regular functions, this calls are regulated to the global context
// In arrow functions, this calls are regulated to the parent context


//this.fromGlobalContext = 'fromGlobalContext'

const context = () => {

    function printThisFunction() {
        // @ts-ignore
        console.log(this)
    }

    const printThisArrowFunction = () => {
        // @ts-ignore
        console.log(this)
    }

    const foo = 'bar'

    // @ts-ignore
    return {
        printThisFunction,
        printThisArrowFunction,
        foo
    };
}

context().printThisFunction()
console.log('----------')
context().printThisArrowFunction()


// this for Classes
// We cannot use the narrow this context within regular functions
class Manager {
    private name: string
    private tasks: string[] = []

    constructor(name: string) {
        this.name = name;
    }

    addTask(task: string) {
        this.tasks.push(task)
    }

    printTasksWithArrowFunction() {
        this.tasks.forEach(task => {
            console.log(task + ' belongs to ' + this.name)
        })
    }

    printTasksWithRegularFunction() {
        function printTasks(name: string, tasks: string[]) {
            tasks.forEach(task => {
                console.log(task + ' belongs to ' + name)
            })
        }
        printTasks(this.name, this.tasks)
    }
}

const myManager = new Manager('John')
myManager.addTask('Hold Short Meeting')

myManager.printTasksWithArrowFunction()
myManager.printTasksWithRegularFunction()
