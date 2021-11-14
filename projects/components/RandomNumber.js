const DEFAULTS_OPTIONS = {
    min: 0,
    max: 100,
    interval: 1000,
}

class RandomNumber extends HTMLElement {
    connectedCallback() {
        this.updateValue();
        this.startInterval();
    }

    disconnectedCallback() {
        this.stopInterval();
    }

    
    static get observedAttributes() {
        return ["min", "max", "interval"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "interval") {
            this.stopInterval();
            this.startInterval();
        }
    }

    startInterval = () => {
        const interval = this.getAttribute("interval") || DEFAULTS_OPTIONS["interval"];
        this.intervalId = setInterval(this.updateValue, interval);
    }

    stopInterval = () => {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    updateValue = () => {
        const min = +this.getAttribute("min") || DEFAULTS_OPTIONS["min"];
        const max = +this.getAttribute("max") || DEFAULTS_OPTIONS["max"];

        const value = Math.round(Math.random() * (max - min) + min);
        this.innerHTML = value;
    }
}

export { RandomNumber };