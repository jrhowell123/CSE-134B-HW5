class buttonCount extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
      const button = document.createElement('button');
      button.textContent = 'LEAVE A LIKE!';
      const count = document.createElement('span');
      shadowRoot.appendChild(button);
      shadowRoot.appendChild(count);
      let clickCount = 0;
      button.addEventListener('click', () => {
        clickCount++;
        button.textContent = `LEAVE SOME LIKES!: ${clickCount}`;
      });
    }
  }
  customElements.define('button-count', buttonCount);