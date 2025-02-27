"use strict";
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isSleeping() {
        return `${this.name} is sleeping`;
    }
}
class Animal extends People {
    //
    constructor(name, age, whatAnimal) {
        super(name, age);
        this.whatAnimal = whatAnimal;
    }
    setInfo(name, age, whatAnimal) {
        this.name = name;
        this.age = age;
        this.whatAnimal = whatAnimal;
    }
    getInfo() {
        return `Name is ${this.name} , age ${this.age} , Animal ${this.whatAnimal}`;
    }
    //method overriding
    isSleeping() {
        const superSleeping = super.isSleeping();
        return `${superSleeping} at 11PM`;
    }
}
const dog = new Animal("Phaw Sein", 8, "dog");
console.log(dog.getInfo());
