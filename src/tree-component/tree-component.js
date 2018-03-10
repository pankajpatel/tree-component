require('../tree-node/tree-node');
const css = require('./tree-component.css');

const node = (scope) => `<tree-component data='${JSON.stringify(scope.item)}'></tree-component>`;

const template = (scope) => `
<style>${css}</style>
${scope.data instanceof Array ?
  `<ul class="tree">${scope.data.map(item => `<li><small>${node({item})}</small></li>`).join('')}</ul>`
  : scope.data
}`;

class Tree extends HTMLElement {
  connectedCallback(){
    this.data = JSON.parse(this.getAttribute('data'));
    this.render();
  }
  render() {
    this.innerHTML = template({data: this.data});
  }
}
customElements.define('tree-component', Tree);
