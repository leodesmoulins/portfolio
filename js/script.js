document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navBar = document.querySelector(".nav-bar");

    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("active");
        navBar.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function () {
            hamburger.classList.remove("active");
            navBar.classList.remove("active");
        });
    });
});
