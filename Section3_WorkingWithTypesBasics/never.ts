export {}

type CEO = 'jeff'

type Founder = 'Bill'

// Never type as this is impossible and will never happen
type CEOandFounder = CEO & Founder

type willNeverHappen = string & number

// Also commonly used when throwing errors!
function neverReturns(): never {
    while (true) {

    }
}

function doStuff(arg: string | number) {
    if (typeof arg === 'string') {
        console.log(arg)
        return
    }
    if (typeof arg === 'number') {
        console.log(arg)
        return
    }
    console.log(arg) // will never happen
}

enum Position {
    Programmer,
    HR,
    CEO
}

type Employee = {
    name: string
    salary: number
    position: Position
}

function payAnnualBonus(empl: Employee) {
    let bonusPercent: number = 0;
    const position = empl.position
    switch (position) {
        case Position.Programmer:
            bonusPercent = 10;
            break;
        case Position.HR:
            bonusPercent = 15;
            break;
        case Position.CEO:
            bonusPercent = 20;
            break;
        default:
            // NOTE: This will make the compiler throw an error if we add a new value to the enum
            // exhaustive enum:
            const remainingValues: never = position;
            break;
    }
    console.log(`Paying ${empl.salary * bonusPercent / 100} as bonus to ${empl.name}`)
}
