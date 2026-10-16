# Guía de trabajo en equipo con Git y GitHub

## Fase 0 · Preparación (el Integrante 1 / coordinador)

1. Crear el repositorio **dev-hub-senati** en GitHub (público, sin README).
2. Subir el proyecto base:
   ```bash
   git init
   git add .
   git commit -m "chore: estructura inicial del proyecto DEV HUB SENATI"
   git branch -M main
   git remote add origin https://github.com/USUARIO/dev-hub-senati.git
   git push -u origin main
   ```
3. En **Settings → Collaborators** agregar a los otros 3 integrantes.
4. En **Settings → Branches → Add rule** para `main`:
   - Require a pull request before merging
   - Require approvals: **1**
5. Crear 4 **issues** (uno por tarea, ver tabla abajo) y asignar a cada integrante.

## Fase 1 · Cada integrante clona el repo (una sola vez)

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@correo.com"
git clone https://github.com/USUARIO/dev-hub-senati.git
cd dev-hub-senati
```

## Fase 2 · Flujo de cada tarea

```bash
git switch main
git pull                              # 1. actualizar
git switch -c feature/nombre-rama     # 2. crear rama
# ... editar archivos ...
git status                            # 3. ver qué cambió
git add archivo                       # 4. preparar
git commit -m "feat: descripción"     # 5. commit descriptivo
git push -u origin feature/nombre-rama   # 6. subir la rama
```

Luego en GitHub: **Compare & pull request** → completar la plantilla → pedir revisión a un compañero.

## Fase 3 · Revisión y merge

- El revisor comenta en las líneas del código, aprueba (**Approve**) o pide cambios.
- Si piden cambios: haces nuevos commits en la misma rama y `git push` (el PR se actualiza solo).
- Con la aprobación, se hace **Merge pull request** y se borra la rama.
- Todos actualizan: `git switch main && git pull`.

## Tareas e historial de commits sugerido

### Integrante 1 · `feature/estructura-html`
- `feat: agrega sección de equipo con nombres y responsabilidades`
- `feat: agrega menú de navegación con enlaces a las secciones`
- `docs: actualiza nombre del integrante 1 en data.js`

### Integrante 2 · `feature/catalogo-filtros`
- `feat: agrega 13 recursos al catálogo en data.js`
- `feat: genera botones de categoría dinámicamente`
- `feat: filtra recursos por categoría al hacer clic`

### Integrante 3 · `feature/diseno-responsive`
- `style: define variables de color y tipografía`
- `style: agrega diseño responsive con menú hamburguesa`
- `style: agrega modo oscuro y animaciones de tarjetas`

### Integrante 4 · `feature/buscador-interactividad`
- `feat: agrega buscador por palabras clave`
- `feat: agrega favoritos con almacenamiento local`
- `feat: agrega mensajes emergentes y botón volver arriba`
- `docs: completa README con reglas de control de versiones`

## Tipos de commit

| Tipo | Uso |
|---|---|
| `feat` | Nueva funcionalidad |
| `fix` | Corrección de error |
| `style` | Cambios de diseño o formato |
| `docs` | Documentación |
| `refactor` | Mejora interna sin cambiar el comportamiento |
| `chore` | Tareas de mantenimiento |

## Práctica obligatoria: resolver un conflicto

Para entender los conflictos de merge, dos integrantes deben editar **la misma línea** de `js/data.js` (por ejemplo, el nombre en `TEAM`) en ramas distintas. Al fusionar el segundo PR, GitHub marcará un conflicto:

```bash
git switch feature/mi-rama
git pull origin main          # trae main y marca el conflicto
# abrir el archivo, elegir qué versión se queda, borrar <<<<<<< ======= >>>>>>>
git add js/data.js
git commit -m "fix: resuelve conflicto en data.js con main"
git push
```

## Evidencias para entregar

- [ ] Enlace al repositorio de GitHub
- [ ] Historial de commits con mensajes descriptivos de los 4 integrantes (*Insights → Network* o *Commits*)
- [ ] Al menos 4 Pull Requests fusionados, con revisiones
- [ ] Al menos 4 issues cerrados
- [ ] Captura del conflicto resuelto
- [ ] La página funcionando en PC y en móvil

## Comandos de ayuda

```bash
git log --oneline --graph --all    # ver ramas y commits
git branch -a                      # listar ramas
git diff                           # ver cambios sin guardar
git restore archivo                # descartar cambios de un archivo
git stash                          # guardar cambios temporalmente
```
