export {}
// Interfaces with Classes

interface HrManager {
    getAllSalaries(): string[]
}

interface ScrumMaster {
    holdScrumMeetings(): void
}

// Strong contracts here!
class SwissArmyKnife implements HrManager, ScrumMaster {
    getAllSalaries() {
        return []
    }
    holdScrumMeetings() {
        console.log('Holding scrum meetings')
    }
}

class Project {
    name: string;
    budget: number;
    scrumMaster: ScrumMaster;

    constructor(name: string, budget: number, scrumMaster: ScrumMaster) {
        this.name = name;
        this.budget = budget;
        this.scrumMaster = scrumMaster;
    }

    holdProjectMeeting() {
        this.scrumMaster.holdScrumMeetings()
    }
}

const superManager = new SwissArmyKnife();
const basicProject = new Project('Basic Project', 10000, superManager);
basicProject.holdProjectMeeting();

// TS vs other languages:
// Interfaces: cannot use instanceof on TS interfaces, only on classes
// Constructors: TS doesnt support multiple constructors, it supports optional function parameters though
