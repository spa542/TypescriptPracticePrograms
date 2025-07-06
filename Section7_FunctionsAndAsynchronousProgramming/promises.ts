export {}

type Position = 'Programmer' | 'Hr' | 'CEO' | 'Intern'

// Typescript cannot infer the type within the promise so it is good to identify it
async function getSalaryForPosition(position: Position): Promise<number> {
    return new Promise((resolve, reject) => {
        switch (position) {
            case 'Programmer':
                resolve(100000);
                break;
            case 'Hr':
                resolve(120000);
                break;
            case 'CEO':
                resolve(200000);
                break;
            default:
                reject(`No salary for ${position}`);
                break;
        }
    });
}

// Node will output if the error is not caught. Need to make sure we always wrap within try catch blocks!!!!
async function wrapper() {
    try {
        const salary = await getSalaryForPosition('Programmer')
        //const salary = await getSalaryForPosition('Intern') // Error case
        console.log(salary)
    } catch (error) {
        console.error(error)
    }
}

wrapper()

async function getSalary(id: number) {
    console.log(`Received request for ${id}`)
    const delay = id * 1000
    await new Promise(resolve => setTimeout(resolve, delay))
    console.log(`Employee ${id} has a salary of 100000`)
    return 10000
}

async function sequentialCalls() {
    console.time('Sequential calls')
    const empl1Salary = await getSalary(1)
    const empl2Salary = await getSalary(2)
    const empl3Salary = await getSalary(3)
    console.timeEnd('Sequential calls')
    const costWithTeam = empl1Salary + empl2Salary + empl3Salary
    console.log(`Cost with team: ${costWithTeam}`)
}

sequentialCalls()

async function parallelCalls() {
    console.time('Parallel calls')
    const allSalaries = await Promise.all([
        getSalary(1),
        getSalary(2),
        getSalary(3)    
    ])
    console.timeEnd('Parallel calls')
    const costWithTeam = allSalaries[0] + allSalaries[1] + allSalaries[2]
    console.log(`Cost with team: ${costWithTeam}`)
}

parallelCalls()

