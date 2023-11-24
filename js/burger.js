let headB = document.querySelector(".header__burger");
let headM = document.querySelector(".header__menu");


document.querySelector(".header__burger").onclick = function () {
    headB.classList.toggle('active')
    headM.classList.toggle('active')
    document.querySelector("body").classList.toggle('lock')
}