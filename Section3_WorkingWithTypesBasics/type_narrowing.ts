export {}
// Type Narrowing

type Programmer = 'Programmer'
type HR = 'HR'

let bestProgrammer: Programmer = 'Programmer';

// Rather use a union of literal types!
type PositionType = Programmer | HR;

type Position = 'Programmer' | 'HR' | 'CEO';

function getSalaryForPosition(position: Position): number | undefined {
    // Literal Type Narrowing!
    if (position === 'Programmer') {
        bestProgrammer = position;
        return 100000;
    }
    if (position === 'HR') {
        return 120000;
    }
    console.warn(`We don't have a salary for ${position}`);
}

// Narrow Down Primitives: with typeof
function getNumberValue(arg: unknown): number {
    if (typeof arg === 'number') {
        return arg; // At this point we know that this is a number
    }
    if (typeof arg === 'string') {
        return Number(arg);
    }
    throw new Error(`Unsupported format: ${JSON.stringify(arg)}`);
}

console.log(getNumberValue('dfg'))
//getNumberValue({}) // Will throw an exception here

// Narrow Down Classes: with typeof
class CompanyFounder {
    giveLongSpeechAboutCompanyPast() {
        'It all started when...'
    }
}

class CompanyCEO {
    giveLongSpeechAboutHowTheTimesAreHard() {
        'Things are hard but we can do it! ...'
    }
}

type LongSpeechGiver = CompanyFounder | CompanyCEO;

function giveLongSpeech(speechGiver: LongSpeechGiver) {
    if (speechGiver instanceof CompanyFounder) {
        speechGiver.giveLongSpeechAboutCompanyPast(); // Class type narrowing
    }
    if (speechGiver instanceof CompanyCEO) {
        speechGiver.giveLongSpeechAboutHowTheTimesAreHard();
    }
}

// Narrow down objects
type Founder = {
    name: 'John Founder',
    car: 'Audi'
} | {
    name: 'Bill Bicycle',
    bike: 'Wheels'
}

function meetTheFounder(founder: Founder) {
    console.log(`Meet your founder ${founder.name}`)
    if (founder.name === 'John Founder') {
        console.log(`I drive a ${founder.car}`); // Object narrowing!
    }
    if (founder.name === 'Bill Bicycle') {
        console.log(`I don't drive so I use my bike called ${founder.bike}`);
    }
}

meetTheFounder({
    name: 'John Founder',
    car: 'Audi'
})

meetTheFounder({
    name: 'Bill Bicycle',
    bike: 'Wheels'
})

// Narrow down primitives and real objects with types made by us
type Salary = {
    amount: number;
}

// Type guard: narrow down an object
// Type predicate
function isSalary(arg: any): arg is Salary { // This must return a boolean value as it is a predicate
    return (('amount' in arg) && (typeof arg.amount === 'number'));
}

function paySalary(arg: unknown) {
    if (isSalary(arg)) {
        console.log(`Paying ${arg.amount}`);
    }
}
