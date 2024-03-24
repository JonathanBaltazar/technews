let barsBtn = document.getElementById("btn-bars");
let nav = document.querySelector(".nav-menu");

if (window.innerWidth < 769) {
    nav.classList.add("hidden");
}

barsBtn.addEventListener("click", () => {
    nav.classList.toggle("hidden");

    if (!nav.classList.contains("hidden")) {
        barsBtn.classList.remove("fa-bars");
        barsBtn.classList.add("fa-x");
    } else {
        barsBtn.classList.remove("fa-x");
        barsBtn.classList.add("fa-bars");
    }
});
