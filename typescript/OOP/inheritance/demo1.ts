class People {
  protected name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  protected isSleeping(): string {
    return `${this.name} is sleeping`;
  }
}

class Animal extends People {
  private whatAnimal: string;
  //
  constructor(name: string, age: number, whatAnimal: string) {
    super(name, age);
    this.whatAnimal = whatAnimal;
  }

  public setInfo(name: string, age: number, whatAnimal: string): void {
    this.name = name;
    this.age = age;
    this.whatAnimal = whatAnimal;
  }

  public getInfo(): string {
    return `Name is ${this.name} , age ${this.age} , Animal ${this.whatAnimal}`;
  }
  //method overriding
  public isSleeping(): string {
    const superSleeping = super.isSleeping();

    return `${superSleeping} at 11PM`;
  }
}

const dog = new Animal("Phaw Sein", 8, "dog");
console.log(dog.getInfo());
