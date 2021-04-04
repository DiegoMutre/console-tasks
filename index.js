require("colors");
const { inquirerMenu, pause } = require("./helpers/inquirer");

console.clear();

const main = async () => {
    let opt = "";

    do {
        opt = await inquirerMenu();

        console.log("\n");

        await pause();
    } while (opt !== "0");
};

main();
