const inquirer = require("inquirer");
require("colors");

exports.inquirerMenu = async () => {
    console.clear();

    // Show question
    console.log("=========================".green);
    console.log("  Select an option  ".green);
    console.log("=========================\n".green);

    const { option } = await inquirer.prompt({
        type: "list",
        name: "option",
        message: "What would you like to do?",
        choices: [
            {
                value: "1",
                name: `${"1.".green} Create Task`,
            },
            {
                value: "2",
                name: `${"2.".green} List tasks`,
            },
            {
                value: "3",
                name: `${"3.".green} List completed tasks`,
            },
            {
                value: "4",
                name: `${"4.".green} List pending tasks`,
            },
            {
                value: "5",
                name: `${"5.".green} Complete Task(s)`,
            },
            {
                value: "6",
                name: `${"6.".green} Delete a Task`,
            },
            {
                value: "0",
                name: `${"0.".green} Leave`,
            },
        ],
    });

    return option;
};

exports.pause = async () => {
    await inquirer.prompt({
        type: "input",
        name: "enter",
        message: `Press ${"ENTER".green} to continue`,
    });
};

/**
 * Read the input from the value sent by console
 * @param {String} message The message that will be displayed
 * @return {String} desc The input value from the user
 **/
exports.readInput = async message => {
    const { desc } = await inquirer.prompt({
        type: "input",
        name: "desc",
        message,
        validate(value) {
            if (value.length === 0) {
                return "Please, enter a valid value";
            }
            return true;
        },
    });

    return desc;
};

exports.showTasksCheckList = async (tasks = []) => {
    const { ids } = await inquirer.prompt({
        type: "checkbox",
        name: "ids",
        message: "Mark",
        choices: tasks.map((task, index) => {
            const numberList = `${index + 1}`.green;

            return {
                value: task.id,
                name: `${numberList} ${task.desc}`,
                checked: task.completedIn ? true : false,
            };
        }),
    });

    return ids;
};

exports.showTasksToDelete = async (tasks = []) => {
    const choices = tasks.map((task, index) => {
        const numberList = `${index + 1}`.green;

        return {
            value: task.id,
            name: `${numberList} ${task.desc}`,
        };
    });

    choices.unshift({
        value: "0",
        name: `${"0".green} Cancel`,
    });

    const { id } = await inquirer.prompt({
        type: "list",
        name: "id",
        message: "Delete",
        choices,
    });

    return id;
};
