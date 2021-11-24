export class Controller {
    constructor(View, Model) {
        this.view = new View({
            onAddCallback: this.handleAddItem,
            onRemoveCallback: this.handleRemoveItem,
        });
        this.model = new Model({
            onAddItem: this.onAddItemToModel,
            onRemoveItem: this.onRemoveItem,
        });

        // server
        {
            setTimeout(() => this.handleAddItem("First value from server"), 1000);
            setTimeout(() => this.handleAddItem("32432"), 1000);
            setTimeout(() => this.handleAddItem("Second value from server"), 3000);
        }
    }

    // view callbacks
    handleAddItem = (value) => {
        this.model.addItem(value);
    }

    handleRemoveItem = (id) => {
        this.model.removeItem(id);
    }

    // model callbacks
    onAddItemToModel = (item) => {
        this.view.addItem(item);
    }

    onRemoveItem = (id) => {
        this.view.removeItem(id);
    }
}