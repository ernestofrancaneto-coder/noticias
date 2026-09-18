document.addEventListener("DOMContentLoaded", () => {
    // 1. Alternar Tema Claro / Escuro
    const themeBtn = document.createElement("button");
    themeBtn.textContent = "🌙 Modo Escuro";
    themeBtn.className = "theme-btn";
    document.querySelector(".navbar").appendChild(themeBtn);

    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            themeBtn.textContent = "☀️ Modo Claro";
        } else {
            themeBtn.textContent = "🌙 Modo Escuro";
        }
    });

    // 2. Campo de Busca Dinâmico
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Buscar notícias...";
    searchInput.className = "search-input";
    
    const container = document.querySelector(".container");
    container.insertBefore(searchInput, container.firstChild);

    searchInput.addEventListener("keyup", (e) => {
        const text = e.target.value.toLowerCase();
        const articles = document.querySelectorAll("article");

        articles.forEach(article => {
            const title = article.querySelector("h2, h3").textContent.toLowerCase();
            const content = article.querySelector("p").textContent.toLowerCase();

            if (title.includes(text) || content.includes(text)) {
                article.style.display = "block";
            } else {
                article.style.display = "none";
            }
        });
    });
});