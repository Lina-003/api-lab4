import { getCharacters } from "./components/characters.js";
import { Character } from "./components/data/index.js";

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    async connectedCallback() {
        const characters = await getCharacters();
        this.render(characters);
    }

    render(characters: Array<Character>) {
        if(!this.shadowRoot) return;

        const char = characters.map(({gender, species, status, image, name}) => `
        <link rel="stylesheet" href="./styles.css"
        <section>
        <div>
            <h2>${name}</h2>
            <h3>${gender}</h3>
            <h3>${species}</h3>
            <h3>${status}</h3>
        </div>
            <image src="${image}">
        </section>`)
        this.shadowRoot.innerHTML = `<section>
            ${char.join("")}
        </section>`;
    }
}

customElements.define("app-container", AppContainer)