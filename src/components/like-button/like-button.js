//VERSION WITHOUT MATERIAL ICONS EASY VERSION
// const btnLike = document.querySelectorAll(".like-button");
// const valueLike = document.querySelector(".like-button__value");
// let result;
// document.addEventListener("click", heart)
// function  heart(e) {
//     if (e.target.closest("#js-like-button")){
//         e.preventDefault();
//         for (let i = 0; i < btnLike.length; i ++){
//             btnLike[i].classList.toggle(".like-button_active")
//         }
//         result = +valueLike.innerHTML;
//         result++;
//         valueLike.innerHTML=""
//         valueLike.innerHTML = result
//     }  
// }


//VERSION WITH MATERIAL ICONS HARD VERSION:D
const btnLike = document.querySelector("#js-like-color");
const likeImg = document.querySelector('.material-icons_like');
const likeLabel = document.querySelector(".js-like-count");
let result;
btnLike.addEventListener("click", function(){
    if (likeImg.textContent == "favorite_border"){
        likeImg.classList.remove('material-icons_like')
        likeImg.classList.add('material-icons_like-color')
        likeImg.innerHTML = "favorite";
        result = +likeLabel.innerHTML;
        result++;
        likeLabel.innerHTML=""
        likeLabel.innerHTML = result
    } else {
        likeImg.classList.add('material-icons_like')
        likeImg.classList.remove('material-icons_like-color')
        likeImg.innerHTML = "favorite_border";
        result = +likeLabel.innerHTML;
        result--;
        likeLabel.innerHTML=""
        likeLabel.innerHTML = result
    }
})

