export {}

type objectWithTeam = {
    team: string
}

type Programmer = objectWithTeam & {
    name: string,
    language: string
}

// Set a constraint using generics
function updateTeam<T extends objectWithTeam>(arg: T, newTeam: string) {
    arg.team = newTeam;
}

let empl1: Programmer = {
    name: 'John',
    language: 'C#',
    team: 'CoolTeam'
}

updateTeam(empl1, 'SuperCoolTeam')

type OldSchoolProgrammer<T extends 'Basic' | 'Lisp' = 'Basic'> = {
    language: T,
    name: string
}

const myCoolColleague: OldSchoolProgrammer<'Basic'> = { // Since default value is set, it is not necessary to pass 'Basic'
    language: 'Basic',
    name: 'John'
}
