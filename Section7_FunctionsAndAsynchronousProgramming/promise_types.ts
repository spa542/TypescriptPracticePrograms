export {}

async function getEmployees() {
    return Promise.resolve([
        {
            name: 'John',
            position: 'Programmer',
            salary: 100000
        }
    ])
}

async function wrapper() {
    const employees = await getEmployees()
}

type EmplServiceReturnType = Awaited<ReturnType<typeof getEmployees>> // Awaited removes the promise from the return type

function getService() {
    return Promise.resolve('www.google.com')
}

async function resolveServiceFirst<T>(service: PromiseLike<T>) { // Keep the promise type the same but used for your own custom promises
    const result = await service
    console.log(result)
}

resolveServiceFirst(getService())

type NestedPromise<T> = Promise<Promise<Promise<T>>>
type InsidePromise<T> = Awaited<NestedPromise<T>> // All inside promises will get wrapped here

let uncleanExampleJustToMakeAPoint: InsidePromise<string>
