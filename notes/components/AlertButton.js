class AlertButton extends HTMLButtonElement {
    connectedCallback() {
        this.addListeners();
    }

    disconnectedCallback() {
        this.removeListeners();
    }

    addListeners = () => {
        this.addEventListener("click", this.handleClick);
    }

    removeListeners = () => {
        this.removeEventListener("click", this.handleClick);
    }

    handleClick = () => {
        const message = this.getAttribute("message");
        alert(message);
    }
}


export {AlertButton};