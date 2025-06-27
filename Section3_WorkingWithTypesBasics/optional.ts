// Optional Modifiers
type bonusPercent = 10 | 20 | 30;

type Salary = {
    amount: number;
    currency: 'USD' | 'EUR';
    yearlyBonus?: bonusPercent // | undefined "implicit"
}

type Employee = {
    name: string;
    salary: Salary;
}

const JohnSalary: Salary = {
    amount: 60000,
    currency: 'USD',
    yearlyBonus: 10
}

const john: Employee = {
    name: 'John',
    salary: {
        amount: 60000,
        currency: 'USD'
    }
}

//function paySalary(empl: Employee, extraWork: string | undefined) { // Different verion of an optional argument
function paySalary(empl: Employee, extraWork?: string) { // Optional argument
    console.log(`Payed ${empl.salary.amount} ${empl.salary.currency} to ${empl.name}`)
    if (empl.salary.yearlyBonus) {
        console.log(`${empl.name} received a bonus of ${empl.salary.yearlyBonus}`)
    }
    if (extraWork) {
        console.log(`${empl.name} received an EXTRA bonus because of hard work in ${extraWork}`)
    }
}

paySalary(john)
// paySalary(john, undefined) // For commented function definition above
paySalary(john, 'Code Reviews')

// Optional Class Fields
// You can turn off strictPropertyInitialization if you want to initialize properties later
class Engineer {
    tasks?: string[];
}


// Optional Chaining
type Manager = {
    team?: {
        scrumMaster?: {
            holdScrumMeetings: () => void
        }
    }
}

// new way!
function manage(manager: Manager) {
    manager.team?.scrumMaster?.holdScrumMeetings()
    // This is telling the compiler that we are sure that the team and scrumMaster exist
    //manager.team!.scrumMaster!.holdScrumMeetings()
}

// old way before optional operator
function manageOldWays(manager: Manager) {
    if (manager.team && manager.team.scrumMaster) {
        manager.team.scrumMaster.holdScrumMeetings()
    }
}

// ? - optional operator - JS feature
// ! - non-null assertion operator - TS feature

// We can always determine what is a JS feature vs a TS feature by compiling the code and looking at the compiled stripped down JS
