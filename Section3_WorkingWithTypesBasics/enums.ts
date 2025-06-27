export {}

// enums: a group of constants
// Enums can be documented upon
enum Position {
    Programmer,
    HR,
    // Must receive at least 2000% yearly bonus
    CEO
};

// Also works
// enum Position {
//     Programmer = 'Programmer',
//     HR = 'HR',
//     CEO = 'CEO'
// };

type Employee = {
    name: string
    salary: number
    position: Position
};

function payBonus(empl: Employee) {
    // Pay CEO bonus:
    if (empl.position === Position.CEO) {
        // surprise bonus
    }
}

type PositionType = 
    | 'Programmer'
    | 'HR'
    | 'CEO'

function payAnnualBonus(empl: Employee) {
    let bonusPercent: number = 0;
    switch (empl.position) {
        case Position.Programmer:
            bonusPercent = 10;
            break;
        case Position.HR:
            bonusPercent = 15;
            break;
        case Position.CEO:
            bonusPercent = 20;
            break;
    }
    console.log(`Paying ${empl.salary * bonusPercent / 100} as bonus to ${empl.name}`)
}
