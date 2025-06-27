export {}

// Not very common standalone as they are hard to maintain
type Programmer = 'Programmer'
type HR = 'HR'

const bestProgrammer: Programmer = 'Programmer';

// Rather use a union of literal types!
type PositionType = Programmer | HR;

type Position = 'Programmer' | 'HR' | 'CEO';

function getSalaryForPosition(position: Position): number | undefined { // Want to define the return type here to make it clear how this function will behave
    if (position === 'Programmer') {
        return 100000;
    }
    if (position === 'HR') {
        return 120000;
    }
    console.warn(`We don't have a salary for ${position}`);
}