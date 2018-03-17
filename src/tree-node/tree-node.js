const template = (scope) => `<small>${scope.text}</small>`;

class Node extends HTMLElement {
  connectedCallback(){
    this.render();
  }
  render() {
    this.innerHTML = template({
      text: this.getAttribute('text')
    });
  }
}
customElements.define('tree-node', Node);
