const Task = require("./Task");

class Tasks {
    _list = {};

    constructor() {
        this._list = {};
    }

    /**
     * Create a task
     * @param {String} desc The Description that the task will have
     */
    createTask(desc = "") {
        const task = new Task(desc);
        this._list[task.id] = task;
    }
}

module.exports = Tasks;
