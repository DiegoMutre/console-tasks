const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'What would you like to do?',
        choices: [
            {
                value: '1',
                name: `${ '1.'.green } Create Task`
            },
            {
                value: '2',
                name: `${'2.'.green} List Tasks`
            },
            {
                value: '3',
                name: `${'3.'.green} List Completed Tasks`
            },
            {
                value: '4',
                name: `${'4.'.green} List pending Tasks`
            },
            {
                value: '5',
                name: `${'5.'.green} Complete Task(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Delete a Task`
            },
            {
                value: '0',
                name: `${'0.'.green} Leave \n`
            },
        ]
    }
];

exports.inquirerMenu = async () => {
    // console.clear();

    // Show question
    console.log('========================='.green);
    console.log('  Select an option  '.green);
    console.log('=========================\n'.green);

    const { option } = await inquirer.prompt(questions);

    return option;
};