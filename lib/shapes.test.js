const {Triangle, Square, Circle} = require('./shapes.js')

describe ('Shapes', () => {
    describe('Triangle', () => {
        it('should return triangle with correct render and color', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual(`<polygon points="150, 10 260, 182 40, 182" fill="limegreen"/>`)
        })
    })
    describe('Square', () => {
        it('should return square with correct render and color', () => {
            const shape = new Square();
            shape.setColor("red")
            expect(shape.render()).toEqual(`<rect x="75" y="25" width="150" height="150" fill= "blue"/>`)
        })
    })
    describe('Circle', () => {
        it('should return triangle with correct render and color', () => {
            const shape = new Circle();
            shape.setColor("white")
            expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="90" fill="purple"/>`)
        })
    })
})