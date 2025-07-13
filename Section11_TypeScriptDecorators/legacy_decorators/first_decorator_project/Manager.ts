// Old way of decorators!!!

class Manager {

    // Enable experimentalDecorators in tsconfig.json
    @watchChange
    task: string = 'Simple task'

    project: string = 'Simple project'

    constructor() {
        console.log('Initializing the Manager class')
    }
}


const manager = new Manager()
manager.task = 'Complicated task'


// Decorator function is written in this syntax
// They are executed very fast in the beginning of project execution
function watchChange<T extends Object>(target: T, key: keyof T & string) { // Notating that the key must be a string
    console.log('Calling the watch change decorator')
   
    // Proper implementation
    let property = target[key]
    const getter = () => {
        return property
    }
    const setter = (newVal: any) => {
        console.log('Property changed from ' + property + ' to ' + newVal)
        property = newVal
    }
   
    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        configurable: true,
        enumerable: true
    })
}

