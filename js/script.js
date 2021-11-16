
//janela modal

const projetoModals = document.querySelectorAll(".projeto-model");
const imgCards = document.querySelectorAll(".img-card");
const projetoCloseBtns = document.querySelectorAll(".projeto-close-btn");

var projetoModal = function (modalClick) {
    projetoModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        projetoModal(i);
    });
});

projetoCloseBtns.forEach((projetoCloseBtn) => {
    projetoCloseBtn.addEventListener("click", () => {
        projetoModals.forEach((projetoModalView) => {
            projetoModalView.classList.remove("active");
        });
    });
});
      
//Scroll top button
const scrollTopBtn = document.querySelector(".scrollTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
      
//dark/light 
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}
        
//Nav efeito scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
      