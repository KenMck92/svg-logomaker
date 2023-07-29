const inquirer = require('inquirer');
const fs = require('fs');
// const  = require('./lib/shapes.js');
const {Circle, Triangle, Square} = require('./lib/shapes.js');

function questions() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter three characters",
                name: "text"
            },
            {
                type: "input",
                message: "What color?",
                name: "color"
            },
            {
                type: "list",
                message: "What shape?",
                choices: ['circle', 'triangle', 'square'],
                name: "shape"
            },
            {
                type: "input",
                message: "What color should the shape be?",
                name: "shape color"
            },
        ])
        .then((data) => {
            writeToFile('logo.svg',data);
        })
};

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Generated logo.svg')
    );
};

function init() {
    questions();
}

init();