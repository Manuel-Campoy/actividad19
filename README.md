¿Qué es React?
React es una biblioteca de JavaScript de código abierto para construir interfaces de usuario (UI). Fue creada por Facebook (ahora Meta). Su principal característica es que permite desarrollar aplicaciones web de una sola página (SPA) o partes de ellas, de manera eficiente y declarativa, basándose en el concepto de componentes reutilizables.

Herramientas de Configuración: Create React App vs. Vite vs. Next.js
La diferencia principal radica en su propósito y enfoque de rendimiento/desarrollo:

Create React App (CRA): Su propósito es crear una aplicación React de una sola página (SPA) lista para usar con una configuración predefinida. Utiliza Webpack y Babel. Es ideal para principiantes, pero puede ser más lento en el inicio y la reconstrucción en proyectos grandes. Su configuración está oculta.

Vite: Es una herramienta de construcción (build tool) y un servidor de desarrollo local ultrarrápido. Su enfoque es el rendimiento y la velocidad, utilizando módulos nativos de ES (ESM). Se puede usar con React y otros frameworks para configurar aplicaciones de manera más rápida que CRA.

Next.js: Es un framework de React para crear aplicaciones full-stack. Su enfoque es habilitar el Server-Side Rendering (SSR) y Static Site Generation (SSG) para mejorar el SEO y el rendimiento. Incluye enrutamiento, optimización y otras características listas para producción.

¿Qué hace Vite en React?
Vite es un build tool que proporciona un servidor de desarrollo extremadamente rápido para React. Lo logra al servir archivos fuente a través de módulos nativos de ES (ESM), lo que permite que el navegador maneje parte del trabajo, resultando en un inicio del servidor casi instantáneo. También utiliza Rollup para el build de producción y un Hot Module Replacement (HMR) ultra-rápido.

Estándares de Código: ESLint y Prettier
ESLint: Es una herramienta de análisis de código estático (linter). Su función es identificar y reportar patrones problemáticos y errores de calidad en el código JavaScript/TypeScript, haciendo cumplir reglas específicas. Ayuda a mantener la calidad del código.

Prettier: Es un formateador de código. Se enfoca únicamente en la apariencia y estilo del código (espaciado, comillas, punto y coma, saltos de línea, etc.). Su objetivo es formatear automáticamente el código de forma consistente para mejorar la legibilidad.

Sintaxis: JSX y TSX
JSX (JavaScript XML): Es una extensión de sintaxis para JavaScript recomendada por React. Permite escribir código con apariencia de HTML dentro de archivos JavaScript. Debe ser transpilado a llamadas de función estándar de JavaScript antes de que el navegador pueda ejecutarlo.

TSX (TypeScript XML): Es el equivalente a JSX pero utilizado en proyectos que usan TypeScript. Los archivos .tsx permiten combinar la sintaxis JSX con las características de tipado estático de TypeScript.

¿Qué es un componente en React?
Un componente en React es una pieza de UI (interfaz de usuario) aislada e independiente. Es la unidad fundamental de una aplicación React. Los componentes aceptan entradas (propiedades o props) y devuelven elementos de React que describen lo que debe aparecer en la pantalla. Su principal ventaja es la reutilización y la organización del código.

Diferencia entre los estilos Modules, global y style, SCSS y SASS
Estilos Globales: Se definen en un archivo CSS estándar y afectan a toda la aplicación. Son rápidos de implementar pero propensos a colisiones de nombres de clases.

CSS Modules: Son archivos CSS donde los nombres de clases se limitan localmente al componente que los importa. Esto previene colisiones de nombres generando nombres únicos para las clases.

Styled Components / CSS-in-JS (Style): Es el acto de escribir CSS directamente en archivos JavaScript/JSX usando tagged template literals. Permite usar lógica JS dentro del CSS (estilos dinámicos).

SCSS / SASS: Son preprocesadores de CSS. Extienden CSS con características como variables, anidamiento, y mixins. No son un método de aplicación de estilos específico de React, sino una forma de escribir CSS de manera más potente.

¿Qué es el renderizado en React?
El renderizado es el proceso mediante el cual React toma la información de un componente (su estado y props) y determina qué debe mostrarse en la pantalla. Ocurre cuando el estado o las props del componente cambian. React ejecuta la función del componente, compara el nuevo árbol de elementos devuelto con el árbol anterior (el DOM Virtual), y luego solo actualiza las partes del DOM Real del navegador que realmente han cambiado.

¿Qué es el estado en React?
El estado de un componente es un objeto JavaScript simple que contiene datos que son dinámicos y que pueden cambiar con el tiempo e influir en lo que el componente renderiza. El estado es privado y controlado por el componente. Cuando el estado cambia (usando hooks como useState), React automáticamente re-renderiza el componente y sus hijos, lo que permite la interactividad.