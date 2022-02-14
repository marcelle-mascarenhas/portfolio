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
      


// Sticky Navbar
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}

// Dark Mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}