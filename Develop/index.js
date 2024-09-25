// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
import { type } from 'os';
import Choices from 'inquirer/lib/objects/choices.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test insructions?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your porject:',
        choices: ['MIT', 'Apache 2.0', 'GNU GPL v3.0', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err){
            console.error('Failed to generate README.md', err);
            return;
        }
        console.log('README.md has been generated!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const markdownContent = generateMarkdown(data);
            writeToFile('README.md', markdownContent);
        });
}

// Function call to initialize app
init();
