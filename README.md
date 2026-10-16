# </> DEV HUB SENATI

Portal web para estudiantes de **Desarrollo de Software** que reúne recursos tecnológicos (lenguajes, frameworks, bases de datos y herramientas) en una interfaz sencilla. Proyecto colaborativo para **4 integrantes** que sirve para practicar **Git y GitHub**: ramas, commits descriptivos y Pull Requests.

## Funcionalidades

- Página de inicio con nombre del portal, descripción y menú de navegación
- Catálogo con 13 recursos (Programación, Frameworks, Bases de datos, Herramientas)
- Filtrado por categoría con JavaScript
- Buscador por palabras clave (ignora tildes y mayúsculas)
- Diseño responsive (PC y teléfono) con menú hamburguesa
- Interactividad: favoritos, mensajes emergentes, modo oscuro, botón "volver arriba"
- Sección del equipo con integrantes y responsabilidades

## Estructura

```
dev-hub-senati/
├── index.html            # Estructura de la página
├── css/styles.css        # Estilos y diseño responsive
├── js/data.js            # Recursos y datos del equipo
├── js/app.js             # Filtros, buscador e interactividad
├── docs/GUIA_GIT.md      # Guía paso a paso del trabajo en equipo
├── .github/              # Plantillas de Pull Request e Issue
└── README.md
```

## Cómo ejecutarlo

No requiere instalación. Abre `index.html` en el navegador (o usa la extensión *Live Server* de VS Code).

## Equipo y roles

| Integrante | Rol | Archivos principales | Rama sugerida |
|---|---|---|---|
| 1 | Coordinador y estructura HTML | `index.html`, sección equipo | `feature/estructura-html` |
| 2 | Datos y filtrado por categorías | `js/data.js`, filtros en `js/app.js` | `feature/catalogo-filtros` |
| 3 | Diseño CSS y responsive | `css/styles.css` | `feature/diseno-responsive` |
| 4 | Buscador, interactividad y documentación | buscador/favoritos en `js/app.js`, `README.md` | `feature/buscador-interactividad` |

> Cada integrante debe reemplazar su nombre en `js/data.js` (constante `TEAM`) desde su propia rama.

## Reglas de control de versiones

1. **Nadie trabaja directamente en `main`.** Todo cambio entra por Pull Request.
2. **Una rama por tarea**, con nombre `tipo/descripcion-corta` (`feature/`, `fix/`, `docs/`, `style/`).
3. **Commits pequeños y descriptivos**, en imperativo, con el formato `tipo: descripción`.
   - ✅ `feat: agrega filtro por categoría en el catálogo`
   - ❌ `cambios`, `arreglé cosas`, `final2`
4. **Todo Pull Request necesita la revisión de al menos 1 compañero** antes del merge.
5. Antes de empezar a trabajar: `git pull` en `main`. Antes de abrir el PR: traer los últimos cambios de `main` a tu rama.
6. Un PR resuelve una sola tarea y enlaza su issue (`Closes #n`).

Consulta la guía completa en [`docs/GUIA_GIT.md`](docs/GUIA_GIT.md).

## Tecnologías

HTML5 · CSS3 · JavaScript (sin librerías externas) · Git · GitHub
