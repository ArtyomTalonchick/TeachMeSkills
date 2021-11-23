export class View {
    constructor(events) {
        this.events = {...events};

        this.input = document.getElementById("list-input");
        this.list = document.getElementById("list");
        this.addBtn = document.getElementById("add-btn");

        this.initListeners();
    }

    initListeners = () => {
        this.addBtn.addEventListener("click", this.handleAddItem)
    }

    handleAddItem = (e) => {
        e.preventDefault();
        this.events.onAddItem(this.input.value);
        this.input.value = "";
    }

    addItem = (item) => {
        const newItem = document.createElement("li");
        newItem.setAttribute("value", item);
        newItem.innerText = item;
        this.list.appendChild(newItem);
    }

    removeItem = (item) => {
        this.list.querySelector(`[value=${item}]`);
    }
}