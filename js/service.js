let firstBlock = document.querySelector(".one");
let secondBlock = document.querySelector(".two");
let firstPlus = document.querySelector(".plus1");
let secondPlus = document.querySelector(".plus2");

document.querySelector(".first").onclick = function () {
    firstBlock.classList.toggle('active')
    firstPlus.classList.toggle('active')
}
document.querySelector(".second").onclick = function () {
    secondBlock.classList.toggle('active')
    secondPlus.classList.toggle('active')
}