customElements.define("tree-menu", class extends HTMLElement {
    connectedCallback() {            
      this.attachShadow({ mode: "open" });
      this.shadowRoot.append(tmpl.content.cloneNode(true));
      this.shadowRoot.querySelector('slot[name="title"]').onclick =
        () => {
          this.shadowRoot
            .querySelector(".menu")
            .classList.toggle("closed");
        };
    }
  }
);

let event = new Event("select", {bubbles: true});
document.getElementById("menu").addEventListener("select", e => console.log(e)); 
document.getElementById("menu").dispatchEvent(event);