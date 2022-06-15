
//dropdown-expanded
const dropdownExpanded = document.querySelector(".text-field__block-list-expanded")
document.addEventListener('click', ev)
function ev (e) {
   if (e.target.closest(".js-dropdown-expanded")) {
      dropdownExpanded.classList.toggle(".active-expanded")
   }
}

//dropdown-expanded-counter

// const inputDropdown = document.querySelector('#dropdown-default');
// document,addEventListener('click', button)
// function button(event) {
//    event.preventDefault()
//    if (event.onclick(".js-first-elem-plus")){
//       document.querySelector(".js-counter").innerHTML;
//    }
// }

