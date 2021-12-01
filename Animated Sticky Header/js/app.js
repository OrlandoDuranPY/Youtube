//Scroll Event

window.addEventListener("scroll", () =>{
    let navbar = document.querySelector("#navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
});