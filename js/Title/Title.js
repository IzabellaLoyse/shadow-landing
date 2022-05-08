// ** Main page titles

class MainTitle extends HTMLElement {
  constructor() {
    super();

    this.build();
  }

  build() {
    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.createTitle("h1"));
    shadow.appendChild(this.styles());
  }

  createTitle(heading) {
    const title = document.createElement(`${heading}`);
    title.textContent = this.textContent;

    title.classList.add("c-title");

    return title;
  }

  styles() {
    const style = document.createElement("style");

    style.textContent = `
      .c-title {
        color: rgb(147, 85, 43);
        font-size: 1.8rem;
        font-weight: 700;
        letter-spacing: 2.41px;
      }
    `;

    return style;
  }
}

customElements.define("main-title", MainTitle);

/* ======================================================================  */

class BaseTitle extends HTMLElement {
  constructor() {
    super();

    this.build();
  }

  build() {
    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.createTitle("h2"));
    shadow.appendChild(this.styles());
  }

  createTitle(heading) {
    const title = document.createElement(`${heading}`);
    title.textContent = this.textContent;

    title.classList.add("c-title--secondary");

    return title;
  }

  styles() {
    const style = document.createElement("style");

    style.textContent = `
      .c-title--secondary {
        color: rgb(4, 3, 2);
        font-size: 2.5rem;
        font-weight: 800;
        letter-spacing: 2px;
        max-width: 370px;
        text-transform: uppercase;
      }
    `;

    return style;
  }
}

customElements.define("base-title", BaseTitle);
