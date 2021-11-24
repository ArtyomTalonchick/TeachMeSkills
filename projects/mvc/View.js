export class View {
    constructor(options) {
        this.onAddCallback = options.onAddCallback;
        this.onRemoveCallback = options.onRemoveCallback;
     
        this.input = document.getElementById("list-input");
        this.btn = document.getElementById("add-btn");
        this.list = document.getElementById("list");
        this.initListeners();
    }

    initListeners = () => {
        this.btn.addEventListener("click", this.handleBtnClick);
        this.list.addEventListener("click", this.handleListClick);
    }

    handleBtnClick = (event) => {
        event.preventDefault();
        let value = this.input.value;
        this.input.value = "";
        this.onAddCallback?.(value);
    }

    handleListClick = (event) => {
        if (event.target.tagName !== "LI") return;

        const id = event.target.id;
        this.onRemoveCallback?.(id);
    }

    addItem = (item) => {
        const newElem = document.createElement("li");
        newElem.innerText = item.value;
        newElem.id = item.id;
        this.list.appendChild(newElem);
    }

    removeItem = (id) => {
        const elem = document.getElementById(id);
        elem.remove();
    }
}