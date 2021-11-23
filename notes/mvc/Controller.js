export class Controller {
    constructor(View, Model) {
        this.model = new Model(this.getModelParams());
        this.view = new View(this.getViewParams());
    }

    getModelParams = () => {
        return {
            onAddItem: this.onAddItem,
            onRemoveItem: this.onRemoveItem,
        }
    }

    getViewParams = () => {
        return {
            onAddItem: this.handleAddItem,
        }
    }
    
    handleAddItem = (item) => {
        this.model.addItem(item);
    }
    
    onAddItem = (item) => {
        this.view.addItem(item);
    }
    
    onRemoveItem = (item) => {
        this.view.removeItem(item);
    }
}