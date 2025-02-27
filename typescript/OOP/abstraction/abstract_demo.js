"use strict";
//In Typescript ,abstraction is achieved using abstract classes and interfaces
// An abstract class is a class that cannot be instantiated directly , it can include both fully implemeneted methods and abstract methods (method without body).children classes must implement the abstarct methods
class Shape {
    display() {
        console.log("Dispaly the shape");
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculate() {
        return `Circle ${Math.PI * this.radius * 2}`;
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculate() {
        return `Rectangle  ${this.width * this.height}`;
    }
}
const shapes = [new Circle(3), new Rectangle(10, 5)];
console.log("circle => ", shapes[0]);
console.log("rectangle =>", shapes[1]);
shapes.forEach((shap) => {
    shap.display();
    console.log(shap.calculate());
});
