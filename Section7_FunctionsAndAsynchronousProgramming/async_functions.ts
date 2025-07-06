export {}
// Watch th eJake Archibald presentation on the event loop on YT

console.log(1)

// This is put on the event loop and the regular execution continues with whatever comes next
setTimeout(() => {
    console.log('waited 1 second')
}, 1000)

console.log(2)


function getEmployeeData() {
    const employeeData = {
        name: 'John',
        position: 'Programmer',
        age: 30,
        tasks: ['Write code', 'Drink Cofee']
    }
    return Promise.resolve(employeeData)
}

// let employeeData: any;
// getEmployeeData().then(data => {
//     employeeData = data
// }).then(() => {
//     console.log(employeeData)
// })

async function wrapper() {
    const employeeData = await getEmployeeData();
    console.log(employeeData)
}

wrapper()
