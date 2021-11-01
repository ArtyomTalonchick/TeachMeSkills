class Queue {
    constructor() {
        this.count = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    enqueue = (value) => {
        const node = {
            value,
        };

        if (this.head) {
            this.tail.previous = node;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }

        this.count++;
    }
    
    dequeue = () => {
        const result = this.front();

        this.head = this.head?.previous;
        this.count--;

        return result;
    }

    front = () => this.head?.value;

    size = () => this.count;

}

module.exports = Queue;