export class Model {
    constructor(options) {
        this.onAddItem = options.onAddItem;
        this.onRemoveItem = options.onRemoveItem;
        this.list = [];
        this.id = 0;
    }

    bindAddItemCallback = (func) => {
        this.onAddItem = func;
    }

    getList = () => this.list;

    addItem = (value) => {
        if(!isNaN(+value)) return;

        const item = {
            id: this.id++,
            value,
        }

        this.list.push(item);

        this.onAddItem?.(item);
        console.log(this.list);
    }

    removeItem = (id) => {
        this.list = this.list.filter(value => value.id !== +id);
        
        this.onRemoveItem?.(id);

        console.log(this.list);
    }
}