const btnLike = document.querySelector("#js-like-color");
const likeImg = document.querySelector('.material-icons_like');
const likeLabel = document.querySelector("#js-like-count");

btnLike.addEventListener("click", function  heart(e) {
    if (e.target.closest("#js-like-color")){
        likeImg.classList.remove('material-icons_like')
        likeImg.classList.add('material-icons_like-color')
        likeImg.innerHTML = "favorite";
    } else{
        likeImg.classList.remove('material-icons_like')
        likeImg.classList.add('material-icons_like-color')
        likeImg.innerHTML = "favorite_border";
    } 

})


