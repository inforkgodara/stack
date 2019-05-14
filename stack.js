class Stack {
    
    /**
     * initialization of an object.
     */
    constructor() {
        this.counter = 0;
        this.storage = {};
    }

    /**
     * Adds a value at the end of the stack.
     * @param value new value for the stack.
     */
    push(value) {
        this.storage[this.counter] = value;
        this.counter++;
        return this.counter;
    }

    /**
     * Removes and returs the value at the end of the stack.
     */
    pop() {
        this.counter--;
        var result = this.storage[this.counter];
        delete this.storage[this.counter];
        return result;
    }

    /**
     * Returns size of the stack.
     */
    size() {
        return this.counter;
    }

    /**
     * Returns a value at the end of the stack.
     */
    peek() {
        return this.storage[this.counter - 1];
    }

    /**
     * Returns a string representation of an object.
     */
    toString() {
        return this.storage;
    }
}

var stack = new Stack();
console.log(stack.push('A'));
console.log(stack.push('B'));
console.log(stack.push('C'));
console.log(stack.toString());
console.log(stack.size());
console.log(stack.pop());
console.log(stack.size());
console.log(stack.peek());
console.log(stack.size());
console.log(stack.toString());
