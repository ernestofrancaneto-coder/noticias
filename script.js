document.addEventListener("DOMContentLoaded", () => {
    // Busca interativa em tempo real na barra de pesquisa do topo
    const searchInput = document.getElementById("searchInput");

    if (searchInput) {
        searchInput.addEventListener("keyup", (event) => {
            const term = event.target.value.toLowerCase().trim();
            const cards = document.querySelectorAll(".news-card, .featured-card");

            cards.forEach(card => {
                const title = card.querySelector("h2, h3") ? card.querySelector("h2, h3").textContent.toLowerCase() : "";
                const category = card.querySelector(".category, .badge") ? card.querySelector(".category, .badge").textContent.toLowerCase() : "";
                const description = card.querySelector("p") ? card.querySelector("p").textContent.toLowerCase() : "";

                if (title.includes(term) || category.includes(term) || description.includes(term)) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }
});