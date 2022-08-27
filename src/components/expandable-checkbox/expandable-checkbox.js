//dropdown expandble
const dropdownExpandable = document.querySelector(".area__expandable-checkbox-list-hidden")
document.addEventListener("click", expandable);
function expandable (e) {
   if (e.target.closest(".js-expand-display-hidden")) {
      dropdownExpandable.classList.toggle(".active-expandble")
      document.querySelector("#js-expand-hidden").classList.toggle(".material-icons_rotate");
   }
}