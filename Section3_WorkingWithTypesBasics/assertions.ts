// Assertions

type SimpleJob = {
    codingLanguage: string,
    sourceControl: string
};

type ComplicatedJob = {
    codingLanguage: string,
    sourceControl: string
    hasManyMeetings: true,
    reportsToBeCompleted: string[]
};

type QaJob = {
    scriptingLanguage: string,
    hasAutomatedTests: true
};

let simpleJob: SimpleJob = {
    codingLanguage: 'TS',
    sourceControl: 'git'
};

let complicatedJob: ComplicatedJob = {
    codingLanguage: 'TS', sourceControl: 'git', hasManyMeetings: true, reportsToBeCompleted: ['hourly', 'daily']
};

let qaJob: QaJob = {
    scriptingLanguage: 'Python',
    hasAutomatedTests: true
};

// Can do this because complicated job has all of the attributes of simple job
simpleJob = complicatedJob
// You cannot downgrade ^^
// complicatedJob = simpleJob

// We can force this but it is not always necessarily correct
complicatedJob = simpleJob as ComplicatedJob; // This will force the conversion since there are related properties
//complicatedJob = qaJob as ComplicatedJob; // TypeScript will warn you here
// We can even force the above
complicatedJob = qaJob as unknown as ComplicatedJob;

// same meaning:
complicatedJob = <ComplicatedJob>simpleJob;
complicatedJob = <ComplicatedJob><unknown>qaJob;

// When can I use this type assertion?
// usage: building objects in steps
// advantage: autocomplete assistance
// disadvantage: the compiler wont complain about incomplete objects
// The below is like type casting except it happens at compile time (not runtime)
const complicatedJobMadeInSteps = {} as ComplicatedJob;
complicatedJobMadeInSteps.codingLanguage = 'C#';
complicatedJobMadeInSteps.hasManyMeetings = true;
complicatedJobMadeInSteps.reportsToBeCompleted = [];
complicatedJobMadeInSteps.sourceControl = 'git';
