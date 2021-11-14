class AlertButton extends HTMLButtonElement {
    connectedCallback() {
        this.addEventListener(this.hanldeClick);
    }

    disconnectedCallback() {
        this.removeEventListener(this.hanldeClick);
    }


    hanldeClick = () => {
        const message = this.getAttribute("message");
        alert(message);
    }
}
  
export { AlertButton };