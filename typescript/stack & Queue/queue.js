"use strict";
/**
 * Queue  (Fist in fist out FIFO)
 * Usage ->
 *  sending email , push notificaiton
 *  Custorm service center
 *
 */
class Queue {
    constructor() {
        this.queue = [];
    }
    enqueu(ele) {
        this.queue.push(ele);
    }
    dequeue() {
        return this.queue.shift();
    }
    peek() {
        return this.queue[0];
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    size() {
        return this.queue.length;
    }
    getQueue() {
        return this.queue;
    }
}
const queueOne = new Queue();
queueOne.enqueu("Apple");
queueOne.enqueu("banana");
console.log(queueOne.getQueue(), queueOne.size());
