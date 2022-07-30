const burgerBtn = document.querySelectorAll(".header__burger");

burgerBtn.forEach( evt =>{
    evt.addEventListener("click", function(evt){
        if(evt.target.closest(".header__burger")){
            evt.preventDefault();
            this.classList.toggle("active");
        }
    })
})
