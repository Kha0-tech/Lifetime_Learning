"use strict";
class Employee {
    constructor(name, id, salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    employeeInfo() {
        return `Name is ${this.name} , id : ${this.id} . Salary ${this.salary}`;
    }
}
//inheritance
class Manager extends Employee {
    constructor(name, id, salary, bouns) {
        super(name, id, salary);
        this.bouns = bouns;
    }
    setBouns(bouns) {
        this.bouns = bouns;
    }
    getBouns() {
        return this.bouns;
    }
}
const coreManager = new Manager("Kaung Kyaw", 256, 5000, 0);
coreManager.setBouns(500);
console.log(coreManager.employeeInfo());
console.log("Bouns => ", coreManager.getBouns());
