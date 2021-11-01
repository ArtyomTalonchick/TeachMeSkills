const defaultHashFunc = (value) => value.toString();

class HashTable {
    constructor(hashFunction) {
        this.hashFunction = hashFunction || defaultHashFunc;
        this.storage = [];
    }

    add = (value) => {
        let hash = this.hashFunction(value);
        if (this.storage[hash] === undefined) {
            this.storage[hash] = [value];
        } else {
            this.storage[hash].push(value);
        }
    }

    remove = (value) => {
        let hash = this.hashFunction(value);
        if (this.storage[hash].length === 1) {
            delete this.storage[hash];
        } else {
            for (let i = 0; i < this.storage[hash].length; i++) {
                if (this.storage[hash][i][0] === value) {
                    return delete this.storage[hash][i];                    
                }
            }
        }
    }

    lookup = (value) => {
        let hash = this.hashFunction(value);
        return this.storage[hash] || [];
    }
}

module.exports = HashTable;