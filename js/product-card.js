class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const titulo = this.getAttribute("titulo");
    const desc = this.getAttribute("desc");
    const price = this.getAttribute("price");
    const image = this.getAttribute("image");

    this.shadowRoot.innerHTML = `
      <style>
        .card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 12px;
          text-align: center;
          margin: 12px auto;
          width: 250px;
          box-shadow: 0px 2px 6px rgba(0,0,0,0.1);
        }
        .card img {
          width: 100%;
          height: 150px;
          object-fit: contain;
          background: #f4f4f4;
        }
        h2 { font-size: 18px; color: #1e3a81; }
        p { margin: 4px 0; color: #555; }
        .price { color: #0a7c2e; font-weight: bold; }
      </style>
      <div class="card">
        <h2>${titulo}</h2>
        <img src="${image}" alt="${titulo}">
        <p>${desc}</p>
        <p class="price">${price}</p>
      </div>
    `;
  }
}

customElements.define("product-card", ProductCard);
