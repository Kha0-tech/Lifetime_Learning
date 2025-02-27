class Employee {
  protected name: string;
  protected id: number;
  protected salary: number;

  constructor(name: string, id: number, salary: number) {
    this.name = name;
    this.id = id;
    this.salary = salary;
  }

  public employeeInfo(): string {
    return `Name is ${this.name} , id : ${this.id} . Salary ${this.salary}`;
  }
}
//inheritance
class Manager extends Employee {
  private bouns: number;
  constructor(name: string, id: number, salary: number, bouns: number) {
    super(name, id, salary);
    this.bouns = bouns;
  }

  public setBouns(bouns: number) {
    this.bouns = bouns;
  }

  public getBouns(): number {
    return this.bouns;
  }
}

const coreManager = new Manager("Kaung Kyaw", 256, 5000, 0);
coreManager.setBouns(500);
console.log(coreManager.employeeInfo());
console.log("Bouns => ", coreManager.getBouns());
