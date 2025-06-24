
type withName = {
    name: string
}

// Type checking here
function printName(arg: withName) {
    console.log(arg)
}

printName({name: "John"})

