//dropdown-guest
const dropdownGuest = document.querySelector(".text-field__block-list-hidden");
document.addEventListener("click", guest)
function guest (event) {
   if (event.target.closest(".js-input-guest")){
      dropdownGuest.classList.toggle(".active-guest")
      document.querySelector(".js-material-hidden").innerHTML = "expand_less";
      document.querySelector(".text-field__input-guest").style.borderRadius = "4px 4px 0 0";
   } else  {
      document.querySelector(".js-material-hidden").innerHTML = "expand_more";
      document.querySelector(".text-field__input-guest").style.borderRadius = "4px";
   }
}
