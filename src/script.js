const Hamburger = document.getElementById("hamburger");
const MobileNav = document.getElementById("Mobile-Nav");

Hamburger.addEventListener("click", () => {
    MobileNav.classList.toggle("-translate-x-full");
});