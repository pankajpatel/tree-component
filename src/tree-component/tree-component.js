require('../tree-node/tree-node');
const css = require('./tree-component.css');

const template = (scope) => `
<style>${css}</style>
<ul class="tree">
  <li><small>No Node</small></li>
</ul>`;

class Tree extends HTMLElement {
  connectedCallback(){
    this.render();
  }
  render() {
    this.innerHTML = template();
  }
}
customElements.define('tree-component', Tree);
