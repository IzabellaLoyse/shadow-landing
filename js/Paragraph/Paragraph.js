// ** Main page paragraphs

class BaseParagraph extends HTMLElement {
  constructor() {
    super();

    this.build();
  }

  build() {
    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.createBaseParagraph());
    shadow.appendChild(this.styles());
  }

  createBaseParagraph() {
    const paragraph = document.createElement("p");
    paragraph.textContent = this.textContent;

    paragraph.classList.add("c-paragraph--base");

    return paragraph;
  }

  styles() {
    const styles = document.createElement("style");
    styles.textContent = `
      .c-paragraph--base {
        color: rgb(102, 67, 47);
        font-size: 1.1rem;
        font-weight: 500;
      }
    `;

    return styles;
  }
}

customElements.define("base-paragraph", BaseParagraph);

/* ======================================================================  */

class ParagraphLink extends HTMLElement {
  constructor() {
    super();

    this.build();
  }

  build() {
    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.createBaseParagraph());
    shadow.appendChild(this.styles());
  }

  createBaseParagraph() {
    const paragraph = document.createElement("a");
    paragraph.innerHTML = this.innerHTML;
    paragraph.href = "/";

    paragraph.classList.add("c-paragraph--link");

    return paragraph;
  }

  styles() {
    const styles = document.createElement("style");
    styles.textContent = `
      .c-paragraph--link {
        color: rgb(4, 3, 2);
        font-size: 1rem;
        font-weight: 400;
        text-underline-offset: 5px;
      }

      .c-paragraph--link:hover,
      .c-paragraph--link:focus {
        color: rgb(102, 66, 63);
        text-decoration: none;
      }

      .c-paragraph--link:active {
        color: rgb(147, 85, 43);
      }

    `;

    return styles;
  }
}

customElements.define("link-paragraph", ParagraphLink);

/* ======================================================================  */

class SmallParagraph extends HTMLElement {
  constructor() {
    super();

    this.build();
  }

  build() {
    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.createBaseParagraph());
    shadow.appendChild(this.styles());
  }

  createBaseParagraph() {
    const paragraph = document.createElement("p");
    paragraph.textContent = this.textContent;

    paragraph.classList.add("c-paragraph--small");

    return paragraph;
  }

  styles() {
    const styles = document.createElement("style");
    styles.textContent = `
      .c-paragraph--small{
        color: rgb(4, 3, 2);
        font-size: 0.8rem;
        font-weight: 300;
      }
    `;

    return styles;
  }
}

customElements.define("small-paragraph", SmallParagraph);
