require("colors");
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

    // Show all the tasks from the fake db
    showTasks() {
        this.arrayList.forEach((task, index) => {
            const listIndex = `${index + 1}.-`.green;
            const { desc, completedIn } = task;
            const state = completedIn ? "Completed".green : "Pending".red;
            console.log(`${listIndex} ${desc} :: ${state}`);
        });
    }

    loadTasksFromDB(tasks = []) {
        tasks.forEach(task => {
            this._list[task.id] = task;
        });
    }

    filterTasks(showCompleted = true) {
        const tasks = this.arrayList.filter(task =>
            showCompleted ? task.completedIn : !task.completedIn
        );
        tasks.forEach((task, index) => {
            let completed = task.completedIn
                ? "Completed".green
                : "Pending".red;

            console.log(
                `${(index + 1 + ".").green} ${task.desc} :: ${completed}`
            );
        });
    }

    toggleCompletedTasks(ids = []) {
        ids.forEach(id => {
            const task = this._list[id];
            if (!task.completedIn) {
                task.completedIn = new Date().toISOString();
            }
        });

        this.arrayList.forEach(task => {
            if (!ids.includes(task.id)) {
                this._list[task.id].completedIn = null;
            }
        });
    }

    deleteTask(id = "") {
        if (this._list[id]) {
            delete this._list[id];
            console.log("Task deleted");
        }
    }
}

module.exports = Tasks;
