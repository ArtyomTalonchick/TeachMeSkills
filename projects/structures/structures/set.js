class MySet {
    constructor() {
        this.collection = [];
    }

    values = () => this.collection;
    has = (item) => this.collection.includes(item);
    size = () => this.collection.length;

    add = (item) => {
        if(this.has(item)) return false;

        this.collection.push(item);
        return true;
    }

    remove = (item) => {
        const index = this.collection.indexOf(item);

        if(index === -1) return false;
        
        this.collection.splice(index, 1);
        return true;
    }

    // 

    union = (otherSet) => {
        const unionSet = new MySet();
        const secondCollection = otherSet.values();
        this.collection.forEach(i => unionSet.add(i));
        secondCollection.forEach(i => unionSet.add(i));
        return unionSet;
    }

    intersection = (otherSet) => {
        const intersectionSet = new MySet();
        this.collection.forEach((e) => {
            if (otherSet.has(e)) {
                intersectionSet.add(e);
            }
        })
        return intersectionSet;
    }

    difference = (otherSet) => {
        const differenceSet = new MySet()
        this.collection.forEach((e) => {
            if (!otherSet.has(e)) {
                differenceSet.add(e);
            }
        })
        return differenceSet;
    }

    subset = (otherSet) => {
        return this.collection.every(value => otherSet.has(value));
    }
}

module.exports = MySet;