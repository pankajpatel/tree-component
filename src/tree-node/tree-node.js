class Tree extends HTMLElement {
  connectedCallback(){
    this.render();
  }
  render() {
    this.innerHTML = `
    <ul class="node">
      <li><small>No Node</small></li>
    </ul>
    `
  }
}
customElements.define('tree-component', Tree);
