//In Typescript ,abstraction is achieved using abstract classes and interfaces
// An abstract class is a class that cannot be instantiated directly , it can include both fully implemeneted methods and abstract methods (method without body).children classes must implement the abstarct methods

abstract class Shape {
  abstract calculate(): string;

  display() {
    console.log("Dispaly the shape");
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  calculate(): string {
    return `Circle ${Math.PI * this.radius * 2}`;
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  calculate(): string {
    return `Rectangle  ${this.width * this.height}`;
  }
}

const shapes: Shape[] = [new Circle(3), new Rectangle(10, 5)];

console.log("circle => ", shapes[0]);
console.log("rectangle =>", shapes[1]);

shapes.forEach((shap) => {
  shap.display();
  console.log(shap.calculate());
});
