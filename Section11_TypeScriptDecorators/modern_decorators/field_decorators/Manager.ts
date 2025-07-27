
type Task = {
    name: string,
    level: 'low' | 'medium' | 'complicated'
}


class Manager {

    @withComplicatedTask
    tasks: Task[] = []
}


// For field decorators -> The target is undefined
// In this case, V will be of type Task[]
function withComplicatedTask<T, V extends Task[]>(target: undefined, context: ClassFieldDecoratorContext<T, V>) {
    return function (args: V) {
        args.push({
            name: 'added task',
            level: 'complicated'
        })
        return args;
    }
}


const manager = new Manager()
console.log(manager)
