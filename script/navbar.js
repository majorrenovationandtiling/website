function showBar() {
    // console.log(document.getElementById("nav-links").style.display);
    const navbar = document.querySelector(".navbar");
    const welcome = document.querySelector(".welcome-message");
    const nav_quote = document.querySelector(".nav-quote");
    const links = document.getElementById("nav-links");
    const buttonq = document.querySelector(".nav-quote");

    if (!document.getElementById("nav-links").style.display) {
        navbar.classList.add("show-navbar");
        welcome.classList.add("show-welcome");
        nav_quote.classList.add("show-nav_quote");
        links.style.display = "block";
        buttonq.style.display = "block";
    } else {
        navbar.classList.remove("show-navbar");
        welcome.classList.remove("show-welcome");
        nav_quote.classList.remove("show-nav_quote");
        links.style.display = "";
        buttonq.style.display = "";
    }

}

function showBar2() {
    const navbar = document.querySelector(".navbar");
    const welcome = document.querySelector(".welcome-message");
    const nav_quote = document.querySelector(".nav-quote");
    const links = document.getElementById("nav-links");
    const buttonq = document.querySelector(".nav-quote");

    if (!document.getElementById("nav-links").style.display) {
        navbar.classList.add("show-navbar");
        // welcome.classList.add("show-welcome");
        nav_quote.classList.add("show-nav_quote");
        links.style.display = "block";
        buttonq.style.display = "block";
    } else {
        navbar.classList.remove("show-navbar");
        // welcome.classList.remove("show-welcome");
        nav_quote.classList.remove("show-nav_quote");
        links.style.display = "";
        buttonq.style.display = "";
    }
}