class AlertButton extends HTMLButtonElement {
    connectedCallback() {
        this.addEventListener("click", this.hanldeClick);
    }

    disconnectedCallback() {
        this.removeEventListener("click", this.hanldeClick);
    }


    hanldeClick = () => {
        const message = this.getAttribute("message");
        alert(message);
    }
}
  
export { AlertButton };