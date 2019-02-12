import { LitElement } from '/node_modules/lit-static/lit-element.js';
export * from '/node_modules/lit-static/lit-element.js';

LitElement.define = (name, constructor, options) => {
	if (customElements.get(name)) return;
	customElements.define(name, constructor, options);
}

LitElement.prototype.emit = function (event, detail, bubbles = true, composed = true) {
	this.dispatchEvent(new CustomEvent(event, Object.assign({}, { detail, bubbles, composed })));
}