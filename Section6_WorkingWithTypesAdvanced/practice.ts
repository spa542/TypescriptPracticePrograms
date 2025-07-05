export {}

type Employee = {
    name: string,
    position: string,
    age: number,
    salary: {
        amount: number,
        bonus: number
    }
}

type MirrorMapType<T> = {
    [key in keyof T]: T[key]
}

type MyPick<T, K extends keyof T> = {
    [key in K]: T[key]
}

const nameAndAge: MyPick<Employee, 'name' | 'age'> = {
    name: 'SomeName',
    age: 30
}

// Typescript supports recursion in its types!
type MyReadOnly<T> = {
    readonly [key in keyof T]: T[key]
}

type DeepReadOnly<T> = keyof T extends never ? T :  // Base case for recursion
{
    readonly [key in keyof T]: DeepReadOnly<T[key]>
}

type ReadOnlyEmpl = DeepReadOnly<Employee>
