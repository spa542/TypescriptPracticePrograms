export {}
// Inheritance

class Project {

    name: string;
    budget: number;

    constructor(name: string, budget: number) {
        this.name = name;
        this.budget = budget;
    }

    printBudget() {
        console.log(`${this.name} has a budget of ${this.budget}`)
    }
}

class SecretProject extends Project {
    secrecyLevel: 1 | 2 | 3;
    
    constructor(secrecyLevel: 1 | 2 | 3) {
        super('Secret Project', 1000000);
        this.secrecyLevel = secrecyLevel;
    }

    // override keyword is optional but will throw a compilation error if you are trying to 'override' a non parent class function
    override printBudget() {
        console.log('The budget is secret!')
    }
}

const secretProject = new SecretProject(3);
secretProject.printBudget();
