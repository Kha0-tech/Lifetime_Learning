"use strict";
class GenericClass {
    constructor(initalContent) {
        this.content = initalContent;
    }
    getContent() {
        return this.content;
    }
    setContent(content) {
        this.content = content;
    }
}
const myContent = new GenericClass("Typescript");
