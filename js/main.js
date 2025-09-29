document.addEventListener("DOMContentLoaded", () => {
  const isArticulos = window.location.pathname.includes('/articulos/');
  const prefix = isArticulos ? '../' : '';

  const loadFragment = (id, file) => {
    fetch(prefix + file)
      .then(res => res.text())
      .then(html => {
        document.getElementById(id).innerHTML = html;
      });
  };

  loadFragment("header", "components/header.html");
  loadFragment("sidebar", "components/sidebar.html");
  loadFragment("footer", "components/footer.html");

  fetch("data/productos.json")
    .then(r => r.json())
    .then(data => {
      const template = document.getElementById("card-template");
      const contenedor = document.getElementById("contenedor");

      data
        .filter(p => p.categoria !== "computadores")
        .forEach(p => {
          const clon = template.content.cloneNode(true);
          clon.querySelector(".title").textContent = p.titulo;
          clon.querySelector(".desc").textContent = p.desc;
          clon.querySelector(".product-image").src = p.image;
          clon.querySelector(".product-price").textContent = p.price;
          contenedor.appendChild(clon);
        });

      data
        .filter(p => p.categoria === "computadores")
        .slice(0, 2)
        .forEach(p => {
          const clon = template.content.cloneNode(true);
          clon.querySelector(".title").textContent = p.titulo;
          clon.querySelector(".desc").textContent = p.desc;
          clon.querySelector(".product-image").src = p.image;
          clon.querySelector(".product-price").textContent = p.price;
          contenedor.appendChild(clon);
        });
    });
});
