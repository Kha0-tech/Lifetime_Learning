class Node<T> {
  value: T;
  children: Node<T>[];
  //children : Node<T>[] = []
  constructor(value: T) {
    this.value = value;
    this.children = [];
  }

  addChild(child: Node<T>) {
    this.children.push(child);
  }
}

//Depth Fist Seach (DFS) recurisive function
function dfs<T>(node: Node<T>) {
  
}

const root = new Node<string>("Root node");
const child_one = new Node<string>("Child one note");
const child_two = new Node<string>("child tow");
root.addChild(child_one);
root.addChild(child_two);
