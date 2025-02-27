interface Car {
  wheel(): number;
  color(): string;
}

class MyCar implements Car {
  wheel(): number {
    return 4;
  }
  color(): string {
    return `Black`;
  }
}

interface MyFileSytem {
  getName(): string;
  size(): number;
}

class MyFile implements MyFileSytem {
  children: MyFileSytem[] = [];
  getName(): string {
    return `Typescript Programming`;
  }
  size(): number {
    return 25;
  }
}
