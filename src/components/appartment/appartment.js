document.addEventListener('click', showSlideLeft)
document.addEventListener('click', showSlideRight)

const slideLeft = document.querySelector("#js-slide-left");
const slideRight = document.querySelector("#js-slide-right");
const slidePhoto = document.querySelectorAll(".appartment__img");

function showSlideLeft (e) {
    if(e.target.closest("#js-slide-left")){
        for (let c = 0; c < slidePhoto.length; c++) {
            slidePhoto[c].style.left -= parseInt(271) + 'px';
        }
    }
}
function showSlideRight (e) {
    if(e.target.closest("#js-slide-right")){
        for (let i = 0; i < slidePhoto.length; i++){
            slidePhoto[i].style.right += parseInt(271) + 'px';
        }
    }
}
//Поздравляю твой первый гавнослайдер :D который показал что-то
