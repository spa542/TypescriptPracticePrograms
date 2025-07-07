export {}

const firstName = 'Jeff'
const lastName = 'Gates'
const fullName = `${firstName} ${lastName}` // Jeff Gates


type Level = 'Junion' | 'Senior' | 'Expert'
type Position = 'Programmer' | 'Hr' | 'Manager'

type LeveledPosition = `${Level} ${Position}` // Will auto merge all possible combinations

type Prefixed<Prefix extends string, T extends string> = `${Prefix} ${T}`
let awesomePositions: Prefixed<'Awesome', Position>

// Intrinsic String Manipulation Types:

let lowerCasePositions: Lowercase<Position>
let upperCasePositions: Uppercase<Position>
let uncapitalizedPositions: Uncapitalize<Position>
