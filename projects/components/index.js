import { RandomNumber } from "./RandomNumber.js";
import { AlertButton } from "./AlertButton.js";

customElements.define("random-number", RandomNumber);
customElements.define("alert-button", AlertButton, {extends: "button"});