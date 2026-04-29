# Agente de Refactorización Cloud a Java

Eres un agente de Inteligencia Artificial especializado en refactorizar proyectos web.
Tu objetivo en este proyecto es migrar su arquitectura actual a la nueva arquitectura basada en `WebComponents` que ya se está utilizando en el proyecto `java`.

## Contexto de la Refactorización

El proyecto `cloud` actualmente utiliza una estructura tradicional de HTML, CSS y JS, cargando los scripts y estilos de forma manual en el `index.html`. 

El objetivo es migrarlo a la nueva arquitectura (explicada en el archivo `../java/README.md`), cuyas principales características son:

1. **Uso de WebComponents**: Cada sección de contenido debe ser un WebComponent aislado.
2. **Estructura de Vistas y Componentes**:
   - Todo el contenido va dentro de la carpeta `components/`.
   - Existen **Vistas** que engloban varios **Contenidos** (WebComponents).
   - Estructura base de una vista:
     ```
     components/
      ├── <nombre-vista>/
          ├── common/
          │   ├── assets/
          │   │   ├── img/logo.svg
          │   │   └── sidebar.json (Define el menú lateral)
          ├── <contenido-1>/ (WebComponent)
          │   ├── assets/
          │   ├── <contenido-1>.html
          │   └── <contenido-1>.js
     ```
3. **Carga dinámica de scripts y dependencias**: El `index.html` del proyecto `java` ya no carga los CSS y JS locales manualmente, sino que utiliza las versiones base alojadas en `https://antoniocortes.github.io/base-webpage/` (Bootstrap, Highlight.js, styles.css base).
4. **Archivos de configuración JSON**:
   - `components/common/assets/constants.json`: Define el navbar y las rutas a las vistas.
   - `sidebar.json` (por cada vista): Define los enlaces del menú lateral y a qué WebComponent apuntan.

## Instrucciones para el Agente (IA)

Cuando el usuario te pida comenzar o continuar con la refactorización, debes seguir estos pasos:

1. **Analizar el `index.html` y la estructura actual del proyecto `cloud`**: Identifica qué secciones de contenido existen actualmente (por ejemplo, en `cloud/index.html` o en otras carpetas de contenido si las hay).
2. **Actualizar el `index.html`**: Reemplazar el `index.html` del proyecto para que coincida con la estructura del `index.html` de `java`, utilizando las importaciones de `antoniocortes.github.io` y estableciendo el `sidebar`, `main` y la importación de `js/components-imports.js`.
3. **Copiar las plantillas base (CRÍTICO)**: Debes copiar los archivos `navbar.html`, `sidebar.html` y la carpeta `assets/svg` (y su contenido) desde `../java/components/common/` hacia `components/common/` del proyecto actual. Si no se copian estas plantillas de interfaz básicas, el script global de la SPA no las encontrará y entrará en un bucle infinito que duplicará la barra de navegación y colgará la página.
4. **Migrar el contenido a WebComponents**:
   - Para cada sección lógica, crea la estructura de carpetas de Vistas y Contenidos dentro de `components/`.
   - Crea los archivos `.html` y `.js` para cada componente utilizando la función `createComponent` de `https://antoniocortes.github.io/base-webpage/js/component-generator.js`.
5. **Configurar los JSON**:
   - Crea/actualiza `components/common/assets/constants.json` para el Navbar.
   - Crea/actualiza los `sidebar.json` de cada vista.
6. **Configurar los Logos de las Vistas**: Asegúrate de que cada vista tenga su imagen en `<vista>/common/assets/img/`. El script principal exige estrictamente que la imagen se llame `logo.svg`. Si la imagen original es un `.png`, `.jpg` o tiene otro nombre (por ejemplo `docker-logo.png`), simplemente renómbrala a `logo.svg`. Los navegadores la renderizarán correctamente leyendo sus bytes.
7. **Limpiar archivos obsoletos**: Una vez migrado, elimina las carpetas de CSS/JS/Assets locales que ya no sean necesarias, ya que la nueva arquitectura las provee de forma centralizada o localizadas en los componentes.

## Cómo debe usar el usuario este Agente

Cuando quieras que la IA comience a refactorizar una parte de este proyecto, simplemente dile:

> "Actúa siguiendo las instrucciones de @[cloud/refactoring-agent.md] y comienza a refactorizar el proyecto."
