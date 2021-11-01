class Stack {
    constructor() {
        this.count = 0;
        this.head = undefined;
    }

    push = (value) => {
        this.head = {
            value,
            previous: this.head,
        };

        this.count++;
    }

    peek = () => this.head?.value;

    pop = () => {
        const result = this.peek();

        if (this.head) {
            this.head = this.head.previous;
            this.count--;
        }

        return result;
    }

    size = () => this.count;
}

module.exports = Stack;