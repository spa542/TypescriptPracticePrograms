export {}

const names: string[] = []
const names2: Array<string> = [] // Bound to only strings

type Employee = {
    name: string,
    role: string
}


// We want to have stronger typing rather than just any
async function getEmployees<T>(url: string): Promise<T[]> { // Or Array<T>
    const result = await fetch(url)
    const parsedResult = await result.json()
    return parsedResult;
}

async function wrapper() {
    const employees = await getEmployees<Employee>('internalEmployeeService.com')
    const firstEmployee = employees[0]
}


