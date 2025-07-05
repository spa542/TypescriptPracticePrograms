export {}

type Employee = {
    name: string,
    position: string,
    salary: {
        amount: number,
        currency: string,
        bonus?: 10 | 20 | 30
    }
    isAdmin: boolean,
    employedAt: string,
    likesMeetings?: boolean
    team?: string
}

type RequiredEmployee = Required<Employee>
type OptionalEmployee = Partial<Employee>
type ReadonlyEmployee = Readonly<Employee>

// Pick
type SalaryPick = Pick<Employee, 'salary'>
type Salary = Employee['salary']

// Omit
type SanitizedEmployee = Omit<Employee, 'employedAt'> & {
    employedAt: Date
}

function getSalaryHistory(id: string) {
    return {
        formerEmployee: 'Google',
        formerPosition: 'CEO',
        formerSalary: 10000000,
        oldDuties: ['Manage', 'Lead', 'Code']
    }
}

type oldPosition = ReturnType<typeof getSalaryHistory>
