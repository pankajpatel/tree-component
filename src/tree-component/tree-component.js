require('../tree-node/tree-node');
const css = require('./tree-component.css');

const node = (scope) => `
<tree-component data='${JSON.stringify(scope.item)}'></tree-component>
`;
const label = (data) => {
  return data instanceof Array ? `[${[].concat(data).join(', ')}]` : data
}
const template = (scope) => `
<style>${css}</style>
${scope.data instanceof Array
  ? `<ul class="tree">
      ${scope.data.map(item => `<li class="collapsed"><small>${label(item)}</small>${node({item})}</li>`).join('')}
    </ul>`
  : scope.data
}`;

class Tree extends HTMLElement {
  connectedCallback(){
    this.data = JSON.parse(this.getAttribute('data'));
    this.render();
    this.addEventListener('click', (e) => {
      e.target.parentElement.classList.toggle('collapsed');
      e.target.parentElement.classList.toggle('expanded');
    })
  }
  render() {
    this.innerHTML = template({data: this.data});
  }
}
customElements.define('tree-component', Tree);
