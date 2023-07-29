const inquirer = require('inquirer');
const fs = require('fs');
// const  = require('./lib/shapes.js');
const { Circle, Triangle, Square } = require('./lib/shapes');

class Svg {
    constructor() {
        this.textElement = ''
        this.shapeElement = ''
    }
    render() {

        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape) {
        this.shapeElement = shape.render()

    }

};


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
                name: "textColor"
            },
            {
                type: "list",
                message: "What shape?",
                choices: ['Circle', 'Triangle', 'Square'],
                name: "shape"
            },
            {
                type: "input",
                message: "What color should the shape be?",
                name: "shapeColor"
            },
        ])

        .then((data) => {
            generateSVG(data)
            if (data.text.length > 3) {
                console.log('TOO many characters, has to be 3 characters.');
                questions();
            } else {
                writeToFile('logo.svg', svgString);
            }
        })
};

    let svgString = "";

function generateSVG(data) {
    let shapeOption;

    if (data.shape === 'Circle') {
        shapeOption = new Circle();
    } else if (data.shape === 'Triangle') {
        shapeOption = new Triangle()
    } else if (data.shape === 'Square') {
        shapeOption = new Square()
    };

    console.log(shapeOption)
    shapeOption.setColor(data.shapeColor);


    const svg = new Svg();
    svg.setTextElement(data.text, data.textColor);
    svg.setShapeElement(shapeOption)
    svgString = svg.render()
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Generated logo.svg')
    );
};

function init() {
    questions();
}

init();