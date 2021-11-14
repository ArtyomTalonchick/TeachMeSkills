class CallAlert extends HTMLElement {
    connectedCallback() {
        alert(this.innerHTML);
    }
}

export { CallAlert };