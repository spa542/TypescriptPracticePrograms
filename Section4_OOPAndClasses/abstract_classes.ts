export {}
// Abstract Classes
// Making a contract for behavior and each implementation
abstract class AbstractProject {

    name: string;
    budget: number;

    constructor(name: string, budget: number) {
        this.name = name;
        this.budget = budget;
    }

    printBudget() {
        console.log(`${this.name} has a budget of ${this.budget}`)
    }

    // Abstract method
    abstract makeDelivery(): void
}

// Cannot instantiate due to being abstract
//const coolProject = new AbstractProject('CoolProject', 10000);

class AiProject extends AbstractProject {

    override makeDelivery() {
        console.log('AI Project delivered')
    }
}

const aiProject = new AiProject('AI Project', 10000);
aiProject.makeDelivery();

// Great for sharing common behavior
// Not great for type coupling -> But we can use interfaces!
