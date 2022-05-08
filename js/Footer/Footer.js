class Footer extends HTMLElement {
  constructor() {
    super();

    this.build();
  }

  build() {
    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.createFooter());
    shadow.appendChild(this.styles());
  }

  createFooter() {
    const footer = document.createElement("footer");

    footer.appendChild(this.createDescription());

    footer.classList.add("l-footer");

    return footer;
  }

  createDescription() {
    const description = document.createElement("p");

    description.innerHTML = `
      Desenvolvido por
      <a class="c-footer__link"
      href="https://github.com/IzabellaLoyse"
      target="_blank">
      Izabella Loyse
      </a>
    `;

    description.classList.add("c-footer__description");

    return description;
  }

  styles() {
    const style = document.createElement("style");

    style.textContent = `
      .l-footer {
        margin-top: 2rem;
      }

      .c-footer__description {
        font-size: 1rem;
        font-weight: 400;
        text-align: center;
      }

      .c-footer__link {
        color: rgb(102, 67, 47);
        font-weight: 800;
        text-underline-offset: 3px;
      }
    `;

    return style;
  }
}

customElements.define("footer-page", Footer);
