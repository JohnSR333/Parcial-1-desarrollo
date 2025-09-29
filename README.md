# Parcial-1-desarrolo
Construcción de una Aplicación Web Modularizada

Qué desarrollamos:

Login

Creamos un login.html con usuario y contraseña.
En login.js validamos con datos quemados (usuario: admin, clave: 1234).
Si es correcto, va a index.html, si no, muestra error.

Esto es solo de prueba, no es seguro para la vida real.

Fragmentos

El header, footer y sidebar están separados en la carpeta components/.

Se cargan en index.html con JavaScript.

Header: nombre de la tienda.

Footer: derechos reservados.

Sidebar: menú lateral con enlaces.

Página principal

index.html junta todo (header, sidebar, footer y el contenido central).

Todo tiene el mismo estilo definido en CSS.

Plantillas con <template>

En index.html pusimos un <template> para un producto.

Con JavaScript clonamos esa plantilla y mostramos varios productos.

Datos externos con JSON y Fetch

Creamos products.json en /data.

En main.js usamos fetch para leer ese JSON.

Los productos se muestran automáticamente en la página.

Web Component <product-card>

Hicimos un componente <product-card>.

Recibe nombre, precio, descripción e imagen como atributos.

Tiene su HTML y CSS dentro del Shadow DOM.

Parte de los productos se renderizan usando este componente.

Estilos y buenas prácticas

Usamos colores definidos (azul en header, gris en footer, tarjetas blancas con sombra).

Variables y funciones en JS con camelCase.

Clases CSS con kebab-case.

Código indentado, separado en archivos y con comentarios.

Conceptos

Fragmentos: permiten reutilizar header, footer y sidebar sin repetir código.

Plantillas: con <template> se generan productos de forma dinámica.

Web Components: hacen que un producto sea un componente independiente y reutilizable.

Login: validación con JS y redirección si es correcto.

Buenas prácticas: todo modularizado y organizado en carpetas.