class Navbar extends HTMLElement {
  constructor() {
    super();

    this.build();
  }

  build() {
    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.createNavbar());
    shadow.appendChild(this.styles());
  }

  createNavbar() {
    const navbar = document.createElement("nav");
    navbar.appendChild(this.createList());

    return navbar;
  }

  createList() {
    const list = document.createElement("ul");

    list.innerHTML = `
    <li class="c-navbar__item">Category</li>
    <li class="c-navbar__item">Brands</li>
    <li class="c-navbar__item">Gift Card</li>
    `;

    list.classList.add("c-navbar__list");

    return list;
  }

  styles() {
    const styles = document.createElement("style");
    styles.textContent = `
    .c-navbar__list {
      display: flex;
    }

    .c-navbar__item {
      color: rgb(4, 3, 2);
      cursor: pointer;
      font-weight: 500;
      list-style: none;
      padding: 1rem;
    }

    .c-navbar__item:hover {
      color: rgb(102, 66, 63);
    }
     `;

    return styles;
  }
}

customElements.define("navbar-page", Navbar);
