document.addEventListener("DOMContentLoaded", () => {
  fetch("components/header.html")
    .then(r => r.text())
    .then(html => document.getElementById("header").innerHTML = html);

  fetch("components/sidebar.html")
    .then(r => r.text())
    .then(html => document.getElementById("sidebar").innerHTML = html);

  fetch("components/footer.html")
    .then(r => r.text())
    .then(html => document.getElementById("footer").innerHTML = html);
});