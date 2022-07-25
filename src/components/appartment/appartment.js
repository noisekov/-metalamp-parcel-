// document.addEventListener('click', showSlideLeft)
// document.addEventListener('click', showSlideRight)

// const slideLeft = document.querySelector("#js-slide-left");
// const slideRight = document.querySelector("#js-slide-right");
// const slidePhoto = document.querySelectorAll(".appartment__img");

// function showSlideLeft (e) {
//     if(e.target.closest("#js-slide-left")){
//         for (let i = 0; i < slidePhoto.length; i++) {
//             slidePhoto[i].style.left -= +271 + 'px';
//         }
//     }
// }
// function showSlideRight (ev) {
//     if(ev.target.closest("#js-slide-right")){
//         for (let i = 0; i < slidePhoto.length; i++){
//             slidePhoto[i].style.right += +271 + 'px';
//         }
//     }
// }
const appartImg = document.querySelectorAll(".appartment__img");
const appartDots = document.querySelectorAll(".appartment__slider-bar-dots");
const appartBar = document.querySelector(".appartment__slider-bar");

appartDots.forEach(e => {
    e.addEventListener("click", function(e){
        if (e.target.closest(".appartment__slider-bar-dots")){
            appartDots.forEach(e => {
                e.classList.remove("current");
            })
            this.classList.add("current");
            appartImg.forEach(e => {
                e.classList.remove("current");
                if(this == appartDots[0]){
                    appartImg[0].classList.add("current")
                }
                if(this == appartDots[1]){
                    appartImg[1].classList.add("current")
                }
                if(this == appartDots[2]){
                    appartImg[2].classList.add("current")
                }
                if(this == appartDots[3]){
                    appartImg[3].classList.add("current")
                }
            })

        }
    })
});

