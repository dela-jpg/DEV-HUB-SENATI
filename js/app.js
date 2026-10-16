/* ===== DEV HUB SENATI · Lógica principal =====
   Datos: js/data.js (RESOURCES, TEAM)
*/
(function () {
  "use strict";

  // ---------- Referencias al DOM ----------
  const grid = document.getElementById("resourcesGrid");
  const filtersBox = document.getElementById("filters");
  const searchInput = document.getElementById("searchInput");
  const resultsInfo = document.getElementById("resultsInfo");
  const emptyMsg = document.getElementById("emptyMsg");
  const teamGrid = document.getElementById("teamGrid");
  const toasts = document.getElementById("toasts");
  const toTop = document.getElementById("toTop");
  const nav = document.getElementById("nav");
  const menuToggle = document.getElementById("menuToggle");
  const themeToggle = document.getElementById("themeToggle");

  // ---------- Estado ----------
  const state = {
    category: "Todos",
    query: "",
    favorites: loadFavorites()
  };

  // ---------- Utilidades ----------
  function loadFavorites() {
    try {
      return JSON.parse(localStorage.getItem("devhub-favs")) || [];
    } catch (e) {
      return [];
    }
  }

  function saveFavorites() {
    try {
      localStorage.setItem("devhub-favs", JSON.stringify(state.favorites));
    } catch (e) { /* almacenamiento no disponible */ }
  }

  function normalize(text) {
    return text.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  }

  function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    toasts.appendChild(toast);
    setTimeout(() => toast.remove(), 2800);
  }

  // ---------- Filtros por categoría (Integrante 2) ----------
  function getCategories() {
    return ["Todos", ...new Set(RESOURCES.map(r => r.category))];
  }

  function renderFilters() {
    filtersBox.innerHTML = "";
    getCategories().forEach(cat => {
      const btn = document.createElement("button");
      btn.className = "chip" + (cat === state.category ? " active" : "");
      btn.type = "button";
      btn.textContent = cat;
      btn.addEventListener("click", () => {
        state.category = cat;
        renderFilters();
        renderResources();
      });
      filtersBox.appendChild(btn);
    });
  }

  // ---------- Buscador (Integrante 4) ----------
  function matchesQuery(resource) {
    if (!state.query) return true;
    const haystack = normalize(
      [resource.name, resource.category, resource.description, ...resource.tags].join(" ")
    );
    return haystack.includes(normalize(state.query));
  }

  // ---------- Catálogo ----------
  function getFiltered() {
    return RESOURCES.filter(r =>
      (state.category === "Todos" || r.category === state.category) && matchesQuery(r)
    );
  }

  function createCard(resource) {
    const isFav = state.favorites.includes(resource.id);
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="card__top">
        <span class="card__icon" aria-hidden="true">${resource.icon}</span>
        <button class="fav" type="button" aria-label="Marcar ${resource.name} como favorito">${isFav ? "⭐" : "☆"}</button>
      </div>
      <span class="badge">${resource.category}</span>
      <h3>${resource.name}</h3>
      <p>${resource.description}</p>
      <a class="card__link" href="${resource.url}" target="_blank" rel="noopener noreferrer">Ver recurso →</a>
    `;
    card.querySelector(".fav").addEventListener("click", () => toggleFavorite(resource));
    return card;
  }

  function renderResources() {
    const list = getFiltered();
    grid.innerHTML = "";
    list.forEach(r => grid.appendChild(createCard(r)));
    emptyMsg.hidden = list.length > 0;
    resultsInfo.textContent = `Mostrando ${list.length} de ${RESOURCES.length} recursos`;
  }

  // ---------- Favoritos e interactividad ----------
  function toggleFavorite(resource) {
    const index = state.favorites.indexOf(resource.id);
    if (index === -1) {
      state.favorites.push(resource.id);
      showToast(`⭐ ${resource.name} agregado a favoritos`);
    } else {
      state.favorites.splice(index, 1);
      showToast(`${resource.name} eliminado de favoritos`);
    }
    saveFavorites();
    renderResources();
    renderStats();
  }

  function renderStats() {
    document.getElementById("statTotal").textContent = RESOURCES.length;
    document.getElementById("statCats").textContent = getCategories().length - 1;
    document.getElementById("statFavs").textContent = state.favorites.length;
  }

  // ---------- Equipo (Integrante 1) ----------
  function renderTeam() {
    teamGrid.innerHTML = "";
    TEAM.forEach(member => {
      const div = document.createElement("article");
      div.className = "member";
      const tasks = member.tasks.map(t => `<li>${t}</li>`).join("");
      div.innerHTML = `
        <div class="member__avatar" aria-hidden="true">${member.avatar}</div>
        <h3>${member.name}</h3>
        <p class="member__role">${member.role}</p>
        <ul>${tasks}</ul>
      `;
      teamGrid.appendChild(div);
    });
  }

  // ---------- Eventos generales ----------
  searchInput.addEventListener("input", () => {
    state.query = searchInput.value.trim();
    renderResources();
  });

  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach(link =>
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    })
  );

  themeToggle.addEventListener("click", () => {
    const dark = document.documentElement.getAttribute("data-theme") === "dark";
    document.documentElement.setAttribute("data-theme", dark ? "light" : "dark");
    themeToggle.textContent = dark ? "🌙" : "☀️";
    try { localStorage.setItem("devhub-theme", dark ? "light" : "dark"); } catch (e) {}
  });

  document.getElementById("welcomeBtn").addEventListener("click", () => {
    showToast("👋 ¡Bienvenido a DEV HUB SENATI!");
  });

  window.addEventListener("scroll", () => {
    toTop.hidden = window.scrollY < 400;
  });
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // ---------- Inicio ----------
  try {
    if (localStorage.getItem("devhub-theme") === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      themeToggle.textContent = "☀️";
    }
  } catch (e) {}

  renderFilters();
  renderResources();
  renderStats();
  renderTeam();
})();
