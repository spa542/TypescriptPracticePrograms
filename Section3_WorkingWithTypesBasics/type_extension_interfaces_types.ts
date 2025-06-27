export {}
// Type Extension (intersection)

type SimpleJob = {
    codingLanguage: string,
    sourceControl: string
};

// type ComplicatedJob = {
//     codingLanguage: string,
//     sourceControl: string
//     hasManyMeetings: true,
//     reportsToBeCompleted: string[]
// };

// Deduplicate code
type ComplicatedJob = SimpleJob & { // Type Intersection
    hasManyMeetings: true,
    reportsToBeCompleted: string[]
};

let complicatedJob: ComplicatedJob = {
    codingLanguage: 'TS',
    sourceControl: 'git',
    hasManyMeetings: true,
    reportsToBeCompleted: ['hourly', 'daily', 'weekly']
}

type MeetingHolder = {
    meetingMaxLength: number
    holdMeeting: () => void
}

class ProjectManager implements MeetingHolder {
    meetingMaxLength = 60;
    holdMeeting = () => {
        console.log('Just holding a meeting')
    }
}

// Interfaces


interface SimpleJob2 {
    codingLanguage: string,
    sourceControl: string
};

// type ComplicatedJob = {
//     codingLanguage: string,
//     sourceControl: string
//     hasManyMeetings: true,
//     reportsToBeCompleted: string[]
// };

// Deduplicate code
interface ComplicatedJob2 extends SimpleJob2 { // Type Intersection
    hasManyMeetings: true,
    reportsToBeCompleted: string[]
};

let complicatedJob2: ComplicatedJob2 = {
    codingLanguage: 'TS',
    sourceControl: 'git',
    hasManyMeetings: true,
    reportsToBeCompleted: ['hourly', 'daily', 'weekly']
}

interface MeetingHolder2 {
    meetingMaxLength: number
    holdMeeting: () => void
}

// Interface Delclaration Merging
interface MeetingHolder2 {
    endMeeting: () => void
}

class ProjectManager2 implements MeetingHolder2 {
    meetingMaxLength = 60;
    holdMeeting = () => {
        console.log('Just holding a meeting')
    }
    endMeeting = () => {
        console.log('Meeting ended')
    }
}


// Differences between types and interfaces
// Interfaces:
// - declaration merging - rarely used and misleading
// - familiar syntax for devs coming from other languages

// Types:
// - Literal types:
// type Position = 
// | 'Programmer'
// | 'HR'
// | 'CEO'
// Complex types
