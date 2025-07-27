
type Task = {
    name: string,
    level: 'low' | 'medium' | 'complicated'
}


class Manager {

    @withTask({ name: 'Complicated task', level: 'complicated' })
    tasks: Task[] = []

    // TS is not smart enough here to recognize that the underling factory returns a decorator so need to add ()
    @withComplicatedTask()
    extraTasks: Task[] = []
}


// Return a decorator with a dynamic argument
function withTask(task: Task) {
    return function <T, V extends Task[]>(target: undefined, context: ClassFieldDecoratorContext<T, V>) {
        return function (args: V) {
            args.push(task)
            return args;
        }
    }
}

// Extend to another decorator factory
function withComplicatedTask() {
    return withTask({ name: 'Complicated task', level: 'complicated' })
}


const manager = new Manager()
console.log(manager)
