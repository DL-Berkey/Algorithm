class Queue<T> {
    store: Array<T | undefined>;
    headIdx: number;

    constructor() {
        this.store = [];
        this.headIdx = 0;
    }

    enqueue(value: T) {
        this.store.push(value);
    }

    dequeue() {
        const result = this.head();

        if (result !== undefined) {
            this.store[this.headIdx] = undefined;

            this.headIdx += 1;
        }

        return result;
    }

    head() {
        if (this.store.length !== 0) {
            const value = this.store[this.headIdx];

            return value;
        }

        return undefined;
    }

    size() {
        return this.store.length - this.headIdx + 1;
    }

    isEmpty() {
        return this.size() === 0;
    }
}

const queue = new Queue();

console.log(queue.store);

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.store);

console.log(queue.head());
console.log(queue.dequeue());
console.log(queue.store);

console.log(queue.head());
console.log(queue.dequeue());
console.log(queue.store);
