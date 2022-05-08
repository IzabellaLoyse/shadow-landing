class Wrapper extends HTMLElement {
  constructor() {
    super();

    this.build();
  }

  build() {
    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.createWrapperContent());
    shadow.appendChild(this.styles());
  }

  createWrapperContent() {
    const wrapperContent = document.createElement("div");
    wrapperContent.innerHTML = this.innerHTML;

    wrapperContent.classList.add("l-wrapper");

    return wrapperContent;
  }

  styles() {
    const style = document.createElement("style");

    style.textContent = `
      .l-wrapper {
        margin-top: 1rem;
      }
    `;

    return style;
  }
}

customElements.define("wrapper-page", Wrapper);

/* ======================================================================  */

class WrapperContent extends HTMLElement {
  constructor() {
    super();

    this.build();
  }

  build() {
    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.createWrapperContent());
    shadow.appendChild(this.styles());
  }

  createWrapperContent() {
    const wrapperContent = document.createElement("div");
    wrapperContent.innerHTML = this.innerHTML;

    wrapperContent.classList.add("l-wrapper__content");

    return wrapperContent;
  }

  styles() {
    const style = document.createElement("style");

    style.textContent = `
      .l-wrapper__content {
        align-items: center;
        display: flex;
        justify-content: space-between;
        max-width: 20.8rem;
        transform: translateY(-20px);
      }
    `;

    return style;
  }
}

customElements.define("wrapper-content", WrapperContent);

/* ======================================================================  */

class WrapperProduct extends HTMLElement {
  constructor() {
    super();

    this.build();
  }

  build() {
    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.createWrapperProduct());
    shadow.appendChild(this.styles());
  }

  createWrapperProduct() {
    const wrapper = document.createElement("section");
    wrapper.innerHTML = this.innerHTML;

    wrapper.appendChild(this.createImageProduct());

    return wrapper;
  }

  createImageProduct() {
    const image = document.createElement("img");
    image.src = "../../assets/image/product.png";
    image.alt = "Neutrogena Hydro Boost Water Gel Product";

    image.classList.add("c-image");

    return image;
  }

  styles() {
    const styles = document.createElement("style");
    styles.textContent = `
    .c-image {
      border-radius: 3px;
      box-shadow: 6px 3px 9px 1px rgba(0, 0, 0, 0.28);
      height: auto;
      max-width: 100%;
      width: 26rem;
    }
    `;

    return styles;
  }
}

customElements.define("wrapper-product", WrapperProduct);
