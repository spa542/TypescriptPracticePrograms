export {}
// Access Modifiers
// Default access is public
class Project {

    private name: string;
    // JS private
    // #name: string;
    protected budget: number;

    constructor(name: string, budget: number) {
        this.name = name;
        this.budget = budget;
    }

    // Shorthand constructor access modifiers for TS
    // constructor(public name: string, private budget: number) {
    //     this.name = name;
    //     this.budget = budget;
    // }

    printBudget() {
        console.log(`${this.name} has a budget of ${this.budget}`)
    }
}

const coolProject = new Project('CoolProject', 10000);
// This will throw compilation error
// coolProject.name = 'CoolProject';
