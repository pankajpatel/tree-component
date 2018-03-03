const template = (scope) => `<ul class="node">
  <li><small>No Node</small></li>
</ul>`;

class Node extends HTMLElement {
  connectedCallback(){
    this.render();
  }
  render() {
    this.innerHTML = template();
  }
}
customElements.define('tree-node', Node);
