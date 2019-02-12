import {
    LitElement,
    html, css
} from '../../lit-element.js';

export class bwcButton extends LitElement {
    static styles = css`@import url('/src/components/bwc-button/bwc-button.css')`;

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