/* ===== DATOS (Integrante 2) =====
   Para agregar un recurso nuevo, añade un objeto al arreglo RESOURCES.
   Categorías: "Programación", "Frameworks", "Bases de datos", "Herramientas"
*/
const RESOURCES = [
  { id: 1,  icon: "🐍", name: "Python",        category: "Programación",   description: "Lenguaje versátil y fácil de aprender, ideal para automatización, datos e IA.", url: "https://www.python.org", tags: ["python", "lenguaje", "backend", "ia"] },
  { id: 2,  icon: "☕", name: "Java",          category: "Programación",   description: "Lenguaje orientado a objetos muy usado en sistemas empresariales y Android.", url: "https://www.java.com", tags: ["java", "poo", "lenguaje", "android"] },
  { id: 3,  icon: "🟨", name: "JavaScript",    category: "Programación",   description: "El lenguaje de la web: da interactividad a las páginas y también corre en servidores.", url: "https://developer.mozilla.org/es/docs/Web/JavaScript", tags: ["javascript", "js", "web", "lenguaje"] },
  { id: 4,  icon: "⚛️", name: "React",         category: "Frameworks",     description: "Biblioteca para construir interfaces de usuario con componentes reutilizables.", url: "https://react.dev", tags: ["react", "frontend", "componentes", "javascript"] },
  { id: 5,  icon: "🅰️", name: "Angular",       category: "Frameworks",     description: "Framework completo de Google para aplicaciones web de gran escala.", url: "https://angular.dev", tags: ["angular", "frontend", "typescript", "google"] },
  { id: 6,  icon: "🌿", name: "Spring Boot",   category: "Frameworks",     description: "Framework de Java para crear APIs y servicios backend rápidamente.", url: "https://spring.io/projects/spring-boot", tags: ["spring", "java", "backend", "api"] },
  { id: 7,  icon: "🐬", name: "MySQL",         category: "Bases de datos", description: "Base de datos relacional de código abierto, muy popular en aplicaciones web.", url: "https://www.mysql.com", tags: ["mysql", "sql", "relacional", "datos"] },
  { id: 8,  icon: "🐘", name: "PostgreSQL",    category: "Bases de datos", description: "Base de datos relacional potente y extensible, con soporte para JSON.", url: "https://www.postgresql.org", tags: ["postgres", "postgresql", "sql", "relacional"] },
  { id: 9,  icon: "🍃", name: "MongoDB",       category: "Bases de datos", description: "Base de datos NoSQL orientada a documentos con esquema flexible.", url: "https://www.mongodb.com", tags: ["mongodb", "nosql", "documentos", "json"] },
  { id: 10, icon: "🌱", name: "Git",           category: "Herramientas",   description: "Sistema de control de versiones para registrar y gestionar los cambios del código.", url: "https://git-scm.com", tags: ["git", "versiones", "commit", "ramas"] },
  { id: 11, icon: "🐙", name: "GitHub",        category: "Herramientas",   description: "Plataforma para alojar repositorios y colaborar con pull requests e issues.", url: "https://github.com", tags: ["github", "pull request", "issues", "colaboracion"] },
  { id: 12, icon: "💻", name: "Visual Studio Code", category: "Herramientas", description: "Editor de código ligero con miles de extensiones para cualquier lenguaje.", url: "https://code.visualstudio.com", tags: ["vscode", "editor", "ide", "extensiones"] },
  { id: 13, icon: "📮", name: "Postman",       category: "Herramientas",   description: "Herramienta para probar y documentar APIs de forma sencilla.", url: "https://www.postman.com", tags: ["postman", "api", "rest", "pruebas"] }
];

/* ===== EQUIPO (Integrante 1) =====
   Cada integrante debe reemplazar "Nombre Apellido" por su nombre real
   en su propia rama (feature/equipo-nombre) y abrir un Pull Request.
*/
const TEAM = [
  {
    name: "Integrante 1 · Nombre Apellido",
    avatar: "🧑‍💼",
    role: "Coordinador y estructura HTML",
    tasks: ["Estructura de index.html", "Menú de navegación y sección de inicio", "Sección de equipo", "Revisión y merge de Pull Requests"]
  },
  {
    name: "Integrante 2 · Nombre Apellido",
    avatar: "🗂️",
    role: "Datos y filtrado por categorías",
    tasks: ["Catálogo de recursos (data.js)", "Botones de filtro por categoría", "Renderizado de tarjetas con JavaScript"]
  },
  {
    name: "Integrante 3 · Nombre Apellido",
    avatar: "🎨",
    role: "Diseño CSS y responsive",
    tasks: ["Estilos generales (styles.css)", "Diseño para PC y teléfono", "Modo oscuro y animaciones"]
  },
  {
    name: "Integrante 4 · Nombre Apellido",
    avatar: "🔎",
    role: "Buscador, interactividad y documentación",
    tasks: ["Buscador por palabras clave", "Favoritos y mensajes (toasts)", "README y guía de Git"]
  }
];
