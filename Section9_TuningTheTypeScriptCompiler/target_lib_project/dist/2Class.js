"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
class Manager {
    name;
    project;
    static COMPANY_NAME = 'Awesome inc';
    constructor(name, project) {
        this.name = name;
        this.project = project;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getProject() {
        return this.project;
    }
    setProject(project) {
        this.project = project;
    }
}
exports.Manager = Manager;
