export class Model {
    constructor(events) {
        this.list = [];

        this.events = {...events};
    }

    addItem = (item) => {
        if (isNaN(+item)) return;
        this.list.push(item);
        this.events?.onAddItem(item);
        console.log(this.list);
    }

    removeItem = (item) => {
        this.list = this.list.filter(value => value !== item);
        this.events?.onRemoveItem(item);
    }
}