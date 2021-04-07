require("colors");
const { inquirerMenu, pause, readInput } = require("./helpers/inquirer");

console.clear();

const main = async () => {
    let opt = "";

    do {
        // Print the menu
        opt = await inquirerMenu();

        if (opt === "1") {
            // TODO: Save the desc in our fake DB
            const desc = await readInput("Description:");
        }
    } while (opt !== "0");
};

main();
