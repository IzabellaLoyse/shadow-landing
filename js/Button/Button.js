class Button extends HTMLElement {
  constructor() {
    super();

    this.build();
  }

  build() {
    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.createButton());
    shadow.appendChild(this.styles());
  }

  createButton() {
    const button = document.createElement("button");
    button.innerHTML = this.innerHTML;

    button.classList.add("c-button");

    button.addEventListener("click", this.handleAlertMessage.bind(this));

    return button;
  }

  handleAlertMessage() {
    this.currentTarget = alert("Purchase successful!!");
  }

  styles() {
    const styles = document.createElement("style");
    styles.textContent = `
    .c-button {
      background-color: rgb(167, 128, 115);
      border-radius: 3px;
      border: none;
      color: rgb(4, 3, 2);
      cursor: pointer;
      font-size: 1rem;
      font-weight: 700;
      height: 3rem;
      transition: all 300ms ease-in-out;
      width: 11rem;
    }

    .c-button:hover {
      background-color: rgb(149, 113, 101);
    }
    `;

    return styles;
  }
}

customElements.define("buy-button", Button);
