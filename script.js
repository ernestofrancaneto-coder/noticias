document.addEventListener("DOMContentLoaded", () => {
    // Menu Responsivo
    const menuToggle = document.getElementById("menuToggle");
    const primaryNav = document.getElementById("primaryNav");

    if (menuToggle && primaryNav) {
        menuToggle.addEventListener("click", () => {
            const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
            menuToggle.setAttribute("aria-expanded", !isExpanded);
            primaryNav.classList.toggle("active");
        });
    }

    // Modo Escuro com salvamento no navegador
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    const themeText = themeToggleBtn ? themeToggleBtn.querySelector(".theme-text") : null;
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector("i") : null;

    const savedTheme = localStorage.getItem("folha_theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        if (themeText) themeText.textContent = "Modo Claro";
        if (themeIcon) themeIcon.className = "fas fa-sun";
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");

            localStorage.setItem("folha_theme", isDark ? "dark" : "light");

            if (themeText) themeText.textContent = isDark ? "Modo Claro" : "Modo Escuro";
            if (themeIcon) themeIcon.className = isDark ? "fas fa-sun" : "fas fa-moon";
        });
    }

    // Sistema de Pesquisa
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");
    const noResults = document.getElementById("noResults");
    const allCards = document.querySelectorAll(".featured-card, .news-card");

    function executeSearch(query) {
        const term = query.toLowerCase().trim();
        let matchCount = 0;

        allCards.forEach(card => {
            const title = card.querySelector("h2, h3") ? card.querySelector("h2, h3").textContent.toLowerCase() : "";
            const text = card.querySelector("p") ? card.querySelector("p").textContent.toLowerCase() : "";
            const category = card.querySelector(".badge, .category") ? card.querySelector(".badge, .category").textContent.toLowerCase() : "";

            if (term === "" || title.includes(term) || text.includes(term) || category.includes(term)) {
                card.style.display = "";
                matchCount++;
            } else {
                card.style.display = "none";
            }
        });

        if (noResults) {
            if (matchCount === 0) {
                noResults.classList.remove("hidden");
            } else {
                noResults.classList.add("hidden");
            }
        }
    }

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            executeSearch(e.target.value);
        });
    }

    if (searchForm) {
        searchForm.addEventListener("submit", (e) => {
            e.preventDefault();
            if (searchInput) executeSearch(searchInput.value);
        });
    }
});