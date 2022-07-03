// //dropdown-expanded
const dropdownExpanded = document.querySelector(".text-field__block-list-expanded");
const dropExp = document.querySelector("#js-default-hidden");


document.addEventListener('click', function (e) {
   if (e.target.closest(".js-dropdown-expanded")) {
      dropdownExpanded.classList.toggle(".active-expanded")
      dropExp.classList.toggle(".material-icons_rotate")
   }
})



