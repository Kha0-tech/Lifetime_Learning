class GenericClass<T> {
  private content: T;
  constructor(initalContent: T) {
    this.content = initalContent;
  }

  getContent(): T {
    return this.content;
  }

  setContent(content: T): void {
    this.content = content;
  }
}

const myContent = new GenericClass<string>("Typescript");
