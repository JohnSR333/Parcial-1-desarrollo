## Proyecto Web Modularizado
### Qué desarrollamos
1. Login
Creamos un archivo login.html con usuario y contraseña.
En login.js validamos con datos quemados (usuario: prueba, clave: 2329).
Si es correcto, redirige a index.html; si no, muestra error.
Esto es solo de prueba, no es seguro para la vida real.

2. Fragmentos
El header, footer y sidebar están separados en la carpeta components/.
Se cargan en index.html usando JavaScript.
Header: contiene el nombre de la tienda.
Footer: muestra los derechos reservados.
Sidebar: tiene un menú lateral con enlaces.

3. Página principal
index.html integra todo (header, sidebar, footer y contenido central).
Todo mantiene el mismo estilo definido en CSS.

4. Plantillas con <template>
En index.html se definió un <template> para un producto.
Con JavaScript clonamos esa plantilla y mostramos varios productos.

5. Datos externos con JSON y Fetch
Creamos un archivo products.json en la carpeta /data.
En main.js usamos fetch para leer ese JSON.
Los productos se muestran automáticamente en la página.

6. Web Component <product-card>
Creamos un componente <product-card>.
Recibe atributos: nombre, precio, descripción e imagen.
Su estructura y estilos están encapsulados en el Shadow DOM.
Parte de los productos se renderizan usando este componente.

### Estilos y buenas prácticas 
Colores definidos: azul en el header, gris en el footer, tarjetas blancas con sombra.
Variables y funciones en JS con camelCase.
Clases CSS con kebab-case.
Código indentado, separado en archivos y con comentarios.

### Conceptos básicos 
**Fragmentos:** permiten reutilizar header, footer y sidebar sin repetir código.
**Plantillas:** con <template> se generan productos de forma dinámica.
**Web Components:** hacen que un producto sea un componente independiente y reutilizable.
**Login:** validación con JS y redirección si es correcto.
**Buenas prácticas:** todo modularizado y organizado en carpetas.