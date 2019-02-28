import {
    LitElement,
    html, css
} from '../../lit-element.js';

export class bwcButton extends LitElement {
    static styles = css`@import url('/src/components/bwc-button/bwc-button.css')`;

    static get properties() {
        return {
            url: String,

            color: {
                type: String,
                attribute: true
            },
            size: {
                type: String,
                attribute: true
            },

            fullwidth: { type: Boolean, attribute: true },
            outlined: { type: Boolean, attribute: true },
            inverted: { type: Boolean, attribute: true },
            rounded: { type: Boolean, attribute: true },
            disabled: { type: Boolean, attribute: true },
        };
    }

    get classNames() {
        return `
            ${this.color ? `is-${this.color}` : ''}
            ${this.size ? `is-${this.size}` : ''}
            ${this.fullwidth ? 'is-outlined' : ''}
            ${this.outlined ? 'is-outlined' : ''}
            ${this.inverted ? 'is-inverted' : ''}
            ${this.rounded ? 'is-rounded' : ''}
            ${this.loading ? 'is-loading' : ''}
        `;
    }

    render() {
        return html`<a class="button ${this.classNames}" ?disabled="${this.disabled}" href="${this.url}">
    <slot></slot>
</a>`;
    }
}

customElements.define('bwc-button', bwcButton);