class Header extends HTMLElement {
  constructor() {
    super();

    this.build();
  }

  build() {
    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.createHeader());
    shadow.appendChild(this.styles());
  }

  createHeader() {
    const header = document.createElement("header");
    header.innerHTML = this.innerHTML;

    header.classList.add("l-header");

    return header;
  }

  styles() {
    const styles = document.createElement("style");
    styles.textContent = `
    .l-header {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;
      margin-top: 1.5rem;
      width: 100%;
     }
     `;

    return styles;
  }
}

customElements.define("header-page", Header);
