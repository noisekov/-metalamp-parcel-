const appartImg = document.querySelectorAll(".appartment__img");
const appartDots = document.querySelectorAll(".appartment__slider-bar-dots");
const appartBar = document.querySelector(".appartment__slider-bar");
const appartSliderBar = document.querySelectorAll(".appartment__slider-bar");

if (appartSliderBar.length > 0) {
    appartSliderBar.forEach(el => {
        el.addEventListener("click", function(e){
            console.log(this);
        })
    })
}


appartDots.forEach(el => {
    el.addEventListener("click", function(e){
        if (e.target.closest(".appartment__slider-bar-dots")){
            appartDots.forEach(e => {
                e.classList.remove("current");
            })
            this.classList.add("current");
            appartImg.forEach(e => {
                e.classList.remove("current");
                for (let i = 0; i < appartImg.length; i++){
                    if(this == appartDots[i]){
                        appartImg[i].classList.add("current")
                    }
                }
            })
        }
    })
});