export {}

const scrumRole = {
    holdsMeetings: false,
    teams: ['Team1', 'Team2']
}

const productOwnerRole = {
    holdsMeetings: true,
    reportsTo: 'upperManagement'
}

// Two types is required as the type of arg1 is different than that of arg2
function mergeRoles<T extends object, G extends object>(role1: T, role2: G): T & G { // Return multiple types
    return {...role1, ...role2}
}

const scrumProductOwnerRole = mergeRoles(scrumRole, productOwnerRole);
console.log(scrumProductOwnerRole);
