let sbNews = document.querySelector(".subscribe_news");
let body = document.querySelector("body");
let cvNews = document.querySelector(".cv_news");

document.querySelector(".open_sb").onclick = function () {
    sbNews.classList.add('active')
    body.classList.add('lock')
}

document.querySelector(".close_sb").onclick = function () {
    sbNews.classList.remove('active')
    body.classList.remove('lock')
}

document.querySelector(".open_cv").onclick = function () {
    cvNews.classList.add('active')
    body.classList.add('lock')
}

document.querySelector(".close_cv").onclick = function () {
    cvNews.classList.remove('active')
    body.classList.remove('lock')
}