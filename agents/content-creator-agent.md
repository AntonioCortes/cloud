# Agente Creador de Contenido

Eres un agente de Inteligencia Artificial especializado en crear nuevo contenido para este proyecto web basado en arquitectura de WebComponents SPA.

## Tu objetivo
Cuando el usuario te pida crear "un nuevo contenido", "una nueva sección" o "añadir información sobre [tema]", debes seguir **ESTRICTAMENTE** los siguientes pasos para que el contenido se integre de forma correcta.

## Pasos para crear nuevo contenido

### 1. Identificar o Crear la Vista y Carpeta
- Determina a qué `vista` (por ejemplo, `docker`, `kubernetes`, `kafka`) pertenece el contenido.
- Crea una nueva subcarpeta para el contenido: `components/<vista>/<nombre-nuevo-contenido>/`.

### 2. Crear los Archivos del Componente
Dentro de la nueva carpeta (`components/<vista>/<nombre-nuevo-contenido>/`), crea dos archivos:

**Archivo HTML (`<nombre-nuevo-contenido>.html`)**
- Añade aquí el contenido en HTML. 
- **Reglas de estilo estrictas:**
  - Títulos principales: `<h1 class="title">Título</h1>`
  - Tablas: `<table class="table table-striped table-hover">`
  - Imágenes/Gifs: Deben llevar la clase `center-horizontal`.
  - Pie de imagen (Caption): `<span class="center-horizontal caption">Texto</span>`
  - Código: Envolver en `<div class="center-horizontal"><pre><code class="language-<lenguaje>">...</code></pre></div>`.

**Archivo JS (`<nombre-nuevo-contenido>.js`)**
- Crea el script que registra el componente importando el generador global.
- `tagName` DEBE empezar por `component-`.

```javascript
import { createComponent } from "https://antoniocortes.github.io/base-webpage/js/component-generator.js";

const tagName = 'component-<nombre-vista>-<nombre-contenido>';
const htmlFilename = '<nombre-nuevo-contenido>.html';

const baseUrl = import.meta.url.substring(0, import.meta.url.lastIndexOf('/') + 1);
createComponent(tagName, baseUrl + htmlFilename);
```

### 3. Registrar el Componente Globalmente
- Abre el archivo principal de importaciones: `js/components-imports.js`.
- Añade la importación de tu nuevo archivo JS utilizando una ruta relativa:
```javascript
import '../components/<vista>/<nombre-nuevo-contenido>/<nombre-nuevo-contenido>.js';
```

### 4. Añadir el Enlace al Menú Lateral (Sidebar)
- Localiza el archivo de configuración del menú lateral de la vista: `components/<vista>/common/assets/sidebar.json`.
- Añade un nuevo objeto dentro de la lista `pageContent` (o como submenú si el usuario lo pide).
- **CRÍTICO:** La propiedad `content` DEBE ser exactamente el mismo `tagName` que definiste en el archivo `.js`.

```json
{
  "text": "Título a mostrar en el menú",
  "content": "component-<nombre-vista>-<nombre-contenido>"
}
```

## Cómo debe usar el usuario este Agente

Cuando quieras crear nuevo contenido usando esta arquitectura, dile a la IA:

> "Actúa siguiendo las instrucciones de @[agents/content-creator-agent.md] y créame un nuevo contenido sobre [tema] en la vista [vista]."
