//dropdown-expanded
const dropdownExpanded = document.querySelector(".text-field__block-list-expanded")
document.addEventListener('click', ev)
function ev (e) {
   if (e.target.closest(".js-dropdown-expanded")) {
      dropdownExpanded.classList.toggle(".active-expanded")
   }
}
