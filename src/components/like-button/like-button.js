const btnLike = document.querySelectorAll(".like-button");
const valueLike = document.querySelector(".like-button__value");

let result;
document.addEventListener("click", heart)
function  heart(e) {
    if (e.target.closest("#js-like-button")){
        e.preventDefault();
        for (let i = 0; i < btnLike.length; i ++){
            btnLike[i].classList.toggle(".like-button_active")
          
        }
        result = +valueLike.innerHTML;
        result++;
        valueLike.innerHTML=""
        valueLike.innerHTML += result
    }  
}


