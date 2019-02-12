import {
    LitElement,
    html
} from '../../lit-element.js';

export class bwcButton extends LitElement {
    static get properties() {
        return {
            text: String,
            url: String
        };
    }

    constructor() {
        super();
        this.url = 'https://github.com/prasademc/BulmaWebComponents';
    }

    render() {
        return html `<a href="${this.url}">
            <slot></slot>
        </a>`;
    }
}

customElements.define('bwc-button', bwcButton);