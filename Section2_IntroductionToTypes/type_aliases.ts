// Type Aliases: Define the shape of an object

// Union Type
type Position = 'Programmer' | 'HR'

const myPosition: Position = 'Programmer';

type Colleague = {
    name: string;
    age: number;
    position: Position;
    greetBack?: Function
}

const myColleague: Colleague = {
    name: 'John',
    age: 30,
    position: 'Programmer'
}

const myOtherColleague: {
    name: string;
    age: number;
    position: Position;
    tasks: string[];
} = {
    name: 'Mary',
    age: 30,
    position: 'HR',
    tasks: ['HR stuff']
}

const myTalkyColleague: Colleague = {
    name: 'John',
    age: 30,
    position: 'Programmer',
    greetBack: () => {
        console.log('Cheers!!!');
    }
}

function greetColleague(colleague: Colleague) {
    console.log('Hello ' + colleague.name);
    if (colleague.greetBack) {
        colleague.greetBack();
    }
}

greetColleague(myColleague);
greetColleague(myOtherColleague); // Notice that even though the types are not defined the same, since the attributes are the same, the object is accepted
greetColleague(myTalkyColleague);