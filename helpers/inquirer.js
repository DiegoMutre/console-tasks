const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'What would you like to do?',
        choices: ['opt1', 'opt2', 'opt3']
    }
];

exports.inquirerMenu = async () => {
    console.clear();

    // Show question
    console.log('========================='.green);
    console.log('  Select an option  '.green);
    console.log('=========================\n'.green);

    const option = await inquirer.prompt(questions);

    return option;
};