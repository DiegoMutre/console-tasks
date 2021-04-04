require('colors');

const showMenu = () => {

    return new Promise(resolve => {

        console.clear();

        // Show question
        console.log('========================='.green);
        console.log('  Select an option  '.green);
        console.log('=========================\n'.green);

        // Show options
        console.log(`${'1.'.green} Create Task`);
        console.log(`${'2.'.green} List Tasks`);
        console.log(`${'3.'.green} List Completed Tasks`);
        console.log(`${'4.'.green} List pending Tasks`);
        console.log(`${'5.'.green} Complete Task(s)`);
        console.log(`${'6.'.green} Delete a Tasks`);
        console.log(`${'0.'.green} Leave \n`);

        /*
        Readline is a node module which allows us to receive and send messages through the console
        *input : means that you will receive a entry.
        *output : means that you will send an output message
        */
       const readline = require('readline').createInterface({
           input: process.stdin,
           output: process.stdout
        });

        /*
        *opt : Opt contains the message sent by the user
        */
       readline.question('Select an option: ', opt => {
           readline.close(); // Close the terminal
           resolve(opt);
        });
    });
};


const pause = () => {
    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`\nPress ${ 'ENTER'.green } to continue\n`, () => {
            readline.close();
            resolve();
        });
    });
}

module.exports = {
    showMenu,
    pause
};