import {
    LitElement,
    html
} from 'lit-element';

export class bwcButton extends LitElement {
    static get properties() {
        return {
            text: {
                type: String
            },
            url: {
                type: String
            },

        };
    }

    constructor() {
        super();
        this.text = 'Button Text';
        this.url = 'https://github.com/prasademc/BulmaWebComponents';
    }

    render() {
        return html `<a href="${this.url}">${this.text}!</a>`;
    }
}

customElements.define('bwc-button', bwcButton);