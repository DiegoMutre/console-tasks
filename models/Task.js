const { v4 } = require("uuid");

class Task {
    id = "";
    desc = "";
    completedIn = null;

    constructor(desc) {
        // Generate unique id
        this.id = v4();
        this.desc = desc;
        this.completedIn = null;
    }
}

module.exports = Task;
