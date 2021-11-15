const DEFAULT_OPTIONS = {
    min: 0,
    max: 100,
    interval: 1000,
}

class RandomNumber extends HTMLElement {
    connectedCallback() {
        this.updateValue();
    }

    disconnectedCallback() {
        this.stopInterval();
    }

    static get observedAttributes() {
        return ["interval"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "interval") {
            this.stopInterval();
            this.startInterval();
        }
    }

    startInterval = () => {
        const interval = +this.getAttribute("interval") || DEFAULT_OPTIONS["interval"];
        this.intervalId = setInterval(this.updateValue, interval);
    }

    stopInterval = () => {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    updateValue = () => {
        const min = +this.getAttribute("min") || DEFAULT_OPTIONS["min"];
        const max = +this.getAttribute("max") || DEFAULT_OPTIONS["max"];

        const value = Math.round(Math.random() * (max - min) + min);
        this.innerHTML = value;
    }
}

export {RandomNumber};