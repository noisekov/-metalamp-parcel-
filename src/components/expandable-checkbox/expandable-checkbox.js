//dropdown expandble
const dropdownExpandable = document.querySelector(".text-field__expandable-checkbox-list-hidden")
document.addEventListener("click", expandable);
function expandable (e) {
   if (e.target.closest(".js-display-hidden")) {
      dropdownExpandable.classList.toggle(".active-expandble")
      document.querySelector(".js-material-hidden").innerHTML = "expand_less";
   }  
   if (!e.target.closest(".js-display-hidden")) {
      document.querySelector(".js-material-hidden").innerHTML = "expand_more";
   }
}