require("colors");
const {
    inquirerMenu,
    pause,
    readInput,
    showTasksCheckList,
} = require("./helpers/inquirer");
const Tasks = require("./models/Tasks");
const { saveInTheDB, readDB } = require("./utils/saveFile");

console.clear();

const main = async () => {
    let opt = "";
    const tasks = new Tasks();
    const tasksFromTheDB = readDB();

    if (tasksFromTheDB) {
        tasks.loadTasksFromDB(tasksFromTheDB);
    }

    do {
        // Print the menu
        opt = await inquirerMenu();

        if (opt === "1") {
            const desc = await readInput("Description:");
            tasks.createTask(desc);
        }

        if (opt === "2") {
            tasks.showTasks();
        }

        if (opt === "3") {
            tasks.filterTasks();
        }

        if (opt === "4") {
            tasks.filterTasks(false);
        }

        if (opt === "5") {
            const ids = await showTasksCheckList(tasks.arrayList);
            tasks.toggleCompletedTasks(ids);
        }

        saveInTheDB(tasks.arrayList);
        await pause();
    } while (opt !== "0");
};

main();
