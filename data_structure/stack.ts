// stack은 후입선출

class Stack<T> {
    stack: T[];

    constructor() {
        this.stack = [];
    }

    push(value: T) {
        this.stack.push(value);
    }

    pop() {
        const result = this.stack.pop();

        return result;
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    size() {
        return this.stack.length;
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}

// const stack = new Stack<number>();

// console.log(stack.isEmpty());
// console.log(stack.push(1));
// console.log(stack.push(2));
// console.log(stack.stack);
// console.log(stack.pop());
// console.log(stack.peek());
// console.log(stack.stack);

// 2진법 변환기

const convertBinary = (number: number) => {
    const stack = new Stack<number>();

    while (number > 0) {
        const remain = Math.floor(number % 2);

        stack.push(remain);

        number = Math.floor(number / 2);
    }

    return [...stack.stack].reverse().join("");
};

const result = convertBinary(7);

console.log(result);
