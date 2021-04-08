const Task = require("./Task");

class Tasks {
    _list = {};

    get arrayList() {
        const list = [];
        Object.keys(this._list).forEach(key => {
            const task = this._list[key];
            list.push(task);
        });
        return list;
    }

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
