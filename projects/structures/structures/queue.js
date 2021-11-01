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

        if (this.count !== 0) {
            this.tail.previous = node;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }

        this.count++;
    }
    front = () => this.head?.value;
    
    dequeue = () => {
        const result = this.front();

        if (this.head) {
            this.head = this.head?.previous;
            this.count--;
        }

        return result;
    }

    size = () => this.count;

    isEmpty = () => this.count === 0;

}

module.exports = Queue;