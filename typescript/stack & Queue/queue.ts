/**
 * Queue  (Fist in fist out FIFO)
 * Usage ->
 *  sending email , push notificaiton
 *  Custorm service center
 *
 */

class Queue<T> {
  private queue: T[] = [];

  enqueu(ele: T): void {
    this.queue.push(ele);
  }
  dequeue(): T | undefined {
    return this.queue.shift();
  }

  peek(): T | undefined {
    return this.queue[0];
  }

  isEmpty(): boolean {
    return this.queue.length === 0;
  }

  size(): number {
    return this.queue.length;
  }

  getQueue(): T[] {
    return this.queue;
  }
}

const queueOne = new Queue();

queueOne.enqueu("Apple");
queueOne.enqueu("banana");
console.log(queueOne.getQueue(), queueOne.size());
