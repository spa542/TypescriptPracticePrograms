export {}

// Until now, we saw that we can have
// paramters - generics
// if clauses - conditional types
// variables: infer
// Missing: loops

type Position = 'Programmer' | 'Hr' | 'Manager'

// Code duplication is bad!
type PositionDuties = {
    Programmer: string[]
    Hr: string[]
    Manager: string[]
}

// Use mapped types!
type PositionDutiesMap = {
    [position in Position]: string[]
}

// Next leve with generics
type PositionDutiesMapGeneric<T extends string> = {
    [key in T]: string[]
}

type MirrorGenericType<T> = T

type MirrorMapType<T> = {
    [key in keyof T]: T[key] // can make this readonly if we wanted
}

type Readonly<T> = {
    readonly [key in keyof T]: T[key]
}

type Mutable<T> = {
    -readonly[key in keyof T]: T[key] // Remove the readonly modifier if it exists
}

type Employee = {
    name: string,
    age: number
}

// Key Remppaing
type Awesome<T> = {
    [key in keyof T as `awesome${Capitalize<string & key>}`]: T[key] // Calling intersection of string and key casts it to a string
}

type AwesomeEmployee = Awesome<Employee>

type ReadonlyEmployee = Readonly<Employee>

type MutableEmployee = Mutable<Employee>

// Make sure to use built in utility types where possible!!!!
