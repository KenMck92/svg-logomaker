class Shapes {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color
    }

} 

class Circle extends Shapes {
    render() {
        return '<circle cx="25" cy="75" r="20" fill="${this.color}"/>'
    }
}
class Triangle extends Shapes {
    render() {
        return '<polygon points="50 160 55 180 70 180 " fill="${this.color}"/>'
    }
}
class Square extends Shapes {
    render() {
        return '<rect x="60" y="10" width="30" height="30" fill="${this.color}"/>'
    }
}