"use strict";
class Node {
    //children : Node<T>[] = []
    constructor(value) {
        this.value = value;
        this.children = [];
    }
    addChild(child) {
        this.children.push(child);
    }
}
//Depth Fist Seach (DFS) recurisive function
function dfs(node) {
}
const root = new Node("Root node");
const child_one = new Node("Child one note");
const child_two = new Node("child tow");
root.addChild(child_one);
root.addChild(child_two);
