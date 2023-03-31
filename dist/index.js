var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getCharacters } from "./components/characters.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const characters = yield getCharacters();
            this.render(characters);
        });
    }
    render(characters) {
        if (!this.shadowRoot)
            return;
        const char = characters.map(({ gender, species, status, image, name }) => `
        <link rel="stylesheet" href="./styles.css"
        <section>
        <div>
            <h2>${name}</h2>
            <h3>${gender}</h3>
            <h3>${species}</h3>
            <h3>${status}</h3>
        </div>
            <image src="${image}">
        </section>`);
        this.shadowRoot.innerHTML = `<section>
            ${char.join("")}
        </section>`;
    }
}
customElements.define("app-container", AppContainer);
