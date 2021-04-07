require("colors");
const { inquirerMenu, pause, readInput } = require("./helpers/inquirer");
const Tasks = require("./models/Tasks");

console.clear();

const main = async () => {
    let opt = "";
    const tasks = new Tasks();

    do {
        // Print the menu
        opt = await inquirerMenu();

        if (opt === "1") {
            const desc = await readInput("Description:");
            tasks.createTask(desc);
        }
        await pause();
    } while (opt !== "0");
};

main();
