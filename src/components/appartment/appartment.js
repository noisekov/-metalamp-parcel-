document.addEventListener('click', showSlideLeft)
document.addEventListener('click', showSlideRight)

const slideLeft = document.querySelector("#js-slide-left");
const slideRight = document.querySelector("#js-slide-right");
const slidePhoto = document.querySelectorAll(".appartment__img");

function showSlideLeft (e) {
    if(e.target.closest("#js-slide-left")){
        for (let i = 0; i < slidePhoto.length; i++) {
            slidePhoto[i].style.left -= parseInt(271) + 'px';
        }
    }
}
function showSlideRight (ev) {
    if(ev.target.closest("#js-slide-right")){
        for (let i = 0; i < slidePhoto.length; i++){
            slidePhoto[i].style.right += parseInt(271) + 'px';
        }
    }
}
